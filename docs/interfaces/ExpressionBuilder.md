[**kysely**](../index.md)

***

[kysely](../modules.md) / ExpressionBuilder

# Interface: ExpressionBuilder()\<DB, TB\>

Defined in: [expression/expression-builder.ts:81](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L81)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

> **ExpressionBuilder**\<`RE`, `OP`, `VE`\>(`lhs`, `op`, `rhs`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `OP` *extends* [`ComparisonOperator`](../types/ComparisonOperator.md) ? [`SqlBool`](../types/SqlBool.md) : `OP` *extends* [`Expression`](Expression.md)\<`T`\> ? `unknown` *extends* `T` ? [`SqlBool`](../types/SqlBool.md) : `T` : [`SelectType`](../types/SelectType.md)\<[`ExtractRawTypeFromReferenceExpression`](../types/ExtractRawTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`, `unknown`\>\>\>

Defined in: [expression/expression-builder.ts:172](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L172)

Creates a binary expression.

This function returns an [Expression](Expression.md) and can be used pretty much anywhere.
See the examples for a couple of possible use cases.

### Examples

A simple comparison:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where((eb) => eb('first_name', '=', 'Jennifer'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where "first_name" = $1
```

By default the third argument is interpreted as a value. To pass in
a column reference, you can use [ref](#ref):

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where((eb) => eb('first_name', '=', eb.ref('last_name')))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where "first_name" = "last_name"
```

In the following example `eb` is used to increment an integer column:

```ts
await db.updateTable('person')
  .set((eb) => ({
    age: eb('age', '+', 1)
  }))
  .where('id', '=', 3)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
update "person"
set "age" = "age" + $1
where "id" = $2
```

As always, expressions can be nested. Both the first and the third argument
can be any expression:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where((eb) => eb(
    eb.fn<string>('lower', ['first_name']),
    'in',
    eb.selectFrom('pet')
      .select('pet.name')
      .where('pet.species', '=', 'cat')
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where lower("first_name") in (
  select "pet"."name"
  from "pet"
  where "pet"."species" = $1
)
```

## Type Parameters

### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

### OP

`OP` *extends* [`BinaryOperatorExpression`](../types/BinaryOperatorExpression.md)

### VE

`VE` *extends* `any`

## Parameters

### lhs

`RE`

### op

`OP`

### rhs

`VE`

## Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `OP` *extends* [`ComparisonOperator`](../types/ComparisonOperator.md) ? [`SqlBool`](../types/SqlBool.md) : `OP` *extends* [`Expression`](Expression.md)\<`T`\> ? `unknown` *extends* `T` ? [`SqlBool`](../types/SqlBool.md) : `T` : [`SelectType`](../types/SelectType.md)\<[`ExtractRawTypeFromReferenceExpression`](../types/ExtractRawTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`, `unknown`\>\>\>

## Accessors

### eb

#### Get Signature

> **get** **eb**(): `ExpressionBuilder`\<`DB`, `TB`\>

Defined in: [expression/expression-builder.ts:216](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L216)

Returns a copy of `this` expression builder, for destructuring purposes.

### Examples

```ts
const result = await db.selectFrom('person')
  .where(({ eb, exists, selectFrom }) =>
    eb('first_name', '=', 'Jennifer').and(exists(
      selectFrom('pet').whereRef('owner_id', '=', 'person.id').select('pet.id')
    ))
  )
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "first_name" = $1 and exists (
  select "pet.id" from "pet" where "owner_id" = "person.id"
)
```

##### Returns

`ExpressionBuilder`\<`DB`, `TB`\>

***

### fn

#### Get Signature

> **get** **fn**(): [`FunctionModule`](FunctionModule.md)\<`DB`, `TB`\>

Defined in: [expression/expression-builder.ts:249](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L249)

Returns a [FunctionModule](FunctionModule.md) that can be used to write type safe function
calls.

The difference between this and [Kysely.fn](../classes/Kysely.md#fn) is that this one is more
type safe. You can only refer to columns visible to the part of the query
you are building. [Kysely.fn](../classes/Kysely.md#fn) allows you to refer to columns in any
table of the database even if it doesn't produce valid SQL.

```ts
const result = await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => [
    'person.id',
    eb.fn.count('pet.id').as('pet_count')
  ])
  .groupBy('person.id')
  .having((eb) => eb.fn.count('pet.id'), '>', 10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", count("pet"."id") as "pet_count"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."id"
having count("pet"."id") > $1
```

##### Returns

[`FunctionModule`](FunctionModule.md)\<`DB`, `TB`\>

## Methods

### and()

#### Call Signature

> **and**\<`E`\>(`exprs`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:982](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L982)

Combines two or more expressions using the logical `and` operator.

An empty array produces a `true` expression.

This function returns an [Expression](Expression.md) and can be used pretty much anywhere.
See the examples for a couple of possible use cases.

### Examples

In this example we use `and` to create a `WHERE expr1 AND expr2 AND expr3`
statement:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb.and([
    eb('first_name', '=', 'Jennifer'),
    eb('first_name', '=', 'Arnold'),
    eb('first_name', '=', 'Sylvester')
  ]))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  "first_name" = $1
  and "first_name" = $2
  and "first_name" = $3
)
```

Optionally you can use the simpler object notation if you only need
equality comparisons:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb.and({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  }))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  "first_name" = $1
  and "last_name" = $2
)
```

##### Type Parameters

###### E

`E` *extends* [`OperandExpression`](../types/OperandExpression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### exprs

readonly `E`[]

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

#### Call Signature

> **and**\<`E`\>(`exprs`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:986](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L986)

##### Type Parameters

###### E

`E` *extends* `Readonly`\<[`FilterObject`](../types/FilterObject.md)\<`DB`, `TB`\>\>

##### Parameters

###### exprs

`E`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

***

### between()

> **between**\<`RE`, `SE`, `EE`\>(`expr`, `start`, `end`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:884](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L884)

Creates a `between` expression.

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where((eb) => eb.between('age', 40, 60))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "age" between $1 and $2
```

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### SE

`SE` *extends* `any`

##### EE

`EE` *extends* `any`

#### Parameters

##### expr

`RE`

##### start

`SE`

##### end

`EE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

***

### betweenSymmetric()

> **betweenSymmetric**\<`RE`, `SE`, `EE`\>(`expr`, `start`, `end`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:912](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L912)

Creates a `between symmetric` expression.

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where((eb) => eb.betweenSymmetric('age', 40, 60))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "age" between symmetric $1 and $2
```

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### SE

`SE` *extends* `any`

##### EE

`EE` *extends* `any`

#### Parameters

##### expr

`RE`

##### start

`SE`

##### end

`EE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

***

### case()

#### Call Signature

> **case**(): [`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, `TB`\>

Defined in: [expression/expression-builder.ts:348](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L348)

Creates a `case` statement/operator.

### Examples

Kitchen sink example with 2 flavors of `case` operator:

```ts
const { title, name } = await db
  .selectFrom('person')
  .where('id', '=', 123)
  .select((eb) => [
    eb.fn.coalesce('last_name', 'first_name').as('name'),
    eb
      .case()
      .when('gender', '=', 'male')
      .then('Mr.')
      .when('gender', '=', 'female')
      .then(
        eb
          .case('marital_status')
          .when('single')
          .then('Ms.')
          .else('Mrs.')
          .end()
      )
      .end()
      .as('title'),
  ])
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
select
  coalesce("last_name", "first_name") as "name",
  case
    when "gender" = $1 then $2
    when "gender" = $3 then
      case "marital_status"
        when $4 then $5
        else $6
      end
  end as "title"
from "person"
where "id" = $7
```

##### Returns

[`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, `TB`\>

#### Call Signature

> **case**\<`C`\>(`column`): [`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `C`\>\>

Defined in: [expression/expression-builder.ts:350](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L350)

##### Type Parameters

###### C

`C` *extends* `string` \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\>

##### Parameters

###### column

`C`

##### Returns

[`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `C`\>\>

#### Call Signature

> **case**\<`E`\>(`expression`): [`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, `TB`, [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`E`\>\>

Defined in: [expression/expression-builder.ts:354](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L354)

##### Type Parameters

###### E

`E` *extends* [`Expression`](Expression.md)\<`any`\>

##### Parameters

###### expression

`E`

##### Returns

[`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, `TB`, [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`E`\>\>

***

### cast()

> **cast**\<`T`, `RE`\>(`expr`, `dataType`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-builder.ts:1142](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L1142)

Creates a `cast(expr as dataType)` expression.

Since Kysely can't know the mapping between JavaScript and database types,
you need to provide both explicitly.

### Examples

```ts
const result = await db.selectFrom('person')
  .select((eb) => [
    'id',
    'first_name',
    eb.cast<number>('age', 'integer').as('age')
  ])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select cast("age" as integer) as "age"
from "person"
```

#### Type Parameters

##### T

`T`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### expr

`RE`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

***

### exists()

> **exists**\<`RE`\>(`expr`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:851](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L851)

Creates an `exists` operation.

A shortcut for `unary('exists', expr)`.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### expr

`RE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

#### See

[unary](#unary)

***

### jsonPath()

> **jsonPath**\<`$`\>(): [`IsNever`](../types/IsNever.md)\<`$`\> *extends* `true` ? [`KyselyTypeError`](KyselyTypeError.md)\<`"You must provide a column reference as this method's $ generic"`\> : [`JSONPathBuilder`](../classes/JSONPathBuilder.md)\<[`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `$`\>, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `$`\>\>

Defined in: [expression/expression-builder.ts:515](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L515)

Creates a JSON path expression with provided column as root document (the $).

For a JSON reference expression, see [ref](#ref).

### Examples

```ts
await db.updateTable('person')
  .set('profile', (eb) => eb.fn('json_set', [
    'profile',
    eb.jsonPath<'profile'>().key('addresses').at('last').key('city'),
    eb.val('San Diego')
  ]))
  .where('id', '=', 3)
  .execute()
```

The generated SQL (MySQL):

```sql
update `person`
set `profile` = json_set(`profile`, '$.addresses[last].city', $1)
where `id` = $2
```

#### Type Parameters

##### $

`$` *extends* `string` = `never`

#### Returns

[`IsNever`](../types/IsNever.md)\<`$`\> *extends* `true` ? [`KyselyTypeError`](KyselyTypeError.md)\<`"You must provide a column reference as this method's $ generic"`\> : [`JSONPathBuilder`](../classes/JSONPathBuilder.md)\<[`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `$`\>, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `$`\>\>

***

### lit()

> **lit**\<`VE`\>(`literal`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `VE`\>

Defined in: [expression/expression-builder.ts:798](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L798)

Returns a literal value expression.

Just like `val` but creates a literal value that gets merged in the SQL.
To prevent SQL injections, only `boolean`, `number` and `null` values
are accepted. If you need `string` or other literals, use `sql.lit` instead.

### Examples

```ts
const result = await db.selectFrom('person')
  .select((eb) => eb.lit(1).as('one'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select 1 as "one" from "person"
```

#### Type Parameters

##### VE

`VE` *extends* `number` \| `boolean` \| `null`

#### Parameters

##### literal

`VE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `VE`\>

***

### neg()

> **neg**\<`RE`\>(`expr`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [expression/expression-builder.ts:862](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L862)

Creates a negation operation.

A shortcut for `unary('-', expr)`.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### expr

`RE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

#### See

[unary](#unary)

***

### not()

> **not**\<`RE`\>(`expr`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [expression/expression-builder.ts:840](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L840)

Creates a `not` operation.

A shortcut for `unary('not', expr)`.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### expr

`RE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

#### See

[unary](#unary)

***

### or()

#### Call Signature

> **or**\<`E`\>(`exprs`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:1050](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L1050)

Combines two or more expressions using the logical `or` operator.

An empty array produces a `false` expression.

This function returns an [Expression](Expression.md) and can be used pretty much anywhere.
See the examples for a couple of possible use cases.

### Examples

In this example we use `or` to create a `WHERE expr1 OR expr2 OR expr3`
statement:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb.or([
    eb('first_name', '=', 'Jennifer'),
    eb('first_name', '=', 'Arnold'),
    eb('first_name', '=', 'Sylvester')
  ]))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  "first_name" = $1
  or "first_name" = $2
  or "first_name" = $3
)
```

Optionally you can use the simpler object notation if you only need
equality comparisons:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb.or({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  }))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  "first_name" = $1
  or "last_name" = $2
)
```

##### Type Parameters

###### E

`E` *extends* [`OperandExpression`](../types/OperandExpression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### exprs

readonly `E`[]

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

#### Call Signature

> **or**\<`E`\>(`exprs`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

Defined in: [expression/expression-builder.ts:1054](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L1054)

##### Type Parameters

###### E

`E` *extends* `Readonly`\<[`FilterObject`](../types/FilterObject.md)\<`DB`, `TB`\>\>

##### Parameters

###### exprs

`E`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

***

### parens()

#### Call Signature

> **parens**\<`RE`, `OP`, `VE`\>(`lhs`, `op`, `rhs`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `OP` *extends* [`ComparisonOperator`](../types/ComparisonOperator.md) ? [`SqlBool`](../types/SqlBool.md) : [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [expression/expression-builder.ts:1099](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L1099)

Wraps the expression in parentheses.

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb(eb.parens('age', '+', 1), '/', 100), '<', 0.1)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where ("age" + $1) / $2 < $3
```

You can also pass in any expression as the only argument:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb.parens(
    eb('age', '=', 1).or('age', '=', 2)
  ).and(
    eb('first_name', '=', 'Jennifer').or('first_name', '=', 'Arnold')
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where ("age" = $1 or "age" = $2) and ("first_name" = $3 or "first_name" = $4)
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### OP

`OP` *extends* [`BinaryOperatorExpression`](../types/BinaryOperatorExpression.md)

###### VE

`VE` *extends* `any`

##### Parameters

###### lhs

`RE`

###### op

`OP`

###### rhs

`VE`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `OP` *extends* [`ComparisonOperator`](../types/ComparisonOperator.md) ? [`SqlBool`](../types/SqlBool.md) : [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

#### Call Signature

> **parens**\<`T`\>(`expr`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

Defined in: [expression/expression-builder.ts:1115](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L1115)

##### Type Parameters

###### T

`T`

##### Parameters

###### expr

[`Expression`](Expression.md)\<`T`\>

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

***

### ref()

#### Call Signature

> **ref**\<`RE`\>(`reference`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [expression/expression-builder.ts:480](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L480)

This method can be used to reference columns within the query's context. For
a non-type-safe version of this method see [sql](../variables/sql.md)'s version.

Additionally, this method can be used to reference nested JSON properties or
array elements. See [JSONPathBuilder](../classes/JSONPathBuilder.md) for more information. For regular
JSON path expressions you can use [jsonPath](#jsonpath).

### Examples

By default the third argument of binary expressions is a value.
This function can be used to pass in a column reference instead:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb.or([
    eb('first_name', '=', eb.ref('last_name')),
    eb('first_name', '=', eb.ref('middle_name'))
  ]))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where "first_name" = "last_name" or "first_name" = "middle_name"
```

In the next example we use the `ref` method to reference columns of the virtual
table `excluded` in a type-safe way to create an upsert operation:

```ts
await db.insertInto('person')
  .values({
    id: 3,
    first_name: 'Jennifer',
    last_name: 'Aniston',
    gender: 'female',
  })
  .onConflict((oc) => oc
    .column('id')
    .doUpdateSet(({ ref }) => ({
      first_name: ref('excluded.first_name'),
      last_name: ref('excluded.last_name'),
      gender: ref('excluded.gender'),
    }))
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("id", "first_name", "last_name", "gender")
values ($1, $2, $3, $4)
on conflict ("id") do update set
  "first_name" = "excluded"."first_name",
  "last_name" = "excluded"."last_name",
  "gender" = "excluded"."gender"
```

In the next example we use `ref` in a raw sql expression. Unless you want
to be as type-safe as possible, this is probably overkill:

```ts
import { sql } from 'kysely'

await db.updateTable('pet')
  .set((eb) => ({
    name: sql<string>`concat(${eb.ref('pet.name')}, ${' the animal'})`
  }))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
update "pet" set "name" = concat("pet"."name", $1)
```

In the next example we use `ref` to reference a nested JSON property:

```ts
const result = await db.selectFrom('person')
  .where(({ eb, ref }) => eb(
    ref('profile', '->').key('addresses').at(0).key('city'),
    '=',
    'San Diego'
  ))
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "profile"->'addresses'->0->'city' = $1
```

You can also compile to a JSON path expression by using the `->$`or `->>$` operator:

```ts
const result = await db.selectFrom('person')
  .select(({ ref }) =>
    ref('profile', '->$')
      .key('addresses')
      .at('last')
      .key('city')
      .as('current_city')
  )
  .execute()
```

The generated SQL (MySQL):

```sql
select `profile`->'$.addresses[last].city' as `current_city` from `person`
```

##### Type Parameters

###### RE

`RE` *extends* `string`

##### Parameters

###### reference

`RE`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

#### Call Signature

> **ref**\<`RE`\>(`reference`, `op`): [`JSONPathBuilder`](../classes/JSONPathBuilder.md)\<[`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [expression/expression-builder.ts:484](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L484)

##### Type Parameters

###### RE

`RE` *extends* `string`

##### Parameters

###### reference

`RE`

###### op

[`JSONOperatorWith$`](../types/JSONOperatorWith_.md)

##### Returns

[`JSONPathBuilder`](../classes/JSONPathBuilder.md)\<[`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

***

### refTuple()

#### Call Signature

> **refTuple**\<`R1`, `R2`\>(`value1`, `value2`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple2`](../types/RefTuple2.md)\<`DB`, `TB`, `R1`, `R2`\>\>

Defined in: [expression/expression-builder.ts:669](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L669)

Creates a tuple expression.

This creates a tuple using column references by default. See [tuple](#tuple)
if you need to create value tuples.

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where(({ eb, refTuple, tuple }) => eb(
    refTuple('first_name', 'last_name'),
    'in',
    [
      tuple('Jennifer', 'Aniston'),
      tuple('Sylvester', 'Stallone')
    ]
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  "person".*
from
  "person"
where
  ("first_name", "last_name")
  in
  (
    ($1, $2),
    ($3, $4)
  )
```

In the next example a reference tuple is compared to a subquery. Note that
in this case you need to use the [$asTuple](SelectQueryBuilder.md#astuple)
function:

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where(({ eb, refTuple, selectFrom }) => eb(
    refTuple('first_name', 'last_name'),
    'in',
    selectFrom('pet')
      .select(['name', 'species'])
      .where('species', '!=', 'cat')
      .$asTuple('name', 'species')
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  "person".*
from
  "person"
where
  ("first_name", "last_name")
  in
  (
    select "name", "species"
    from "pet"
    where "species" != $1
  )
```

##### Type Parameters

###### R1

`R1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R2

`R2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### value1

`R1`

###### value2

`R2`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple2`](../types/RefTuple2.md)\<`DB`, `TB`, `R1`, `R2`\>\>

#### Call Signature

> **refTuple**\<`R1`, `R2`, `R3`\>(`value1`, `value2`, `value3`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple3`](../types/RefTuple3.md)\<`DB`, `TB`, `R1`, `R2`, `R3`\>\>

Defined in: [expression/expression-builder.ts:677](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L677)

##### Type Parameters

###### R1

`R1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R2

`R2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R3

`R3` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### value1

`R1`

###### value2

`R2`

###### value3

`R3`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple3`](../types/RefTuple3.md)\<`DB`, `TB`, `R1`, `R2`, `R3`\>\>

#### Call Signature

> **refTuple**\<`R1`, `R2`, `R3`, `R4`\>(`value1`, `value2`, `value3`, `value4`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple4`](../types/RefTuple4.md)\<`DB`, `TB`, `R1`, `R2`, `R3`, `R4`\>\>

Defined in: [expression/expression-builder.ts:687](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L687)

##### Type Parameters

###### R1

`R1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R2

`R2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R3

`R3` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R4

`R4` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### value1

`R1`

###### value2

`R2`

###### value3

`R3`

###### value4

`R4`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple4`](../types/RefTuple4.md)\<`DB`, `TB`, `R1`, `R2`, `R3`, `R4`\>\>

#### Call Signature

> **refTuple**\<`R1`, `R2`, `R3`, `R4`, `R5`\>(`value1`, `value2`, `value3`, `value4`, `value5`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple5`](../types/RefTuple5.md)\<`DB`, `TB`, `R1`, `R2`, `R3`, `R4`, `R5`\>\>

Defined in: [expression/expression-builder.ts:699](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L699)

##### Type Parameters

###### R1

`R1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R2

`R2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R3

`R3` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R4

`R4` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### R5

`R5` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### value1

`R1`

###### value2

`R2`

###### value3

`R3`

###### value4

`R4`

###### value5

`R5`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`RefTuple5`](../types/RefTuple5.md)\<`DB`, `TB`, `R1`, `R2`, `R3`, `R4`, `R5`\>\>

***

### selectFrom()

> **selectFrom**\<`TE`\>(`from`): [`SelectFrom`](../types/SelectFrom.md)\<`DB`, `TB`, `TE`\>

Defined in: [expression/expression-builder.ts:295](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L295)

Creates a subquery.

The query builder returned by this method is typed in a way that you can refer to
all tables of the parent query in addition to the subquery's tables.

This method accepts all the same inputs as [QueryCreator.selectFrom](../classes/QueryCreator.md#selectfrom).

### Examples

This example shows that you can refer to both `pet.owner_id` and `person.id`
columns from the subquery. This is needed to be able to create correlated
subqueries:

```ts
const result = await db.selectFrom('pet')
  .select((eb) => [
    'pet.name',
    eb.selectFrom('person')
      .whereRef('person.id', '=', 'pet.owner_id')
      .select('person.first_name')
      .as('owner_name')
  ])
  .execute()

console.log(result[0]?.owner_name)
```

The generated SQL (PostgreSQL):

```sql
select
  "pet"."name",
  ( select "person"."first_name"
    from "person"
    where "person"."id" = "pet"."owner_id"
  ) as "owner_name"
from "pet"
```

You can use a normal query in place of `(qb) => qb.selectFrom(...)` but in
that case Kysely typings wouldn't allow you to reference `pet.owner_id`
because `pet` is not joined to that query.

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\> \| readonly [`TableExpression`](../types/TableExpression.md)\<`DB`, `TB`\>[]

#### Parameters

##### from

`TE`

#### Returns

[`SelectFrom`](../types/SelectFrom.md)\<`DB`, `TB`, `TE`\>

***

### table()

> **table**\<`T`\>(`table`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>

Defined in: [expression/expression-builder.ts:549](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L549)

Creates a table reference.

### Examples

```ts
import { sql } from 'kysely'
import type { Pet } from 'type-editor' // imaginary module

const result = await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select(eb => [
    'person.id',
    sql<Pet[]>`jsonb_agg(${eb.table('pet')})`.as('pets')
  ])
  .groupBy('person.id')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", jsonb_agg("pet") as "pets"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."id"
```

If you need a column reference, use [ref](#ref).

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### table

`T`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>

***

### tuple()

#### Call Signature

> **tuple**\<`V1`, `V2`\>(`value1`, `value2`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple2`](../types/ValTuple2.md)\<`V1`, `V2`\>\>

Defined in: [expression/expression-builder.ts:751](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L751)

Creates a value tuple expression.

This creates a tuple using values by default. See [refTuple](#reftuple) if you need to create
tuples using column references.

### Examples

```ts
const result = await db.selectFrom('person')
  .selectAll('person')
  .where(({ eb, refTuple, tuple }) => eb(
    refTuple('first_name', 'last_name'),
    'in',
    [
      tuple('Jennifer', 'Aniston'),
      tuple('Sylvester', 'Stallone')
    ]
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  "person".*
from
  "person"
where
  ("first_name", "last_name")
  in
  (
    ($1, $2),
    ($3, $4)
  )
```

##### Type Parameters

###### V1

`V1`

###### V2

`V2`

##### Parameters

###### value1

`V1`

###### value2

`V2`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple2`](../types/ValTuple2.md)\<`V1`, `V2`\>\>

#### Call Signature

> **tuple**\<`V1`, `V2`, `V3`\>(`value1`, `value2`, `value3`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple3`](../types/ValTuple3.md)\<`V1`, `V2`, `V3`\>\>

Defined in: [expression/expression-builder.ts:756](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L756)

##### Type Parameters

###### V1

`V1`

###### V2

`V2`

###### V3

`V3`

##### Parameters

###### value1

`V1`

###### value2

`V2`

###### value3

`V3`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple3`](../types/ValTuple3.md)\<`V1`, `V2`, `V3`\>\>

#### Call Signature

> **tuple**\<`V1`, `V2`, `V3`, `V4`\>(`value1`, `value2`, `value3`, `value4`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple4`](../types/ValTuple4.md)\<`V1`, `V2`, `V3`, `V4`\>\>

Defined in: [expression/expression-builder.ts:762](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L762)

##### Type Parameters

###### V1

`V1`

###### V2

`V2`

###### V3

`V3`

###### V4

`V4`

##### Parameters

###### value1

`V1`

###### value2

`V2`

###### value3

`V3`

###### value4

`V4`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple4`](../types/ValTuple4.md)\<`V1`, `V2`, `V3`, `V4`\>\>

#### Call Signature

> **tuple**\<`V1`, `V2`, `V3`, `V4`, `V5`\>(`value1`, `value2`, `value3`, `value4`, `value5`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple5`](../types/ValTuple5.md)\<`V1`, `V2`, `V3`, `V4`, `V5`\>\>

Defined in: [expression/expression-builder.ts:769](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L769)

##### Type Parameters

###### V1

`V1`

###### V2

`V2`

###### V3

`V3`

###### V4

`V4`

###### V5

`V5`

##### Parameters

###### value1

`V1`

###### value2

`V2`

###### value3

`V3`

###### value4

`V4`

###### value5

`V5`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ValTuple5`](../types/ValTuple5.md)\<`V1`, `V2`, `V3`, `V4`, `V5`\>\>

***

### unary()

> **unary**\<`RE`\>(`op`, `expr`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [expression/expression-builder.ts:828](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L828)

Creates an unary expression.

This function returns an [Expression](Expression.md) and can be used pretty much anywhere.
See the examples for a couple of possible use cases.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### op

[`UnaryOperator`](../types/UnaryOperator.md)

##### expr

`RE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

#### See

[not](#not), [exists](#exists) and [neg](#neg).

### Examples

```ts
const result = await db.selectFrom('person')
  .select((eb) => [
    'first_name',
    eb.unary('-', 'age').as('negative_age')
  ])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name", -"age"
from "person"
```

***

### val()

> **val**\<`VE`\>(`value`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`VE`\>\>

Defined in: [expression/expression-builder.ts:592](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-builder.ts#L592)

Returns a value expression.

This can be used to pass in a value where a reference is taken by default.

This function returns an [Expression](Expression.md) and can be used pretty much anywhere.

### Examples

Binary expressions take a reference by default as the first argument. `val` could
be used to pass in a value instead:

```ts
const result = await db.selectFrom('person')
  .selectAll()
  .where((eb) => eb(
    eb.val('cat'),
    '=',
    eb.fn.any(
      eb.selectFrom('pet')
        .select('species')
        .whereRef('owner_id', '=', 'person.id')
    )
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where $1 = any(
  select "species"
  from "pet"
  where "owner_id" = "person"."id"
)
```

#### Type Parameters

##### VE

`VE`

#### Parameters

##### value

`VE`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`VE`\>\>
