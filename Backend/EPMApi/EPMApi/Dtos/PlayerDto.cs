using EPMApi.Dtos.Base;
using EPMApi.Models;

namespace EPMApi.Dtos
{
    public class PlayerDto : BaseDto<Player, PlayerDto>
    {
        public int Id { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? FullName { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public int? NationalityId { get; set; }

        public string? Nationality { get; set; }

        public string? NationalityCode { get; set; }

        public int Number { get; set; }

        public string? Position { get; set; }

        public override void AddCustomMappings()
        {
            SetCustomMappings()
                .Map(dest => dest.FullName, src => src.GetFullName())
                .Map(dest => dest.Position, src => src.Position.ShortName);
        }
    }
}
