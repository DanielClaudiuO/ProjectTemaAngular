using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectTemaAngular.Models;

namespace ProjectTemaAngular.Data
{
   

    public class ProjectTemaAngularContext : DbContext
    {
        public DbSet<ProjectTemaAngular.Models.Book> Book { get; set; }
        public ProjectTemaAngularContext(DbContextOptions<ProjectTemaAngularContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Models.Book>().HasData(new Models.Book() { ID = Guid.NewGuid(), Author = "Edward Snowden", Name = "Permanent Record", FirstEdition = 2019 });
        }
    }
}
