using Domain.Enum;

namespace Application.ViewModel;

public sealed record InputViewModel
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public InputType InputType { get; set; }
}
