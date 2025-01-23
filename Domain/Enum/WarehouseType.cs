namespace Domain.Enum;

public enum WarehouseType
{
    [Display(Name = "انبارک قرنطینه")]
    Quarantine,
    [Display(Name = "انبارک ضایعات")]
    Waste,
    [Display(Name = "انبارک سالم")]
    Normal,
    [Display(Name = "انبارک سرد (یخچالی)")]
    Refrigerator,
    [Display(Name = "انبارک آرایشی بهداشتی")]
    Cosmetics,
    [Display(Name = "انبارک کالای پزشکی")]
    Medical 
}
