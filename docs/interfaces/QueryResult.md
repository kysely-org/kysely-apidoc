[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryResult

# Interface: QueryResult\<O\>

Defined in: [driver/database-connection.ts:45](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L45)

## Type Parameters

### O

`O`

## Properties

### insertId?

> `readonly` `optional` **insertId?**: `bigint`

Defined in: [driver/database-connection.ts:65](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L65)

This is defined for insert queries on dialects that return
the auto incrementing primary key from an insert.

***

### numAffectedRows?

> `readonly` `optional` **numAffectedRows?**: `bigint`

Defined in: [driver/database-connection.ts:50](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L50)

This is defined for insert, update, delete and merge queries and contains
the number of rows the query inserted/updated/deleted.

***

### numChangedRows?

> `readonly` `optional` **numChangedRows?**: `bigint`

Defined in: [driver/database-connection.ts:59](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L59)

This is defined for update queries and contains the number of rows
the query changed.

This is **optional** and only provided in dialects such as MySQL.
You would probably use [numAffectedRows](#numaffectedrows) in most cases.

***

### rows

> `readonly` **rows**: `O`[]

Defined in: [driver/database-connection.ts:71](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L71)

The rows returned by the query. This is always defined and is
empty if the query returned no rows.
