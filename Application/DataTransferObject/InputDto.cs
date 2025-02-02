using Domain.Enum;

namespace Application.DataTransferObject
{
    public sealed record InputDto
    {
        public Guid Id { get; set; }
        public string Title { set; get; }
        public string Description { set; get; }
        public InputType InputType { set; get; }
    }
}
