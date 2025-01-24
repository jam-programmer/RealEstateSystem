using Domain.Entities.System;
using Domain.Enum;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Drawing;

namespace Domain.Entities;

public class ApartmentEntity : BaseEntity<Guid>, IDelete, IUpdate, ICreate
{
    /// <summary>
    /// تصویر شاخت
    /// </summary>
    public string? ImagePath { get; set; }
    /// <summary>
    /// متراژ
    /// </summary>
    public int Area { get; set; }
    /// <summary>
    /// قیمت کل
    /// </summary>
    public decimal TotalPrice { get; set; }
    /// <summary>
    /// قیمت هر متر مربع
    /// </summary>
    public decimal PricePerSquareMeter { get; set; }
    /// <summary>
    /// سند
    /// </summary>
    public PropertyDeedType PropertyDeed { get; set; }
    /// <summary>
    /// سرویس بهداشتی
    /// </summary>
    public ToileType Toile { get; set; }
    /// <summary>
    /// طبقه
    /// </summary>
    public string? Floor { get; set; }
    /// <summary>
    /// واحد
    /// </summary>
    public string? Unit { get; set; }
    /// <summary>
    /// تعداد اتاق خواب
    /// </summary>
    public string? NumberBedrooms { get; set; }
    /// <summary>
    /// پارکینگ
    /// </summary>
    public bool Parking { get; set; }
    /// <summary>
    /// انباری
    /// </summary>
    public bool Storage { get; set; }
    /// <summary>
    /// تراس
    /// </summary>
    public bool Terrace { get; set; }
    /// <summary>
    /// آسانسور
    /// </summary>
    public bool Elevator { get; set; }
    /// <summary>
    /// تعداد حمام
    /// </summary>
    public string? NumberBathrooms { get; set; }
    /// <summary>
    /// تعداد سرویس بهداشتی
    /// </summary>
    public string? NumberWashrooms { get; set; }
    /// <summary>
    /// حیاط
    /// </summary>
    public bool Yard { get; set; }
    /// <summary>
    /// متراژ حیاط
    /// </summary>
    public string? YardArea { get; set; }
    /// <summary>
    /// طول جغرافیایی
    /// </summary>
    public string? Longitude { set; get; }
    /// <summary>
    /// عرض جغرافیایی
    /// </summary>
    public string? Latitude { set; get; }
    /// <summary>
    /// موقعیت
    /// </summary>
    public PositionType Position { get; set; }
    /// <summary>
    /// قابل تهاتر
    /// </summary>
    public bool IsReplaceable { get; set; }
    /// <summary>
    /// تهاتر با
    /// </summary>
    public string? Replaceable { set; get; }
    /// <summary>
    /// سال ساخت
    /// </summary>
    public string? YearManufacture { set; get; }
    /// <summary>
    /// نوع معامله
    /// </summary>
    public TransactionType Transaction {  get; set; }
    /// <summary>
    /// توضیحات
    /// </summary>
    public string? Description { set; get; }
    /// <summary>
    /// زمان بروزرسانی
    /// </summary>
    public DateTime? UpdateTime { set; get; }
    /// <summary>
    /// زمان ایجاد
    /// </summary>
    public DateTime? CreateTime { set; get; }
    /// <summary>
    /// وضعیت حذف
    /// </summary>
    public bool IsDelete { set; get; }
    /// <summary>
    /// وضعیت مسدودی
    /// </summary>
    public bool IsBlock { set; get; }

}
