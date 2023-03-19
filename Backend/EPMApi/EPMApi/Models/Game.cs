﻿using System.ComponentModel.DataAnnotations.Schema;

namespace EPMApi.Models
{
    public class Game
    {
        public int Id { get; set; }

        public DateTime Time { get; set; }

        public bool IsCompleted { get; set; }

        public bool IsHomeGame { get; set; }

        public string? Team1 { get; set; }

        public int? ScoreTeam1 { get; set; }

        public string? Team2 { get; set; }

        public int? ScoreTeam2 { get; set; }

        public int? Spectators { get; set; }

        public int CompetitionSeasonId { get; set; }

        public virtual CompetitionSeason? CompetitionSeason { get; set; }

        public string GetResult() { 
            var result = $"{ScoreTeam1} : {ScoreTeam2}";
                
            if (!IsHomeGame)
            {
                result = $"{ScoreTeam2} : {ScoreTeam1}";
            }

            return result;           
        }
    }
}
