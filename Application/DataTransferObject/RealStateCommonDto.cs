using Domain.Enum;

namespace Application.DataTransferObject;

public abstract record RealStateCommonDto
{
    public Guid Id { get; set; }
    public int CityId { get; set; }
    public int ProvinceId { get; set; }
    public string Longitude { get; set; }
    public string Latitude { get; set; }
    public string Address { get; set; }
    public decimal Area { get; set; }
    public DateTime AddedDate { get; set; }
    public bool IsLogicallyDeleted { get; set; }
    public string Description { get; set; }
    public string Name { get; set; }
    public string IndexImage { get; set; }
    public TransactionType TransactionType { get; set; }
    public UserType UserType { get; set; }
    public PropertyDeedType PropertyDeedType { get; set; }
}
