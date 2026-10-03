[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateTable

# Type Alias: UpdateTable\<DB, TE\>

> **UpdateTable**\<`DB`, `TE`\> = \[`TE`\] *extends* \[keyof `DB`\] ? [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<`DB`, [`ExtractTableAlias`](ExtractTableAlias.md)\<`DB`, `TE`\>, [`ExtractTableAlias`](ExtractTableAlias.md)\<`DB`, `TE`\>, [`UpdateResult`](../classes/UpdateResult.md)\> : \[`TE`\] *extends* \[`` `${infer T} as ${infer A}` ``\] ? `T` *extends* keyof `DB` ? [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `DB`\[`T`\]\>, `A`, `A`, [`UpdateResult`](../classes/UpdateResult.md)\> : `never` : `TE` *extends* `ReadonlyArray`\<infer T\> ? [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<[`From`](From.md)\<`DB`, `T`\>, [`FromTables`](FromTables.md)\<`DB`, `never`, `T`\>, [`FromTables`](FromTables.md)\<`DB`, `never`, `T`\>, [`UpdateResult`](../classes/UpdateResult.md)\> : [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<[`From`](From.md)\<`DB`, `TE`\>, [`FromTables`](FromTables.md)\<`DB`, `never`, `TE`\>, [`FromTables`](FromTables.md)\<`DB`, `never`, `TE`\>, [`UpdateResult`](../classes/UpdateResult.md)\>

Defined in: [parser/update-parser.ts:11](https://github.com/kysely-org/kysely/blob/master/src/parser/update-parser.ts#L11)

## Type Parameters

### DB

`DB`

### TE

`TE` *extends* [`TableExpressionOrList`](TableExpressionOrList.md)\<`DB`, `never`\>
