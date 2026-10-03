[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlDialectConfig

# Interface: MssqlDialectConfig

Defined in: [dialect/mssql/mssql-dialect-config.ts:1](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L1)

## Properties

### resetConnectionsOnRelease?

> `optional` **resetConnectionsOnRelease?**: `boolean`

Defined in: [dialect/mssql/mssql-dialect-config.ts:8](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L8)

When `true`, connections are reset to their initial states when released
back to the pool, resulting in additional requests to the database.

Defaults to `false`.

***

### tarn

> **tarn**: [`Tarn`](Tarn.md)

Defined in: [dialect/mssql/mssql-dialect-config.ts:37](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L37)

This dialect uses the `tarn` package to manage the connection pool to your
database. To use it as a peer dependency and not bundle it with Kysely's code,
you need to pass the `tarn` package itself. You also need to pass some pool options
(excluding `create`, `destroy` and `validate` functions which are controlled by this dialect),
`min` & `max` connections at the very least.

### Examples

```ts
import { MssqlDialect } from 'kysely'
import * as Tarn from 'tarn'
import * as Tedious from 'tedious'

const dialect = new MssqlDialect({
  tarn: { ...Tarn, options: { max: 10, min: 0 } },
  tedious: {
    ...Tedious,
    connectionFactory: () => new Tedious.Connection({
      // ...
      server: 'localhost',
      // ...
    }),
  }
})
```

***

### tedious

> **tedious**: [`Tedious`](Tedious.md)

Defined in: [dialect/mssql/mssql-dialect-config.ts:65](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L65)

This dialect uses the `tedious` package to communicate with your MS SQL Server
database. To use it as a peer dependency and not bundle it with Kysely's code,
you need to pass the `tedious` package itself. You also need to pass a factory
function that creates new `tedious` `Connection` instances on demand.

### Examples

```ts
import { MssqlDialect } from 'kysely'
import * as Tarn from 'tarn'
import * as Tedious from 'tedious'

const dialect = new MssqlDialect({
  tarn: { ...Tarn, options: { max: 10, min: 0 } },
  tedious: {
    ...Tedious,
    connectionFactory: () => new Tedious.Connection({
      // ...
      server: 'localhost',
      // ...
    }),
  }
})
```

***

### validateConnections?

> `optional` **validateConnections?**: `boolean`

Defined in: [dialect/mssql/mssql-dialect-config.ts:73](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-dialect-config.ts#L73)

When `true`, connections are validated before being acquired from the pool,
resulting in additional requests to the database.

Defaults to `true`.
