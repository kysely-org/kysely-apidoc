[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / CTEBuilder

# Class: CTEBuilder\<N\>

Defined in: [query-builder/cte-builder.ts:5](https://github.com/kysely-org/kysely/blob/master/src/query-builder/cte-builder.ts#L5)

## Type Parameters

### N

`N` *extends* `string`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new CTEBuilder**\<`N`\>(`props`): `CTEBuilder`\<`N`\>

Defined in: [query-builder/cte-builder.ts:8](https://github.com/kysely-org/kysely/blob/master/src/query-builder/cte-builder.ts#L8)

#### Parameters

##### props

[`CTEBuilderProps`](../interfaces/readonly.CTEBuilderProps.md)

#### Returns

`CTEBuilder`\<`N`\>

## Methods

### materialized()

> **materialized**(): `CTEBuilder`\<`N`\>

Defined in: [query-builder/cte-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/query-builder/cte-builder.ts#L15)

Makes the common table expression materialized.

#### Returns

`CTEBuilder`\<`N`\>

***

### notMaterialized()

> **notMaterialized**(): `CTEBuilder`\<`N`\>

Defined in: [query-builder/cte-builder.ts:27](https://github.com/kysely-org/kysely/blob/master/src/query-builder/cte-builder.ts#L27)

Makes the common table expression not materialized.

#### Returns

`CTEBuilder`\<`N`\>

***

### toOperationNode()

> **toOperationNode**(): [`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

Defined in: [query-builder/cte-builder.ts:36](https://github.com/kysely-org/kysely/blob/master/src/query-builder/cte-builder.ts#L36)

#### Returns

[`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
