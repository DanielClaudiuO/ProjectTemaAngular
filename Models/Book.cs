using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectTemaAngular.Models
{
    public class Book
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public int FirstEdition { get; set; }
    }
}
