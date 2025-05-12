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
            new FacilityEntity { Title = "آسانسور", Description = null },
            new FacilityEntity { Title = "پارکینگ", Description = null },
            new FacilityEntity { Title = "انیاری", Description = null },
            new FacilityEntity { Title = "بالکن", Description = null },
            new FacilityEntity { Title = "نوساز", Description = null }
        );
    }
}
