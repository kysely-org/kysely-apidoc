[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / MigratorProps

# Interface: MigratorProps

Defined in: [migration/migrator.ts:811](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L811)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`MigrateOptions`](migration.MigrateOptions.md)

## Properties

### allowUnorderedMigrations?

> `readonly` `optional` **allowUnorderedMigrations?**: `boolean`

Defined in: [migration/migrator.ts:875](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L875)

Enforces whether or not migrations must be run in alpha-numeric order.

When false, migrations must be run in their exact alpha-numeric order.
This is checked against the migrations already run in the database
(`migrationTableName`). This ensures your migrations are always run in
the same order and is the safest option.

When true, migrations are still run in alpha-numeric order, but
the order is not checked against already-run migrations in the database.
Kysely will simply run all migrations that haven't run yet, in alpha-numeric
order.

***

### db

> `readonly` **db**: [`Kysely`](../classes/Kysely.md)\<`any`\>

Defined in: [migration/migrator.ts:812](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L812)

***

### disableTransactions?

> `readonly` `optional` **disableTransactions?**: `boolean`

Defined in: [migration/migrator.ts:808](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L808)

When `true`, don't run migrations in transactions even if the dialect supports transactional DDL.

Default is `false`.

This is useful when some migrations include queries that would fail otherwise.

#### Inherited from

[`MigrateOptions`](migration.MigrateOptions.md).[`disableTransactions`](migration.MigrateOptions.md#disabletransactions)

***

### migrationLockTableName?

> `readonly` `optional` **migrationLockTableName?**: `string`

Defined in: [migration/migrator.ts:842](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L842)

The name of the internal migration lock table. Defaults to `kysely_migration_lock`.

If you do specify this, you need to ALWAYS use the same value. Kysely doesn't
support changing the table on the fly. If you run the migrator even once with a
table name X and then change the table name to Y, kysely will create a new empty
lock table.

If you do specify this, ALWAYS ALWAYS use the same value from the beginning of
the project, to the end of time or prepare to manually migrate the migration
tables.

***

### migrationTableName?

> `readonly` `optional` **migrationTableName?**: `string`

Defined in: [migration/migrator.ts:828](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L828)

The name of the internal migration table. Defaults to `kysely_migration`.

If you do specify this, you need to ALWAYS use the same value. Kysely doesn't
support changing the table on the fly. If you run the migrator even once with a
table name X and then change the table name to Y, kysely will create a new empty
migration table and attempt to run the migrations again, which will obviously
fail.

If you do specify this, ALWAYS ALWAYS use the same value from the beginning of
the project, to the end of time or prepare to manually migrate the migration
tables.

***

### migrationTableSchema?

> `readonly` `optional` **migrationTableSchema?**: `string`

Defined in: [migration/migrator.ts:860](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L860)

The schema of the internal migration tables. Defaults to the default schema
on dialects that support schemas.

If you do specify this, you need to ALWAYS use the same value. Kysely doesn't
support changing the schema on the fly. If you run the migrator even once with a
schema name X and then change the schema name to Y, kysely will create a new empty
migration tables in the new schema and attempt to run the migrations again, which
will obviously fail.

If you do specify this, ALWAYS ALWAYS use the same value from the beginning of
the project, to the end of time or prepare to manually migrate the migration
tables.

This only works on postgres and mssql.

***

### nameComparator?

> `readonly` `optional` **nameComparator?**: (`name0`, `name1`) => `number`

Defined in: [migration/migrator.ts:883](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L883)

A function that compares migration names, used when sorting migrations in
ascending order.

Default is `name0.localeCompare(name1)`.

#### Parameters

##### name0

`string`

##### name1

`string`

#### Returns

`number`

***

### provider

> `readonly` **provider**: [`MigrationProvider`](migration.MigrationProvider.md)

Defined in: [migration/migrator.ts:813](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L813)
