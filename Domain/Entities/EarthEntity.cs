using Domain.Entities.System;
using Domain.Enum;


namespace Domain.Entities;

public class EarthEntity : BaseEntity<Guid>, IDelete,ICreate,IUpdate
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
    /// دارای آب
    /// </summary>
    public bool HaveWater { get; set; }
    /// <summary>
    /// دارای برق
    /// </summary>
    public bool HaveElectricity { set; get; }
    /// <summary>
    /// دارای گاز
    /// </summary>
    public bool HaveGas { set; get; }
    /// <summary>
    /// طول جغرافیایی
    /// </summary>
    public string? Longitude { set; get; }
    /// <summary>
    /// عرض جغرافیایی
    /// </summary>
    public string? Latitude { set; get; }
   
    /// <summary>
    /// نوع معامله
    /// </summary>
    public TransactionType Transaction { get; set; }
    /// <summary>
    /// قابل تهاتر
    /// </summary>
    public bool IsReplaceable {  get; set; } 
    /// <summary>
    /// تهاتر با
    /// </summary>
    public string? Replaceable {  set; get; }
    /// <summary>
    /// توضیحات
    /// </summary>
    public string? Description {  set; get; }
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
    public bool IsBlock {  set; get; }
}
