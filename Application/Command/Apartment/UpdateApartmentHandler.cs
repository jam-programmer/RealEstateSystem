using Application.Common;
using Application.Common.Resource;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Apartment;

internal sealed class UpdateApartmentHandler : IRequestHandler<UpdateApartmentCommand, BaseResult>
{
    private readonly ILogger<UpdateApartmentHandler> _logger;

    private readonly IRepository<ApartmentEntity, Guid> _apartmentRepository;

    public UpdateApartmentHandler(ILogger<UpdateApartmentHandler> logger, IRepository<ApartmentEntity, Guid> apartmentRepository)
    {
        _apartmentRepository = apartmentRepository;
        _logger = logger;
    }

    public async Task<BaseResult> Handle(UpdateApartmentCommand request, CancellationToken cancellationToken)
    {
        try
        {
            ApartmentEntity ApartmentEntity = await _apartmentRepository
                .GetAsync(g => g.Id == request.Apartment.Id, cancellationToken);

            if (ApartmentEntity is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $" Id:{request.Apartment.Id}");
                return BaseResult.Fail(ResultType.System);
            }
            request.Apartment.Adapt(ApartmentEntity);
            await _apartmentRepository.UpdateAsync(ApartmentEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
