[**kysely**](../index.md)

***

[kysely](../modules.md) / Equals

# Type Alias: Equals\<T, U\>

> **Equals**\<`T`, `U`\> = \<`G`\>() => `G` *extends* `T` ? `1` : `2` *extends* \<`G`\>() => `G` *extends* `U` ? `1` : `2` ? `true` : `false`

Defined in: [util/type-utils.ts:146](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L146)

Evaluates to `true` if the types `T` and `U` are equal.

## Type Parameters

### T

`T`

### U

`U`
