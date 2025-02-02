using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Input;

public sealed record UpdateInputCommand : IRequest<BaseResult>
{
    public InputDto InputDto { get; set; }
    public UpdateInputCommand(InputDto inputDto)
    {
        InputDto = inputDto;
    }
}
