using Application.Common;
using Application.Contract;
using Application.ViewModel;
using MediatR;

namespace Application.Query.Category;

public sealed record GetCategoriesQusery :
    IRequest<PaginatedList<CategoryViewModel>>
{
    public IPagination Pagination { get; set; }
    public GetCategoriesQusery(IPagination Pagination)
    {
        this.Pagination = Pagination;
    }
}
