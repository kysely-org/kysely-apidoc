[**kysely**](../index.md)

***

[kysely](../modules.md) / OrWrapper

# Class: OrWrapper\<DB, TB, T\>

Defined in: [expression/expression-wrapper.ts:304](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L304)

An expression with an `as` method.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### T

`T` *extends* [`SqlBool`](../types/SqlBool.md)

## Implements

- [`AliasableExpression`](../interfaces/AliasableExpression.md)\<`T`\>

## Constructors

### Constructor

> **new OrWrapper**\<`DB`, `TB`, `T`\>(`node`): `OrWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:311](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L311)

#### Parameters

##### node

[`OrNode`](../interfaces/OrNode.md)

#### Returns

`OrWrapper`\<`DB`, `TB`, `T`\>

## Methods

### $castTo()

> **$castTo**\<`C`\>(): `OrWrapper`\<`DB`, `TB`, `C`\>

Defined in: [expression/expression-wrapper.ts:379](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L379)

Change the output type of the expression.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `OrWrapper` with a new output type.

#### Type Parameters

##### C

`C` *extends* [`SqlBool`](../types/SqlBool.md)

#### Returns

`OrWrapper`\<`DB`, `TB`, `C`\>

***

### as()

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

Defined in: [expression/expression-wrapper.ts:347](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L347)

Returns an aliased version of the expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(eb =>
    eb('first_name', '=', 'Jennifer')
      .or('first_name', '=', 'Sylvester')
      .as('is_jennifer_or_sylvester')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer_or_sylvester: SqlBool` field exists in the result type.
console.log(result.is_jennifer_or_sylvester)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 or "first_name" = $2 as "is_jennifer_or_sylvester"
from "person"
```

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

`A`

##### Returns

[`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

##### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`as`](../interfaces/AliasableExpression.md#as)

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

Defined in: [expression/expression-wrapper.ts:349](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L349)

Returns an aliased version of the expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(eb =>
    eb('first_name', '=', 'Jennifer')
      .or('first_name', '=', 'Sylvester')
      .as('is_jennifer_or_sylvester')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer_or_sylvester: SqlBool` field exists in the result type.
console.log(result.is_jennifer_or_sylvester)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 or "first_name" = $2 as "is_jennifer_or_sylvester"
from "person"
```

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

[`Expression`](../interfaces/Expression.md)\<`unknown`\>

##### Returns

[`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

##### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`as`](../interfaces/AliasableExpression.md#as)

***

### or()

#### Call Signature

> **or**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `OrWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:360](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L360)

Combines `this` and another expression using `OR`.

See [ExpressionWrapper.or](ExpressionWrapper.md#or) for examples.

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

`OrWrapper`\<`DB`, `TB`, `T`\>

#### Call Signature

> **or**\<`E`\>(`expression`): `OrWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:365](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L365)

Combines `this` and another expression using `OR`.

See [ExpressionWrapper.or](ExpressionWrapper.md#or) for examples.

##### Type Parameters

###### E

`E` *extends* [`OperandExpression`](../types/OperandExpression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`OrWrapper`\<`DB`, `TB`, `T`\>

***

### toOperationNode()

> **toOperationNode**(): [`ParensNode`](../interfaces/ParensNode.md)

Defined in: [expression/expression-wrapper.ts:383](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L383)

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

[`ParensNode`](../interfaces/ParensNode.md)

#### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`toOperationNode`](../interfaces/AliasableExpression.md#tooperationnode)
