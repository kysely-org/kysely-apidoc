[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlDialect

# Class: MysqlDialect

Defined in: [dialect/mysql/mysql-dialect.ts:43](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect.ts#L43)

MySQL dialect that uses the [mysql2](https://github.com/sidorares/node-mysql2#readme) library.

The constructor takes an instance of [MysqlDialectConfig](../interfaces/MysqlDialectConfig.md).

```ts
import { createPool } from 'mysql2'

new MysqlDialect({
  pool: createPool({
    database: 'some_db',
    host: 'localhost',
  })
})
```

If you want the pool to only be created once it's first used, `pool`
can be a function:

```ts
import { createPool } from 'mysql2'

new MysqlDialect({
  pool: async () => createPool({
    database: 'some_db',
    host: 'localhost',
  })
})
```

## Implements

- [`Dialect`](../interfaces/Dialect.md)

## Constructors

### Constructor

> **new MysqlDialect**(`config`): `MysqlDialect`

Defined in: [dialect/mysql/mysql-dialect.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect.ts#L46)

#### Parameters

##### config

[`MysqlDialectConfig`](../interfaces/MysqlDialectConfig.md)

#### Returns

`MysqlDialect`

## Methods

### createAdapter()

> **createAdapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [dialect/mysql/mysql-dialect.ts:58](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect.ts#L58)

Creates an adapter for the dialect.

#### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createAdapter`](../interfaces/Dialect.md#createadapter)

***

### createDriver()

> **createDriver**(): [`Driver`](../interfaces/Driver.md)

Defined in: [dialect/mysql/mysql-dialect.ts:50](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect.ts#L50)

Creates a driver for the dialect.

#### Returns

[`Driver`](../interfaces/Driver.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createDriver`](../interfaces/Dialect.md#createdriver)

***

### createIntrospector()

> **createIntrospector**(`db`): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [dialect/mysql/mysql-dialect.ts:62](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect.ts#L62)

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

Defined in: [dialect/mysql/mysql-dialect.ts:54](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect.ts#L54)

Creates a query compiler for the dialect.

#### Returns

[`QueryCompiler`](../interfaces/QueryCompiler.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createQueryCompiler`](../interfaces/Dialect.md#createquerycompiler)
