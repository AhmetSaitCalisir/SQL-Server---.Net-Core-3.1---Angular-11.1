using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;


namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MusteriController : ControllerBase
    {
        private DataBase dataBase;

        public MusteriController(IConfiguration configuration)
        {
            dataBase = new DataBase(configuration);
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = "Select * From View_Musteri";
            DataTable dataTable = dataBase.TaploGetir(query);

            return new JsonResult(dataTable);
        }
    }
}
