using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Facility;

public sealed record UpdateFacilityCommand : IRequest<BaseResult>
{
    public FacilityDto Facility { get; set; }
    public UpdateFacilityCommand(FacilityDto facility)
    {
        Facility = facility;
    }
}
