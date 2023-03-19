namespace EPMApi.Dtos
{
    public class GameDto
    {
        public int Id { get; set; }

        public string? Team1 { get; set; }

        public string? Team2 { get; set; }

        public string? Result { get; set; }

        public string? CompetitionName { get; set; }

        public string? CompetitionRound { get; set; }

        public DateTime Time { get; set; }

        public int? Spectators { get; set; }

        public bool IsHomeGame { get; set; }
    }
}
