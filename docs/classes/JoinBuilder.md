[**kysely**](../index.md)

***

[kysely](../modules.md) / JoinBuilder

# Class: JoinBuilder\<DB, TB\>

Defined in: [query-builder/join-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L15)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new JoinBuilder**\<`DB`, `TB`\>(`props`): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:21](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L21)

#### Parameters

##### props

[`JoinBuilderProps`](../interfaces/JoinBuilderProps.md)

#### Returns

`JoinBuilder`\<`DB`, `TB`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/join-builder.ts:87](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L87)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### on()

#### Call Signature

> **on**\<`RE`\>(`lhs`, `op`, `rhs`): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:31](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L31)

Just like [WhereInterface.where](../interfaces/WhereInterface.md#where) but adds an item to the join's
`on` clause instead.

See [WhereInterface.where](../interfaces/WhereInterface.md#where) for documentation and examples.

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### lhs

`RE`

###### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

###### rhs

[`OperandValueExpressionOrList`](../types/OperandValueExpressionOrList.md)\<`DB`, `TB`, `RE`\>

##### Returns

`JoinBuilder`\<`DB`, `TB`\>

#### Call Signature

> **on**\<`E`\>(`expression`): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:37](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L37)

Just like [WhereInterface.where](../interfaces/WhereInterface.md#where) but adds an item to the join's
`on` clause instead.

See [WhereInterface.where](../interfaces/WhereInterface.md#where) for documentation and examples.

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`JoinBuilder`\<`DB`, `TB`\>

***

### onRef()

> **onRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:57](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L57)

Just like [WhereInterface.whereRef](../interfaces/WhereInterface.md#whereref) but adds an item to the join's
`on` clause instead.

See [WhereInterface.whereRef](../interfaces/WhereInterface.md#whereref) for documentation and examples.

#### Type Parameters

##### LRE

`LRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### RRE

`RRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### lhs

`LRE`

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RRE`

#### Returns

`JoinBuilder`\<`DB`, `TB`\>

***

### onTrue()

> **onTrue**(): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:73](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L73)

Adds `on true`.

#### Returns

`JoinBuilder`\<`DB`, `TB`\>

***

### toOperationNode()

> **toOperationNode**(): [`JoinNode`](../interfaces/JoinNode.md)

Defined in: [query-builder/join-builder.ts:91](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L91)

#### Returns

[`JoinNode`](../interfaces/JoinNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
