using Application.Common;
using Application.Common.Extension;
using Application.Common.Resource;
using Application.Contract;
using Domain.Entities;
using Mapster;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Application.Command.Category;

internal sealed class UpdateCategoryHandler : IRequestHandler<UpdateCategoryCommand, BaseResult>
{
    private readonly ILogger<UpdateCategoryHandler> _logger;

    private readonly IRepository<CategoryEntity, Guid> _categoryRepository;

    public UpdateCategoryHandler(ILogger<UpdateCategoryHandler> logger,
                                 IRepository<CategoryEntity, Guid> categoryRepository)
    {
        _categoryRepository = categoryRepository;
        _logger = logger;
    }

    public async Task<BaseResult> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
    {
        try
        {
            CategoryEntity categoryEntity = await _categoryRepository
                .GetAsync(g => g.Id == request.Category.Id, cancellationToken);

            if (categoryEntity is null)
            {
                _logger.LogError(CustomMessage.NotFoundOnDataBase + $" Id:{request.Category.Id}");
                return BaseResult.Fail(ResultType.System);
            }

            request.Category.Adapt(categoryEntity);
            if (request.Category.ImageFile is not null)
            {
                request.Category!.ImagePath!.RemoveImage("Category");
                categoryEntity.ImagePath = request.Category.ImageFile
                    .UploadImage("Category");
            }
            await _categoryRepository.UpdateAsync(categoryEntity, cancellationToken);
            return BaseResult.Success();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);

            return BaseResult.Fail(ResultType.System);
        }
    }
}
