using EPMApi.Models;
using EPMApi.Persistance;
using Microsoft.AspNetCore.Mvc;

namespace EPMApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PositionsController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;
        private DatabaseContext _databaseContext;

        public PositionsController(DatabaseContext databaseContextReadonly, DatabaseContext databaseContext)
        {
            _databaseContextReadonly = databaseContextReadonly;
            _databaseContext = databaseContext;
        }

        [HttpGet]
        public IEnumerable<Position> Get()
        {
            var positions = _databaseContextReadonly.Set<Position>().ToList();

            return positions;
        }
    }
}
