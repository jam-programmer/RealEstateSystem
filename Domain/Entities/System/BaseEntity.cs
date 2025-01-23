

namespace Domain.Entities.System;

public abstract class BaseEntity<TKey>
{
    [Key]
    public TKey? Id { get; set; }
}
