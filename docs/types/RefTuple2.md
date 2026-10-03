[**kysely**](../index.md)

***

[kysely](../modules.md) / RefTuple2

# Type Alias: RefTuple2\<DB, TB, R1, R2\>

> **RefTuple2**\<`DB`, `TB`, `R1`, `R2`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\[[`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R1`\>, [`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R2`\>\]\>

Defined in: [parser/tuple-parser.ts:5](https://github.com/kysely-org/kysely/blob/master/src/parser/tuple-parser.ts#L5)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### R1

`R1`

### R2

`R2`
