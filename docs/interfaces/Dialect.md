[**kysely**](../index.md)

***

[kysely](../modules.md) / Dialect

# Interface: Dialect

Defined in: [dialect/dialect.ts:14](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect.ts#L14)

A Dialect is the glue between Kysely and the underlying database engine.

See the built-in [PostgresDialect](../classes/PostgresDialect.md) as an example of a dialect.
Users can implement their own dialects and use them by passing it
in the [KyselyConfig.dialect](KyselyConfig.md#dialect) property.

## Methods

### createAdapter()

> **createAdapter**(): [`DialectAdapter`](DialectAdapter.md)

Defined in: [dialect/dialect.ts:28](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect.ts#L28)

Creates an adapter for the dialect.

#### Returns

[`DialectAdapter`](DialectAdapter.md)

***

### createDriver()

> **createDriver**(): [`Driver`](Driver.md)

Defined in: [dialect/dialect.ts:18](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect.ts#L18)

Creates a driver for the dialect.

#### Returns

[`Driver`](Driver.md)

***

### createIntrospector()

> **createIntrospector**(`db`): [`DatabaseIntrospector`](DatabaseIntrospector.md)

Defined in: [dialect/dialect.ts:37](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect.ts#L37)

Creates a database introspector that can be used to get database metadata
such as the table names and column names of those tables.

`db` never has any plugins installed. It's created using
[Kysely.withoutPlugins](../classes/Kysely.md#withoutplugins).

#### Parameters

##### db

[`Kysely`](../classes/Kysely.md)\<`any`\>

#### Returns

[`DatabaseIntrospector`](DatabaseIntrospector.md)

***

### createQueryCompiler()

> **createQueryCompiler**(): [`QueryCompiler`](QueryCompiler.md)

Defined in: [dialect/dialect.ts:23](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect.ts#L23)

Creates a query compiler for the dialect.

#### Returns

[`QueryCompiler`](QueryCompiler.md)
