using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Input;

public sealed record InsertInputCommand : IRequest<BaseResult>
{
    public InputDto InputDto { get; set; }
    public InsertInputCommand(InputDto inputDto)
    {
        InputDto = inputDto;
    }
}
