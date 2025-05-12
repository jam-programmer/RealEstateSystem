using Application.Common;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Apartment;

public sealed class InsertApartmentHandler : IRequestHandler<InsertApartmentCommand, BaseResult>
{
    private readonly ILogger<InsertApartmentHandler> _logger;
    private readonly IRepository<ApartmentEntity, Guid> _apartmentRepository;

    public InsertApartmentHandler(ILogger<InsertApartmentHandler> logger,
                             IRepository<ApartmentEntity, Guid> apartmentRepository)
    {
        _apartmentRepository = apartmentRepository;
        _logger = logger;
    }
    public async Task<BaseResult> Handle(InsertApartmentCommand request, CancellationToken cancellationToken)
    {
        try
        {
            ApartmentEntity ApartmentEntity = request.Apartment.Adapt<ApartmentEntity>();

            await _apartmentRepository.InsertAsync(ApartmentEntity, cancellationToken);

            return BaseResult.Success();

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
