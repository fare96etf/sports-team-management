using EPMApi.Dtos;
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
        private DatabaseContext _databaseContext;

        public EmployeesController(DatabaseContext databaseContextReadonly, DatabaseContext databaseContext)
        {
            _databaseContextReadonly = databaseContextReadonly;
            _databaseContext = databaseContext;
        }

        [HttpGet]
        public IEnumerable<Employee> Get([FromQuery] string filter = "")
        {
            Console.WriteLine(filter);
            var employees = _databaseContextReadonly.Set<Employee>().ToList().
                Where(x => x.FirstName.Contains(filter, StringComparison.CurrentCultureIgnoreCase));

            return employees;
        }

        [HttpPost]
        public bool Post([FromBody] EmployeeDto employeeDto)
        {
            try
            {
                var newEmployee = new Employee
                {
                    FirstName = employeeDto.FirstName,
                    LastName = employeeDto.LastName,
                    DateOfBirth = employeeDto.DateOfBirth
                };

                _databaseContext.Add(newEmployee);
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