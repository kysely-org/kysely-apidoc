[**kysely**](../index.md)

***

[kysely](../modules.md) / InsertObject

# Type Alias: InsertObject\<DB, TB\>

> **InsertObject**\<`DB`, `TB`\> = `{ [C in NonNullableInsertKeys<DB[TB]>]: ValueExpression<DB, TB, InsertType<DB[TB][C]>> }` & `{ [C in NullableInsertKeys<DB[TB]>]?: ValueExpression<DB, TB, InsertType<DB[TB][C]>> }`

Defined in: [parser/insert-values-parser.ts:24](https://github.com/kysely-org/kysely/blob/master/src/parser/insert-values-parser.ts#L24)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
