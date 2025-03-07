using Application.Common;
using Application.Contract;
using Application.ViewModel;
using MediatR;

namespace Application.Query.Apartment;

public sealed record GetApartmentsQuery : IRequest<PaginatedList<ApartmentViewModel>>
{
    public IPagination Pagination { get; set; }
    public GetApartmentsQuery(IPagination Pagination)
    {
        this.Pagination = Pagination;
    }
}
