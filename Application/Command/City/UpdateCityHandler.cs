using Application.Common;
using Application.Common.Resource;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.City;

internal sealed class UpdateCityHandler : IRequestHandler<UpdateCityCommand, BaseResult>
{
    private readonly ILogger<UpdateCityHandler> _logger;

    private readonly IRepository<CityEntity, Guid> _cityRepository;

    public UpdateCityHandler(ILogger<UpdateCityHandler> logger, IRepository<CityEntity, Guid> cityRepository)
    {
        _cityRepository = cityRepository;
        _logger = logger;
    }

    public async Task<BaseResult> Handle(UpdateCityCommand request, CancellationToken cancellationToken)
    {
        try
        {
            CityEntity cityEntity = await _cityRepository
                .GetAsync(g => g.Id == request.City.Id, cancellationToken);

            if (cityEntity is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $" Id:{request.City.Id}");
                return BaseResult.Fail(ResultType.System);
            }
            request.City.Adapt(cityEntity);
            await _cityRepository.UpdateAsync(cityEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
