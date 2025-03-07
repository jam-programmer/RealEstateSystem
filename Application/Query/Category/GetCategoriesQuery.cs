using Application.Common;
using Application.Contract;
using Application.ViewModel;
using MediatR;

namespace Application.Query.Category;

public sealed record GetCategoriesQuery :
    IRequest<PaginatedList<CategoryViewModel>>
{
    public IPagination Pagination { get; set; }
    public GetCategoriesQuery(IPagination Pagination)
    {
        this.Pagination = Pagination;
    }
}
