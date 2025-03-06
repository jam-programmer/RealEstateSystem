using Application.Common;
using Application.Common.Resource;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Facility;

internal sealed class UpdateFacilityHandler : IRequestHandler<UpdateFacilityCommand, BaseResult>
{
    private readonly ILogger<UpdateFacilityHandler> _logger;

    private readonly IRepository<FacilityEntity, Guid> _facilityRepository;

    public UpdateFacilityHandler(ILogger<UpdateFacilityHandler> logger, IRepository<FacilityEntity, Guid> FacilityRepository)
    {
        _facilityRepository = FacilityRepository;
        _logger = logger;
    }

    public async Task<BaseResult> Handle(UpdateFacilityCommand request, CancellationToken cancellationToken)
    {
        try
        {
            FacilityEntity FacilityEntity = await _facilityRepository
                .GetAsync(g => g.Id == request.Facility.Id, cancellationToken);

            if (FacilityEntity is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $" Id:{request.Facility.Id}");
                return BaseResult.Fail(ResultType.System);
            }
            request.Facility.Adapt(FacilityEntity);
            await _facilityRepository.UpdateAsync(FacilityEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
