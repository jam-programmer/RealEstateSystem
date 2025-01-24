using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enum;

public enum TransactionType
{
    [Display(Name = "خرید")]
    Buy, 
    [Display(Name = "فروش")]
    Sell,
    [Display(Name = "رهن")]
    Mortgage,
    [Display(Name = "اجاره")]
    Rent
}
