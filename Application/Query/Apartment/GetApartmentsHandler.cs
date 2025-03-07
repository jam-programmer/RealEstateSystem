using Application.Common;
using Application.Common.Extension;
using Application.Contract;
using Application.ViewModel;
using Domain.Entities;
using MediatR;

namespace Application.Query.Apartment;

internal sealed class GetApartmentsHandler : IRequestHandler<GetApartmentsQuery, PaginatedList<ApartmentViewModel>>
{
    private readonly IRepository<ApartmentEntity, Guid> _ApartmentRepository;
    public GetApartmentsHandler(IRepository<ApartmentEntity, Guid> ApartmentRepository)
    {
        _ApartmentRepository = ApartmentRepository;
    }
    public async Task<PaginatedList<ApartmentViewModel>> Handle(GetApartmentsQuery request, CancellationToken cancellationToken)
    {
        IQueryable<ApartmentEntity> query = _ApartmentRepository.GetByQuery();

        if (!string.IsNullOrEmpty(request.Pagination.keyword))
        {
            query = query.Where(w => w.Name == request.Pagination.keyword);
        }
        int count = query.Count().PageCount(request.Pagination!.pageSize);

        return await query.MappingedAsync<ApartmentEntity, ApartmentViewModel>
            (request.Pagination.curentPage, request.Pagination.pageSize, count, null);
    }
}
