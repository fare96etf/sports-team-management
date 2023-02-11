namespace EPMApi.Models
{
    public class Employee
    {
        public int Id { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public int Number { get; set; }

        public int? PositionId { get; set; }

        public virtual Position? Position { get; set; }

        public string? PicturePath { get; set; }
    }
}
