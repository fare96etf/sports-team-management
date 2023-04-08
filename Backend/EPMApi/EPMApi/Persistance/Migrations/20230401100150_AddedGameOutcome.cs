using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EPMApi.Migrations
{
    /// <inheritdoc />
    public partial class AddedGameOutcome : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GameOutcome",
                table: "Games",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GameOutcome",
                table: "Games");
        }
    }
}
