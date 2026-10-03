[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / MigrationResultSet

# Interface: MigrationResultSet

Defined in: [migration/migrator.ts:891](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L891)

All migration methods ([migrateTo](../classes/migration.Migrator.md#migrateto),
[migrateToLatest](../classes/migration.Migrator.md#migratetolatest) etc.) never
throw but return this object instead.

## Properties

### error?

> `readonly` `optional` **error?**: `unknown`

Defined in: [migration/migrator.ts:903](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L903)

This is defined if something went wrong.

An error may have occurred in one of the migrations in which case the
[results](#results) list contains an item with `status === 'Error'` to
indicate which migration failed.

An error may also have occurred before Kysely was able to figure out
which migrations should be executed, in which case the [results](#results)
list is undefined.

***

### results?

> `readonly` `optional` **results?**: [`MigrationResult`](migration.MigrationResult.md)[]

Defined in: [migration/migrator.ts:918](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L918)

[MigrationResult](migration.MigrationResult.md) for each individual migration that was supposed
to be executed by the operation.

If all went well, each result's `status` is `Success`. If some migration
failed, the failed migration's result's `status` is `Error` and all
results after that one have `status` ´NotExecuted`.

This property can be undefined if an error occurred before Kysely was
able to figure out which migrations should be executed.

If this list is empty, there were no migrations to execute.
