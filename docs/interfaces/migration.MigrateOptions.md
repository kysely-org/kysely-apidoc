[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / MigrateOptions

# Interface: MigrateOptions

Defined in: [migration/migrator.ts:800](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L800)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`MigratorProps`](migration.MigratorProps.md)

## Properties

### disableTransactions?

> `readonly` `optional` **disableTransactions?**: `boolean`

Defined in: [migration/migrator.ts:808](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L808)

When `true`, don't run migrations in transactions even if the dialect supports transactional DDL.

Default is `false`.

This is useful when some migrations include queries that would fail otherwise.
