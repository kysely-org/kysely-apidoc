[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / RollbackToSavepoint

# Type Alias: RollbackToSavepoint\<S, SN\>

> **RollbackToSavepoint**\<`S`, `SN`\> = `S` *extends* \[`...(infer L)`, infer R\] ? `R` *extends* `SN` ? `S` : `RollbackToSavepoint`\<`L` *extends* `string`[] ? `L` : `never`, `SN`\> : `never`

Defined in: [parser/savepoint-parser.ts:4](https://github.com/kysely-org/kysely/blob/master/src/parser/savepoint-parser.ts#L4)

## Type Parameters

### S

`S` *extends* `string`[]

### SN

`SN` *extends* `S`\[`number`\]
