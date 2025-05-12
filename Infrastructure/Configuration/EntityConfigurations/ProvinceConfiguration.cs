using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration.EntityConfigurations;

internal class ProvinceConfiguration : IEntityTypeConfiguration<ProvinceEntity>
{
    public void Configure(EntityTypeBuilder<ProvinceEntity> builder)
    {
        builder.HasKey(o => o.Id);
        builder.ToTable("Provinces");
        builder.Property(p => p.Name).IsRequired().HasMaxLength(50);
    }
}
