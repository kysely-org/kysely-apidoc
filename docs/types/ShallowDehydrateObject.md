[**kysely**](../index.md)

***

[kysely](../modules.md) / ShallowDehydrateObject

# Type Alias: ShallowDehydrateObject\<O\>

> **ShallowDehydrateObject**\<`O`\> = `{ [K in keyof O]: ShallowDehydrateValue<O[K]> }`

Defined in: [util/type-utils.ts:228](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L228)

Dehydrates any root properties of an object that are not valid JSON types.

For now, we catch anything in [StringsWhenDataTypeNotAvailable](StringsWhenDataTypeNotAvailable.md) and convert it to `string`.

## Type Parameters

### O

`O`
