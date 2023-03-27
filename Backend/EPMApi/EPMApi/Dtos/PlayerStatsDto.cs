using EPMApi.Dtos.Base;
using EPMApi.Models;

namespace EPMApi.Dtos
{
    public class PlayerStatsDto : BaseDto<PlayerStats, PlayerStatsDto>
    {
        public int CompetitionId { get; set; }

        public string? Season { get; set; }

        public int Appearances { get; set; }

        public int SubstituteAppearances { get; set; }

        public int Goals { get; set; }

        public int Assists { get; set; }

        public int YellowCards { get; set; }

        public int RedCards { get; set; }

        public int CleanSheets { get; set; }

        public override void AddCustomMappings()
        {
            SetCustomMappings()
                .Map(dest => dest.CompetitionId, src => src.CompetitionSeasonId)
                .Map(dest => dest.Season, src => src.CompetitionSeason.Season.Name);
        }
    }
}
