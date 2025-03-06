using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration.EntityConfigurations;

internal class CityConfiguration : IEntityTypeConfiguration<CityEntity>
{
    public void Configure(EntityTypeBuilder<CityEntity> builder)
    {
        builder.HasKey(o => o.Id);
        builder.ToTable("Cities");
        builder.Property(p => p.Name).IsRequired().HasMaxLength(50);
    }
}
