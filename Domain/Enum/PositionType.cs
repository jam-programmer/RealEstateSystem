using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enum;

public enum PositionType
{
    [Display(Name = "شمال")]
    North,
    [Display(Name = "جنوب")]
    South,
    [Display(Name = "شرق")]
    West, 
    [Display(Name = "غرب")]
    East,
    [Display(Name = "شمال شرقی")]
    Northeast,
    [Display(Name = "شمال غربی")]
    Northwest,
    [Display(Name = "جنوب شرقی")]
    Southeast,
    [Display(Name = "جنوب غربی")]
    Southwest
}
