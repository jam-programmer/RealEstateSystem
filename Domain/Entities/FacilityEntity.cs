using Domain.Entities.System;

namespace Domain.Entities
{
    public class FacilityEntity : BaseEntity<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
