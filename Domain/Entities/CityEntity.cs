using Domain.Entities.System;

namespace Domain.Entities
{
    public class CityEntity:BaseEntity<Guid>
    {
        public string Name { get; set; }
        public int ProvinceId { get; set; }
        public ProvinceEntity Province { get; set; }
    }
}
