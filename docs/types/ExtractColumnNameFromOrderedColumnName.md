[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractColumnNameFromOrderedColumnName

# Type Alias: ExtractColumnNameFromOrderedColumnName\<C\>

> **ExtractColumnNameFromOrderedColumnName**\<`C`\> = `C` *extends* `` `${infer CL} ${infer O}` `` ? `O` *extends* [`OrderByDirection`](OrderByDirection.md) ? `CL` : `never` : `C`

Defined in: [parser/reference-parser.ts:101](https://github.com/kysely-org/kysely/blob/master/src/parser/reference-parser.ts#L101)

## Type Parameters

### C

`C` *extends* `string`
