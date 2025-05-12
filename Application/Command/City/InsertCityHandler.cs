using Application.Common;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.City;

public sealed class InsertCityHandler : IRequestHandler<InsertCityCommand, BaseResult>
{
    private readonly ILogger<InsertCityHandler> _logger;
    private readonly IRepository<CityEntity, Guid> _cityRepository;

    public InsertCityHandler(ILogger<InsertCityHandler> logger,
                             IRepository<CityEntity, Guid> cityRepository)
    {
        _cityRepository = cityRepository;
        _logger = logger;
    }
    public async Task<BaseResult> Handle(InsertCityCommand request, CancellationToken cancellationToken)
    {
        try
        {
            CityEntity cityEntity = request.City.Adapt<CityEntity>();

            await _cityRepository.InsertAsync(cityEntity, cancellationToken);

            return BaseResult.Success();

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
