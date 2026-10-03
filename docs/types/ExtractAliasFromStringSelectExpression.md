[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractAliasFromStringSelectExpression

# Type Alias: ExtractAliasFromStringSelectExpression\<SE\>

> **ExtractAliasFromStringSelectExpression**\<`SE`\> = `SE` *extends* `` `${string}.${string}.${string} as ${infer A}` `` ? `A` : `SE` *extends* `` `${string}.${string} as ${infer A}` `` ? `A` : `SE` *extends* `` `${string} as ${infer A}` `` ? `A` : `SE` *extends* `` `${string}.${string}.${infer C}` `` ? `C` : `SE` *extends* `` `${string}.${infer C}` `` ? `C` : `SE`

Defined in: [parser/select-parser.ts:91](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L91)

## Type Parameters

### SE

`SE` *extends* `string`
