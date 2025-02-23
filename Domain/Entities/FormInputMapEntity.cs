using Domain.Entities.System;

namespace Domain.Entities
{
    public class FormInputMapEntity : BaseEntity<Guid>
    {
        public Guid FormId { get; set; }
        public FormEntity Form { get; set; }

        public Guid InputId { get; set; }
        public InputEntity Input { get; set; }
    }
}
