using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration.Mapping;

internal class InputMap : IEntityTypeConfiguration<InputEntity>
{
    public void Configure(EntityTypeBuilder<InputEntity> builder)
    {
        builder.Property(p => p.Title).IsRequired()
             .HasMaxLength(500);
        builder.Property(p => p.Description).IsRequired()
             .HasMaxLength(2000);
        builder.Property(p => p.InputType).IsRequired();

    }
}
