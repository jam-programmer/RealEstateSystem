using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Form
{
    public class InsertFormCommand : IRequest<BaseResult>
    {
        public FormDto FormDto { get; set; }
        public InsertFormCommand(FormDto formDto)
        {
            FormDto = formDto;
        }
    }
}
