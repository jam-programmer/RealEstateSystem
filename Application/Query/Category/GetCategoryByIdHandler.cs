using Application.Common;
using Application.Contract;
using Application.DataTransferObject;
using Domain.Entities;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Query.Category;

internal sealed class GetCategoryByIdHandler :
    IRequestHandler<GetCategoryByIdQuery, BaseResult<CategoryDto>>
{
    private readonly ILogger<GetCategoryByIdHandler> _logger;
    private readonly IRepository<Domain.Entities.CategoryEntity, Guid> _categoryRepository;

    public GetCategoryByIdHandler
        (
        ILogger<GetCategoryByIdHandler> logger,
        IRepository<Domain.Entities.CategoryEntity, Guid> categoryRepository
        )
    {
        _categoryRepository = categoryRepository;
        _logger = logger;
    }


    public async Task<BaseResult<CategoryDto>> Handle
        (GetCategoryByIdQuery request, CancellationToken cancellationToken)
    {
        try
        {
            CategoryDto CategoryDto = await
                _categoryRepository.
                GetAsync<CategoryDto>(g=>g.Id==request.Id,null,cancellationToken);

            if(CategoryDto is null)
            {
                _logger.LogError
                    (CustomMessage.NotFoundOnDataBase+$"Id:{request.Id}");
                return BaseResult<CategoryDto>.Fail(ResultType.System);
            }
            return BaseResult<CategoryDto>.Success(CategoryDto);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,ex.Message);
            return BaseResult<CategoryDto>.Fail(ResultType.System);
        }
    }
}
