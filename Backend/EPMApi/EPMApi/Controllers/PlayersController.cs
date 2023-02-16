using EPMApi.Dtos;
using EPMApi.Models;
using EPMApi.Persistance;
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
        public IEnumerable<PlayerDto> Get([FromQuery] string Filter = "")
        {
            var players = _databaseContextReadonly.Set<Player>().Include(x => x.Position).ToList()
                .Where(x => x.FirstName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase)
                        || x.LastName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase))
                .Select(pl => new PlayerDto()
                {
                    Id = pl.Id,
                    FullName = $"{pl.FirstName} {pl.LastName}",
                    DateOfBirth = pl.DateOfBirth,
                    Position = pl.Position.ShortName,
                    Number = pl.Number
                });

            return players;
        }

        [HttpGet("{Id}")]
        public PlayerDto Get([FromRoute] int Id)
        {
            var player = _databaseContextReadonly.Set<Player>()
                .Include(x => x.Position)
                .Where(pl => pl.Id == Id)
                .Select(pl => new PlayerDto
                {
                    FullName = $"{pl.FirstName} {pl.LastName}",
                    DateOfBirth = pl.DateOfBirth,
                    Position = pl.Position.Name,
                    Number = pl.Number
                }).FirstOrDefault();

            return player;
        }

        [HttpGet("stats/{PlayerId}/competition/{CompetitionId}")]
        public IEnumerable<PlayerStatsDto> GetPlayerStats([FromRoute] int PlayerId, [FromRoute] int CompetitionId)
        {
            var playerStats = _databaseContextReadonly.Set<PlayerStats>()
                .Include(x => x.CompetitionSeason)
                    .ThenInclude(x => x.Season)
                .Where(x => x.PlayerId == PlayerId && x.CompetitionSeason.CompetitionId == CompetitionId)
                .Select(x => new PlayerStatsDto
                {
                    CompetitionId = x.CompetitionSeasonId,
                    Season = x.CompetitionSeason.Season.Name,
                    Appearances = x.Appearances,
                    SubstituteAppearances = x.SubstituteAppearances,
                    Goals = x.Goals,
                    Assists = x.Assists,
                    YellowCards = x.YellowCards,
                    RedCards = x.RedCards
                }).ToList();

            return playerStats;
        }

        [HttpPost]
        public bool Post([FromBody] PlayerDto playerDto)
        {
            try
            {
                var positionId = _databaseContextReadonly.Set<Position>()
                    .Where(p => p.ShortName == playerDto.Position)
                    .Select(p => p.Id).FirstOrDefault();

                var newPlayer = new Player
                {
                    FirstName = playerDto.FirstName,
                    LastName = playerDto.LastName,
                    DateOfBirth = playerDto.DateOfBirth,
                    PositionId = positionId,
                    Number = playerDto.Number
                };

                _databaseContext.Add(newPlayer);
                _databaseContext.SaveChanges();
            }
            catch (Exception ex) 
            {
                Console.WriteLine(ex.ToString());
                return false;
            }

            return true;
        }
    }
}