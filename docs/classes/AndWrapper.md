[**kysely**](../index.md)

***

[kysely](../modules.md) / AndWrapper

# Class: AndWrapper\<DB, TB, T\>

Defined in: [expression/expression-wrapper.ts:388](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L388)

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

> **new AndWrapper**\<`DB`, `TB`, `T`\>(`node`): `AndWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:395](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L395)

#### Parameters

##### node

[`AndNode`](../interfaces/AndNode.md)

#### Returns

`AndWrapper`\<`DB`, `TB`, `T`\>

## Methods

### $castTo()

> **$castTo**\<`C`\>(): `AndWrapper`\<`DB`, `TB`, `C`\>

Defined in: [expression/expression-wrapper.ts:465](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L465)

Change the output type of the expression.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `AndWrapper` with a new output type.

#### Type Parameters

##### C

`C` *extends* [`SqlBool`](../types/SqlBool.md)

#### Returns

`AndWrapper`\<`DB`, `TB`, `C`\>

***

### and()

#### Call Signature

> **and**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `AndWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:444](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L444)

Combines `this` and another expression using `AND`.

See [ExpressionWrapper.and](ExpressionWrapper.md#and) for examples.

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

`AndWrapper`\<`DB`, `TB`, `T`\>

#### Call Signature

> **and**\<`E`\>(`expression`): `AndWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:449](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L449)

Combines `this` and another expression using `AND`.

See [ExpressionWrapper.and](ExpressionWrapper.md#and) for examples.

##### Type Parameters

###### E

`E` *extends* [`OperandExpression`](../types/OperandExpression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`AndWrapper`\<`DB`, `TB`, `T`\>

***

### as()

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

Defined in: [expression/expression-wrapper.ts:431](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L431)

Returns an aliased version of the expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(eb =>
    eb('first_name', '=', 'Jennifer')
      .and('last_name', '=', 'Aniston')
      .as('is_jennifer_aniston')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer_aniston: SqlBool` field exists in the result type.
console.log(result.is_jennifer_aniston)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 and "first_name" = $2 as "is_jennifer_aniston"
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

Defined in: [expression/expression-wrapper.ts:433](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L433)

Returns an aliased version of the expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(eb =>
    eb('first_name', '=', 'Jennifer')
      .and('last_name', '=', 'Aniston')
      .as('is_jennifer_aniston')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer_aniston: SqlBool` field exists in the result type.
console.log(result.is_jennifer_aniston)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 and "first_name" = $2 as "is_jennifer_aniston"
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

### toOperationNode()

> **toOperationNode**(): [`ParensNode`](../interfaces/ParensNode.md)

Defined in: [expression/expression-wrapper.ts:469](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L469)

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
