

namespace Infrastructure.Configuration.Context;

public class SqlServerContext : IdentityDbContext
    <UserEntity, RoleEntity, Guid>
{
    public SqlServerContext(DbContextOptions<SqlServerContext> options) : base(options)
    {
    }

   
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        builder.AppendDbSetOfEntity();
        base.OnModelCreating(builder);
    }
}
