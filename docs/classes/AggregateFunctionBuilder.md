[**kysely**](../index.md)

***

[kysely](../modules.md) / AggregateFunctionBuilder

# Class: AggregateFunctionBuilder\<DB, TB, O\>

Defined in: [query-builder/aggregate-function-builder.ts:30](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L30)

An expression with an `as` method.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O` = `unknown`

## Implements

- [`OrderByInterface`](../interfaces/OrderByInterface.md)\<`DB`, `TB`, \{ \}\>
- [`AliasableExpression`](../interfaces/AliasableExpression.md)\<`O`\>

## Constructors

### Constructor

> **new AggregateFunctionBuilder**\<`DB`, `TB`, `O`\>(`props`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:35](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L35)

#### Parameters

##### props

[`AggregateFunctionBuilderProps`](../interfaces/AggregateFunctionBuilderProps.md)

#### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/aggregate-function-builder.ts:423](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L423)

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

### $castTo()

> **$castTo**\<`C`\>(): `AggregateFunctionBuilder`\<`DB`, `TB`, `C`\>

Defined in: [query-builder/aggregate-function-builder.ts:433](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L433)

Casts the expression to the given type.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `AggregateFunctionBuilder` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `C`\>

***

### $notNull()

> **$notNull**(): `AggregateFunctionBuilder`\<`DB`, `TB`, `Exclude`\<`O`, `null`\>\>

Defined in: [query-builder/aggregate-function-builder.ts:446](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L446)

Omit null from the expression's type.

This function can be useful in cases where you know an expression can't be
null, but Kysely is unable to infer it.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of `this` with a new output type.

#### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `Exclude`\<`O`, `null`\>\>

***

### as()

> **as**\<`A`\>(`alias`): [`AliasedAggregateFunctionBuilder`](AliasedAggregateFunctionBuilder.md)\<`DB`, `TB`, `O`, `A`\>

Defined in: [query-builder/aggregate-function-builder.ts:69](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L69)

Returns an aliased version of the function.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(
    (eb) => eb.fn.count<number>('id').as('person_count')
  )
  .executeTakeFirstOrThrow()

// `person_count: number` field exists in the result type.
console.log(result.person_count)
```

The generated SQL (PostgreSQL):

```sql
select count("id") as "person_count"
from "person"
```

#### Type Parameters

##### A

`A` *extends* `string`

#### Parameters

##### alias

`A`

#### Returns

[`AliasedAggregateFunctionBuilder`](AliasedAggregateFunctionBuilder.md)\<`DB`, `TB`, `O`, `A`\>

#### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`as`](../interfaces/AliasableExpression.md#as)

***

### clearOrderBy()

> **clearOrderBy**(): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:170](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L170)

Clears the `order by` clause from the query.

See [orderBy](../interfaces/OrderByInterface.md#orderby) for adding an `order by` clause or item to a query.

### Examples

```ts
const query = db
  .selectFrom('person')
  .selectAll()
  .orderBy('id', 'desc')

const results = await query
  .clearOrderBy()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
```

#### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

#### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`clearOrderBy`](../interfaces/OrderByInterface.md#clearorderby)

***

### distinct()

> **distinct**(): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:96](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L96)

Adds a `distinct` clause inside the function.

### Examples

```ts
const result = await db
  .selectFrom('person')
  .select((eb) =>
    eb.fn.count<number>('first_name').distinct().as('first_name_count')
  )
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select count(distinct "first_name") as "first_name_count"
from "person"
```

#### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

***

### filterWhere()

#### Call Signature

> **filterWhere**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:291](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L291)

Adds a `filter` clause with a nested `where` clause after the function.

Similar to [WhereInterface](../interfaces/WhereInterface.md)'s `where` method.

Also see [filterWhereRef](#filterwhereref).

### Examples

Count by gender:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) => [
    eb.fn
      .count<number>('id')
      .filterWhere('gender', '=', 'female')
      .as('female_count'),
    eb.fn
      .count<number>('id')
      .filterWhere('gender', '=', 'male')
      .as('male_count'),
    eb.fn
      .count<number>('id')
      .filterWhere('gender', '=', 'other')
      .as('other_count'),
  ])
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select
  count("id") filter(where "gender" = $1) as "female_count",
  count("id") filter(where "gender" = $2) as "male_count",
  count("id") filter(where "gender" = $3) as "other_count"
from "person"
```

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

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

#### Call Signature

> **filterWhere**\<`E`\>(`expression`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:300](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L300)

Adds a `filter` clause with a nested `where` clause after the function.

Similar to [WhereInterface](../interfaces/WhereInterface.md)'s `where` method.

Also see [filterWhereRef](#filterwhereref).

### Examples

Count by gender:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) => [
    eb.fn
      .count<number>('id')
      .filterWhere('gender', '=', 'female')
      .as('female_count'),
    eb.fn
      .count<number>('id')
      .filterWhere('gender', '=', 'male')
      .as('male_count'),
    eb.fn
      .count<number>('id')
      .filterWhere('gender', '=', 'other')
      .as('other_count'),
  ])
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select
  count("id") filter(where "gender" = $1) as "female_count",
  count("id") filter(where "gender" = $2) as "male_count",
  count("id") filter(where "gender" = $3) as "other_count"
from "person"
```

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

