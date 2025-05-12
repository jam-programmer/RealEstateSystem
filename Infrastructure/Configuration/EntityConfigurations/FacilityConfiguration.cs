using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration.EntityConfigurations;

internal class FacilityConfiguration : IEntityTypeConfiguration<FacilityEntity>
{
    public void Configure(EntityTypeBuilder<FacilityEntity> builder)
    {
        builder.HasKey(o => o.Id);
        builder.ToTable("Facilities");
        builder.Property(p => p.Title).IsRequired().HasMaxLength(50);
        builder.Property(p => p.Description).HasMaxLength(250);
        builder.HasData(
            new FacilityEntity {Id=Guid.Parse("28beecf9-964f-453c-9a93-5152819c612e"), Title = "آسانسور", Description = null },
            new FacilityEntity {Id=Guid.Parse("3733a995-9e24-4cea-bfc5-9955b4906d48"), Title = "پارکینگ", Description = null },
            new FacilityEntity {Id=Guid.Parse("1cea4b91-c9a2-4a4b-be10-a4479c3e4948"), Title = "انیاری", Description = null },
            new FacilityEntity {Id=Guid.Parse("e15b7548-9b74-401d-a27f-61f37d8f5289"), Title = "بالکن", Description = null },
            new FacilityEntity {Id=Guid.Parse("eb7c375f-8d7d-42c0-b93a-e867ef8b8866"), Title = "نوساز", Description = null }
        );
    }
}
