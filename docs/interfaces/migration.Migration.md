[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / Migration

# Interface: Migration

Defined in: [migration/migrator.ts:16](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L16)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`NamedMigration`](migration.NamedMigration.md)

## Methods

### down()?

> `optional` **down**(`db`): `Promise`\<`void`\>

Defined in: [migration/migrator.ts:25](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L25)

An optional down method.

If you don't provide a down method, the migration is skipped when
migrating down.

#### Parameters

##### db

[`Kysely`](../classes/Kysely.md)\<`any`\>

#### Returns

`Promise`\<`void`\>

***

### up()

> **up**(`db`): `Promise`\<`void`\>

Defined in: [migration/migrator.ts:17](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L17)

#### Parameters

##### db

[`Kysely`](../classes/Kysely.md)\<`any`\>

#### Returns

`Promise`\<`void`\>
