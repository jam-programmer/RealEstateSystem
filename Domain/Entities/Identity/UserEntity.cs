namespace Domain.Entities.Identity;

public class UserEntity : IdentityUser<Guid>, ICreate, IUpdate, IDelete
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Avatar { get; set; }
    public bool IsDelete { get; set; }
    public DateTime? CreateTime { get; set; }
    public DateTime? UpdateTime { get; set; }
}
