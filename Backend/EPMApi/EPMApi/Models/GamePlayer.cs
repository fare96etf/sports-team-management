namespace EPMApi.Models
{
    public class GamePlayer
    {
        public int Id { get; set; }

        public int PlayerId { get; set; }

        public virtual Player? Player { get; set; }

        public int GameId { get; set; }

        public virtual Game? Game { get; set; }

        public double Minutes { get; set; }

        public int Goals { get; set; }

        public int Assists { get; set; }

        public int YellowCards { get; set; }

        public bool IsRedCard { get; set; }

        public bool IsRegistered { get; set; }

        public bool IsPlayed { get; set; }
    }
}
