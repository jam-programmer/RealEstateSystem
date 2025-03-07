using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Apartment;

public sealed record InsertApartmentCommand : IRequest<BaseResult>
{
    public ApartmentDto Apartment { get; set; }
    public InsertApartmentCommand(ApartmentDto apartment)
    {
        Apartment = apartment;
    }
}
