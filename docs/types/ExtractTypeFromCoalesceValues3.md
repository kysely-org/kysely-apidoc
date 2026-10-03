[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromCoalesceValues3

# Type Alias: ExtractTypeFromCoalesceValues3\<V1, V2, V3\>

> **ExtractTypeFromCoalesceValues3**\<`V1`, `V2`, `V3`\> = `null` *extends* `V1` ? `null` *extends* `V2` ? `null` *extends* `V3` ? `V1` \| `V2` \| `V3` : [`NotNull`](NotNull-1.md)\<`V1` \| `V2` \| `V3`\> : [`NotNull`](NotNull-1.md)\<`V1` \| `V2`\> : [`NotNull`](NotNull-1.md)\<`V1`\>

Defined in: [parser/coalesce-parser.ts:37](https://github.com/kysely-org/kysely/blob/master/src/parser/coalesce-parser.ts#L37)

## Type Parameters

### V1

`V1`

### V2

`V2`

### V3

`V3`
