using Application.Common;
using Application.Common.Extension;
using Application.Contract;
using Application.ViewModel;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Query.Category;

internal sealed class GetCategoriesHandler :
    IRequestHandler<GetCategoriesQusery, PaginatedList<CategoryViewModel>>
{
    private readonly IRepository<CategoryEntity,Guid> _categoryRepository;
    public GetCategoriesHandler(IRepository<CategoryEntity, Guid> categoryRepository)
    {
        _categoryRepository = categoryRepository;
    }


    public async Task<PaginatedList<CategoryViewModel>>
        Handle(GetCategoriesQusery request, CancellationToken cancellationToken)
    {
        IQueryable<CategoryEntity> query =
       _categoryRepository.GetByQuery();

        if (!string.IsNullOrEmpty(request.Pagination.keyword))
        {
            query = query.Where(w => w.Title == request.Pagination.keyword);
        }



        int count = query.Count().PageCount(request.Pagination!.pageSize);

        return await query.MappingedAsync<CategoryEntity, CategoryViewModel>
            (request.Pagination.curentPage
            , request.Pagination.pageSize, count, null);
    }
}
