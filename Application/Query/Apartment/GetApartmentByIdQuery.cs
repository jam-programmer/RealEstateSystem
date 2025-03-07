using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Query.Apartment;

public sealed record GetApartmentByIdQuery : IRequest<BaseResult<ApartmentDto>>
{
    public Guid Id { get; set; }
    public GetApartmentByIdQuery(in Guid Id)
    {
        this.Id = Id;
    }
}
