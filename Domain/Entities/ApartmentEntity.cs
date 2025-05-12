using Domain.Enum;

namespace Domain.Entities
{
    public class ApartmentEntity : RealStateBaseEntity
    {
        public int BedRoomNumber { get; set; }
        public int BathroomNumber { get; set; }
        public ToileType ToileType { get; set; }
        public PositionType PositionType { get; set; }
        public int ManufactureYear { get; set; }
        public int FloorNumber { get; set; }
        public List<FacilityEntity> Facilities{ get; set; }
    }
}
