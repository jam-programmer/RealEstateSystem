using Domain.Entities.System;

namespace Domain.Entities;

public class CategoryEntity : BaseEntity<Guid>
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? ImagePath {  get; set; } 
}
