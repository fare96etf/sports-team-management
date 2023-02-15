﻿namespace EPMApi.Dtos
{
    public class PlayerStatsDto
    {
        public int CompetitionId { get; set; }

        public string? Season { get; set; }

        public int Appearances { get; set; }

        public int SubstituteAppearances { get; set; }

        public int Goals { get; set; }

        public int Assists { get; set; }

        public int YellowCards { get; set; }

        public int RedCards { get; set; }
    }
}
