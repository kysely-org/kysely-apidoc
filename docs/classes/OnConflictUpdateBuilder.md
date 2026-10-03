[**kysely**](../index.md)

***

[kysely](../modules.md) / OnConflictUpdateBuilder

# Class: OnConflictUpdateBuilder\<DB, TB\>

Defined in: [query-builder/on-conflict-builder.ts:306](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L306)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

## Implements

- [`WhereInterface`](../interfaces/WhereInterface.md)\<`DB`, `TB`\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new OnConflictUpdateBuilder**\<`DB`, `TB`\>(`props`): `OnConflictUpdateBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:311](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L311)

#### Parameters

##### props

[`OnConflictBuilderProps`](../interfaces/OnConflictBuilderProps.md)

#### Returns

`OnConflictUpdateBuilder`\<`DB`, `TB`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/on-conflict-builder.ts:378](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L378)

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

### clearWhere()

> **clearWhere**(): `OnConflictUpdateBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:365](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L365)

Clears all where expressions from the query.

### Examples

```ts
db.selectFrom('person')
  .selectAll()
  .where('id','=',42)
  .clearWhere()
```

The generated SQL(PostgreSQL):

```sql
select * from "person"
```

#### Returns

`OnConflictUpdateBuilder`\<`DB`, `TB`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`clearWhere`](../interfaces/WhereInterface.md#clearwhere)

***

### toOperationNode()

> **toOperationNode**(): [`OnConflictNode`](../interfaces/OnConflictNode.md)

Defined in: [query-builder/on-conflict-builder.ts:382](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L382)

#### Returns

[`OnConflictNode`](../interfaces/OnConflictNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### where()

#### Call Signature

> **where**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `OnConflictUpdateBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:320](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L320)

Specify a where condition for the update operation.

See [WhereInterface.where](../interfaces/WhereInterface.md#where) for more info.

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

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

`OnConflictUpdateBuilder`\<`DB`, `TB`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

#### Call Signature

> **where**\<`E`\>(`expression`): `OnConflictUpdateBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:329](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L329)

Specify a where condition for the update operation.

See [WhereInterface.where](../interfaces/WhereInterface.md#where) for more info.

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`OnConflictUpdateBuilder`\<`DB`, `TB`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

***

### whereRef()

> **whereRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `OnConflictUpdateBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:348](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L348)

Specify a where condition for the update operation.

See [WhereInterface.whereRef](../interfaces/WhereInterface.md#whereref) for more info.

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

`OnConflictUpdateBuilder`\<`DB`, `TB`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`whereRef`](../interfaces/WhereInterface.md#whereref)
