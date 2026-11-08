[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresQueryResult

# Interface: PostgresQueryResult\<R\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:158](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L158)

This interface is the subset of pg driver's `Result` shape that kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/result

## Type Parameters

### R

`R`

## Properties

### command

> **command**: `"UPDATE"` \| `"DELETE"` \| `"INSERT"` \| `"SELECT"` \| `"MERGE"` \| `"COMMIT"` \| `"ROLLBACK"`

Defined in: [dialect/postgres/postgres-dialect-config.ts:159](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L159)

***

### rowCount

> **rowCount**: `number`

Defined in: [dialect/postgres/postgres-dialect-config.ts:161](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L161)

***

### rows

> **rows**: `R`[]

Defined in: [dialect/postgres/postgres-dialect-config.ts:162](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L162)
