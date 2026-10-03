[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromCoalesce3

# Type Alias: ExtractTypeFromCoalesce3\<DB, TB, R1, R2, R3\>

> **ExtractTypeFromCoalesce3**\<`DB`, `TB`, `R1`, `R2`, `R3`\> = [`ExtractTypeFromCoalesceValues3`](ExtractTypeFromCoalesceValues3.md)\<[`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R1`\>, [`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R2`\>, [`ExtractTypeFromReferenceExpression`](ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `R3`\>\>

Defined in: [parser/coalesce-parser.ts:25](https://github.com/kysely-org/kysely/blob/master/src/parser/coalesce-parser.ts#L25)

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
