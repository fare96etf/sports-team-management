using EPMApi.Dtos;
using EPMApi.Models;
using EPMApi.Persistance;
using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EPMApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;

        public GamesController(DatabaseContext databaseContextReadonly)
        {
            _databaseContextReadonly = databaseContextReadonly;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string? Filter, [FromQuery] string? CompetitionId)
        {
            var games = _databaseContextReadonly.Set<Game>()
                                                .Include(gm => gm.CompetitionSeason)
                                                    .ThenInclude(cs => cs.Competition)
                                                .Where(gm => gm.IsCompleted)
                                                .AsEnumerable();

            if (!string.IsNullOrWhiteSpace(Filter))
            {
                games = games.Where(x => (x.IsHomeGame && x.Team2.Contains(Filter, StringComparison.CurrentCultureIgnoreCase))
                        || (!x.IsHomeGame && x.Team1.Contains(Filter, StringComparison.CurrentCultureIgnoreCase)));
            }

            if (!string.IsNullOrWhiteSpace(CompetitionId))
            {
                games = games.Where(x => CompetitionId == "0" || x.CompetitionSeason.CompetitionId.ToString() == CompetitionId);
            }

            var result = games.AsQueryable()
                              .ProjectToType<GameDto>()
                              .ToList()
                              .OrderByDescending(gm => gm.Time);

            return Ok(result);
        }

        [HttpGet("month")]
        public IActionResult GetGamesByMonth()
        {
            var today = DateTime.Now;

            var games = _databaseContextReadonly.Set<Game>()
                                                .Include(gm => gm.CompetitionSeason)
                                                    .ThenInclude(gm => gm.Competition)
                                                .AsQueryable()
                                                .Where(gm => gm.Time.Year == today.Year && gm.Time.Month == today.Month)
                                                .ProjectToType<GameDto>()
                                                .ToList()
                                                .OrderByDescending(gm => gm.Time);

            return Ok(games);
        }

        [HttpGet("{Id}")]
        public IActionResult Get([FromRoute] int Id)
        {
            var game = _databaseContextReadonly.Set<Game>()
                                               .Include(gm => gm.CompetitionSeason)
                                                    .ThenInclude(gm => gm.Competition)
                                               .AsQueryable()
                                               .Where(gm => gm.Id == Id)
                                               .FirstOrDefault()?
                                               .Adapt<GameDto>();

            if (game== null)
            {
                return NotFound();
            }

            return Ok(game);
        }
    }
}
