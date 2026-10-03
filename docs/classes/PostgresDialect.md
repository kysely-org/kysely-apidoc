[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresDialect

# Class: PostgresDialect

Defined in: [dialect/postgres/postgres-dialect.ts:43](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect.ts#L43)

PostgreSQL dialect that uses the [pg](https://node-postgres.com/) library.

The constructor takes an instance of [PostgresDialectConfig](../interfaces/PostgresDialectConfig.md).

```ts
import { Pool } from 'pg'

new PostgresDialect({
  pool: new Pool({
    database: 'some_db',
    host: 'localhost',
  })
})
```

If you want the pool to only be created once it's first used, `pool`
can be a function:

```ts
import { Pool } from 'pg'

new PostgresDialect({
  pool: async () => new Pool({
    database: 'some_db',
    host: 'localhost',
  })
})
```

## Implements

- [`Dialect`](../interfaces/Dialect.md)

## Constructors

### Constructor

> **new PostgresDialect**(`config`): `PostgresDialect`

Defined in: [dialect/postgres/postgres-dialect.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect.ts#L46)

#### Parameters

##### config

[`PostgresDialectConfig`](../interfaces/PostgresDialectConfig.md)

#### Returns

`PostgresDialect`

## Methods

### createAdapter()

> **createAdapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [dialect/postgres/postgres-dialect.ts:58](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect.ts#L58)

Creates an adapter for the dialect.

#### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createAdapter`](../interfaces/Dialect.md#createadapter)

***

### createDriver()

> **createDriver**(): [`Driver`](../interfaces/Driver.md)

Defined in: [dialect/postgres/postgres-dialect.ts:50](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect.ts#L50)

Creates a driver for the dialect.

#### Returns

[`Driver`](../interfaces/Driver.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createDriver`](../interfaces/Dialect.md#createdriver)

***

### createIntrospector()

> **createIntrospector**(`db`): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [dialect/postgres/postgres-dialect.ts:62](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect.ts#L62)

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

Defined in: [dialect/postgres/postgres-dialect.ts:54](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect.ts#L54)

Creates a query compiler for the dialect.

#### Returns

[`QueryCompiler`](../interfaces/QueryCompiler.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createQueryCompiler`](../interfaces/Dialect.md#createquerycompiler)
