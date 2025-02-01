namespace Application.ViewModel;

public sealed record CategoryViewModel
{
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? ImagePath { get; set; }
}
