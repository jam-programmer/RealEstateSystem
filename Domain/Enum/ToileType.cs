using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enum;

public enum ToileType
{
    [Display(Name = "ایرانی")]
    Iranian,
    [Display(Name = "فرنگی")]
    Foreign,
    [Display(Name = "ایرانی و فرنگی")]
    IranianForeign
}
