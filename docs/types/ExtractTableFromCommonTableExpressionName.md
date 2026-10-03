[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTableFromCommonTableExpressionName

# Type Alias: ExtractTableFromCommonTableExpressionName\<CN\>

> **ExtractTableFromCommonTableExpressionName**\<`CN`\> = `CN` *extends* `` `${infer TB}(${string})` `` ? `TB` : `CN`

Defined in: [parser/with-parser.ts:78](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L78)

Extracts 'person' from a string like 'person(id, first_name)'.

## Type Parameters

### CN

`CN`
