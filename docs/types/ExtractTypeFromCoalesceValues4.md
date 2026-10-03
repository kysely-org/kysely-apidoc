[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromCoalesceValues4

# Type Alias: ExtractTypeFromCoalesceValues4\<V1, V2, V3, V4\>

> **ExtractTypeFromCoalesceValues4**\<`V1`, `V2`, `V3`, `V4`\> = `null` *extends* `V1` ? `null` *extends* `V2` ? `null` *extends* `V3` ? `null` *extends* `V4` ? `V1` \| `V2` \| `V3` \| `V4` : [`NotNull`](NotNull-1.md)\<`V1` \| `V2` \| `V3` \| `V4`\> : [`NotNull`](NotNull-1.md)\<`V1` \| `V2` \| `V3`\> : [`NotNull`](NotNull-1.md)\<`V1` \| `V2`\> : [`NotNull`](NotNull-1.md)\<`V1`\>

Defined in: [parser/coalesce-parser.ts:59](https://github.com/kysely-org/kysely/blob/master/src/parser/coalesce-parser.ts#L59)

## Type Parameters

### V1

`V1`

### V2

`V2`

### V3

`V3`

### V4

`V4`
