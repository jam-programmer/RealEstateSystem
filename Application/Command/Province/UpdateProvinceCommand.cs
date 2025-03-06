using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Province;

public sealed record UpdateProvinceCommand : IRequest<BaseResult>
{
    public ProvinceDto Province { get; set; }
    public UpdateProvinceCommand(ProvinceDto province)
    {
        Province = province;
    }
}
