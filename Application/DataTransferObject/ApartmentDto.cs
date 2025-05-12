using Application.ViewModel;
using Domain.Enum;

namespace Application.DataTransferObject;

public sealed record ApartmentDto : RealStateBaseViewModel
{
    public int BedRoomNumber { get; set; }
    public int BathroomNumber { get; set; }
    public ToileType ToileType { get; set; }
    public PositionType PositionType { get; set; }
    public int ManufactureYear { get; set; }
    public int FloorNumber { get; set; }
    public List<Guid> Facilities { get; set; }
}
