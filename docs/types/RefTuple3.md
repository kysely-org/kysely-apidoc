[**kysely**](../index.md)

***

[kysely](../modules.md) / RefTuple3

# Type Alias: RefTuple3\<DB, TB, R1, R2, R3\>

> **RefTuple3**\<`DB`, `TB`, `R1`, `R2`, `R3`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\[[`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R1`\>, [`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R2`\>, [`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R3`\>\]\>

Defined in: [parser/tuple-parser.ts:12](https://github.com/kysely-org/kysely/blob/master/src/parser/tuple-parser.ts#L12)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### R1

`R1`

### R2

`R2`

### R3

`R3`
