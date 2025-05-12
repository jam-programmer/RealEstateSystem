using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.City;

public sealed record UpdateCityCommand : IRequest<BaseResult>
{
    public CityDto City { get; set; }
    public UpdateCityCommand(CityDto city)
    {
        City = city;
    }
}
