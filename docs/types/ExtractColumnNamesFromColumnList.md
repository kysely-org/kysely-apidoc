[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractColumnNamesFromColumnList

# Type Alias: ExtractColumnNamesFromColumnList\<R\>

> **ExtractColumnNamesFromColumnList**\<`R`\> = `R` *extends* `` `${infer C}, ${infer RS}` `` ? `C` \| `ExtractColumnNamesFromColumnList`\<`RS`\> : `R`

Defined in: [parser/with-parser.ts:97](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L97)

Parses a string like 'id, first_name' into a type 'id' | 'first_name'

## Type Parameters

### R

`R`