***

### filterWhereRef()

> **filterWhereRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:346](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L346)

Adds a `filter` clause with a nested `where` clause after the function, where
both sides of the operator are references to columns.

Similar to [WhereInterface](../interfaces/WhereInterface.md)'s `whereRef` method.

### Examples

Count people with same first and last names versus general public:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) => [
    eb.fn
      .count<number>('id')
      .filterWhereRef('first_name', '=', 'last_name')
      .as('repeat_name_count'),
    eb.fn.count<number>('id').as('total_count'),
  ])
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select
  count("id") filter(where "first_name" = "last_name") as "repeat_name_count",
  count("id") as "total_count"
from "person"
```

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

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

***

### orderBy()

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers?`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:128](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L128)

Adds an `order by` clause inside the aggregate function.

### Examples

```ts
const result = await db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) =>
    eb.fn.jsonAgg('pet').orderBy('pet.name').as('person_pets')
  )
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select json_agg("pet" order by "pet"."name") as "person_pets"
from "person"
inner join "pet" ON "pet"."owner_id" = "person"."id"
```

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`exprs`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:137](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L137)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2-2.6x more compile-time instantiations compared to multiple chained `orderBy(expr, modifiers?)` calls (in `order by` clauses with reasonable item counts), and has broken autocompletion.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:147](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L147)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2.9x more compile-time instantiations compared to a `orderBy(expr, direction)` call.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:155](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L155)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

Use `orderBy(expr, (ob) => ...)` instead.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

***

### over()

> **over**(`over?`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:405](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L405)

Adds an `over` clause (window functions) after the function.

### Examples

```ts
const result = await db
  .selectFrom('person')
  .select(
    (eb) => eb.fn.avg<number>('age').over().as('average_age')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select avg("age") over() as "average_age"
from "person"
```

Also supports passing a callback that returns an over builder,
allowing to add partition by and sort by clauses inside over.

```ts
const result = await db
  .selectFrom('person')
  .select(
    (eb) => eb.fn.avg<number>('age').over(
      ob => ob.partitionBy('last_name').orderBy('first_name', 'asc')
    ).as('average_age')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select avg("age") over(partition by "last_name" order by "first_name" asc) as "average_age"
from "person"
```

#### Parameters

##### over?

[`OverBuilderCallback`](../types/OverBuilderCallback.md)\<`DB`, `TB`\>

#### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

***

### toOperationNode()

> **toOperationNode**(): [`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

Defined in: [query-builder/aggregate-function-builder.ts:450](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L450)

Creates the OperationNode that describes how to compile this expression into SQL.

### Examples

If you are creating a custom expression, it's often easiest to use the [sql](../variables/sql.md)
template tag to build the node:

```ts
import { type Expression, type OperationNode, sql } from 'kysely'

class SomeExpression<T> implements Expression<T> {
  get expressionType(): T | undefined {
    return undefined
  }

  toOperationNode(): OperationNode {
    return sql`some sql here`.toOperationNode()
  }
}
```

#### Returns

[`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

#### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`toOperationNode`](../interfaces/AliasableExpression.md#tooperationnode)

***

### withinGroupOrderBy()

#### Call Signature

> **withinGroupOrderBy**\<`OE`\>(`expr`, `modifiers?`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:207](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L207)

Adds a `withing group` clause with a nested `order by` clause after the function.

This is only supported by some dialects like PostgreSQL or MS SQL Server.

### Examples

Most frequent person name:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) => [
    eb.fn
      .agg<string>('mode')
      .withinGroupOrderBy('person.first_name')
      .as('most_frequent_name')
  ])
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select mode() within group (order by "person"."first_name") as "most_frequent_name"
from "person"
```

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

#### Call Signature

> **withinGroupOrderBy**\<`OE`\>(`exprs`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:216](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L216)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2-2.6x more compile-time instantiations compared to multiple chained `withinGroupOrderBy(expr, modifiers?)` calls (in `order by` clauses with reasonable item counts), and has broken autocompletion.

#### Call Signature

> **withinGroupOrderBy**\<`OE`\>(`expr`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:226](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L226)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2.9x more compile-time instantiations compared to a `withinGroupOrderBy(expr, direction)` call.

#### Call Signature

> **withinGroupOrderBy**\<`OE`\>(`expr`, `modifiers`): `AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/aggregate-function-builder.ts:234](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L234)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`AggregateFunctionBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

Use `withinGroupOrderBy(expr, (ob) => ...)` instead.
