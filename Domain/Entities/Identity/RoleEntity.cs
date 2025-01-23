

namespace Domain.Entities.Identity;

public class RoleEntity:IdentityRole<Guid>, ICreate, IUpdate, IDelete
{
    public string? PersianName {  get; set; }
    public bool IsDelete { get; set; }
    public DateTime? CreateTime { get; set; }
    public DateTime? UpdateTime { get; set; }
}
