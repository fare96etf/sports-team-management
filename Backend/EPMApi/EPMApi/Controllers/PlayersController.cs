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
            var employees = _databaseContextReadonly.Set<Player>().Include(x => x.Position).ToList()
                .Where(x => x.FirstName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase)
                        || x.LastName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase))
                .Select(emp => new PlayerDto()
                {
                    FirstName = emp.FirstName,
                    LastName = emp.LastName,
                    DateOfBirth = emp.DateOfBirth,
                    Position = emp.Position.ShortName,
                    Number = emp.Number
                });

            return employees;
        }

        [HttpGet("{Id}")]
        public Player Get([FromRoute] int Id)
        {
            var employee = _databaseContextReadonly.Set<Player>().ToList().
                Where(x => x.Id == Id).FirstOrDefault();

            return employee;
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