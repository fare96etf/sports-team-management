using EPMApi.Models;
using EPMApi.Persistance;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EPMApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;

        public CountriesController(DatabaseContext databaseContextReadonly)
        {
            _databaseContextReadonly = databaseContextReadonly;
        }

        [HttpGet]
        public IEnumerable<Country> Get()
        {
            var countries = _databaseContextReadonly.Set<Country>().ToList();

            return countries;
        }
    }
}
