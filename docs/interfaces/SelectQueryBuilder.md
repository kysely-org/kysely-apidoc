[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectQueryBuilder

# Interface: SelectQueryBuilder\<DB, TB, O\>

Defined in: [query-builder/select-query-builder.ts:89](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L89)

An expression with an `as` method.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`WhereInterface`](WhereInterface.md)\<`DB`, `TB`\>.[`HavingInterface`](HavingInterface.md)\<`DB`, `TB`\>.[`OrderByInterface`](OrderByInterface.md)\<`DB`, `TB`, `O`\>.[`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`O`\>.[`Compilable`](Compilable.md)\<`O`\>.[`Executable`](Executable.md)\<`O`\>.[`Explainable`](Explainable.md).[`Streamable`](Streamable.md)\<`O`\>

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Accessors

### expressionType

#### Get Signature

> **get** **expressionType**(): `T` \| `undefined`

Defined in: [expression/expression.ts:51](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L51)

All expressions need to have this getter for complicated type-related reasons.
Simply add this getter for your expression and always return `undefined` from it:

### Examples

```ts
import { type Expression, type OperationNode, sql } from 'kysely'

class SomeExpression<T> implements Expression<T> {
  get expressionType(): T | undefined {
    return undefined
  }

  toOperationNode(): OperationNode {
    return sql`some sql here`.toOperationNode()
  }
}
```

The getter is needed to make the expression assignable to another expression only
if the types `T` are assignable. Without this property (or some other property
that references `T`), you could assing `Expression<string>` to `Expression<number>`.

##### Returns

`T` \| `undefined`

#### Inherited from

`SelectQueryBuilderExpression.expressionType`

***

### isSelectQueryBuilder

#### Get Signature

> **get** **isSelectQueryBuilder**(): `true`

Defined in: [query-builder/select-query-builder-expression.ts:7](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder-expression.ts#L7)

##### Returns

`true`

#### Inherited from

[`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md).[`isSelectQueryBuilder`](SelectQueryBuilderExpression.md#isselectquerybuilder)

## Methods

### $asScalar()

> **$asScalar**\<`K`\>(): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\[`K`\]\>

Defined in: [query-builder/select-query-builder.ts:2003](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2003)

Plucks the value type of the output record.

In SQL, any record type that only has one column can be used as a scalar.
For example a query like this works:

```sql
select
  id,
  first_name
from
  person as p
where
  -- This is ok since the query only selects one row
  -- and one column.
 (select name from pet where pet.owner_id = p.id limit 1) = 'Doggo'
```

In many cases Kysely handles this automatically and picks the correct
scalar type instead of the record type, but sometimes you need to give
Kysely a hint.

One such case are custom helper functions that take `Expression<T>`
instances as inputs:

```ts
import type { Expression } from 'kysely'

function doStuff(expr: Expression<string>) {
  // ...
}

// Error! This is not ok because the expression type is
// `{ first_name: string }` instead of `string`.
// doStuff(db.selectFrom('person').select('first_name'))

// Ok! This is ok since we've plucked the `string` type of the
// only column in the output type.
doStuff(db.selectFrom('person').select('first_name').$asScalar())
```

This function has absolutely no effect on the generated SQL. It's
purely a type-level helper.

This method returns an `ExpressionWrapper` instead of a `SelectQueryBuilder`
since the return value should only be used as a part of an expression
and never executed as the main query.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol` = keyof `O`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\[`K`\]\>

***

### $assertType()

> **$assertType**\<`T`\>(): `O` *extends* `T` ? `SelectQueryBuilder`\<`DB`, `TB`, `T`\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

Defined in: [query-builder/select-query-builder.ts:2110](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2110)

Asserts that query's output row type equals the given type `T`.

This method can be used to simplify excessively complex types to make TypeScript happy
and much faster.

Kysely uses complex type magic to achieve its type safety. This complexity is sometimes too much
for TypeScript and you get errors like this:

```
error TS2589: Type instantiation is excessively deep and possibly infinite.
```

In these case you can often use this method to help TypeScript a little bit. When you use this
method to assert the output type of a query, Kysely can drop the complex output type that
consists of multiple nested helper types and replace it with the simple asserted type.

Using this method doesn't reduce type safety at all. You have to pass in a type that is
structurally equal to the current type.

### Examples

```ts
const result = await db
  .with('first_and_last', (qb) => qb
    .selectFrom('person')
    .select(['first_name', 'last_name'])
    .$assertType<{ first_name: string, last_name: string | null }>()
  )
  .with('age', (qb) => qb
    .selectFrom('person')
    .select('age')
    .$assertType<{ age: number | null }>()
  )
  .selectFrom(['first_and_last', 'age'])
  .selectAll()
  .executeTakeFirstOrThrow()
```

#### Type Parameters

##### T

`T`

#### Returns

`O` *extends* `T` ? `SelectQueryBuilder`\<`DB`, `TB`, `T`\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

***

### $asTuple()

#### Call Signature

> **$asTuple**\<`K1`, `K2`\>(`key1`, `key2`): keyof `O` *extends* `K1` \| `K2` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

Defined in: [query-builder/select-query-builder.ts:1906](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1906)

Changes the output type from an object to a tuple.

This doesn't affect the generated SQL in any way. This function is
just a necessary evil when you need to convert a query's output
record type to a tuple type. Typescript doesn't currently offer
tools to do this automatically (without insane hackery).

The returned object can no longer be executed. It can only be used
as a subquery.

### Examples

```ts
const result = await db
  .selectFrom('person')
  .selectAll('person')
  .where(({ eb, refTuple, selectFrom }) => eb(
    refTuple('first_name', 'last_name'),
    'in',
    selectFrom('pet')
      .select(['name', 'species'])
      .where('pet.species', '!=', 'cat')
      .$asTuple('name', 'species')
  ))
  .execute()
```

The generated SQL(PostgreSQL):

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
    where "pet"."species" != $1
  )
```

##### Type Parameters

###### K1

`K1` *extends* `string` \| `number` \| `symbol`

###### K2

`K2` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### key1

`K1`

###### key2

`K2`

##### Returns

keyof `O` *extends* `K1` \| `K2` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

#### Call Signature

> **$asTuple**\<`K1`, `K2`, `K3`\>(`key1`, `key2`, `key3`): keyof `O` *extends* `K1` \| `K2` \| `K3` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\], `O`\[`K3`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

Defined in: [query-builder/select-query-builder.ts:1913](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1913)

##### Type Parameters

###### K1

`K1` *extends* `string` \| `number` \| `symbol`

###### K2

`K2` *extends* `string` \| `number` \| `symbol`

###### K3

`K3` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### key1

`K1`

###### key2

`K2`

###### key3

`K3`

##### Returns

keyof `O` *extends* `K1` \| `K2` \| `K3` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\], `O`\[`K3`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

#### Call Signature

> **$asTuple**\<`K1`, `K2`, `K3`, `K4`\>(`key1`, `key2`, `key3`, `key4`): keyof `O` *extends* `K1` \| `K2` \| `K3` \| `K4` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\], `O`\[`K3`\], `O`\[`K4`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

Defined in: [query-builder/select-query-builder.ts:1925](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1925)

##### Type Parameters

###### K1

`K1` *extends* `string` \| `number` \| `symbol`

###### K2

`K2` *extends* `string` \| `number` \| `symbol`

###### K3

`K3` *extends* `string` \| `number` \| `symbol`

###### K4

`K4` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### key1

`K1`

###### key2

`K2`

###### key3

`K3`

###### key4

`K4`

##### Returns

keyof `O` *extends* `K1` \| `K2` \| `K3` \| `K4` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\], `O`\[`K3`\], `O`\[`K4`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

#### Call Signature

> **$asTuple**\<`K1`, `K2`, `K3`, `K4`, `K5`\>(`key1`, `key2`, `key3`, `key4`, `key5`): keyof `O` *extends* `K1` \| `K2` \| `K3` \| `K4` \| `K5` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\], `O`\[`K3`\], `O`\[`K4`\], `O`\[`K5`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

Defined in: [query-builder/select-query-builder.ts:1939](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1939)

##### Type Parameters

###### K1

`K1` *extends* `string` \| `number` \| `symbol`

###### K2

`K2` *extends* `string` \| `number` \| `symbol`

###### K3

`K3` *extends* `string` \| `number` \| `symbol`

###### K4

`K4` *extends* `string` \| `number` \| `symbol`

###### K5

`K5` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### key1

`K1`

###### key2

`K2`

###### key3

`K3`

###### key4

`K4`

###### key5

`K5`

##### Returns

keyof `O` *extends* `K1` \| `K2` \| `K3` \| `K4` \| `K5` ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, \[`O`\[`K1`\], `O`\[`K2`\], `O`\[`K3`\], `O`\[`K4`\], `O`\[`K5`\]\]\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"$asTuple() call failed: All selected columns must be provided as arguments"`\>

***

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/select-query-builder.ts:1776](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1776)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

If you want to conditionally call a method on `this`, see
the [$if](#if) method.

### Examples

The next example uses a helper function `log` to log a query:

```ts
import type { Compilable } from 'kysely'

function log<T extends Compilable>(qb: T): T {
  console.log(qb.compile())
  return qb
}

await db.selectFrom('person')
  .selectAll()
  .$call(log)
  .execute()
```

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

> **$castTo**\<`C`\>(): `SelectQueryBuilder`\<`DB`, `TB`, `C`\>

Defined in: [query-builder/select-query-builder.ts:1859](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1859)

Change the output type of the query.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `SelectQueryBuilder` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `C`\>

***

### $if()

> **$if**\<`O2`\>(`condition`, `func`): `SelectQueryBuilder`\<`DB`, `TB`, `O` & `Partial`\<`Omit`\<`O2`, keyof `O`\>\>\>

Defined in: [query-builder/select-query-builder.ts:1848](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1848)

Call `func(this)` if `condition` is true.

NOTE: This method has an impact on TypeScript performance and it should only be used
when necessary. Remember that you can call most methods like `where` conditionally
like this:

```ts
async function getPeople(firstName?: string, lastName?: string) {
  let query = db.selectFrom('person').selectAll()

  if (firstName) {
    query = query.where('first_name', '=', firstName)
  }

  if (lastName) {
    query = query.where('last_name', '=', lastName)
  }

  return await query.execute()
}
```

This method is mainly useful with optional selects. Any `select` or `selectAll`
method called inside the callback add optional fields to the result type. This is
because we can't know if those selections were actually made before running the code.

Also see [this recipe](https://github.com/kysely-org/kysely/blob/master/site/docs/recipes/0005-conditional-selects.md)

### Examples

```ts
async function getPerson(id: number, withLastName: boolean) {
  return await db
    .selectFrom('person')
    .select(['id', 'first_name'])
    .$if(withLastName, (qb) => qb.select('last_name'))
    .where('id', '=', id)
    .executeTakeFirstOrThrow()
}
```

Any selections added inside the `if` callback will be added as optional fields to the
output type since we can't know if the selections were actually made before running
the code. In the example above the return type of the `getPerson` function is:

```ts
Promise<{
  id: number
  first_name: string
  last_name?: string
}>
```

You can also call any other methods inside the callback:

```ts
async function getPeople(firstName?: string, petCountLimit?: number) {
  return await db.selectFrom('person')
    .select('person.id')
    .$if(firstName != null, (qb) => qb.where('first_name', '=', firstName!))
    .$if(petCountLimit != null, (qb) => qb
      .innerJoin('pet', 'pet.owner_id', 'person.id')
      .having((eb) => eb.fn.count('pet.id'), '>', petCountLimit!)
      .groupBy('person.id')
    )
    .execute()
}
```

#### Type Parameters

##### O2

`O2`

#### Parameters

##### condition

`boolean`

##### func

(`qb`) => `SelectQueryBuilder`\<`any`, `any`, `O` & `O2`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & `Partial`\<`Omit`\<`O2`, keyof `O`\>\>\>

***

### $narrowType()

> **$narrowType**\<`T`\>(): `SelectQueryBuilder`\<`DB`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

Defined in: [query-builder/select-query-builder.ts:2069](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2069)

Narrows (parts of) the output type of the query.

Kysely tries to be as type-safe as possible, but in some cases we have to make
compromises for better maintainability and compilation performance. At present,
Kysely doesn't narrow the output type of the query when using [where](#where), [having](#having)
or JoinQueryBuilder.on.

This utility method is very useful for these situations, as it removes unncessary
runtime assertion/guard code. Its input type is limited to the output type
of the query, so you can't add a column that doesn't exist, or change a column's
type to something that doesn't exist in its union type.

### Examples

Turn this code:

```ts
import type { Person } from 'type-editor' // imaginary module

const person = await db.selectFrom('person')
  .where('nullable_column', 'is not', null)
  .selectAll()
  .executeTakeFirstOrThrow()

if (isWithNoNullValue(person)) {
  functionThatExpectsPersonWithNonNullValue(person)
}

function isWithNoNullValue(person: Person): person is Person & { nullable_column: string } {
  return person.nullable_column != null
}
```

Into this:

```ts
import type { NotNull } from 'kysely'

const person = await db.selectFrom('person')
  .where('nullable_column', 'is not', null)
  .selectAll()
  .$narrowType<{ nullable_column: NotNull }>()
  .executeTakeFirstOrThrow()

functionThatExpectsPersonWithNonNullValue(person)
```

Giving the explicit narrowed type (`string` in the example above) works fine for
simple types. If the type is complex, for example a JSON column or a subquery,
you can use the special `NotNull` type to make the column not null.

```ts
import { NotNull } from 'kysely'

const person = await db.selectFrom('person')
  .where('nullable_column', 'is not', null)
  .selectAll()
  .$narrowType<{ nullable_column: NotNull }>()
  .executeTakeFirstOrThrow()

functionThatExpectsPersonWithNonNullValue(person)
```

#### Type Parameters

##### T

`T`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

***

### as()

> **as**\<`A`\>(`alias`): [`AliasedSelectQueryBuilder`](AliasedSelectQueryBuilder.md)\<`O`, `A`\>

Defined in: [query-builder/select-query-builder.ts:1641](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1641)

Gives an alias for the query. This method is only useful for sub queries.

### Examples

```ts
const pets = await db.selectFrom('pet')
  .selectAll('pet')
  .select(
    (qb) => qb.selectFrom('person')
      .select('first_name')
      .whereRef('pet.owner_id', '=', 'person.id')
      .as('owner_first_name')
  )
  .execute()

pets[0].owner_first_name
```

The generated SQL (PostgreSQL):

```sql
select "pet".*, (
  select "first_name"
  from "person"
  where "pet"."owner_id" = "person"."id"
) as "owner_first_name"
from "pet"
```

#### Type Parameters

##### A

`A` *extends* `string`

#### Parameters

##### alias

`A`

#### Returns

[`AliasedSelectQueryBuilder`](AliasedSelectQueryBuilder.md)\<`O`, `A`\>

#### Overrides

[`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md).[`as`](SelectQueryBuilderExpression.md#as)

***

### clearGroupBy()

> **clearGroupBy**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1749](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1749)

