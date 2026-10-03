[**kysely**](../index.md)

***

[kysely](../modules.md) / HavingInterface

# Interface: HavingInterface\<DB, TB\>

Defined in: [query-builder/having-interface.ts:7](https://github.com/kysely-org/kysely/blob/master/src/query-builder/having-interface.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`SelectQueryBuilder`](SelectQueryBuilder.md)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

## Methods

### having()

#### Call Signature

> **having**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `HavingInterface`\<`DB`, `TB`\>

Defined in: [query-builder/having-interface.ts:12](https://github.com/kysely-org/kysely/blob/master/src/query-builder/having-interface.ts#L12)

Just like [where](WhereInterface.md#where) but adds a `having` statement
instead of a `where` statement.

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### VE

`VE` *extends* `any`

##### Parameters

###### lhs

`RE`

###### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

###### rhs

`VE`

##### Returns

`HavingInterface`\<`DB`, `TB`\>

#### Call Signature

> **having**\<`E`\>(`expression`): `HavingInterface`\<`DB`, `TB`\>

Defined in: [query-builder/having-interface.ts:21](https://github.com/kysely-org/kysely/blob/master/src/query-builder/having-interface.ts#L21)

##### Type Parameters

###### E

`E`

##### Parameters

###### expression

`E`

##### Returns

`HavingInterface`\<`DB`, `TB`\>

***

### havingRef()

> **havingRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `HavingInterface`\<`DB`, `TB`\>

Defined in: [query-builder/having-interface.ts:27](https://github.com/kysely-org/kysely/blob/master/src/query-builder/having-interface.ts#L27)

Just like [whereRef](WhereInterface.md#whereref) but adds a `having` statement
instead of a `where` statement.

#### Type Parameters

##### LRE

`LRE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### RRE

`RRE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### lhs

`LRE`

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RRE`

#### Returns

`HavingInterface`\<`DB`, `TB`\>
