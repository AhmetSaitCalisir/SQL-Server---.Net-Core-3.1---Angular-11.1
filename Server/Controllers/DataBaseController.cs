using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;


namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataBaseController : ControllerBase
    {
        private DataBase dataBase;

        public DataBaseController(IConfiguration configuration)
        {
            dataBase = new DataBase(configuration);
        }

        [HttpGet, Route("AnaSayfa")]
        public JsonResult AnaSayfa()
        {
            string query = @"SELECT * FROM dbo.View_AnaSayfa";
            DataTable dataTable = dataBase.TaploGetir(query);

            return new JsonResult(dataTable);
        }
    }
}
