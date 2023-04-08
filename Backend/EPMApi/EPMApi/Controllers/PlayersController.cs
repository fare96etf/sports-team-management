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
    public class PlayersController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;
        private DatabaseContext _databaseContext;

        public PlayersController(DatabaseContext databaseContextReadonly, DatabaseContext databaseContext)
        {
            _databaseContextReadonly = databaseContextReadonly;
            _databaseContext = databaseContext;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string Filter = "")
        {
            var players = _databaseContextReadonly.Set<Player>()
                                .Include(pl => pl.Position)
                                .ProjectToType<PlayerDto>()
                                .AsEnumerable()
                                .Where(pl => pl.FirstName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase)
                                        || pl.LastName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase));

            return Ok(players);
        }

        [HttpGet("{Id}")]
        public IActionResult Get([FromRoute] int Id)
        {
            var player = _databaseContextReadonly.Set<Player>()
                                                 .Include(x => x.Position)
                                                 .AsQueryable()
                                                 .Where(pl => pl.Id == Id)
                                                 .FirstOrDefault()?
                                                 .Adapt<PlayerDto>();

            if (player == null)
            {
                return NotFound();
            }

            return Ok(player);
        }

        [HttpGet("stats/{PlayerId}/competition/{CompetitionId}")]
        public IActionResult GetPlayerStats([FromRoute] int PlayerId, [FromRoute] int CompetitionId)
        {
            var playerStats = _databaseContextReadonly.Set<PlayerStats>()
                                                      .Include(x => x.CompetitionSeason)
                                                        .ThenInclude(x => x.Season)
                                                      .AsQueryable()
                                                      .Where(x => x.PlayerId == PlayerId && x.CompetitionSeason.CompetitionId == CompetitionId)
                                                      .ProjectToType<PlayerStatsDto>()
                                                      .ToList();

            return Ok(playerStats);
        }

        [HttpPost]
        public IActionResult Post([FromBody] PlayerDto playerDto)
        {
            try
            {
                var positionId = _databaseContextReadonly.Set<Position>()
                                                         .Where(p => p.ShortName == playerDto.Position)
                                                         .Select(p => p.Id)
                                                         .FirstOrDefault();

                var nationality = _databaseContextReadonly.Set<Country>()
                                                          .Where(c => c.Id == playerDto.NationalityId)
                                                          .FirstOrDefault();

                //use mapster SetCustomMappingsInverse
                var newPlayer = new Player
                {
                    FirstName = playerDto.FirstName,
                    LastName = playerDto.LastName,
                    DateOfBirth = playerDto.DateOfBirth,
                    PositionId = positionId,
                    Number = playerDto.Number,
                    Nationality = nationality?.Name,
                    NationalityCode = nationality?.ShortName
                };

                _databaseContext.Add(newPlayer);
                _databaseContext.SaveChanges();
            }
            catch (Exception ex) 
            {
                Console.WriteLine(ex.ToString());
                return BadRequest();
            }

            return Ok(true);
        }
    }
}