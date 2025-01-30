namespace Domain.Enum;

public enum InputType
{
    [Display(Name = "عبارت متنی")]
    text,
    [Display(Name = "انتخاب")]
    radio,
    [Display(Name = "چندانتخابی")]
    checkbox,
    [Display(Name = "فایل")]
    file,
    [Display(Name = "تاریخ")]
    datetime,
    [Display(Name = "شماره تماس")]
    tel,
    [Display(Name = "عبارت عددی")]
    number,
    [Display(Name = "پست الکترونیک")]
    email,
    [Display(Name = "گروه")]
    Div
}
