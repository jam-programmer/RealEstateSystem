using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Query.Category;

public sealed record GetCategoryQuery : IRequest<BaseResult<CategoryDto>>
{
    public Guid Id { get; set; }
    public GetCategoryQuery(in Guid Id)
    {
        this.Id = Id;
    }
}
