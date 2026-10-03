[**kysely**](../index.md)

***

[kysely](../modules.md) / MigrationLockOptions

# Interface: MigrationLockOptions

Defined in: [dialect/dialect-adapter.ts:130](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L130)

## Properties

### lockRowId

> `readonly` **lockRowId**: `string`

Defined in: [dialect/dialect-adapter.ts:139](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L139)

The id of the only row in the migration lock table.

***

### lockTable

> `readonly` **lockTable**: `string`

Defined in: [dialect/dialect-adapter.ts:134](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L134)

The name of the migration lock table.

***

### lockTableSchema?

> `readonly` `optional` **lockTableSchema?**: `string`

Defined in: [dialect/dialect-adapter.ts:146](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L146)

The schema in which the migration lock table lives. This is only
defined if the user has specified a custom schema in the migration
settings.