Clears `group by` clause from the query.

### Examples

```ts
await db.selectFrom('person')
  .selectAll()
  .groupBy('id')
  .clearGroupBy()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
select * from "person"
```

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### clearLimit()

> **clearLimit**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1685](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1685)

Clears limit clause from the query.

### Examples

```ts
await db.selectFrom('person')
  .selectAll()
  .limit(10)
  .clearLimit()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
select * from "person"
```

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### clearOffset()

> **clearOffset**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1707](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1707)

Clears offset clause from the query.

### Examples

```ts
await db.selectFrom('person')
  .selectAll()
  .limit(10)
  .offset(20)
  .clearOffset()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
select * from "person" limit 10
```

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### clearOrderBy()

> **clearOrderBy**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1728](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1728)

Clears all `order by` clauses from the query.

### Examples

```ts
await db.selectFrom('person')
  .selectAll()
  .orderBy('id')
  .clearOrderBy()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
select * from "person"
```

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

#### Overrides

[`OrderByInterface`](OrderByInterface.md).[`clearOrderBy`](OrderByInterface.md#clearorderby)

***

### clearSelect()

> **clearSelect**(): `SelectQueryBuilder`\<`DB`, `TB`, \{ \}\>

Defined in: [query-builder/select-query-builder.ts:1662](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1662)

Clears all select clauses from the query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name'])
  .clearSelect()
  .select(['id', 'gender'])
  .execute()
```

The generated SQL(PostgreSQL):

```sql
select "id", "gender" from "person"
```

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, \{ \}\>

***

### clearWhere()

> **clearWhere**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1664](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1664)

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

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

#### Overrides

[`WhereInterface`](WhereInterface.md).[`clearWhere`](WhereInterface.md#clearwhere)

***

### compile()

> **compile**(): [`CompiledQuery`](CompiledQuery.md)\<[`Simplify`](../types/Simplify.md)\<`O`\>\>

Defined in: [query-builder/select-query-builder.ts:2121](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2121)

#### Returns

[`CompiledQuery`](CompiledQuery.md)\<[`Simplify`](../types/Simplify.md)\<`O`\>\>

#### Overrides

[`Compilable`](Compilable.md).[`compile`](Compilable.md#compile)

***

### crossApply()

> **crossApply**\<`TE`\>(`table`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:979](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L979)

Joins another table to the query using a `cross apply`.

This is only supported by some dialects like MS SQL Server.

### Examples

```ts
await db.selectFrom('person')
  .crossApply(
    (eb) =>
      eb.selectFrom('pet')
        .select('name')
        .whereRef('pet.owner_id', '=', 'person.id')
        .as('p')
  )
  .select(['first_name', 'p.name'])
  .orderBy('first_name')
  .execute()
```

The generated SQL (MS SQL Server):

```sql
select "person"."first_name", "p"."name"
from "person"
cross apply (
  select "name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
) as "p"
order by "first_name"
```

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

#### Parameters

##### table

`TE`

#### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### crossJoin()

> **crossJoin**\<`TE`\>(`table`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:797](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L797)

Just like [innerJoin](#innerjoin) but adds a `cross join` instead of an `inner join`.

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

#### Parameters

##### table

`TE`

#### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### crossJoinLateral()

> **crossJoinLateral**\<`TE`\>(`table`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:941](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L941)

Just like [innerJoin](#innerjoin) but adds a `cross join lateral` instead of an `inner join`.

This is only supported by some dialects like PostgreSQL.

### Examples

```ts
await db.selectFrom('person')
  .crossJoinLateral(
    (eb) =>
      eb.selectFrom('pet')
        .select('name')
        .whereRef('pet.owner_id', '=', 'person.id')
        .as('p')
  )
  .select(['first_name', 'p.name'])
  .orderBy('first_name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name", "p"."name"
from "person"
cross join lateral (
  select "name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
) as "p"
order by "first_name"
```

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

#### Parameters

##### table

`TE`

#### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### distinct()

> **distinct**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:491](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L491)

Makes the selection distinct.

### Examples

<!-- siteExample("select", "Distinct", 70) -->

```ts
const persons = await db.selectFrom('person')
  .select('first_name')
  .distinct()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select distinct "first_name" from "person"
```

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### distinctOn()

#### Call Signature

> **distinctOn**\<`RE`\>(`selections`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:413](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L413)

Adds `distinct on` expressions to the select clause.

### Examples

<!-- siteExample("select", "Distinct on", 80) -->

```ts
const persons = await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .where('pet.name', '=', 'Doggo')
  .distinctOn('person.id')
  .selectAll('person')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select distinct on ("person"."id") "person".*
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
where "pet"."name" = $1
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### selections

readonly `RE`[]

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

#### Call Signature

> **distinctOn**\<`RE`\>(`selection`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:417](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L417)

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### selection

`RE`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### except()

> **except**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1551](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1551)

Combines another select query or raw expression to this query using `except`.

The output row type of the combined query must match `this` query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .except(db.selectFrom('pet').select(['id', 'name']))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
except
select "id", "name"
from "pet"
order by "name"
```

You can provide a callback to get an expression builder.
In the following example, this allows us to wrap the query in parentheses:

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .except((eb) => eb.parens(
    eb.selectFrom('pet').select(['id', 'name'])
  ))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
except
(
  select "id", "name"
  from "pet"
)
order by "name"
```

#### Type Parameters

##### E

`E` *extends* [`SetOperandExpression`](../types/SetOperandExpression.md)\<`DB`, `O`\>

#### Parameters

##### expression

`E`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### exceptAll()

> **exceptAll**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1607](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1607)

