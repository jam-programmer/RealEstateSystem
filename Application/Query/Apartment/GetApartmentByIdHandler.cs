using Application.Common;
using Application.Contract;
using Application.DataTransferObject;
using Domain.Entities;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Query.Apartment;

internal sealed class GetApartmentByIdHandler :
    IRequestHandler<GetApartmentByIdQuery, BaseResult<ApartmentDto>>
{
    private readonly ILogger<GetApartmentByIdHandler> _logger;
    private readonly IRepository<ApartmentEntity, Guid> _apartmentRepository;

    public GetApartmentByIdHandler(ILogger<GetApartmentByIdHandler> logger,
                                   IRepository<ApartmentEntity, Guid> ApartmentRepository)
    {
        _apartmentRepository = ApartmentRepository;
        _logger = logger;
    }


    public async Task<BaseResult<ApartmentDto>> Handle(GetApartmentByIdQuery request, CancellationToken cancellationToken)
    {
        try
        {
            ApartmentDto ApartmentDto = await _apartmentRepository.
                GetAsync<ApartmentDto>(g => g.Id == request.Id, null, cancellationToken);

            if (ApartmentDto is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $"Id:{request.Id}");
                return BaseResult<ApartmentDto>.Fail(ResultType.System);
            }
            return BaseResult<ApartmentDto>.Success(ApartmentDto);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult<ApartmentDto>.Fail(ResultType.System);
        }
    }
}
