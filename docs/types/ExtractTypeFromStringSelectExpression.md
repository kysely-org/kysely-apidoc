[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromStringSelectExpression

# Type Alias: ExtractTypeFromStringSelectExpression\<DB, TB, SE\>

> **ExtractTypeFromStringSelectExpression**\<`DB`, `TB`, `SE`\> = `SE` *extends* `` `${infer SC}.${infer T}.${infer C} as ${string}` `` ? `` `${SC}.${T}` `` *extends* `TB` ? `C` *extends* keyof `DB`\[`` `${SC}.${T}` ``\] ? `DB`\[`` `${SC}.${T}` ``\]\[`C`\] : `never` : `never` : `SE` *extends* `` `${infer T}.${infer C} as ${string}` `` ? `T` *extends* `TB` ? `C` *extends* keyof `DB`\[`T`\] ? `DB`\[`T`\]\[`C`\] : `never` : `never` : `SE` *extends* `` `${infer C} as ${string}` `` ? `C` *extends* [`AnyColumn`](AnyColumn.md)\<`DB`, `TB`\> ? [`ExtractColumnType`](ExtractColumnType.md)\<`DB`, `TB`, `C`\> : `never` : `SE` *extends* `` `${infer SC}.${infer T}.${infer C}` `` ? `` `${SC}.${T}` `` *extends* `TB` ? `C` *extends* keyof `DB`\[`` `${SC}.${T}` ``\] ? `DB`\[`` `${SC}.${T}` ``\]\[`C`\] : `never` : `never` : `SE` *extends* `` `${infer T}.${infer C}` `` ? `T` *extends* `TB` ? `C` *extends* keyof `DB`\[`T`\] ? `DB`\[`T`\]\[`C`\] : `never` : `never` : `SE` *extends* [`AnyColumn`](AnyColumn.md)\<`DB`, `TB`\> ? [`ExtractColumnType`](ExtractColumnType.md)\<`DB`, `TB`, `SE`\> : `never`

Defined in: [parser/select-parser.ts:122](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L122)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### SE

`SE` *extends* `string`
