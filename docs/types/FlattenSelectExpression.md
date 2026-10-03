[**kysely**](../index.md)

***

[kysely](../modules.md) / FlattenSelectExpression

# Type Alias: FlattenSelectExpression\<SE\>

> **FlattenSelectExpression**\<`SE`\> = `SE` *extends* [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<infer RA\> ? `{ [R in RA]: DynamicReferenceBuilder<R> }`\[`RA`\] : `SE`

Defined in: [parser/select-parser.ts:76](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L76)

## Type Parameters

### SE

`SE`
