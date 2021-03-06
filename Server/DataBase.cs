using Microsoft.Extensions.Configuration;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Server
{
    public class DataBase
    {
        private readonly IConfiguration _configuration;

        public DataBase(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DataTable TaploGetir(string query)
        {

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SoftwareARGEAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    myReader = sqlCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return table;
        }
        public string DukkanEkle(Dukkan dukkan)
        {
            string query = @"EXEC DukkanEkle" +
                @"'" + dukkan.DukkanIsim + "'" +   //@dukkanIsim nvarchar(50)
                @"," + dukkan.DukkanSahipID + "" + //@dukkanSahipID int
                @",'" + dukkan.DukkanTel + "'" +   //@dukkanTel nvarchar(11)
                @",'" + dukkan.DukkanMail + "'" +  //@dukkanMail nvarchar(50)
                @"," + dukkan.DukkanYildiz + "" +  //@dukkanYildiz int
                @",'" + dukkan.AdresBolge + "'" +  //@adresBolge nvarchar(50)
                @",'" + dukkan.AdresSehir + "'" +  //@adresSehir nvarchar(50)
                @",'" + dukkan.AdresIlce + "'" +   //@adresIlce nvarchar(50)
                @",'" + dukkan.AdresMahalle + "'" +//@adresMahalle nvarchar(50)
                @",'" + dukkan.AdresSokak + "'" +  //@adresSokak nvarchar(50)
                @"," + dukkan.AdresNo + "";        //@adresNo int
            if (Islem(query))
            {
                return "Dükkan Başarıyla Eklendi";
            }
            else
            {
                return "Dükkan Eklenirken Hatayla Karşılaşıldı";
            }
        }

        public string DukkanSil(string query)
        {
            if (Islem(query))
            {
                return "Dükkan Başarıyla Silindi";
            }
            else
            {
                return "Dükkan Silinirken Hatayla Karşılaşıldı";
            }
        }
        public string DukkanGuncelle(int id,Dukkan dukkan)
        {
            string query = @"EXEC DukkanGuncelle" +
                @"'" + dukkan.DukkanIsim + "'" +    //@dukkanIsim nvarchar(50)
                @"," + dukkan.DukkanSahipID + "" +  //@dukkanSahipID int
                @",'" + dukkan.DukkanTel + "'" +    //@dukkanTel nvarchar(11)
                @",'" + dukkan.DukkanMail + "'" +   //@dukkanMail nvarchar(50)
                @"," + dukkan.DukkanYildiz + "" +   //@dukkanYildiz int
                @",'" + dukkan.AdresBolge + "'" +   //@adresBolge nvarchar(50)
                @",'" + dukkan.AdresSehir + "'" +   //@adresSehir nvarchar(50)
                @",'" + dukkan.AdresIlce + "'" +    //@adresIlce nvarchar(50)
                @",'" + dukkan.AdresMahalle + "'" + //@adresMahalle nvarchar(50)
                @",'" + dukkan.AdresSokak + "'" +   //@adresSokak nvarchar(50)
                @"," + dukkan.AdresNo + "" +        //@adresNo int
                @"," + id + "";                     //@dukkanID int
            if (Islem(query))
            {
                return "Dükkan Başarıyla Güncellendi";
            }
            else
            {
                return "Dükkan Güncellenirken Hatayla Karşılaşıldı";
            }
        }
        private Boolean Islem(string query)
        {
            string sqlDataSource = _configuration.GetConnectionString("SoftwareARGEAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCommand = new SqlCommand(query, myCon))
                {
                    try
                    {
                        myReader = sqlCommand.ExecuteReader();
                        myReader.Close();
                        myCon.Close();
                        return true;
                    }
                    catch
                    {
                        return false;
                    }
                }
            }
            return false;
        }
    }
}
