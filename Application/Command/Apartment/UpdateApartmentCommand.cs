using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Apartment;

public sealed record UpdateApartmentCommand : IRequest<BaseResult>
{
    public ApartmentDto Apartment { get; set; }
    public UpdateApartmentCommand(ApartmentDto apartment)
    {
        Apartment = apartment;
    }
}
