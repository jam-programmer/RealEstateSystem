using Domain.Entities.System;

namespace Domain.Entities.Dynamic
{
    public class FormInputMapEntity : BaseEntity<Guid>
    {
        public Guid FormId { get; set; }
        public FormEntity Form { get; set; }

        public Guid InputId { get; set; }
        public InputEntity Input { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

    }
}
