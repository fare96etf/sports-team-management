using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EPMApi.Migrations
{
    /// <inheritdoc />
    public partial class AddAppearancesToPlayerStats : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Appearances",
                table: "PlayerStats",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SubstituteAppearances",
                table: "PlayerStats",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Appearances",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "SubstituteAppearances",
                table: "PlayerStats");
        }
    }
}
