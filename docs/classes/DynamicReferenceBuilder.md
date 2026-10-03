[**kysely**](../index.md)

***

[kysely](../modules.md) / DynamicReferenceBuilder

# Class: DynamicReferenceBuilder\<R\>

Defined in: [dynamic/dynamic-reference-builder.ts:9](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-reference-builder.ts#L9)

## Type Parameters

### R

`R` *extends* `string` = `never`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new DynamicReferenceBuilder**\<`R`\>(`reference`): `DynamicReferenceBuilder`\<`R`\>

Defined in: [dynamic/dynamic-reference-builder.ts:30](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-reference-builder.ts#L30)

#### Parameters

##### reference

`string`

#### Returns

`DynamicReferenceBuilder`\<`R`\>

## Accessors

### dynamicReference

#### Get Signature

> **get** **dynamicReference**(): `string`

Defined in: [dynamic/dynamic-reference-builder.ts:14](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-reference-builder.ts#L14)

##### Returns

`string`

## Methods

### toOperationNode()

> **toOperationNode**(): [`SimpleReferenceExpressionNode`](../types/SimpleReferenceExpressionNode.md)

Defined in: [dynamic/dynamic-reference-builder.ts:34](https://github.com/kysely-org/kysely/blob/master/src/dynamic/dynamic-reference-builder.ts#L34)

#### Returns

[`SimpleReferenceExpressionNode`](../types/SimpleReferenceExpressionNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
