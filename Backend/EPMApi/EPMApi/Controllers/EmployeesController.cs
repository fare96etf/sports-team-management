using EPMApi.Dtos;
using EPMApi.Models;
using EPMApi.Persistance;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public IEnumerable<EmployeeDto> Get([FromQuery] string Filter = "")
        {
            var employees = _databaseContextReadonly.Set<Employee>().Include(x => x.Position).ToList()
                .Where(x => x.FirstName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase)
                        || x.LastName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase))
                .Select(emp => new EmployeeDto()
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
        public Employee Get([FromRoute] int Id)
        {
            var employee = _databaseContextReadonly.Set<Employee>().ToList().
                Where(x => x.Id == Id).FirstOrDefault();

            return employee;
        }

        [HttpPost]
        public bool Post([FromBody] EmployeeDto employeeDto)
        {
            try
            {
                var positionId = _databaseContextReadonly.Set<Position>()
                    .Where(p => p.ShortName == employeeDto.Position)
                    .Select(p => p.Id).FirstOrDefault();

                var newEmployee = new Employee
                {
                    FirstName = employeeDto.FirstName,
                    LastName = employeeDto.LastName,
                    DateOfBirth = employeeDto.DateOfBirth,
                    PositionId = positionId,
                    Number = employeeDto.Number
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