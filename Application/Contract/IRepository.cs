﻿using Mapster;
using System.Linq.Expressions;
using Domain.Entities;
using Domain.Entities.System;

namespace Application.Contract;

public interface IRepository<TEntity, TKey> where TEntity : BaseEntity<TKey>
{
    Task<TModel> GetByIdAsync<TModel>(Expression<Func<TEntity, bool>>
        condition, TypeAdapterConfig? config = null);

    Task<List<TModel>> GetListAsync<TModel>(Expression<Func<TEntity, bool>>
        condition, TypeAdapterConfig? config = null);

    Task<TModel> GetAsync<TModel>(Expression<Func<TEntity, bool>>
        condition, TypeAdapterConfig? config = null, CancellationToken cancellation = default);

    Task<TEntity?> GetAsync(Expression<Func<TEntity, bool>>
        condition, CancellationToken cancellation = default);

    Task InsertAsync(TEntity entity, CancellationToken cancellation = default);
    Task InsertAsync(List<TEntity> entities, CancellationToken cancellation = default);
    Task UpdateAsync(TEntity entity, CancellationToken cancellation = default);
    Task UpdateAsync(List<TEntity> entities, CancellationToken cancellation = default);


    Task<bool> ExistAsync(Expression<Func<TEntity, bool>>
        condition, CancellationToken cancellation = default);


    Task DeleteAsync<TKey>(TKey Id, CancellationToken cancellation = default);
    Task DeleteAsync(TEntity entity, CancellationToken cancellation = default);
    Task DeleteAsync(List<TEntity> entities, CancellationToken cancellation = default);


    IQueryable<TEntity> GetByQuery();


}