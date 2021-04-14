using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectTemaAngular.Migrations
{
    public partial class Add_Data_In_Column_Book : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "ID", "Author", "FirstEdition", "Name" },
                values: new object[] { new Guid("f26abf22-91cb-4cf9-958e-4ad97a0ef5cc"), "Edward Snowden", 2019, "Permanent Record" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "ID",
                keyValue: new Guid("f26abf22-91cb-4cf9-958e-4ad97a0ef5cc"));
        }
    }
}
