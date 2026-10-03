[**kysely**](../index.md)

***

[kysely](../modules.md) / DynamicTableBuilder

# Class: DynamicTableBuilder\<T\>

Defined in: [dynamic/dynamic-table-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L10)

## Type Parameters

### T

`T` *extends* `string`

## Constructors

### Constructor

> **new DynamicTableBuilder**\<`T`\>(`table`): `DynamicTableBuilder`\<`T`\>

Defined in: [dynamic/dynamic-table-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L17)

#### Parameters

##### table

`T`

#### Returns

`DynamicTableBuilder`\<`T`\>

## Accessors

### table

#### Get Signature

> **get** **table**(): `T`

Defined in: [dynamic/dynamic-table-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L13)

##### Returns

`T`

## Methods

### as()

> **as**\<`A`\>(`alias`): [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`T`, `A`\>

Defined in: [dynamic/dynamic-table-builder.ts:21](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L21)

#### Type Parameters

##### A

`A` *extends* `string`

#### Parameters

##### alias

`A`

#### Returns

[`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`T`, `A`\>
