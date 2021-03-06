using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class Dukkan
    {
        public string DukkanIsim { get; set; }
        public int DukkanSahipID { get; set; }
        public string DukkanTel { get; set; }
        public string DukkanMail { get; set; }
        public int DukkanYildiz { get; set; }
        public string AdresBolge { get; set; }
        public string AdresSehir { get; set; }
        public string AdresIlce { get; set; }
        public string AdresMahalle { get; set; }
        public string AdresSokak { get; set; }
        public int AdresNo { get; set; }
    }
}
