using Application.Common;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Province;

public sealed class InsertProvinceHandler : IRequestHandler<InsertProvinceCommand, BaseResult>
{
    private readonly ILogger<InsertProvinceHandler> _logger;
    private readonly IRepository<ProvinceEntity, Guid> _provinceRepository;

    public InsertProvinceHandler(ILogger<InsertProvinceHandler> logger,
                             IRepository<ProvinceEntity, Guid> provinceRepository)
    {
        _provinceRepository = provinceRepository;
        _logger = logger;
    }
    public async Task<BaseResult> Handle(InsertProvinceCommand request, CancellationToken cancellationToken)
    {
        try
        {
            ProvinceEntity ProvinceEntity = request.Province.Adapt<ProvinceEntity>();

            await _provinceRepository.InsertAsync(ProvinceEntity, cancellationToken);

            return BaseResult.Success();

        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
