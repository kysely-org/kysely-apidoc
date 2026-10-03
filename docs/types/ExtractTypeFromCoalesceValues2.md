[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromCoalesceValues2

# Type Alias: ExtractTypeFromCoalesceValues2\<V1, V2\>

> **ExtractTypeFromCoalesceValues2**\<`V1`, `V2`\> = `null` *extends* `V1` ? `null` *extends* `V2` ? `V1` \| `V2` : [`NotNull`](NotNull-1.md)\<`V1` \| `V2`\> : [`NotNull`](NotNull-1.md)\<`V1`\>

Defined in: [parser/coalesce-parser.ts:19](https://github.com/kysely-org/kysely/blob/master/src/parser/coalesce-parser.ts#L19)

## Type Parameters

### V1

`V1`

### V2

`V2`
