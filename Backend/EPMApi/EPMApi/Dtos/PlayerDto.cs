namespace EPMApi.Dtos
{
    public class PlayerDto
    {
        public int Id { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? FullName { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public int Number { get; set; }

        public string? Position { get; set; }
    }
}
