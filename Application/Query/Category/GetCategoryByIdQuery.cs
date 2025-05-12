using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Query.Category;

public sealed record GetCategoryByIdQuery : IRequest<BaseResult<CategoryDto>>
{
    public Guid Id { get; set; }
    public GetCategoryByIdQuery(in Guid Id)
    {
        this.Id = Id;
    }
}
