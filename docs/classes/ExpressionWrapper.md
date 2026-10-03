[**kysely**](../index.md)

***

[kysely](../modules.md) / ExpressionWrapper

# Class: ExpressionWrapper\<DB, TB, T\>

Defined in: [expression/expression-wrapper.ts:23](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L23)

An expression with an `as` method.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### T

`T`

## Implements

- [`AliasableExpression`](../interfaces/AliasableExpression.md)\<`T`\>

## Constructors

### Constructor

> **new ExpressionWrapper**\<`DB`, `TB`, `T`\>(`node`): `ExpressionWrapper`\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-wrapper.ts:30](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L30)

#### Parameters

##### node

[`OperationNode`](../interfaces/OperationNode.md)

#### Returns

`ExpressionWrapper`\<`DB`, `TB`, `T`\>

## Methods

### $castTo()

> **$castTo**\<`C`\>(): `ExpressionWrapper`\<`DB`, `TB`, `C`\>

Defined in: [expression/expression-wrapper.ts:250](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L250)

Change the output type of the expression.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `ExpressionWrapper` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`ExpressionWrapper`\<`DB`, `TB`, `C`\>

***

### $notNull()

> **$notNull**(): `ExpressionWrapper`\<`DB`, `TB`, `Exclude`\<`T`, `null`\>\>

Defined in: [expression/expression-wrapper.ts:263](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L263)

Omit null from the expression's type.

This function can be useful in cases where you know an expression can't be
null, but Kysely is unable to infer it.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of `this` with a new output type.

#### Returns

`ExpressionWrapper`\<`DB`, `TB`, `Exclude`\<`T`, `null`\>\>

***

### and()

#### Call Signature

> **and**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`AndWrapper`](AndWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"and() method can only be called on boolean expressions"`\>

Defined in: [expression/expression-wrapper.ts:221](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L221)

Combines `this` and another expression using `AND`.

Also see [ExpressionBuilder.and](../interfaces/ExpressionBuilder.md#and)

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .and('last_name', '=', 'Aniston')
    .and('age', '>', 40)
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and "last_name" = $2
  and "age" > $3
)
```

You can also pass any expression as the only argument to
this method:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .and(eb('first_name', '=', 'Sylvester').or('last_name', '=', 'Stallone'))
    .and(eb.exists(
      eb.selectFrom('pet')
        .select('id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and ("first_name" = $2 or "last_name" = $3)
  and exists (
    select "id"
    from "pet"
    where "pet"."owner_id" = "person"."id"
  )
)
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

`T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`AndWrapper`](AndWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"and() method can only be called on boolean expressions"`\>

#### Call Signature

> **and**\<`E`\>(`expression`): `T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`AndWrapper`](AndWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"and() method can only be called on boolean expressions"`\>

Defined in: [expression/expression-wrapper.ts:232](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L232)

Combines `this` and another expression using `AND`.

Also see [ExpressionBuilder.and](../interfaces/ExpressionBuilder.md#and)

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .and('last_name', '=', 'Aniston')
    .and('age', '>', 40)
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and "last_name" = $2
  and "age" > $3
)
```

You can also pass any expression as the only argument to
this method:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .and(eb('first_name', '=', 'Sylvester').or('last_name', '=', 'Stallone'))
    .and(eb.exists(
      eb.selectFrom('pet')
        .select('id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and ("first_name" = $2 or "last_name" = $3)
  and exists (
    select "id"
    from "pet"
    where "pet"."owner_id" = "person"."id"
  )
)
```

##### Type Parameters

###### E

`E` *extends* [`OperandExpression`](../types/OperandExpression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`AndWrapper`](AndWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"and() method can only be called on boolean expressions"`\>

***

### as()

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

Defined in: [expression/expression-wrapper.ts:66](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L66)

Returns an aliased version of the expression.

### Examples

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) =>
    eb('first_name', '=', 'Jennifer').as('is_jennifer')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer: SqlBool` field exists in the result type.
console.log(result.is_jennifer)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 as "is_jennifer"
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

Defined in: [expression/expression-wrapper.ts:68](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L68)

Returns an aliased version of the expression.

### Examples

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) =>
    eb('first_name', '=', 'Jennifer').as('is_jennifer')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer: SqlBool` field exists in the result type.
console.log(result.is_jennifer)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 as "is_jennifer"
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

> **or**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`OrWrapper`](OrWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"or() method can only be called on boolean expressions"`\>

Defined in: [expression/expression-wrapper.ts:136](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L136)

Combines `this` and another expression using `OR`.

Also see [ExpressionBuilder.or](../interfaces/ExpressionBuilder.md#or)

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .or('first_name', '=', 'Arnold')
    .or('first_name', '=', 'Sylvester')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  or "first_name" = $2
  or "first_name" = $3
)
```

You can also pass any expression as the only argument to
this method:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .or(eb('first_name', '=', 'Sylvester').and('last_name', '=', 'Stallone'))
    .or(eb.exists(
      eb.selectFrom('pet')
        .select('id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  or ("first_name" = $2 and "last_name" = $3)
  or exists (
    select "id"
    from "pet"
    where "pet"."owner_id" = "person"."id"
  )
)
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

`T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`OrWrapper`](OrWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"or() method can only be called on boolean expressions"`\>

#### Call Signature

> **or**\<`E`\>(`expression`): `T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`OrWrapper`](OrWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"or() method can only be called on boolean expressions"`\>

Defined in: [expression/expression-wrapper.ts:147](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L147)

Combines `this` and another expression using `OR`.

Also see [ExpressionBuilder.or](../interfaces/ExpressionBuilder.md#or)

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .or('first_name', '=', 'Arnold')
    .or('first_name', '=', 'Sylvester')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  or "first_name" = $2
  or "first_name" = $3
)
```

You can also pass any expression as the only argument to
this method:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where(eb => eb('first_name', '=', 'Jennifer')
    .or(eb('first_name', '=', 'Sylvester').and('last_name', '=', 'Stallone'))
    .or(eb.exists(
      eb.selectFrom('pet')
        .select('id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  or ("first_name" = $2 and "last_name" = $3)
  or exists (
    select "id"
    from "pet"
    where "pet"."owner_id" = "person"."id"
  )
)
```

##### Type Parameters

###### E

`E` *extends* [`OperandExpression`](../types/OperandExpression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`T` *extends* [`SqlBool`](../types/SqlBool.md) ? [`OrWrapper`](OrWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"or() method can only be called on boolean expressions"`\>

***

### toOperationNode()

> **toOperationNode**(): [`OperationNode`](../interfaces/OperationNode.md)

Defined in: [expression/expression-wrapper.ts:267](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L267)

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

[`OperationNode`](../interfaces/OperationNode.md)

#### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`toOperationNode`](../interfaces/AliasableExpression.md#tooperationnode)
