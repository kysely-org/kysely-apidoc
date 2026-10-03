[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / MigrationInfo

# Interface: MigrationInfo

Defined in: [migration/migrator.ts:974](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L974)

## Properties

### executedAt?

> `optional` **executedAt?**: `Date`

Defined in: [migration/migrator.ts:990](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L990)

When was the migration executed.

If this is undefined, the migration hasn't been executed yet.

***

### migration

> **migration**: [`Migration`](migration.Migration.md)

Defined in: [migration/migrator.ts:983](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L983)

The actual migration.

***

### name

> **name**: `string`

Defined in: [migration/migrator.ts:978](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L978)

Name of the migration.
