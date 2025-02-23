using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Category;

public sealed record InsertCategoryCommand : IRequest<BaseResult>
{
    public CategoryDto Category { get; set; }
    public InsertCategoryCommand(CategoryDto Category)
    {
        this.Category = Category;
    }
}
