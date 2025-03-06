using Application.Common;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Facility;

public sealed class InsertFacilityHandler : IRequestHandler<InsertFacilityCommand, BaseResult>
{
    private readonly ILogger<InsertFacilityHandler> _logger;
    private readonly IRepository<FacilityEntity, Guid> _facilityRepository;

    public InsertFacilityHandler(ILogger<InsertFacilityHandler> logger,
                             IRepository<FacilityEntity, Guid> facilityRepository)
    {
        _facilityRepository = facilityRepository;
        _logger = logger;
    }
    public async Task<BaseResult> Handle(InsertFacilityCommand request, CancellationToken cancellationToken)
    {
        try
        {
            FacilityEntity FacilityEntity = request.Facility.Adapt<FacilityEntity>();

            await _facilityRepository.InsertAsync(FacilityEntity, cancellationToken);

            return BaseResult.Success();

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
