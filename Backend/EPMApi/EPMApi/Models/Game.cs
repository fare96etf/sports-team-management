using System.ComponentModel.DataAnnotations.Schema;

namespace EPMApi.Models
{
    public class Game
    {
        public int Id { get; set; }

        public DateTime Time { get; set; }

        public bool IsCompleted { get; set; }

        public int? ScoreTeam1 { get; set; }

        public int? ScoreTeam2 { get; set; }

        public int? Spectators { get; set; }

        public int CompetitionSeasonId { get; set; }

        public CompetitionSeason? CompetitionSeason { get; set; }
    }
}
