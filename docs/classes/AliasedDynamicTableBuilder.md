[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedDynamicTableBuilder

# Class: AliasedDynamicTableBuilder\<T, A\>

Defined in: [dynamic/dynamic-table-builder.ts:26](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L26)

## Type Parameters

### T

`T` *extends* `string`

### A

`A` *extends* `string`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new AliasedDynamicTableBuilder**\<`T`, `A`\>(`table`, `alias`): `AliasedDynamicTableBuilder`\<`T`, `A`\>

Defined in: [dynamic/dynamic-table-builder.ts:41](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L41)

#### Parameters

##### table

`T`

##### alias

`A`

#### Returns

`AliasedDynamicTableBuilder`\<`T`, `A`\>

## Accessors

### alias

#### Get Signature

> **get** **alias**(): `A`

Defined in: [dynamic/dynamic-table-builder.ts:37](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L37)

##### Returns

`A`

***

### table

#### Get Signature

> **get** **table**(): `T`

Defined in: [dynamic/dynamic-table-builder.ts:33](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L33)

##### Returns

`T`

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](../interfaces/AliasNode.md)

Defined in: [dynamic/dynamic-table-builder.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-table-builder.ts#L46)

#### Returns

[`AliasNode`](../interfaces/AliasNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
