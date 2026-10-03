[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresQueryResult

# Interface: PostgresQueryResult\<R\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:148](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L148)

This interface is the subset of pg driver's `Result` shape that kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/result

## Type Parameters

### R

`R`

## Properties

### command

> **command**: `"UPDATE"` \| `"DELETE"` \| `"INSERT"` \| `"SELECT"` \| `"MERGE"`

Defined in: [dialect/postgres/postgres-dialect-config.ts:149](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L149)

***

### rowCount

> **rowCount**: `number`

Defined in: [dialect/postgres/postgres-dialect-config.ts:150](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L150)

***

### rows

> **rows**: `R`[]

Defined in: [dialect/postgres/postgres-dialect-config.ts:151](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L151)
