using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Province;

public sealed record InsertProvinceCommand : IRequest<BaseResult>
{
    public ProvinceDto Province { get; set; }
    public InsertProvinceCommand(ProvinceDto province)
    {
        Province = province;
    }
}
