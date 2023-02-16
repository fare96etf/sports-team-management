using EPMApi.Models;
using EPMApi.Persistance;
using Microsoft.AspNetCore.Mvc;

namespace EPMApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompetitionsController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;

        public CompetitionsController(DatabaseContext databaseContextReadonly)
        {
            _databaseContextReadonly = databaseContextReadonly;
        }

        [HttpGet]
        public IEnumerable<Competition> Get()
        {
            var competitions = _databaseContextReadonly.Set<Competition>().ToList();

            return competitions;
        }
    }
}
