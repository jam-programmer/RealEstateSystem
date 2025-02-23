using Domain.Enum;

namespace Application.DataTransferObject
{
    public sealed record FormDto
    {
        public string Title { get; set; }
        public bool IsRequired { get; set; }
        public FormatType FileFormatType { get; set; }
        public int CategoryId { get; set; }
        public int? ParentId { get; set; }
        public List<Guid> InputIdList { get; set; }
    }
}
