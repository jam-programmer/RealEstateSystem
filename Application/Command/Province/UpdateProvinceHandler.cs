using Application.Common;
using Application.Common.Resource;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Province;

internal sealed class UpdateProvinceHandler : IRequestHandler<UpdateProvinceCommand, BaseResult>
{
    private readonly ILogger<UpdateProvinceHandler> _logger;

    private readonly IRepository<ProvinceEntity, Guid> _provinceRepository;

    public UpdateProvinceHandler(ILogger<UpdateProvinceHandler> logger, IRepository<ProvinceEntity, Guid> provinceRepository)
    {
        _provinceRepository = provinceRepository;
        _logger = logger;
    }

    public async Task<BaseResult> Handle(UpdateProvinceCommand request, CancellationToken cancellationToken)
    {
        try
        {
            ProvinceEntity ProvinceEntity = await _provinceRepository
                .GetAsync(g => g.Id == request.Province.Id, cancellationToken);

            if (ProvinceEntity is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $" Id:{request.Province.Id}");
                return BaseResult.Fail(ResultType.System);
            }
            request.Province.Adapt(ProvinceEntity);
            await _provinceRepository.UpdateAsync(ProvinceEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
