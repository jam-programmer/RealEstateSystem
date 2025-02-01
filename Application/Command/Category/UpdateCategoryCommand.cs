using Application.Common;
using Application.DataTransferObject;
using MediatR;

namespace Application.Command.Category;

public sealed record UpdateCategoryCommand :
    IRequest<BaseResult>
{
    public CategoryDto Category { get; set; }
    public UpdateCategoryCommand(CategoryDto Category)
    {
        this.Category = Category;
    }
}
