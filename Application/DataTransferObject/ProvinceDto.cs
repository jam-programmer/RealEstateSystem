using System.ComponentModel.DataAnnotations;

namespace Application.DataTransferObject
{
    public class ProvinceDto
    {
        public Guid Id{ get; set; }
        [Required(ErrorMessage ="نام استان الزامی است")]
        public string Name { get; set; }
    }
}
