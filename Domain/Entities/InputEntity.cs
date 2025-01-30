using Domain.Entities.System;
using Domain.Enum;

namespace Domain.Entities;

public class InputEntity : BaseEntity<Guid>
{
    public string? Title { set; get; }   
    public string? Description { set; get; } 
    public InputType? InputType { set; get; }    
}
