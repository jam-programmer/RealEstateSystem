using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.City;

public sealed record InsertCityCommand : IRequest<BaseResult>
{
    public CityDto City { get; set; }
    public InsertCityCommand(CityDto city)
    {
        City = city;
    }
}
