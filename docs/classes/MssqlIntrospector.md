[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlIntrospector

# Class: MssqlIntrospector

Defined in: [dialect/mssql/mssql-introspector.ts:14](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L14)

An interface for getting the database metadata (names of the tables and columns etc.)

## Implements

- [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

## Constructors

### Constructor

> **new MssqlIntrospector**(`db`): `MssqlIntrospector`

Defined in: [dialect/mssql/mssql-introspector.ts:17](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L17)

#### Parameters

##### db

[`Kysely`](Kysely.md)\<`any`\>

#### Returns

`MssqlIntrospector`

## Methods

### getSchemas()

> **getSchemas**(): `Promise`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)[]\>

Defined in: [dialect/mssql/mssql-introspector.ts:21](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L21)

Get schema metadata.

#### Returns

`Promise`\<[`SchemaMetadata`](../interfaces/SchemaMetadata.md)[]\>

#### Implementation of

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md).[`getSchemas`](../interfaces/DatabaseIntrospector.md#getschemas)

***

### getTables()

> **getTables**(`options?`): `Promise`\<[`TableMetadata`](../interfaces/TableMetadata.md)[]\>

Defined in: [dialect/mssql/mssql-introspector.ts:25](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L25)

Get tables and views metadata.

#### Parameters

##### options?

[`DatabaseMetadataOptions`](../interfaces/DatabaseMetadataOptions.md) = `...`

#### Returns

`Promise`\<[`TableMetadata`](../interfaces/TableMetadata.md)[]\>

#### Implementation of

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md).[`getTables`](../interfaces/DatabaseIntrospector.md#gettables)
