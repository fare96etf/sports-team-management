using EPMApi.Dtos.Base;
using EPMApi.Models;

namespace EPMApi.Dtos
{
    public class GameDto : BaseDto<Game, GameDto>
    {
        public int Id { get; set; }

        public string? Team1 { get; set; }

        public string? Team2 { get; set; }

        public string? Result { get; set; }

        public string? Outcome { get; set; }

        public string? CompetitionName { get; set; }

        public string? CompetitionRound { get; set; }

        public DateTime Time { get; set; }

        public int? DayOfTheMonth { get; set; }

        public int? Spectators { get; set; }

        public bool IsHomeGame { get; set; }

        public override void AddCustomMappings()
        {
            SetCustomMappings()
                .Map(dest => dest.Result, src => src.GetResult())
                .Map(dest => dest.Outcome, src => src.GameOutcome.ToString())
                .Map(dest => dest.CompetitionName, src => src.CompetitionSeason.Competition.Name)
                .Map(dest => dest.DayOfTheMonth, src => src.Time.Day);
        }
    }
}
