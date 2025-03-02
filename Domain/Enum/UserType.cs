namespace Domain.Enum
{
    public enum UserType
    {
        [Display(Name = "همه")]
        All = 1,
        [Display(Name = "مسکونی")]
        Residential = 2,
        [Display(Name = "اداری-تجاری")]
        Commercial = 3
    }
}