Combines another select query or raw expression to this query using `except all`.

The output row type of the combined query must match `this` query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .exceptAll(db.selectFrom('pet').select(['id', 'name']))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
except all
select "id", "name"
from "pet"
order by "name"
```

You can provide a callback to get an expression builder.
In the following example, this allows us to wrap the query in parentheses:

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .exceptAll((eb) => eb.parens(
    eb.selectFrom('pet').select(['id', 'name'])
  ))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
except all
(
  select "id", "name"
  from "pet"
)
order by "name"
```

#### Type Parameters

##### E

`E` *extends* [`SetOperandExpression`](../types/SetOperandExpression.md)\<`DB`, `O`\>

#### Parameters

##### expression

`E`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### execute()

> **execute**(`options?`): `Promise`\<`NonNullable`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>[]\>

Defined in: [query-builder/select-query-builder.ts:2123](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2123)

Executes the query and returns an array of rows.

Also see the [executeTakeFirst](Executable.md#executetakefirst) and [executeTakeFirstOrThrow](Executable.md#executetakefirstorthrow) methods.

#### Parameters

##### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

#### Returns

`Promise`\<`NonNullable`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>[]\>

#### Overrides

[`Executable`](Executable.md).[`execute`](Executable.md#execute)

***

### executeTakeFirst()

> **executeTakeFirst**(`options?`): `Promise`\<[`SimplifySingleResult`](../types/SimplifySingleResult.md)\<`O`\>\>

Defined in: [query-builder/select-query-builder.ts:2127](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2127)

Executes the query and returns the first result or undefined if
the query returned no result.

#### Parameters

##### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

#### Returns

`Promise`\<[`SimplifySingleResult`](../types/SimplifySingleResult.md)\<`O`\>\>

#### Overrides

[`Executable`](Executable.md).[`executeTakeFirst`](Executable.md#executetakefirst)

***

### executeTakeFirstOrThrow()

> **executeTakeFirstOrThrow**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

Defined in: [query-builder/select-query-builder.ts:2131](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2131)

Executes the query and returns the first result or throws if
the query returned no result.

By default an instance of [NoResultError](../classes/NoResultError.md) is thrown, but you can
provide a custom error class, or callback to throw a different
error.

#### Parameters

##### options?

[`NoResultErrorConstructor`](../types/NoResultErrorConstructor.md) \| [`ExecuteTakeFirstOrThrowOptions`](ExecuteTakeFirstOrThrowOptions.md) \| ((`node`) => `Error`)

#### Returns

`Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

#### Overrides

[`Executable`](Executable.md).[`executeTakeFirstOrThrow`](Executable.md#executetakefirstorthrow)

***

### explain()

> **explain**\<`ER`\>(`format?`, `options?`): `Promise`\<`ER`[]\>

Defined in: [query-builder/select-query-builder.ts:2141](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2141)

Executes query with `explain` statement before the main query.

```ts
const explained = await db
 .selectFrom('person')
 .where('gender', '=', 'female')
 .selectAll()
 .explain('json')
```

The generated SQL (MySQL):

```sql
explain format=json select * from `person` where `gender` = ?
```

You can also execute `explain analyze` statements.

```ts
import { sql } from 'kysely'

const explained = await db
 .selectFrom('person')
 .where('gender', '=', 'female')
 .selectAll()
 .explain('json', sql`analyze`)
```

The generated SQL (PostgreSQL):

```sql
explain (analyze, format json) select * from "person" where "gender" = $1
```

#### Type Parameters

##### ER

`ER` *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

#### Parameters

##### format?

[`ExplainFormat`](../types/ExplainFormat.md)

##### options?

[`Expression`](Expression.md)\<`any`\>

#### Returns

`Promise`\<`ER`[]\>

#### Overrides

[`Explainable`](Explainable.md).[`explain`](Explainable.md#explain)

***

### fetch()

> **fetch**(`rowCount`, `modifier?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1225](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1225)

Adds a `fetch` clause to the query.

This clause is only supported by some dialects like PostgreSQL or MS SQL Server.

### Examples

```ts
await db
  .selectFrom('person')
  .select('first_name')
  .orderBy('first_name')
  .offset(0)
  .fetch(10)
  .execute()
```

The generated SQL (MS SQL Server):

```sql
select "first_name"
from "person"
order by "first_name"
offset 0 rows
fetch next 10 rows only
```

#### Parameters

##### rowCount

`number` \| `bigint`

##### modifier?

[`FetchModifier`](../types/FetchModifier.md)

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### forKeyShare()

> **forKeyShare**(`of?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:506](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L506)

Adds the `for key share` modifier to a select query on supported databases.

#### Parameters

##### of?

[`TableOrList`](../types/TableOrList.md)\<`TB`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### forNoKeyUpdate()

> **forNoKeyUpdate**(`of?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:511](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L511)

Adds the `for no key update` modifier to a select query on supported databases.

#### Parameters

##### of?

[`TableOrList`](../types/TableOrList.md)\<`TB`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### forShare()

> **forShare**(`of?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:501](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L501)

Adds the `for share` modifier to a select query on supported databases.

#### Parameters

##### of?

[`TableOrList`](../types/TableOrList.md)\<`TB`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### forUpdate()

> **forUpdate**(`of?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:496](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L496)

Adds the `for update` modifier to a select query on supported databases.

#### Parameters

##### of?

[`TableOrList`](../types/TableOrList.md)\<`TB`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### fullJoin()

#### Call Signature

> **fullJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`SelectQueryBuilderWithFullJoin`](../types/SelectQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:776](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L776)

Just like [innerJoin](#innerjoin) but adds a `full join` instead of an `inner join`.

This is only supported by some dialects like PostgreSQL, MS SQL Server and SQLite.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### table

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`SelectQueryBuilderWithFullJoin`](../types/SelectQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **fullJoin**\<`TE`, `FN`\>(`table`, `callback`): [`SelectQueryBuilderWithFullJoin`](../types/SelectQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:786](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L786)

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`SelectQueryBuilderWithFullJoin`](../types/SelectQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### groupBy()

> **groupBy**\<`GE`\>(`groupBy`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1090](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1090)

Adds a `group by` clause to the query.

### Examples

```ts
import { sql } from 'kysely'

await db
  .selectFrom('person')
  .select([
    'first_name',
    sql<string>`max(id)`.as('max_id')
  ])
  .groupBy('first_name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name", max(id)
from "person"
group by "first_name"
```

`groupBy` also accepts an array:

```ts
import { sql } from 'kysely'

await db
  .selectFrom('person')
  .select([
    'first_name',
    'last_name',
    sql<string>`max(id)`.as('max_id')
  ])
  .groupBy([
    'first_name',
    'last_name'
  ])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name", "last_name", max(id)
from "person"
group by "first_name", "last_name"
```

The group by expressions can also be subqueries or
raw sql expressions:

```ts
import { sql } from 'kysely'

await db
  .selectFrom('person')
  .select([
    'first_name',
    'last_name',
    sql<string>`max(id)`.as('max_id')
  ])
  .groupBy([
    sql<string>`concat(first_name, last_name)`,
    (qb) => qb.selectFrom('pet').select('id').limit(1)
  ])
  .execute()
```

`dynamic.ref` can be used to refer to columns not known at
compile time:

```ts
async function someQuery(groupBy: string) {
  const { ref } = db.dynamic

  return await db
    .selectFrom('person')
    .select('first_name')
    .groupBy(ref(groupBy))
    .execute()
}

someQuery('first_name')
```

The generated SQL (PostgreSQL):

```sql
select "first_name"
from "person"
group by "first_name"
```

#### Type Parameters

##### GE

`GE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> \| readonly [`GroupByExpression`](../types/GroupByExpression.md)\<`DB`, `TB`, `O`\>[] \| ((`eb`) => readonly [`GroupByExpression`](../types/GroupByExpression.md)\<`DB`, `TB`, `O`\>[])

#### Parameters

##### groupBy

`GE`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### having()

#### Call Signature

> **having**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:121](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L121)

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

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Overrides

[`HavingInterface`](HavingInterface.md).[`having`](HavingInterface.md#having)

#### Call Signature

> **having**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:130](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L130)

Just like [where](WhereInterface.md#where) but adds a `having` statement
instead of a `where` statement.

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Overrides

[`HavingInterface`](HavingInterface.md).[`having`](HavingInterface.md#having)

***

### havingRef()

> **havingRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:134](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L134)

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

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

#### Overrides

[`HavingInterface`](HavingInterface.md).[`havingRef`](HavingInterface.md#havingref)

***

### innerJoin()

#### Call Signature

> **innerJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:711](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L711)

Joins another table to the query using an `inner join`.

### Examples

<!-- siteExample("join", "Simple inner join", 10) -->

Simple `inner join`s can be done by providing a table name and two columns to join:

```ts
const result = await db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  // `select` needs to come after the call to `innerJoin` so
  // that you can select from the joined table.
  .select(['person.id', 'pet.name as pet_name'])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", "pet"."name" as "pet_name"
from "person"
inner join "pet"
on "pet"."owner_id" = "person"."id"
```

<!-- siteExample("join", "Aliased inner join", 20) -->

You can give an alias for the joined table like this:

```ts
await db.selectFrom('person')
  .innerJoin('pet as p', 'p.owner_id', 'person.id')
  .where('p.name', '=', 'Doggo')
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
inner join "pet" as "p"
on "p"."owner_id" = "person"."id"
where "p".name" = $1
```

<!-- siteExample("join", "Complex join", 30) -->

You can provide a function as the second argument to get a join
builder for creating more complex joins. The join builder has a
bunch of `on*` methods for building the `on` clause of the join.
There's basically an equivalent for every `where` method
(`on`, `onRef` etc.).

You can do all the same things with the
`on` method that you can with the corresponding `where` method (like [OR expressions for example](https://kysely.dev/docs/examples/WHERE/or-where)).
See the `where` method documentation for more examples.

```ts
await db.selectFrom('person')
  .innerJoin(
    'pet',
    (join) => join
      .onRef('pet.owner_id', '=', 'person.id')
      .on('pet.name', '=', 'Doggo')
      .on((eb) => eb.or([
        eb('person.age', '>', 18),
        eb('person.age', '<', 100)
      ]))
  )
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
inner join "pet"
on "pet"."owner_id" = "person"."id"
and "pet"."name" = $1
and (
  "person"."age" > $2
  OR "person"."age" < $3
)
```

<!-- siteExample("join", "Subquery join", 40) -->

You can join a subquery by providing two callbacks:

```ts
const result = await db.selectFrom('person')
  .innerJoin(
    (eb) => eb
      .selectFrom('pet')
      .select(['owner_id as owner', 'name'])
      .where('name', '=', 'Doggo')
      .as('doggos'),
    (join) => join
      .onRef('doggos.owner', '=', 'person.id'),
  )
  .selectAll('doggos')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "doggos".*
from "person"
inner join (
  select "owner_id" as "owner", "name"
  from "pet"
  where "name" = $1
) as "doggos"
on "doggos"."owner" = "person"."id"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### table

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **innerJoin**\<`TE`, `FN`\>(`table`, `callback`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:721](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L721)

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### innerJoinLateral()

#### Call Signature

> **innerJoinLateral**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:836](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L836)

Just like [innerJoin](#innerjoin) but adds a lateral join instead of an inner join.

This is only supported by some dialects like PostgreSQL and MySQL.

### Examples

```ts
await db.selectFrom('person')
  .innerJoinLateral(
    (eb) =>
      eb.selectFrom('pet')
        .select('name')
        .whereRef('pet.owner_id', '=', 'person.id')
        .as('p'),
    (join) => join.onTrue()
  )
  .select(['first_name', 'p.name'])
  .orderBy('first_name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name", "p"."name"
from "person"
inner join lateral (
  select "name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
) as "p" on true
order by "first_name"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### table

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **innerJoinLateral**\<`TE`, `FN`\>(`table`, `callback`): [`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:846](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L846)

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`SelectQueryBuilderWithInnerJoin`](../types/SelectQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### intersect()

> **intersect**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1439](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1439)

