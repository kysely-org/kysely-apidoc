[**kysely**](../index.md)

***

[kysely](../modules.md) / DeleteFrom

# Type Alias: DeleteFrom\<DB, TE\>

> **DeleteFrom**\<`DB`, `TE`\> = \[`TE`\] *extends* \[keyof `DB`\] ? [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<`DB`, [`ExtractTableAlias`](ExtractTableAlias.md)\<`DB`, `TE`\>, [`DeleteResult`](../classes/DeleteResult.md)\> : \[`TE`\] *extends* \[`` `${infer T} as ${infer A}` ``\] ? `T` *extends* keyof `DB` ? [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `DB`\[`T`\]\>, `A`, [`DeleteResult`](../classes/DeleteResult.md)\> : `never` : `TE` *extends* `ReadonlyArray`\<infer T\> ? [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<[`From`](From.md)\<`DB`, `T`\>, [`FromTables`](FromTables.md)\<`DB`, `never`, `T`\>, [`DeleteResult`](../classes/DeleteResult.md)\> : [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<[`From`](From.md)\<`DB`, `TE`\>, [`FromTables`](FromTables.md)\<`DB`, `never`, `TE`\>, [`DeleteResult`](../classes/DeleteResult.md)\>

Defined in: [parser/delete-from-parser.ts:11](https://github.com/kysely-org/kysely/blob/master/src/parser/delete-from-parser.ts#L11)

## Type Parameters

### DB

`DB`

### TE

`TE` *extends* [`TableExpressionOrList`](TableExpressionOrList.md)\<`DB`, `never`\>
