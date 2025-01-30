using Domain.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configuration.Mapping;

internal class CategoryMap : IEntityTypeConfiguration<CategoryEntity>
{
    public void Configure(EntityTypeBuilder<CategoryEntity> builder)
    {
        builder.Property(p => p.Title).IsRequired().HasMaxLength(500);
        builder.Property(p=>p.Description).IsRequired(false);
        builder.Property(p=>p.ImagePath).IsRequired(false)
            .HasDefaultValue("DefaultCategory.png");
        
    }
}