Combines another select query or raw expression to this query using `intersect`.

The output row type of the combined query must match `this` query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .intersect(db.selectFrom('pet').select(['id', 'name']))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
intersect
select "id", "name"
from "pet"
order by "name"
```

You can provide a callback to get an expression builder.
In the following example, this allows us to wrap the query in parentheses:

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .intersect((eb) => eb.parens(
    eb.selectFrom('pet').select(['id', 'name'])
  ))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
intersect
(
  select "id", "name"
  from "pet"
)
order by "name"
```

#### Type Parameters

##### E

`E` *extends* [`SetOperandExpression`](../types/SetOperandExpression.md)\<`DB`, `O`\>

#### Parameters

##### expression

`E`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### intersectAll()

> **intersectAll**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1495](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1495)

Combines another select query or raw expression to this query using `intersect all`.

The output row type of the combined query must match `this` query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .intersectAll(db.selectFrom('pet').select(['id', 'name']))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
intersect all
select "id", "name"
from "pet"
order by "name"
```

You can provide a callback to get an expression builder.
In the following example, this allows us to wrap the query in parentheses:

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .intersectAll((eb) => eb.parens(
    eb.selectFrom('pet').select(['id', 'name'])
  ))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
intersect all
(
  select "id", "name"
  from "pet"
)
order by "name"
```

