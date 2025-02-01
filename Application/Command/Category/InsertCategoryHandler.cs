using Application.Common;
using Application.Common.Extension;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Command.Category;

internal sealed class InsertCategoryHandler :
    IRequestHandler<InsertCategoryCommand, BaseResult>
{
    private readonly ILogger<InsertCategoryHandler> _logger;

    private readonly IRepository<CategoryEntity, Guid> _categoryRepository;

    public InsertCategoryHandler
        (
        ILogger<InsertCategoryHandler> logger,
        IRepository<CategoryEntity, Guid> categoryRepository
        )
    {
        _categoryRepository = categoryRepository;   
        _logger = logger;   
    }
    public async Task<BaseResult> Handle
        (InsertCategoryCommand request, CancellationToken cancellationToken)
    {
        try
        {
            CategoryEntity categoryEntity = request.Category.Adapt<CategoryEntity>();

            categoryEntity.ImagePath = request.Category!.ImageFile!.UploadImage("Category");

            await _categoryRepository.InsertAsync(categoryEntity);

            return BaseResult.Success();
            
        }
        catch (Exception ex) 
        {
            _logger.LogError(ex,ex.Message);

            return BaseResult.Fail(ResultType.System);
        }
    }
}
