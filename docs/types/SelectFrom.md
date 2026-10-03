[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectFrom

# Type Alias: SelectFrom\<DB, TB, TE\>

> **SelectFrom**\<`DB`, `TB`, `TE`\> = \[`TE`\] *extends* \[keyof `DB`\] ? [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `TB` \| [`ExtractTableAlias`](ExtractTableAlias.md)\<`DB`, `TE`\>, \{ \}\> : \[`TE`\] *extends* \[`` `${infer T} as ${infer A}` ``\] ? `T` *extends* keyof `DB` ? [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `DB`\[`T`\]\>, `TB` \| `A`, \{ \}\> : `never` : `TE` *extends* `ReadonlyArray`\<infer T\> ? [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<[`From`](From.md)\<`DB`, `T`\>, [`FromTables`](FromTables.md)\<`DB`, `TB`, `T`\>, \{ \}\> : [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<[`From`](From.md)\<`DB`, `TE`\>, [`FromTables`](FromTables.md)\<`DB`, `TB`, `TE`\>, \{ \}\>

Defined in: [parser/select-from-parser.ts:10](https://github.com/kysely-org/kysely/blob/master/src/parser/select-from-parser.ts#L10)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### TE

`TE` *extends* [`TableExpressionOrList`](TableExpressionOrList.md)\<`DB`, `TB`\>