#### Type Parameters

##### E

`E` *extends* [`SetOperandExpression`](../types/SetOperandExpression.md)\<`DB`, `O`\>

#### Parameters

##### expression

`E`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### leftJoin()

#### Call Signature

> **leftJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:732](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L732)

Just like [innerJoin](#innerjoin) but adds a `left join` instead of an `inner join`.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### table

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **leftJoin**\<`TE`, `FN`\>(`table`, `callback`): [`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:742](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L742)

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### leftJoinLateral()

#### Call Signature

> **leftJoinLateral**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:889](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L889)

Just like [innerJoin](#innerjoin) but adds a `left join lateral` instead of an `inner join`.

This is only supported by some dialects like PostgreSQL and MySQL.

### Examples

```ts
await db.selectFrom('person')
  .leftJoinLateral(
    (eb) =>
      eb.selectFrom('pet')
        .select('name')
        .whereRef('pet.owner_id', '=', 'person.id')
        .as('p'),
    (join) => join.onTrue()
  )
  .select(['first_name', 'p.name'])
  .orderBy('first_name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name", "p"."name"
from "person"
left join lateral (
  select "name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
) as "p" on true
order by "first_name"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### table

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **leftJoinLateral**\<`TE`, `FN`\>(`table`, `callback`): [`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:899](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L899)

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### limit()

> **limit**\<`VE`\>(`limit`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1168](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1168)

Adds a limit clause to the query.

Passing a `null` value is only supported by some dialects like PostgreSQL,
and will result in a no-op limit clause.

### Examples

Select the first 10 rows of the result:

```ts
await db
  .selectFrom('person')
  .select('first_name')
  .limit(10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name" from "person" limit $1
```

Select rows from index 10 to index 19 of the result:

```ts
await db
  .selectFrom('person')
  .select('first_name')
  .limit(10)
  .offset(10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name" from "person" limit $1 offset $2
```

#### Type Parameters

##### VE

`VE` *extends* [`ValueExpression`](../types/ValueExpression.md)\<`DB`, `TB`, `number` \| `bigint` \| `null`\>

#### Parameters

##### limit

`VE`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### modifyEnd()

> **modifyEnd**(`modifier`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:469](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L469)

This can be used to add any additional SQL to the end of the query.

Also see [forUpdate](#forupdate), [forShare](#forshare), [forKeyShare](#forkeyshare), [forNoKeyUpdate](#fornokeyupdate)
[skipLocked](#skiplocked) and  [noWait](#nowait).

### Examples

```ts
import { sql } from 'kysely'

await db.selectFrom('person')
  .select('first_name')
  .modifyEnd(sql`for update`)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name"
from "person"
for update
```

#### Parameters

##### modifier

[`Expression`](Expression.md)\<`any`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### modifyFront()

> **modifyFront**(`modifier`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:442](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L442)

This can be used to add any additional SQL to the front of the query __after__ the `select` keyword.

### Examples

```ts
import { sql } from 'kysely'

await db.selectFrom('person')
  .modifyFront(sql`sql_no_cache`)
  .select('first_name')
  .execute()
```

The generated SQL (MySQL):

```sql
select sql_no_cache `first_name`
from `person`
```

#### Parameters

##### modifier

[`Expression`](Expression.md)\<`any`\>

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### noWait()

> **noWait**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:521](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L521)

Adds the `nowait` modifier to a select query on supported databases.

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### offset()

> **offset**\<`VE`\>(`offset`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1194](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1194)

Adds an `offset` clause to the query.

### Examples

Select rows from index 10 to index 19 of the result:

```ts
await db
  .selectFrom('person')
  .select('first_name')
  .limit(10)
  .offset(10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name" from "person" limit $1 offset $2
```

#### Type Parameters

##### VE

`VE` *extends* [`ValueExpression`](../types/ValueExpression.md)\<`DB`, `TB`, `number` \| `bigint`\>

#### Parameters

##### offset

`VE`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orderBy()

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1094](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1094)

Adds an `order by` clause to the query.

`orderBy` calls are additive. Meaning, additional `orderBy` calls append to
the existing order by clause.

`orderBy` is supported in select queries on all dialects. In MySQL, you can
also use `orderBy` in update and delete queries.

In a single call you can add a single column/expression or multiple columns/expressions.

Single column/expression calls can have 1-2 arguments. The first argument is
the expression to order by, while the second optional argument is the direction
(`asc` or `desc`), a callback that accepts and returns an [OrderByItemBuilder](../classes/OrderByItemBuilder.md)
or an expression.

See [clearOrderBy](OrderByInterface.md#clearorderby) to remove the `order by` clause from a query.

### Examples

Single column/expression per call:

```ts
await db
  .selectFrom('person')
  .select('person.first_name as fn')
  .orderBy('id')
  .orderBy('fn', 'desc')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name" as "fn"
from "person"
order by "id", "fn" desc
```

Building advanced modifiers:

```ts
await db
  .selectFrom('person')
  .select('person.first_name as fn')
  .orderBy('id', (ob) => ob.desc().nullsFirst())
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name" as "fn"
from "person"
order by "id" desc nulls first
```

The order by expression can also be a raw sql expression or a subquery
in addition to column references:

```ts
import { sql } from 'kysely'

await db
  .selectFrom('person')
  .selectAll()
  .orderBy((eb) => eb.selectFrom('pet')
    .select('pet.name')
    .whereRef('pet.owner_id', '=', 'person.id')
    .limit(1)
  )
  .orderBy(
    sql<string>`concat(first_name, last_name) asc`
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
order by
  ( select "pet"."name"
    from "pet"
    where "pet"."owner_id" = "person"."id"
    limit $1
  ) asc,
  concat(first_name, last_name) asc
```

`dynamic.ref` can be used to refer to columns not known at
compile time:

```ts
async function someQuery(orderBy: string) {
  const { ref } = db.dynamic

  return await db
    .selectFrom('person')
    .select('person.first_name as fn')
    .orderBy(ref(orderBy))
    .execute()
}

someQuery('fn')
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name" as "fn"
from "person"
order by "fn"
```

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Overrides

[`OrderByInterface`](OrderByInterface.md).[`orderBy`](OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`exprs`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1103](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1103)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2-2.5x more compile-time instantiations than multiple `orderBy(expr, modifiers?)` calls, and has broken autocompletion.

##### Overrides

[`OrderByInterface`](OrderByInterface.md).[`orderBy`](OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1114](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1114)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

Use orderBy(expr, direction) instead.

##### Overrides

[`OrderByInterface`](OrderByInterface.md).[`orderBy`](OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1122](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1122)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](Expression.md)\<`any`\>

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Deprecated

Use `orderBy(expr, (ob) => ...)` instead.

##### Overrides

[`OrderByInterface`](OrderByInterface.md).[`orderBy`](OrderByInterface.md#orderby)

***

### outerApply()

> **outerApply**\<`TE`\>(`table`): [`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:988](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L988)

Just like [crossApply](#crossapply) but adds an `outer apply` instead of a `cross apply`.

This is only supported by some dialects like MS SQL Server.

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

#### Parameters

##### table

`TE`

#### Returns

[`SelectQueryBuilderWithLeftJoin`](../types/SelectQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### rightJoin()

#### Call Signature

> **rightJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`SelectQueryBuilderWithRightJoin`](../types/SelectQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:753](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L753)

Just like [innerJoin](#innerjoin) but adds a `right join` instead of an `inner join`.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### table

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`SelectQueryBuilderWithRightJoin`](../types/SelectQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **rightJoin**\<`TE`, `FN`\>(`table`, `callback`): [`SelectQueryBuilderWithRightJoin`](../types/SelectQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/select-query-builder.ts:763](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L763)

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`SelectQueryBuilderWithRightJoin`](../types/SelectQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### select()

#### Call Signature

> **select**\<`SE`\>(`selections`): `SelectQueryBuilder`\<`DB`, `TB`, `O` & [`Selection`](../types/Selection.md)\<`DB`, `TB`, `SE`\>\>

Defined in: [query-builder/select-query-builder.ts:376](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L376)

Adds a select statement to the query.

When a column (or any expression) is selected, Kysely adds its type to the return
type of the query. Kysely is smart enough to parse the selection names and types
from aliased columns, subqueries, raw expressions etc.

Kysely only allows you to select columns and expressions that exist and would
produce valid SQL. However, Kysely is not perfect and there may be cases where
the type inference doesn't work and you need to override it. You can always
use the [dynamic](../classes/Kysely.md#dynamic) module and the [sql](../variables/sql.md) tag
to override the types.

Select calls are additive. Calling `select('id').select('first_name')` is the
same as calling `select(['id', 'first_name'])`.

To select all columns of the query or specific tables see the
[selectAll](#selectall) method.

See the [$if](#if) method if you are looking for a way to add selections
based on a runtime condition.

### Examples

<!-- siteExample("select", "A single column", 10) -->

Select a single column:

```ts
const persons = await db
  .selectFrom('person')
  .select('id')
  .where('first_name', '=', 'Arnold')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id" from "person" where "first_name" = $1
```

<!-- siteExample("select", "Column with a table", 20) -->

Select a single column and specify a table:

```ts
const persons = await db
  .selectFrom(['person', 'pet'])
  .select('person.id')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id" from "person", "pet"
```

<!-- siteExample("select", "Multiple columns", 30) -->

Select multiple columns:

```ts
const persons = await db
  .selectFrom('person')
  .select(['person.id', 'first_name'])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", "first_name" from "person"
```

<!-- siteExample("select", "Aliases", 40) -->

You can give an alias for selections and tables by appending `as the_alias` to the name:

```ts
const persons = await db
  .selectFrom('person as p')
  .select([
    'first_name as fn',
    'p.last_name as ln'
  ])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  "first_name" as "fn",
  "p"."last_name" as "ln"
from "person" as "p"
```

<!-- siteExample("select", "Complex selections", 50) -->

You can select arbitrary expression including subqueries and raw sql snippets.
When you do that, you need to give a name for the selections using the `as` method:

```ts
import { sql } from 'kysely'

const persons = await db.selectFrom('person')
  .select(({ eb, selectFrom, or, val, lit }) => [
    // Select a correlated subquery
    selectFrom('pet')
      .whereRef('person.id', '=', 'pet.owner_id')
      .select('pet.name')
      .orderBy('pet.name')
      .limit(1)
      .as('first_pet_name'),

    // Build and select an expression using
    // the expression builder
    or([
      eb('first_name', '=', 'Jennifer'),
      eb('first_name', '=', 'Arnold')
    ]).as('is_jennifer_or_arnold'),

    // Select a raw sql expression
    sql<string>`concat(first_name, ' ', last_name)`.as('full_name'),

    // Select a static string value
    val('Some value').as('string_value'),

    // Select a literal value
    lit(42).as('literal_value'),
  ])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  (
    select "pet"."name"
    from "pet"
    where "person"."id" = "pet"."owner_id"
    order by "pet"."name"
    limit $1
  ) as "pet_name",
  ("first_name" = $2 or "first_name" = $3) as "jennifer_or_arnold",
  concat(first_name, ' ', last_name) as "full_name",
  $4 as "string_value",
  42 as "literal_value"
from "person"
```

In case you use the [sql](../variables/sql.md) tag you need to specify the type of the expression
(in this example `string`).

 <!-- siteExample("select", "Not null", 51) -->

Sometimes you can be sure something's not null, but Kysely isn't able to infer
it. For example calling `where('last_name', 'is not', null)` doesn't make
`last_name` not null in the result type, but unless you have other where statements
you can be sure it's never null.

Kysely has a couple of helpers for dealing with these cases: `$notNull()` and `$narrowType`.
Both are used in the following example:

```ts
import { NotNull } from 'kysely'
import { jsonObjectFrom } from 'kysely/helpers/postgres'

const persons = db
  .selectFrom('person')
  .select((eb) => [
    'last_name',
     // Let's assume we know the person has at least one
     // pet. We can use the `.$notNull()` method to make
     // the expression not null. You could just as well
     // add `pet` to the `$narrowType` call below.
     jsonObjectFrom(
       eb.selectFrom('pet')
         .selectAll()
         .limit(1)
         .whereRef('person.id', '=', 'pet.owner_id')
     ).$notNull().as('pet')
  ])
  .where('last_name', 'is not', null)
  // $narrowType can be used to narrow the output type.
  // The special `NotNull` type can be used to make a
  // selection not null. You could add `pet: NotNull`
  // here and omit the `$notNull()` call on it.
  // Use whichever way you prefer.
  .$narrowType<{ last_name: NotNull }>()
  .execute()
```

All the examples above assume you know the column names at compile time.
While it's better to build your code like that (that way you also know
the types) sometimes it's not possible or you just prefer to write more
dynamic code.
<br><br>
In this example, we use the `dynamic` module's methods to add selections
dynamically:

```ts
const { ref } = db.dynamic

// Some column name provided by the user. Value not known at compile time.
const columnFromUserInput: string = 'first_name';

// A type that lists all possible values `columnFromUserInput` can have.
// You can use `keyof Person` if any column of an interface is allowed.
type PossibleColumns = 'last_name' | 'first_name' | 'birthdate'

const people = await db
  .selectFrom('person')
  .select([
    ref<PossibleColumns>(columnFromUserInput),
    'id'
  ])
  .execute()

// The resulting type contains all `PossibleColumns` as optional fields
// because we cannot know which field was actually selected before
// running the code.
const lastName: string | null | undefined = people[0].last_name
const firstName: string | undefined = people[0].first_name
const birthDate: Date | null | undefined = people[0].birthdate

// The result type also contains the compile time selection `id`.
people[0].id
```

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selections

readonly `SE`[]

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & [`Selection`](../types/Selection.md)\<`DB`, `TB`, `SE`\>\>

#### Call Signature

> **select**\<`CB`\>(`callback`): `SelectQueryBuilder`\<`DB`, `TB`, `O` & [`CallbackSelection`](../types/CallbackSelection.md)\<`DB`, `TB`, `CB`\>\>

Defined in: [query-builder/select-query-builder.ts:380](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L380)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & [`CallbackSelection`](../types/CallbackSelection.md)\<`DB`, `TB`, `CB`\>\>

#### Call Signature

> **select**\<`SE`\>(`selection`): `SelectQueryBuilder`\<`DB`, `TB`, `O` & [`Selection`](../types/Selection.md)\<`DB`, `TB`, `SE`\>\>

Defined in: [query-builder/select-query-builder.ts:384](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L384)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selection

`SE`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & [`Selection`](../types/Selection.md)\<`DB`, `TB`, `SE`\>\>

***

### selectAll()

#### Call Signature

> **selectAll**\<`T`\>(`table`): `SelectQueryBuilder`\<`DB`, `TB`, `O` & [`AllSelection`](../types/AllSelection.md)\<`DB`, `T`\>\>

Defined in: [query-builder/select-query-builder.ts:577](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L577)

Adds a `select *` or `select table.*` clause to the query.

### Examples

<!-- siteExample("select", "All columns", 90) -->

The `selectAll` method generates `SELECT *`:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
```

<!-- siteExample("select", "All columns of a table", 100) -->

Select all columns of a table:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll('person')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".* from "person"
```

Select all columns of multiple tables:

```ts
const personsPets = await db
  .selectFrom(['person', 'pet'])
  .selectAll(['person', 'pet'])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*, "pet".* from "person", "pet"
```

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### table

readonly `T`[]

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & [`AllSelection`](../types/AllSelection.md)\<`DB`, `T`\>\>

#### Call Signature

> **selectAll**\<`T`\>(`table`): `SelectQueryBuilder`\<`DB`, `TB`, `O` & [`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>

Defined in: [query-builder/select-query-builder.ts:581](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L581)

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### table

`T`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & [`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>

#### Call Signature

> **selectAll**(): `SelectQueryBuilder`\<`DB`, `TB`, `O` & [`AllSelection`](../types/AllSelection.md)\<`DB`, `TB`\>\>

Defined in: [query-builder/select-query-builder.ts:585](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L585)

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O` & [`AllSelection`](../types/AllSelection.md)\<`DB`, `TB`\>\>

***

### skipLocked()

> **skipLocked**(): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:516](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L516)

Adds the `skip locked` modifier to a select query on supported databases.

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### stream()

> **stream**(`chunkSizeOrOptions?`): `AsyncIterableIterator`\<`O`\>

Defined in: [query-builder/select-query-builder.ts:2137](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2137)

Executes the query and streams the rows.

The optional argument `chunkSize` defines how many rows to fetch from the database
at a time. It only affects some dialects like PostgreSQL that support it.

### Examples

```ts
const stream = db
  .selectFrom('person')
  .select(['first_name', 'last_name'])
  .where('gender', '=', 'other')
  .stream()

for await (const person of stream) {
  console.log(person.first_name)

  if (person.last_name === 'Something') {
    // Breaking or returning before the stream has ended will release
    // the database connection and invalidate the stream.
    break
  }
}
```

#### Parameters

##### chunkSizeOrOptions?

`number` \| [`StreamOptions`](StreamOptions.md)

#### Returns

`AsyncIterableIterator`\<`O`\>

#### Overrides

[`Streamable`](Streamable.md).[`stream`](Streamable.md#stream)

***

### toOperationNode()

> **toOperationNode**(): [`SelectQueryNode`](SelectQueryNode.md)

Defined in: [query-builder/select-query-builder.ts:2119](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2119)

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

[`SelectQueryNode`](SelectQueryNode.md)

#### Overrides

[`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md).[`toOperationNode`](SelectQueryBuilderExpression.md#tooperationnode)

***

### top()

> **top**(`expression`, `modifiers?`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1270](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1270)

Adds a `top` clause to the query.

This clause is only supported by some dialects like MS SQL Server.

### Examples

Select 10 biggest ages:

```ts
await db
  .selectFrom('person')
  .select('age')
  .top(10)
  .orderBy('age desc')
  .execute()
```

The generated SQL (MS SQL Server):

```sql
select top(10) "age" from "person" order by "age" desc
```

Select 10% first rows:

```ts
await db
 .selectFrom('person')
 .selectAll()
 .top(10, 'percent')
 .execute()
```

The generated SQL (MS SQL Server):

```sql
select top(10) percent * from "person"
```

#### Parameters

##### expression

`number` \| `bigint`

##### modifiers?

[`TopModifier`](../types/TopModifier.md)

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### union()

> **union**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1327](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1327)

Combines another select query or raw expression to this query using `union`.

The output row type of the combined query must match `this` query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .union(db.selectFrom('pet').select(['id', 'name']))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
union
select "id", "name"
from "pet"
order by "name"
```

You can provide a callback to get an expression builder.
In the following example, this allows us to wrap the query in parentheses:

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .union((eb) => eb.parens(
    eb.selectFrom('pet').select(['id', 'name'])
  ))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
union
(
  select "id", "name"
  from "pet"
)
order by "name"
```

#### Type Parameters

##### E

`E` *extends* [`SetOperandExpression`](../types/SetOperandExpression.md)\<`DB`, `O`\>

#### Parameters

##### expression

`E`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### unionAll()

> **unionAll**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:1383](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L1383)

Combines another select query or raw expression to this query using `union all`.

The output row type of the combined query must match `this` query.

### Examples

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .unionAll(db.selectFrom('pet').select(['id', 'name']))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
union all
select "id", "name"
from "pet"
order by "name"
```

You can provide a callback to get an expression builder.
In the following example, this allows us to wrap the query in parentheses:

```ts
await db.selectFrom('person')
  .select(['id', 'first_name as name'])
  .unionAll((eb) => eb.parens(
    eb.selectFrom('pet').select(['id', 'name'])
  ))
  .orderBy('name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "id", "first_name" as "name"
from "person"
union all
(
  select "id", "name"
  from "pet"
)
order by "name"
```

#### Type Parameters

##### E

`E` *extends* [`SetOperandExpression`](../types/SetOperandExpression.md)\<`DB`, `O`\>

#### Parameters

##### expression

`E`

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

***

### where()

#### Call Signature

> **where**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:99](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L99)

Adds a `where` expression to the query.

Calling this method multiple times will combine the expressions using `and`.

Also see [whereRef](WhereInterface.md#whereref)

### Examples

<!-- siteExample("where", "Simple where clause", 10) -->

`where` method calls are combined with `AND`:

```ts
const person = await db
  .selectFrom('person')
  .selectAll()
  .where('first_name', '=', 'Jennifer')
  .where('age', '>', 40)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "first_name" = $1 and "age" > $2
```

Operator can be any supported operator or if the typings don't support it
you can always use:

```ts
import { sql } from 'kysely'

sql`your operator`
```

<!-- siteExample("where", "Where in", 20) -->

Find multiple items using a list of identifiers:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where('id', 'in', [1, 2, 3])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "id" in ($1, $2, $3)
```

<!-- siteExample("where", "Object filter", 30) -->

You can use the `and` function to create a simple equality
filter using an object

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where((eb) => eb.and({
    first_name: 'Jennifer',
    last_name: eb.ref('first_name')
  }))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and "last_name" = "first_name"
)
```

<!-- siteExample("where", "OR where", 40) -->

To combine conditions using `OR`, you can use the expression builder.
There are two ways to create `OR` expressions. Both are shown in this
example:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  // 1. Using the `or` method on the expression builder:
  .where((eb) => eb.or([
    eb('first_name', '=', 'Jennifer'),
    eb('first_name', '=', 'Sylvester')
  ]))
  // 2. Chaining expressions using the `or` method on the
  // created expressions:
  .where((eb) =>
    eb('last_name', '=', 'Aniston').or('last_name', '=', 'Stallone')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  ("first_name" = $1 or "first_name" = $2)
  and
  ("last_name" = $3 or "last_name" = $4)
)
```

<!-- siteExample("where", "Conditional where calls", 50) -->

You can add expressions conditionally like this:

```ts
import { Expression, SqlBool } from 'kysely'

const firstName: string | undefined = 'Jennifer'
const lastName: string | undefined = 'Aniston'
const under18 = true
const over60 = true

let query = db
  .selectFrom('person')
  .selectAll()

if (firstName) {
  // The query builder is immutable. Remember to reassign
  // the result back to the query variable.
  query = query.where('first_name', '=', firstName)
}

if (lastName) {
  query = query.where('last_name', '=', lastName)
}

if (under18 || over60) {
  // Conditional OR expressions can be added like this.
  query = query.where((eb) => {
    const ors: Expression<SqlBool>[] = []

    if (under18) {
      ors.push(eb('age', '<', 18))
    }

    if (over60) {
      ors.push(eb('age', '>', 60))
    }

    return eb.or(ors)
  })
}

const persons = await query.execute()
```

Both the first and third argument can also be arbitrary expressions like
subqueries. An expression can defined by passing a function and calling
the methods of the [ExpressionBuilder](ExpressionBuilder.md) passed to the callback:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(
    (qb) => qb.selectFrom('pet')
      .select('pet.name')
      .whereRef('pet.owner_id', '=', 'person.id')
      .limit(1),
    '=',
    'Fluffy'
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  select "pet"."name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
  limit $1
) = $2
```

A `where in` query can be built by using the `in` operator and an array
of values. The values in the array can also be expressions:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where('person.id', 'in', [100, 200, 300])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "id" in ($1, $2, $3)
```

<!-- siteExample("where", "Complex where clause", 60) -->

For complex `where` expressions you can pass in a single callback and
use the `ExpressionBuilder` to build your expression:

```ts
const firstName = 'Jennifer'
const maxAge = 60

const persons = await db
  .selectFrom('person')
  .selectAll('person')
  .where(({ eb, or, and, not, exists, selectFrom }) => and([
    or([
      eb('first_name', '=', firstName),
      eb('age', '<', maxAge)
    ]),
    not(exists(
      selectFrom('pet')
        .select('pet.id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  ]))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  (
    "first_name" = $1
    or "age" < $2
  )
  and not exists (
    select "pet"."id" from "pet" where "pet"."owner_id" = "person"."id"
  )
)
```

If everything else fails, you can always use the [sql](../variables/sql.md) tag
as any of the arguments, including the operator:

```ts
import { sql } from 'kysely'

const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(
    sql<string>`coalesce(first_name, last_name)`,
    'like',
    '%' + name + '%',
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
where coalesce(first_name, last_name) like $1
```

In all examples above the columns were known at compile time
(except for the raw [sql](../variables/sql.md) expressions). By default kysely only
allows you to refer to columns that exist in the database **and**
can be referred to in the current query and context.

Sometimes you may want to refer to columns that come from the user
input and thus are not available at compile time.

You have two options, the [sql](../variables/sql.md) tag or `db.dynamic`. The example below
uses both:

```ts
import { sql } from 'kysely'
const { ref } = db.dynamic

const columnFromUserInput: string = 'id'

const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(ref(columnFromUserInput), '=', 1)
  .where(sql.id(columnFromUserInput), '=', 2)
  .execute()
```

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

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Overrides

[`WhereInterface`](WhereInterface.md).[`where`](WhereInterface.md#where)

#### Call Signature

> **where**\<`E`\>(`expression`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:108](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L108)

Adds a `where` expression to the query.

Calling this method multiple times will combine the expressions using `and`.

Also see [whereRef](WhereInterface.md#whereref)

### Examples

<!-- siteExample("where", "Simple where clause", 10) -->

`where` method calls are combined with `AND`:

```ts
const person = await db
  .selectFrom('person')
  .selectAll()
  .where('first_name', '=', 'Jennifer')
  .where('age', '>', 40)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "first_name" = $1 and "age" > $2
```

Operator can be any supported operator or if the typings don't support it
you can always use:

```ts
import { sql } from 'kysely'

sql`your operator`
```

<!-- siteExample("where", "Where in", 20) -->

Find multiple items using a list of identifiers:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where('id', 'in', [1, 2, 3])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "id" in ($1, $2, $3)
```

<!-- siteExample("where", "Object filter", 30) -->

You can use the `and` function to create a simple equality
filter using an object

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where((eb) => eb.and({
    first_name: 'Jennifer',
    last_name: eb.ref('first_name')
  }))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and "last_name" = "first_name"
)
```

<!-- siteExample("where", "OR where", 40) -->

To combine conditions using `OR`, you can use the expression builder.
There are two ways to create `OR` expressions. Both are shown in this
example:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  // 1. Using the `or` method on the expression builder:
  .where((eb) => eb.or([
    eb('first_name', '=', 'Jennifer'),
    eb('first_name', '=', 'Sylvester')
  ]))
  // 2. Chaining expressions using the `or` method on the
  // created expressions:
  .where((eb) =>
    eb('last_name', '=', 'Aniston').or('last_name', '=', 'Stallone')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  ("first_name" = $1 or "first_name" = $2)
  and
  ("last_name" = $3 or "last_name" = $4)
)
```

<!-- siteExample("where", "Conditional where calls", 50) -->

You can add expressions conditionally like this:

```ts
import { Expression, SqlBool } from 'kysely'

const firstName: string | undefined = 'Jennifer'
const lastName: string | undefined = 'Aniston'
const under18 = true
const over60 = true

let query = db
  .selectFrom('person')
  .selectAll()

if (firstName) {
  // The query builder is immutable. Remember to reassign
  // the result back to the query variable.
  query = query.where('first_name', '=', firstName)
}

if (lastName) {
  query = query.where('last_name', '=', lastName)
}

if (under18 || over60) {
  // Conditional OR expressions can be added like this.
  query = query.where((eb) => {
    const ors: Expression<SqlBool>[] = []

    if (under18) {
      ors.push(eb('age', '<', 18))
    }

    if (over60) {
      ors.push(eb('age', '>', 60))
    }

    return eb.or(ors)
  })
}

const persons = await query.execute()
```

Both the first and third argument can also be arbitrary expressions like
subqueries. An expression can defined by passing a function and calling
the methods of the [ExpressionBuilder](ExpressionBuilder.md) passed to the callback:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(
    (qb) => qb.selectFrom('pet')
      .select('pet.name')
      .whereRef('pet.owner_id', '=', 'person.id')
      .limit(1),
    '=',
    'Fluffy'
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  select "pet"."name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
  limit $1
) = $2
```

A `where in` query can be built by using the `in` operator and an array
of values. The values in the array can also be expressions:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where('person.id', 'in', [100, 200, 300])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "id" in ($1, $2, $3)
```

<!-- siteExample("where", "Complex where clause", 60) -->

For complex `where` expressions you can pass in a single callback and
use the `ExpressionBuilder` to build your expression:

```ts
const firstName = 'Jennifer'
const maxAge = 60

const persons = await db
  .selectFrom('person')
  .selectAll('person')
  .where(({ eb, or, and, not, exists, selectFrom }) => and([
    or([
      eb('first_name', '=', firstName),
      eb('age', '<', maxAge)
    ]),
    not(exists(
      selectFrom('pet')
        .select('pet.id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  ]))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  (
    "first_name" = $1
    or "age" < $2
  )
  and not exists (
    select "pet"."id" from "pet" where "pet"."owner_id" = "person"."id"
  )
)
```

If everything else fails, you can always use the [sql](../variables/sql.md) tag
as any of the arguments, including the operator:

```ts
import { sql } from 'kysely'

const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(
    sql<string>`coalesce(first_name, last_name)`,
    'like',
    '%' + name + '%',
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
where coalesce(first_name, last_name) like $1
```

In all examples above the columns were known at compile time
(except for the raw [sql](../variables/sql.md) expressions). By default kysely only
allows you to refer to columns that exist in the database **and**
can be referred to in the current query and context.

Sometimes you may want to refer to columns that come from the user
input and thus are not available at compile time.

You have two options, the [sql](../variables/sql.md) tag or `db.dynamic`. The example below
uses both:

```ts
import { sql } from 'kysely'
const { ref } = db.dynamic

const columnFromUserInput: string = 'id'

const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(ref(columnFromUserInput), '=', 1)
  .where(sql.id(columnFromUserInput), '=', 2)
  .execute()
```

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

##### Overrides

[`WhereInterface`](WhereInterface.md).[`where`](WhereInterface.md#where)

***

### whereRef()

> **whereRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:112](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L112)

Adds a `where` clause where both sides of the operator are references
to columns.

The normal `where` method treats the right hand side argument as a
value by default. `whereRef` treats it as a column reference. This method is
expecially useful with joins and correlated subqueries.

### Examples

Usage with a join:

```ts
db.selectFrom(['person', 'pet'])
  .selectAll()
  .whereRef('person.first_name', '=', 'pet.name')
```

The generated SQL (PostgreSQL):

```sql
select * from "person", "pet" where "person"."first_name" = "pet"."name"
```

Usage in a subquery:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll('person')
  .select((eb) => eb
    .selectFrom('pet')
    .select('name')
    .whereRef('pet.owner_id', '=', 'person.id')
    .limit(1)
    .as('pet_name')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*, (
  select "name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
  limit $1
) as "pet_name"
from "person"

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

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>

#### Overrides

[`WhereInterface`](WhereInterface.md).[`whereRef`](WhereInterface.md#whereref)

***

### withPlugin()

> **withPlugin**(`plugin`): `SelectQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/select-query-builder.ts:2117](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2117)

Returns a copy of this SelectQueryBuilder instance with the given plugin installed.

#### Parameters

##### plugin

[`KyselyPlugin`](KyselyPlugin.md)

#### Returns

`SelectQueryBuilder`\<`DB`, `TB`, `O`\>
