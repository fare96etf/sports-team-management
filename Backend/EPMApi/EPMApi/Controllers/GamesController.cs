using EPMApi.Dtos;
using EPMApi.Dtos.Filters;
using EPMApi.Models;
using EPMApi.Persistance;
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
        public IEnumerable<GameDto> Get([FromQuery] string? Filter, [FromQuery] string? CompetitionId)
        {
            var games = _databaseContextReadonly.Set<Game>()
                .Include(x => x.CompetitionSeason)
                    .ThenInclude(x => x.Competition).AsEnumerable();

            if (!string.IsNullOrWhiteSpace(Filter))
            {
                games = games.Where(x => (x.IsHomeGame && x.Team2.Contains(Filter, StringComparison.CurrentCultureIgnoreCase))
                        || (!x.IsHomeGame && x.Team1.Contains(Filter, StringComparison.CurrentCultureIgnoreCase)));
            }

            if (!string.IsNullOrWhiteSpace(CompetitionId))
            {
                games = games.Where(x => CompetitionId == "0" || x.CompetitionSeason.CompetitionId.ToString() == CompetitionId);
            }

            var result = games.Select(gm => new GameDto 
            {
                Id = gm.Id,
                Team1 = gm.Team1,
                Team2 = gm.Team2,
                Result = gm.GetResult(),
                CompetitionName = gm.CompetitionSeason.Competition.Name,
                CompetitionRound = "",
                Time = gm.Time,
                Spectators = gm.Spectators,
                IsHomeGame = gm.IsHomeGame
            }).OrderByDescending(gm => gm.Time);

            return result;
        }

        [HttpGet("{Id}")]
        public GameDto Get([FromRoute] int Id)
        {
            var game = _databaseContextReadonly.Set<Game>()
                .Include(x => x.CompetitionSeason)
                    .ThenInclude(x => x.Competition)
                .Where(gm => gm.Id == Id)
                .Select(gm => new GameDto
                {
                    Team1 = gm.Team1,
                    Team2 = gm.Team2,
                    Result = gm.GetResult(),
                    CompetitionName = gm.CompetitionSeason.Competition.Name,
                    CompetitionRound = "",
                    Time = gm.Time,
                    Spectators = gm.Spectators,
                    IsHomeGame = gm.IsHomeGame
                }).FirstOrDefault();

            return game;
        }
    }
}
