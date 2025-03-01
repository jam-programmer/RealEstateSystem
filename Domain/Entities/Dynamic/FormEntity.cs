using Domain.Entities.System;
using Domain.Enum;

namespace Domain.Entities.Dynamic
{
    public class FormEntity : BaseEntity<Guid>
    {
        public string Title { get; set; }
        public bool IsRequired { get; set; }
        public FormatType FileFormatType { get; set; }

        public int CategoryId { get; set; }
        public CategoryEntity Category { get; set; }

        public int? ParentId { get; set; }
        public FormEntity ParentField { get; set; }
    }
}
