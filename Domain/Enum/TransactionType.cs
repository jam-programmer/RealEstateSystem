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
