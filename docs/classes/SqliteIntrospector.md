[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteIntrospector

# Class: SqliteIntrospector

Defined in: [dialect/sqlite/sqlite-introspector.ts:39](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-introspector.ts#L39)

An interface for getting the database metadata (names of the tables and columns etc.)

## Implements

- [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

## Constructors

### Constructor

> **new SqliteIntrospector**(`db`): `SqliteIntrospector`

Defined in: [dialect/sqlite/sqlite-introspector.ts:42](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-introspector.ts#L42)

#### Parameters

##### db

[`Kysely`](Kysely.md)\<`any`\>

#### Returns

`SqliteIntrospector`

## Methods

### getSchemas()

> **getSchemas**(): `Promise`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)[]\>

Defined in: [dialect/sqlite/sqlite-introspector.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-introspector.ts#L46)

Get schema metadata.

#### Returns

`Promise`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)[]\>

#### Implementation of

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md).[`getSchemas`](../interfaces/DatabaseIntrospector.md#getschemas)

***

### getTables()

> **getTables**(`options?`): `Promise`\<[`TableMetadata`](../interfaces/TableMetadata.md)[]\>

Defined in: [dialect/sqlite/sqlite-introspector.ts:51](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-introspector.ts#L51)

Get tables and views metadata.

#### Parameters

##### options?

[`DatabaseMetadataOptions`](../interfaces/DatabaseMetadataOptions.md) = `...`

#### Returns

`Promise`\<[`TableMetadata`](../interfaces/TableMetadata.md)[]\>

#### Implementation of

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md).[`getTables`](../interfaces/DatabaseIntrospector.md#gettables)
