using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;



namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DukkanController : ControllerBase
    {

        private DataBase dataBase;

        public DukkanController(IConfiguration configuration)
        {
            dataBase = new DataBase(configuration);
        }

        [HttpGet]
        public JsonResult Kartlar()
        {
            string query = @"SELECT * FROM dbo.View_Kart";
            DataTable dataTable = dataBase.TaploGetir(query);

            return new JsonResult(dataTable);
        }



        [HttpGet("{id}")]
        public JsonResult Dukkan(int id)
        {
            string query = @"EXEC Dukkan " + id;
            DataTable dataTable = dataBase.TaploGetir(query);

            return new JsonResult(dataTable);
        }

        [HttpPost]
        public JsonResult DukkanEkle(Dukkan dukkan)
        {
            string Sonuc = dataBase.DukkanEkle(dukkan);
            return new JsonResult(Sonuc);
        }

        [HttpDelete("{id}")]
        public JsonResult DukkanSil(int id)
        {
            string query = @"EXEC DukkanSil " + id;
            string Sonuc = dataBase.DukkanSil(query);
            return new JsonResult(Sonuc);
        }

        [HttpPut("{id}")]
        public JsonResult DukkanGuncelle(int id,Dukkan dukkan)
        {
            string Sonuc = dataBase.DukkanGuncelle(id, dukkan);
            return new JsonResult(Sonuc);
        }
    }
}
