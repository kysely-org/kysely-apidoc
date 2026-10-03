[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReleaseSavepoint

# Type Alias: ReleaseSavepoint\<S, SN\>

> **ReleaseSavepoint**\<`S`, `SN`\> = `S` *extends* \[`...(infer L)`, infer R\] ? `R` *extends* `SN` ? `L` : `ReleaseSavepoint`\<`L` *extends* `string`[] ? `L` : `never`, `SN`\> : `never`

Defined in: [parser/savepoint-parser.ts:13](https://github.com/kysely-org/kysely/blob/master/src/parser/savepoint-parser.ts#L13)

## Type Parameters

### S

`S` *extends* `string`[]

### SN

`SN` *extends* `S`\[`number`\]
