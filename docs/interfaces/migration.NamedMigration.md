[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / NamedMigration

# Interface: NamedMigration

Defined in: [migration/migrator.ts:993](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L993)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`Migration`](migration.Migration.md)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [migration/migrator.ts:994](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L994)

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

#### Inherited from

[`Migration`](migration.Migration.md).[`down`](migration.Migration.md#down)

***

### up()

> **up**(`db`): `Promise`\<`void`\>

Defined in: [migration/migrator.ts:17](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L17)

#### Parameters

##### db

[`Kysely`](../classes/Kysely.md)\<`any`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Migration`](migration.Migration.md).[`up`](migration.Migration.md#up)
