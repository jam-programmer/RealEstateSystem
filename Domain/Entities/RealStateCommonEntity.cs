using Domain.Entities.System;
using Domain.Enum;

namespace Domain.Entities
{
    public class RealStateCommonEntity : BaseEntity<Guid>
    {
        public int CityId { get; set; }
        public CityEntity City { get; set; }
        public int ProvinceId { get; set; }
        public ProvinceEntity Province { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public string Address { get; set; }
        public decimal Area { get; set; }
        public DateTime AddedDate { get; set; }
        public bool IsLogicallyDeleted { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string IndexImage { get; set; }
        public int MyProperty { get; set; }
        public TransactionType TransactionType { get; set; }
        public UserType UserType { get; set; }
        public PropertyDeedType PropertyDeedType { get; set; }
    }
}
