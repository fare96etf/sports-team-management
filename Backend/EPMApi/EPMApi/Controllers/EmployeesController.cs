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
        public IEnumerable<Employee> Get([FromQuery] string Filter = "")
        {
            var employees = _databaseContextReadonly.Set<Employee>().ToList().
                Where(x => x.FirstName.Contains(Filter, StringComparison.CurrentCultureIgnoreCase));

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
        public bool Post([FromBody] EmployeeDto employeeDto, [FromForm] IFormFile image)
        {
            try
            {
                var imageName = $"{employeeDto.FirstName}-{employeeDto.LastName}";
                var path = Path.Combine(Directory.GetCurrentDirectory(), "assets", imageName);
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    image.CopyToAsync(stream);
                }

                var newEmployee = new Employee
                {
                    FirstName = employeeDto.FirstName,
                    LastName = employeeDto.LastName,
                    DateOfBirth = employeeDto.DateOfBirth,
                    PicturePath = path
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