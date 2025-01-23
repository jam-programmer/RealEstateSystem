namespace Domain.Entities.System
{
    namespace Domain.Entities.System.Delete
    {
        public interface IDelete
        {
            public bool IsDelete { get; set; }

        }
    }
    namespace Domain.Entities.System.Create
    {
        public interface ICreate
        {
            public DateTime? CreateTime { get; set; }

        }
    }
    namespace Domain.Entities.System.Update
    {
        public interface IUpdate
        {
            public DateTime? UpdateTime { get; set; }

        }
    }
}


