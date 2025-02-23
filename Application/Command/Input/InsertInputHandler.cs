using Application.Common;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Input;

internal sealed class InsertInputHandler : IRequestHandler<InsertInputCommand, BaseResult>
{
    private readonly ILogger<InsertInputHandler> _logger;
    private readonly IRepository<InputEntity, Guid> _inputRepository;

    public InsertInputHandler(ILogger<InsertInputHandler> logger, IRepository<InputEntity, Guid> inputRepository)
    {
        _inputRepository = inputRepository;
        _logger = logger;
    }

    public IRepository<InputEntity, Guid> InputRepository => _inputRepository;

    public async Task<BaseResult> Handle(InsertInputCommand request, CancellationToken cancellationToken)
    {
        try
        {
            var InputEntity = request.InputDto.Adapt<InputEntity>();
            await InputRepository.InsertAsync(InputEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
