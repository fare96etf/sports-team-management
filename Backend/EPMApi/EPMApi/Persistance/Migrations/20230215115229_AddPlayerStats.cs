using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EPMApi.Migrations
{
    /// <inheritdoc />
    public partial class AddPlayerStats : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsBench",
                table: "GamePlayers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "PlayerStats",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlayerId = table.Column<int>(type: "int", nullable: false),
                    CompetitonSeasonId = table.Column<int>(type: "int", nullable: false),
                    CompetitionSeasonId = table.Column<int>(type: "int", nullable: true),
                    Goals = table.Column<int>(type: "int", nullable: false),
                    Assists = table.Column<int>(type: "int", nullable: false),
                    YellowCards = table.Column<int>(type: "int", nullable: false),
                    RedCards = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlayerStats", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PlayerStats_CompetitionSeasons_CompetitionSeasonId",
                        column: x => x.CompetitionSeasonId,
                        principalTable: "CompetitionSeasons",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PlayerStats_Players_PlayerId",
                        column: x => x.PlayerId,
                        principalTable: "Players",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PlayerStats_CompetitionSeasonId",
                table: "PlayerStats",
                column: "CompetitionSeasonId");

            migrationBuilder.CreateIndex(
                name: "IX_PlayerStats_PlayerId",
                table: "PlayerStats",
                column: "PlayerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PlayerStats");

            migrationBuilder.DropColumn(
                name: "IsBench",
                table: "GamePlayers");
        }
    }
}
