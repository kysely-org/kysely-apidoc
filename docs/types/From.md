[**kysely**](../index.md)

***

[kysely](../modules.md) / From

# Type Alias: From\<DB, TE\>

> **From**\<`DB`, `TE`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| ExtractAliasFromTableExpression\<DB, TE\>\]: C extends ExtractAliasFromTableExpression\<DB, TE\> ? ExtractRowTypeFromTableExpression\<DB, TE, C\> : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [parser/table-parser.ts:30](https://github.com/kysely-org/kysely/blob/master/src/parser/table-parser.ts#L30)

## Type Parameters

### DB

`DB`

### TE

`TE`
