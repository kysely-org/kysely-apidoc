[**kysely**](../index.md)

***

[kysely](../modules.md) / SimplifyDeep

# Type Alias: SimplifyDeep\<T\>

> **SimplifyDeep**\<`T`\> = `T` *extends* `object` ? `T` *extends* `Date` \| `RegExp` \| `Map`\<`any`, `any`\> \| `Set`\<`any`\> ? `T` : [`DrainOuterGeneric`](DrainOuterGeneric.md)\<`{ [K in keyof T]: SimplifyDeep<T[K]> }` & `object`\> : `T`

Defined in: [util/type-utils.ts:165](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L165)

## Type Parameters

### T

`T`
