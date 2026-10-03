[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyQueryResult

# Interface: ReadonlyQueryResult\<R\>

Defined in: [readonly/readonly-database-connection.ts:7](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-database-connection.ts#L7)

Similar to [QueryResult](QueryResult.md) but for read-only queries.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Pick`\<[`QueryResult`](QueryResult.md)\<`R`\>, `"rows"`\>

## Type Parameters

### R

`R`

## Properties

### ~~insertId?~~

> `readonly` `optional` **insertId?**: [`KyselyTypeError`](KyselyTypeError.md)\<`"read-only queries do not insert anything."`\>

Defined in: [readonly/readonly-database-connection.ts:21](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-database-connection.ts#L21)

#### Deprecated

read-only queries do not insert anything.

***

### ~~numAffectedRows?~~

> `readonly` `optional` **numAffectedRows?**: [`KyselyTypeError`](KyselyTypeError.md)\<`"read-only queries do not affect any rows."`\>

Defined in: [readonly/readonly-database-connection.ts:11](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-database-connection.ts#L11)

#### Deprecated

read-only queries do not affect any rows.

***

### ~~numChangedRows?~~

> `readonly` `optional` **numChangedRows?**: [`KyselyTypeError`](KyselyTypeError.md)\<`"read-only queries do not change any rows."`\>

Defined in: [readonly/readonly-database-connection.ts:16](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-database-connection.ts#L16)

#### Deprecated

read-only queries do not change any rows.

***

### rows

> `readonly` **rows**: `R`[]

Defined in: [driver/database-connection.ts:71](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L71)

The rows returned by the query. This is always defined and is
empty if the query returned no rows.

#### Inherited from

`Pick.rows`
