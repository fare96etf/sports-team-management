namespace EPMApi.Models
{
    public class CompetitionSeason
    {
        public int Id { get; set; }

        public int CompetitionId { get; set; }

        public Competition? Competition { get; set; }

        public int SeasonId { get; set; }

        public Season? Season { get; set; }
    }
}
