using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;


namespace Server.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private DataBase dataBase;

        public AuthController(IConfiguration configuration)
        {
            dataBase = new DataBase(configuration);
        }
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] Kullanici kullanici)
        {
            if (kullanici == null)
            {
                return BadRequest("Geçersiz Kullanıcı");
            }
            string query = @"EXEC dbo.Giris '"+kullanici.UN+"', '"+kullanici.Sifre+"'";
            DataTable table = dataBase.TaploGetir(query);
            
            if (table.Rows.Count > 0)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: "http://localhost:5001",
                    audience: "http://localhost:5001",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: signingCredentials
                    );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(new { Token = tokenString, Kullanici = new JsonResult(table).Value });
                
            }
            return Unauthorized();
        }

    }
}
