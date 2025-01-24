using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enum;

public enum PropertyDeedType
{
    [Display(Name = "سند مشاع")]
    Common,
    [Display(Name = "سند مفروز")]
    Mufruz,
    [Display(Name = "سند شش دانگ")]
    SixDang,
    [Display(Name = "سند تک برگ")]
    SinglePage,
    [Display(Name = "سند وقفی")]
    Endowment,
    [Display(Name = "سند المثنی")]
    Duplicate,
    [Display(Name = "سند عرصه و اعیان")]
    RealEstateProperty,
    [Display(Name = "سند ورثه‌ای")]
    Inheritance,
    [Display(Name = "سند تفکیکی")]
    Separation,
    [Display(Name = "سند وکالتی")]
    PowerAttorney,
    [Display(Name = "سند معارض")]
    Opposition,
    [Display(Name = "سند بنچاق")]
    Bench,
    [Display(Name = "سند شورایی")]
    Shura,
    [Display(Name = "سند منگوله‌دار")]
    Tambled,
    [Display(Name = "فاقد سند")]
    Non
}
