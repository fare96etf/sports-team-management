using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EPMApi.Migrations
{
    /// <inheritdoc />
    public partial class AddPlayerStatsFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlayerStats_CompetitionSeasons_CompetitionSeasonId",
                table: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "CompetitonSeasonId",
                table: "PlayerStats");

            migrationBuilder.AlterColumn<int>(
                name: "CompetitionSeasonId",
                table: "PlayerStats",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_PlayerStats_CompetitionSeasons_CompetitionSeasonId",
                table: "PlayerStats",
                column: "CompetitionSeasonId",
                principalTable: "CompetitionSeasons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlayerStats_CompetitionSeasons_CompetitionSeasonId",
                table: "PlayerStats");

            migrationBuilder.AlterColumn<int>(
                name: "CompetitionSeasonId",
                table: "PlayerStats",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "CompetitonSeasonId",
                table: "PlayerStats",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_PlayerStats_CompetitionSeasons_CompetitionSeasonId",
                table: "PlayerStats",
                column: "CompetitionSeasonId",
                principalTable: "CompetitionSeasons",
                principalColumn: "Id");
        }
    }
}
