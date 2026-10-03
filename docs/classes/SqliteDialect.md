[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteDialect

# Class: SqliteDialect

Defined in: [dialect/sqlite/sqlite-dialect.ts:38](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect.ts#L38)

SQLite dialect that uses the [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3) library.

The constructor takes an instance of [SqliteDialectConfig](../interfaces/SqliteDialectConfig.md).

```ts
import Database from 'better-sqlite3'

new SqliteDialect({
  database: new Database('db.sqlite')
})
```

If you want the pool to only be created once it's first used, `database`
can be a function:

```ts
import Database from 'better-sqlite3'

new SqliteDialect({
  database: async () => new Database('db.sqlite')
})
```

## Implements

- [`Dialect`](../interfaces/Dialect.md)

## Constructors

### Constructor

> **new SqliteDialect**(`config`): `SqliteDialect`

Defined in: [dialect/sqlite/sqlite-dialect.ts:41](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect.ts#L41)

#### Parameters

##### config

[`SqliteDialectConfig`](../interfaces/SqliteDialectConfig.md)

#### Returns

`SqliteDialect`

## Methods

### createAdapter()

> **createAdapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [dialect/sqlite/sqlite-dialect.ts:53](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect.ts#L53)

Creates an adapter for the dialect.

#### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createAdapter`](../interfaces/Dialect.md#createadapter)

***

### createDriver()

> **createDriver**(): [`Driver`](../interfaces/Driver.md)

Defined in: [dialect/sqlite/sqlite-dialect.ts:45](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect.ts#L45)

Creates a driver for the dialect.

#### Returns

[`Driver`](../interfaces/Driver.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createDriver`](../interfaces/Dialect.md#createdriver)

***

### createIntrospector()

> **createIntrospector**(`db`): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [dialect/sqlite/sqlite-dialect.ts:57](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect.ts#L57)

Creates a database introspector that can be used to get database metadata
such as the table names and column names of those tables.

`db` never has any plugins installed. It's created using
[Kysely.withoutPlugins](Kysely.md#withoutplugins).

#### Parameters

##### db

[`Kysely`](Kysely.md)\<`any`\>

#### Returns

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createIntrospector`](../interfaces/Dialect.md#createintrospector)

***

### createQueryCompiler()

> **createQueryCompiler**(): [`QueryCompiler`](../interfaces/QueryCompiler.md)

Defined in: [dialect/sqlite/sqlite-dialect.ts:49](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect.ts#L49)

Creates a query compiler for the dialect.

#### Returns

[`QueryCompiler`](../interfaces/QueryCompiler.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createQueryCompiler`](../interfaces/Dialect.md#createquerycompiler)
