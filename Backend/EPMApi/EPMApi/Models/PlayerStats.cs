namespace EPMApi.Models
{
    public class PlayerStats
    {
        public int Id { get; set; }

        public int PlayerId { get; set; }

        public virtual Player? Player { get; set; }

        public int CompetitionSeasonId { get; set; }

        public virtual CompetitionSeason? CompetitionSeason { get; set; }

        public int Appearances { get; set; }
        
        public int SubstituteAppearances { get; set; }

        public int Goals { get; set; }

        public int Assists { get; set; }

        public int YellowCards { get; set; }

        public int RedCards { get; set; }
    }
}
