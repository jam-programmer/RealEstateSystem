using Application.Common;
using Application.Contract;
using Domain.Entities.Dynamic;
using Mapster;
using MediatR;

namespace Application.Command.Form
{
    public class InsertFormHandler : IRequestHandler<InsertFormCommand, BaseResult>
    {
        readonly IRepository<FormEntity, Guid> _formRepository;
        readonly IRepository<FormInputMapEntity, Guid> _repository;
        readonly IContext _context;
        public InsertFormHandler(IRepository<FormEntity, Guid> formRepository, IContext context, IRepository<FormInputMapEntity, Guid> repository)
        {
            _repository = repository;
            _formRepository = formRepository;
            _context = context;
        }
        async Task<BaseResult> IRequestHandler<InsertFormCommand, BaseResult>.Handle(InsertFormCommand request, CancellationToken cancellationToken)
        {
            using (var transaction = await _context.BeginTransactionAsync())
            {
                try
                {
                    var formEntity = request.FormDto.Adapt<FormEntity>();
                    await _formRepository.InsertAsync(formEntity, cancellationToken);
                    List<FormInputMapEntity> formInputMaps = new();
                    foreach (var input in request.FormDto.InputIdList)
                    {
                        var formInputMap = new FormInputMapEntity
                        {
                            FormId = formEntity.Id,
                            InputId = input
                        };
                        formInputMaps.Add(formInputMap);
                    }
                    await _repository.InsertAsync(formInputMaps, cancellationToken);
                    await transaction.CommitAsync(cancellationToken);
                    return BaseResult.Success();

                }
                catch (Exception ex)
                {
                    await transaction.RollbackAsync(cancellationToken); 
                    return BaseResult.Fail(ResultType.System);
                }
            }
        }
    }
}
