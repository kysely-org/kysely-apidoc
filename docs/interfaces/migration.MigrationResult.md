[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / MigrationResult

# Interface: MigrationResult

Defined in: [migration/migrator.ts:923](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L923)

## Properties

### direction

> `readonly` **direction**: [`MigrationDirection`](../types/migration.MigrationDirection.md)

Defined in: [migration/migrator.ts:929](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L929)

The direction in which this migration was executed.

***

### migrationName

> `readonly` **migrationName**: `string`

Defined in: [migration/migrator.ts:924](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L924)

***

### status

> `readonly` **status**: `"NotExecuted"` \| `"Success"` \| `"Error"`

Defined in: [migration/migrator.ts:945](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L945)

The execution status.

 - `Success` means the migration was successfully executed. Note that
   if any of the later migrations in the [MigrationResultSet.results](migration.MigrationResultSet.md#results)
   list failed (have status `Error`) AND the dialect supports transactional
   DDL, even the successfull migrations were rolled back.

 - `Error` means the migration failed. In this case the
   [MigrationResultSet.error](migration.MigrationResultSet.md#error) contains the error.

 - `NotExecuted` means that the migration was supposed to be executed
   but wasn't because an earlier migration failed.
