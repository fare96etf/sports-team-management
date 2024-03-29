﻿using EPMApi.Models;
using EPMApi.Persistance;
using Microsoft.AspNetCore.Mvc;

namespace EPMApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PositionsController : ControllerBase
    {
        private readonly DatabaseContext _databaseContextReadonly;

        public PositionsController(DatabaseContext databaseContextReadonly)
        {
            _databaseContextReadonly = databaseContextReadonly;
        }

        [HttpGet]
        public IEnumerable<Position> Get()
        {
            var positions = _databaseContextReadonly.Set<Position>().ToList();

            return positions;
        }
    }
}
