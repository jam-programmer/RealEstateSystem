using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration.EntityConfigurations;

internal class ApartmentConfiguration : IEntityTypeConfiguration<ApartmentEntity>
{
    public void Configure(EntityTypeBuilder<ApartmentEntity> builder)
    {
        builder.HasKey(o => o.Id);
        builder.ToTable("Apartments");
        builder.Property(p => p.Name).IsRequired().HasMaxLength(50);
        builder.Property(p => p.Address).IsRequired().HasMaxLength(500);
        builder.Property(p => p.Description).IsRequired().HasMaxLength(250);
    }
}
