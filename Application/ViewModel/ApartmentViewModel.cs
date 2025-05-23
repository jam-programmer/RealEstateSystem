﻿using Domain.Enum;

namespace Application.ViewModel;

public sealed record ApartmentViewModel : RealStateBaseViewModel
{
    public int BedRoomNumber { get; set; }
    public int BathroomNumber { get; set; }
    public ToileType ToileType { get; set; }
    public PositionType PositionType { get; set; }
    public int ManufactureYear { get; set; }
    public int FloorNumber { get; set; }
    public List<Guid> Facilities { get; set; }
}
