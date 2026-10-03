[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractRowFromCommonTableExpressionName

# Type Alias: ExtractRowFromCommonTableExpressionName\<CN\>

> **ExtractRowFromCommonTableExpressionName**\<`CN`\> = `CN` *extends* `` `${string}(${infer CL})` `` ? `{ [C in ExtractColumnNamesFromColumnList<CL>]: any }` : [`ShallowRecord`](ShallowRecord.md)\<`string`, `any`\>

Defined in: [parser/with-parser.ts:89](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L89)

Parses a string like 'person(id, first_name)' into a type:

{
  id: any,
  first_name: any
}

## Type Parameters

### CN

`CN`
