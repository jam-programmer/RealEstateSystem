using Application.Common;
using Application.Contract;
using Domain.Entities.Dynamic;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Input;

internal sealed class UpdateInputHandler : IRequestHandler<UpdateInputCommand, BaseResult>
{
    private readonly ILogger<UpdateInputHandler> _logger;
    private readonly IRepository<InputEntity, Guid> _inputRepository;

    public UpdateInputHandler(ILogger<UpdateInputHandler> logger, IRepository<InputEntity, Guid> inputRepository)
    {
        _inputRepository = inputRepository;
        _logger = logger;
    }

    public async Task<BaseResult> Handle(UpdateInputCommand request, CancellationToken cancellationToken)
    {
        try
        {
            var InputEntity = await _inputRepository.GetAsync(o => o.Id == request.InputDto.Id, cancellationToken);
            if (InputEntity is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $" Id:{request.InputDto.Id}");
                return BaseResult.Fail(ResultType.System);
            }
            request.InputDto.Adapt(InputEntity);
            await _inputRepository.UpdateAsync(InputEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            return BaseResult.Fail(ResultType.System);
        }
    }
}
