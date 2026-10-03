[**kysely**](../index.md)

***

[kysely](../modules.md) / ShallowDehydrateValue

# Type Alias: ShallowDehydrateValue\<T\>

> **ShallowDehydrateValue**\<`T`\> = `T` *extends* `null` \| `undefined` ? `T` : `"__kysely_dehydrate__"` *extends* keyof `T` & `object` ? `T` : `T` & `object` *extends* infer U[] ? `ShallowDehydrateValue`\<`U`\>[] \| `Extract`\<`T`, `null` \| `undefined`\> : `Exclude`\<`T`, [`StringsWhenDataTypeNotAvailable`](StringsWhenDataTypeNotAvailable.md) \| [`NumbersWhenDataTypeNotAvailable`](NumbersWhenDataTypeNotAvailable.md)\> \| [`IsNever`](IsNever.md)\<`Extract`\<`T`, [`NumbersWhenDataTypeNotAvailable`](NumbersWhenDataTypeNotAvailable.md)\>\> *extends* `true` ? `never` : `number` \| [`IsNever`](IsNever.md)\<`Extract`\<`T`, [`StringsWhenDataTypeNotAvailable`](StringsWhenDataTypeNotAvailable.md)\>\> *extends* `true` ? `never` : `string`

Defined in: [util/type-utils.ts:238](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L238)

Dehydrates a value when it is not a valid JSON type.

For now, we catch anything in [StringsWhenDataTypeNotAvailable](StringsWhenDataTypeNotAvailable.md) and convert it to `string`,
and anything in [NumbersWhenDataTypeNotAvailable](NumbersWhenDataTypeNotAvailable.md) and convert it to `number`.

## Type Parameters

### T

`T`
