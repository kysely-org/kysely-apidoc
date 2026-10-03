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

Defined in: [query-builder/join-builder.ts:86](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L86)

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

> **on**(`expression`): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:37](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L37)

Just like [WhereInterface.where](../interfaces/WhereInterface.md#where) but adds an item to the join's
`on` clause instead.

See [WhereInterface.where](../interfaces/WhereInterface.md#where) for documentation and examples.

##### Parameters

###### expression

[`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Returns

`JoinBuilder`\<`DB`, `TB`\>

***

### onRef()

> **onRef**(`lhs`, `op`, `rhs`): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:55](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L55)

Just like [WhereInterface.whereRef](../interfaces/WhereInterface.md#whereref) but adds an item to the join's
`on` clause instead.

See [WhereInterface.whereRef](../interfaces/WhereInterface.md#whereref) for documentation and examples.

#### Parameters

##### lhs

[`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

[`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Returns

`JoinBuilder`\<`DB`, `TB`\>

***

### onTrue()

> **onTrue**(): `JoinBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/join-builder.ts:72](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L72)

Adds `on true`.

#### Returns

`JoinBuilder`\<`DB`, `TB`\>

***

### toOperationNode()

> **toOperationNode**(): [`JoinNode`](../interfaces/JoinNode.md)

Defined in: [query-builder/join-builder.ts:90](https://github.com/kysely-org/kysely/blob/master/src/query-builder/join-builder.ts#L90)

#### Returns

[`JoinNode`](../interfaces/JoinNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
