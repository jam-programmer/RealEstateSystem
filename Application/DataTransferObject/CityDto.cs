namespace Application.DataTransferObject;

public sealed record CityDto
{
    public Guid Id { get; set; }
    public string Nmae { get; set; }
    public int ProvinceId { get; set; }
}
