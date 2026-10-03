[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlIntrospector

# Class: MysqlIntrospector

Defined in: [dialect/mysql/mysql-introspector.ts:15](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-introspector.ts#L15)

An interface for getting the database metadata (names of the tables and columns etc.)

## Implements

- [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

## Constructors

### Constructor

> **new MysqlIntrospector**(`db`): `MysqlIntrospector`

Defined in: [dialect/mysql/mysql-introspector.ts:18](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-introspector.ts#L18)

#### Parameters

##### db

[`Kysely`](Kysely.md)\<`any`\>

#### Returns

`MysqlIntrospector`

## Methods

### getSchemas()

> **getSchemas**(): `Promise`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)[]\>

Defined in: [dialect/mysql/mysql-introspector.ts:22](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-introspector.ts#L22)

Get schema metadata.

#### Returns

`Promise`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)[]\>

#### Implementation of

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md).[`getSchemas`](../interfaces/DatabaseIntrospector.md#getschemas)

***

### getTables()

> **getTables**(`options?`): `Promise`\<[`TableMetadata`](../interfaces/TableMetadata.md)[]\>

Defined in: [dialect/mysql/mysql-introspector.ts:32](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-introspector.ts#L32)

Get tables and views metadata.

#### Parameters

##### options?

[`DatabaseMetadataOptions`](../interfaces/DatabaseMetadataOptions.md) = `...`

#### Returns

`Promise`\<[`TableMetadata`](../interfaces/TableMetadata.md)[]\>

#### Implementation of

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md).[`getTables`](../interfaces/DatabaseIntrospector.md#gettables)
