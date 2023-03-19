namespace EPMApi.Models
{
    public class User
    {
        public int Id { get; set; }

        public int RoleId { get; set; }

        public virtual Role? Role { get; set; }

        public string? UserName { get; set; }
    }
}
