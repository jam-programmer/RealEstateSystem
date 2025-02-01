using Microsoft.AspNetCore.Http;

namespace Application.DataTransferObject;

public sealed record CategoryDto
{

    public Guid Id { get; set; }
    public string? Title { get; set; }
    public IFormFile? ImageFile { get; set; }
    public string? Description { get; set; }
    public string? ImagePath { get; set; }
}
