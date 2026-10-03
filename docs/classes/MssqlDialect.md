[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlDialect

# Class: MssqlDialect

Defined in: [dialect/mssql/mssql-dialect.ts:52](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect.ts#L52)

MS SQL Server dialect that uses the [tedious](https://tediousjs.github.io/tedious)
library.

The constructor takes an instance of [MssqlDialectConfig](../interfaces/MssqlDialectConfig.md).

```ts
import * as Tedious from 'tedious'
import * as Tarn from 'tarn'

const dialect = new MssqlDialect({
  tarn: {
    ...Tarn,
    options: {
      min: 0,
      max: 10,
    },
  },
  tedious: {
    ...Tedious,
    connectionFactory: () => new Tedious.Connection({
      authentication: {
        options: {
          password: 'password',
          userName: 'username',
        },
        type: 'default',
      },
      options: {
        database: 'some_db',
        port: 1433,
        trustServerCertificate: true,
      },
      server: 'localhost',
    }),
  },
})
```

## Implements

- [`Dialect`](../interfaces/Dialect.md)

## Constructors

### Constructor

> **new MssqlDialect**(`config`): `MssqlDialect`

Defined in: [dialect/mssql/mssql-dialect.ts:55](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect.ts#L55)

#### Parameters

##### config

[`MssqlDialectConfig`](../interfaces/MssqlDialectConfig.md)

#### Returns

`MssqlDialect`

## Methods

### createAdapter()

> **createAdapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [dialect/mssql/mssql-dialect.ts:67](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect.ts#L67)

Creates an adapter for the dialect.

#### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createAdapter`](../interfaces/Dialect.md#createadapter)

***

### createDriver()

> **createDriver**(): [`Driver`](../interfaces/Driver.md)

Defined in: [dialect/mssql/mssql-dialect.ts:59](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect.ts#L59)

Creates a driver for the dialect.

#### Returns

[`Driver`](../interfaces/Driver.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createDriver`](../interfaces/Dialect.md#createdriver)

***

### createIntrospector()

> **createIntrospector**(`db`): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [dialect/mssql/mssql-dialect.ts:71](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect.ts#L71)

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

Defined in: [dialect/mssql/mssql-dialect.ts:63](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect.ts#L63)

Creates a query compiler for the dialect.

#### Returns

[`QueryCompiler`](../interfaces/QueryCompiler.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createQueryCompiler`](../interfaces/Dialect.md#createquerycompiler)
