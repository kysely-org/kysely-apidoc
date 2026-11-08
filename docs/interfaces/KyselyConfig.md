[**kysely**](../index.md)

***

[kysely](../modules.md) / KyselyConfig

# Interface: KyselyConfig

Defined in: [kysely.ts:798](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L798)

## Properties

### dialect

> `readonly` **dialect**: [`Dialect`](Dialect.md)

Defined in: [kysely.ts:799](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L799)

***

### log?

> `readonly` `optional` **log?**: [`LogConfig`](../types/LogConfig.md)

Defined in: [kysely.ts:845](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L845)

A list of log levels to log or a custom logger function.

Currently there's only two levels: `query` and `error`.
This will be expanded based on user feedback later.

### Examples

Setting up built-in logging for preferred log levels:

```ts
import * as Sqlite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new Sqlite(':memory:'),
  }),
  log: ['query', 'error']
})
```

Setting up custom logging:

```ts
import * as Sqlite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new Sqlite(':memory:'),
  }),
  log(event): void {
    if (event.level === 'query') {
      console.log(event.query.sql)
      console.log(event.query.parameters)
    }
  }
})
```

***

### plugins?

> `readonly` `optional` **plugins?**: [`KyselyPlugin`](KyselyPlugin.md)[]

Defined in: [kysely.ts:800](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L800)
