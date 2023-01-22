using EPMApi.Models;
using EPMApi.Persistance;
using Microsoft.AspNetCore.Mvc;

namespace EPMApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;

        public EmployeesController(DatabaseContext databaseContextReadonly)
        {
            _databaseContextReadonly = databaseContextReadonly;
        }

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            var employees = _databaseContextReadonly.Set<Employee>().ToList();
            return employees;
        }
    }
}