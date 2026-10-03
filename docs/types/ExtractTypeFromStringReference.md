[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromStringReference

# Type Alias: ExtractTypeFromStringReference\<DB, TB, RE, DV\>

> **ExtractTypeFromStringReference**\<`DB`, `TB`, `RE`, `DV`\> = `RE` *extends* `` `${infer SC}.${infer T}.${infer C}` `` ? `` `${SC}.${T}` `` *extends* `TB` ? `C` *extends* keyof `DB`\[`` `${SC}.${T}` ``\] ? `DB`\[`` `${SC}.${T}` ``\]\[`C`\] : `never` : `never` : `RE` *extends* `` `${infer T}.${infer C}` `` ? `T` *extends* `TB` ? `C` *extends* keyof `DB`\[`T`\] ? `DB`\[`T`\]\[`C`\] : `never` : `never` : `RE` *extends* [`AnyColumn`](AnyColumn.md)\<`DB`, `TB`\> ? [`ExtractColumnType`](ExtractColumnType.md)\<`DB`, `TB`, `RE`\> : `DV`

Defined in: [parser/reference-parser.ts:73](https://github.com/kysely-org/kysely/blob/master/src/parser/reference-parser.ts#L73)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### RE

`RE` *extends* `string`

### DV

`DV` = `unknown`
