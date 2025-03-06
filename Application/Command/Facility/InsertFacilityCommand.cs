using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Facility;

public sealed record InsertFacilityCommand : IRequest<BaseResult>
{
    public FacilityDto Facility { get; set; }
    public InsertFacilityCommand(FacilityDto facility)
    {
        Facility = facility;
    }
}
