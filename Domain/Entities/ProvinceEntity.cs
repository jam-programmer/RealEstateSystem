using Domain.Entities.System;

namespace Domain.Entities
{
    public class ProvinceEntity:BaseEntity<Guid>
    {
        public string Name { get; set; }
    }
}
