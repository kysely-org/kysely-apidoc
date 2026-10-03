[**kysely**](../index.md)

***

[kysely](../modules.md) / DatabaseIntrospector

# Interface: DatabaseIntrospector

Defined in: [dialect/database-introspector.ts:4](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L4)

An interface for getting the database metadata (names of the tables and columns etc.)

## Methods

### getSchemas()

> **getSchemas**(): `Promise`\<[`SchemaMetadata`](SchemaMetadata.md)[]\>

Defined in: [dialect/database-introspector.ts:8](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L8)

Get schema metadata.

#### Returns

`Promise`\<[`SchemaMetadata`](SchemaMetadata.md)[]\>

***

### getTables()

> **getTables**(`options?`): `Promise`\<[`TableMetadata`](TableMetadata.md)[]\>

Defined in: [dialect/database-introspector.ts:13](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L13)

Get tables and views metadata.

#### Parameters

##### options?

[`DatabaseMetadataOptions`](DatabaseMetadataOptions.md)

#### Returns

`Promise`\<[`TableMetadata`](TableMetadata.md)[]\>
