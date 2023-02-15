using EPMApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EPMApi.Persistance
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("ConnectionString");
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<Player> Players { get; set; }

        public DbSet<Position> Positions { get; set; }

        public DbSet<Competition> Competitions { get; set; }

        public DbSet<Season> Seasons { get; set; }

        public DbSet<CompetitionSeason> CompetitionSeasons { get; set; }

        public DbSet<Game> Games { get; set; }

        public DbSet<GamePlayer> GamePlayers { get; set; }

        public DbSet<PlayerStats> PlayerStats { get; set; } 
    }
}
