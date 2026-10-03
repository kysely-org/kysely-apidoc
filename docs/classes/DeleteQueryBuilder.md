[**kysely**](../index.md)

***

[kysely](../modules.md) / DeleteQueryBuilder

# Class: DeleteQueryBuilder\<DB, TB, O\>

Defined in: [query-builder/delete-query-builder.ts:86](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L86)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Implements

- [`WhereInterface`](../interfaces/WhereInterface.md)\<`DB`, `TB`\>
- [`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md)\<`DB`, `TB`, `O`\>
- [`OutputInterface`](../interfaces/OutputInterface.md)\<`DB`, `TB`, `O`, `"deleted"`\>
- [`OrderByInterface`](../interfaces/OrderByInterface.md)\<`DB`, `TB`, \{ \}\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)\<`O`\>
- [`Executable`](../interfaces/Executable.md)\<`O`\>
- [`Explainable`](../interfaces/Explainable.md)
- [`Streamable`](../interfaces/Streamable.md)\<`O`\>

## Constructors

### Constructor

> **new DeleteQueryBuilder**\<`DB`, `TB`, `O`\>(`props`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:100](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L100)

#### Parameters

##### props

[`DeleteQueryBuilderProps`](../interfaces/DeleteQueryBuilderProps.md)

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

## Methods

### $assertType()

> **$assertType**\<`T`\>(): `O` *extends* `T` ? `DeleteQueryBuilder`\<`DB`, `TB`, `T`\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

Defined in: [query-builder/delete-query-builder.ts:1026](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1026)

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
import type { Species } from 'type-editor' // imaginary module

async function deletePersonAndPets(personId: number) {
  return await db
    .with('deleted_person', (qb) => qb
       .deleteFrom('person')
       .where('id', '=', personId)
       .returning('first_name')
       .$assertType<{ first_name: string }>()
    )
    .with('deleted_pets', (qb) => qb
      .deleteFrom('pet')
      .where('owner_id', '=', personId)
      .returning(['name as pet_name', 'species'])
      .$assertType<{ pet_name: string, species: Species }>()
    )
    .selectFrom(['deleted_person', 'deleted_pets'])
    .selectAll()
    .execute()
}
```

#### Type Parameters

##### T

`T`

#### Returns

`O` *extends* `T` ? `DeleteQueryBuilder`\<`DB`, `TB`, `T`\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

***

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/delete-query-builder.ts:862](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L862)

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

await db.deleteFrom('person')
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

> **$castTo**\<`C`\>(): `DeleteQueryBuilder`\<`DB`, `TB`, `C`\>

Defined in: [query-builder/delete-query-builder.ts:924](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L924)

Change the output type of the query.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `DeleteQueryBuilder` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `C`\>

***

### $if()

> **$if**\<`O2`\>(`condition`, `func`): `O2` *extends* [`DeleteResult`](DeleteResult.md) ? `DeleteQueryBuilder`\<`DB`, `TB`, [`DeleteResult`](DeleteResult.md)\> : `O2` *extends* `O` & `E` ? `DeleteQueryBuilder`\<`DB`, `TB`, `O` & `Partial`\<`E`\>\> : `DeleteQueryBuilder`\<`DB`, `TB`, `Partial`\<`O2`\>\>

Defined in: [query-builder/delete-query-builder.ts:901](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L901)

Call `func(this)` if `condition` is true.

This method is especially handy with optional selects. Any `returning` or `returningAll`
method calls add columns as optional fields to the output type when called inside
the `func` callback. This is because we can't know if those selections were actually
made before running the code.

You can also call any other methods inside the callback.

### Examples

```ts
async function deletePerson(id: number, returnLastName: boolean) {
  return await db
    .deleteFrom('person')
    .where('id', '=', id)
    .returning(['id', 'first_name'])
    .$if(returnLastName, (qb) => qb.returning('last_name'))
    .executeTakeFirstOrThrow()
}
```

Any selections added inside the `if` callback will be added as optional fields to the
output type since we can't know if the selections were actually made before running
the code. In the example above the return type of the `deletePerson` function is:

```ts
Promise<{
  id: number
  first_name: string
  last_name?: string
}>
```

#### Type Parameters

##### O2

`O2`

#### Parameters

##### condition

`boolean`

##### func

(`qb`) => `DeleteQueryBuilder`\<`any`, `any`, `O2`\>

#### Returns

`O2` *extends* [`DeleteResult`](DeleteResult.md) ? `DeleteQueryBuilder`\<`DB`, `TB`, [`DeleteResult`](DeleteResult.md)\> : `O2` *extends* `O` & `E` ? `DeleteQueryBuilder`\<`DB`, `TB`, `O` & `Partial`\<`E`\>\> : `DeleteQueryBuilder`\<`DB`, `TB`, `Partial`\<`O2`\>\>

***

### $narrowType()

> **$narrowType**\<`T`\>(): `DeleteQueryBuilder`\<`DB`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

Defined in: [query-builder/delete-query-builder.ts:977](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L977)

Narrows (parts of) the output type of the query.

Kysely tries to be as type-safe as possible, but in some cases we have to make
compromises for better maintainability and compilation performance. At present,
Kysely doesn't narrow the output type of the query when using [where](#where) and [returning](#returning) or [returningAll](#returningall).

This utility method is very useful for these situations, as it removes unncessary
runtime assertion/guard code. Its input type is limited to the output type
of the query, so you can't add a column that doesn't exist, or change a column's
type to something that doesn't exist in its union type.

### Examples

Turn this code:

```ts
import type { Person } from 'type-editor' // imaginary module

const person = await db.deleteFrom('person')
  .where('id', '=', 3)
  .where('nullable_column', 'is not', null)
  .returningAll()
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

const person = await db.deleteFrom('person')
  .where('id', '=', 3)
  .where('nullable_column', 'is not', null)
  .returningAll()
  .$narrowType<{ nullable_column: NotNull }>()
  .executeTakeFirstOrThrow()

functionThatExpectsPersonWithNonNullValue(person)
```

#### Type Parameters

##### T

`T`

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

***

### clearLimit()

> **clearLimit**(): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:711](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L711)

Clears the `limit` clause from the query.

### Examples

```ts
await db.deleteFrom('pet')
  .returningAll()
  .where('name', '=', 'Max')
  .limit(5)
  .clearLimit()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
delete from "pet" where "name" = "Max" returning *
```

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

***

### clearOrderBy()

> **clearOrderBy**(): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:766](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L766)

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

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

#### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`clearOrderBy`](../interfaces/OrderByInterface.md#clearorderby)

***

### clearReturning()

> **clearReturning**(): `DeleteQueryBuilder`\<`DB`, `TB`, [`DeleteResult`](DeleteResult.md)\>

Defined in: [query-builder/delete-query-builder.ts:684](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L684)

Clears all `returning` clauses from the query.

### Examples

```ts
await db.deleteFrom('pet')
  .returningAll()
  .where('name', '=', 'Max')
  .clearReturning()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
delete from "pet" where "name" = "Max"
```

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`DeleteResult`](DeleteResult.md)\>

***

### clearWhere()

> **clearWhere**(): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:144](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L144)

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

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`clearWhere`](../interfaces/WhereInterface.md#clearwhere)

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

Defined in: [query-builder/delete-query-builder.ts:1049](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1049)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

Defined in: [query-builder/delete-query-builder.ts:1056](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1056)

Executes the query and returns an array of rows.

Also see the [executeTakeFirst](../interfaces/Executable.md#executetakefirst) and [executeTakeFirstOrThrow](../interfaces/Executable.md#executetakefirstorthrow) methods.

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

#### Implementation of

[`Executable`](../interfaces/Executable.md).[`execute`](../interfaces/Executable.md#execute)

***

### executeTakeFirst()

> **executeTakeFirst**(`options?`): `Promise`\<[`SimplifySingleResult`](../types/SimplifySingleResult.md)\<`O`\>\>

Defined in: [query-builder/delete-query-builder.ts:1077](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1077)

Executes the query and returns the first result or undefined if
the query returned no result.

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<[`SimplifySingleResult`](../types/SimplifySingleResult.md)\<`O`\>\>

#### Implementation of

[`Executable`](../interfaces/Executable.md).[`executeTakeFirst`](../interfaces/Executable.md#executetakefirst)

***

### executeTakeFirstOrThrow()

> **executeTakeFirstOrThrow**(`errorConstructorOrOptions?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

Defined in: [query-builder/delete-query-builder.ts:1085](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1085)

Executes the query and returns the first result or throws if
the query returned no result.

By default an instance of [NoResultError](NoResultError.md) is thrown, but you can
provide a custom error class, or callback to throw a different
error.

#### Parameters

##### errorConstructorOrOptions?

[`NoResultErrorConstructor`](../types/NoResultErrorConstructor.md) \| [`ExecuteTakeFirstOrThrowOptions`](../interfaces/ExecuteTakeFirstOrThrowOptions.md) \| ((`node`) => `Error`)

#### Returns

`Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

#### Implementation of

[`Executable`](../interfaces/Executable.md).[`executeTakeFirstOrThrow`](../interfaces/Executable.md#executetakefirstorthrow)

***

### explain()

> **explain**\<`ER`\>(`format?`, `options?`): `Promise`\<`ER`[]\>

Defined in: [query-builder/delete-query-builder.ts:1134](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1134)

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

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`Promise`\<`ER`[]\>

#### Implementation of

[`Explainable`](../interfaces/Explainable.md).[`explain`](../interfaces/Explainable.md#explain)

***

### fullJoin()

#### Call Signature

> **fullJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`DeleteQueryBuilderWithFullJoin`](../types/DeleteQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:458](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L458)

Just like [innerJoin](#innerjoin) but adds a full join instead of an inner join.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

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

[`DeleteQueryBuilderWithFullJoin`](../types/DeleteQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **fullJoin**\<`TE`, `FN`\>(`table`, `callback`): [`DeleteQueryBuilderWithFullJoin`](../types/DeleteQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:464](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L464)

Just like [innerJoin](#innerjoin) but adds a full join instead of an inner join.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`DeleteQueryBuilderWithFullJoin`](../types/DeleteQueryBuilderWithFullJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### innerJoin()

#### Call Signature

> **innerJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`DeleteQueryBuilderWithInnerJoin`](../types/DeleteQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:404](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L404)

Joins another table to the query using an inner join.

### Examples

Simple usage by providing a table name and two columns to join:

```ts
const result = await db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  // `select` needs to come after the call to `innerJoin` so
  // that you can select from the joined table.
  .select(['person.id', 'pet.name'])
  .execute()

result[0].id
result[0].name
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", "pet"."name"
from "person"
inner join "pet"
on "pet"."owner_id" = "person"."id"
```

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

You can provide a function as the second argument to get a join
builder for creating more complex joins. The join builder has a
bunch of `on*` methods for building the `on` clause of the join.
There's basically an equivalent for every `where` method
(`on`, `onRef`, `onExists` etc.). You can do all the same things
with the `on` method that you can with the corresponding `where`
method. See the `where` method documentation for more examples.

```ts
await db.selectFrom('person')
  .innerJoin(
    'pet',
    (join) => join
      .onRef('pet.owner_id', '=', 'person.id')
      .on('pet.name', '=', 'Doggo')
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
```

You can join a subquery by providing a select query (or a callback)
as the first argument:

```ts
await db.selectFrom('person')
  .innerJoin(
    db.selectFrom('pet')
      .select(['owner_id', 'name'])
      .where('name', '=', 'Doggo')
      .as('doggos'),
    'doggos.owner_id',
    'person.id',
  )
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
inner join (
  select "owner_id", "name"
  from "pet"
  where "name" = $1
) as "doggos"
on "doggos"."owner_id" = "person"."id"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

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

[`DeleteQueryBuilderWithInnerJoin`](../types/DeleteQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **innerJoin**\<`TE`, `FN`\>(`table`, `callback`): [`DeleteQueryBuilderWithInnerJoin`](../types/DeleteQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:410](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L410)

Joins another table to the query using an inner join.

### Examples

Simple usage by providing a table name and two columns to join:

```ts
const result = await db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  // `select` needs to come after the call to `innerJoin` so
  // that you can select from the joined table.
  .select(['person.id', 'pet.name'])
  .execute()

result[0].id
result[0].name
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", "pet"."name"
from "person"
inner join "pet"
on "pet"."owner_id" = "person"."id"
```

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

You can provide a function as the second argument to get a join
builder for creating more complex joins. The join builder has a
bunch of `on*` methods for building the `on` clause of the join.
There's basically an equivalent for every `where` method
(`on`, `onRef`, `onExists` etc.). You can do all the same things
with the `on` method that you can with the corresponding `where`
method. See the `where` method documentation for more examples.

```ts
await db.selectFrom('person')
  .innerJoin(
    'pet',
    (join) => join
      .onRef('pet.owner_id', '=', 'person.id')
      .on('pet.name', '=', 'Doggo')
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
```

You can join a subquery by providing a select query (or a callback)
as the first argument:

```ts
await db.selectFrom('person')
  .innerJoin(
    db.selectFrom('pet')
      .select(['owner_id', 'name'])
      .where('name', '=', 'Doggo')
      .as('doggos'),
    'doggos.owner_id',
    'person.id',
  )
  .selectAll()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
inner join (
  select "owner_id", "name"
  from "pet"
  where "name" = $1
) as "doggos"
on "doggos"."owner_id" = "person"."id"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`DeleteQueryBuilderWithInnerJoin`](../types/DeleteQueryBuilderWithInnerJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### leftJoin()

#### Call Signature

> **leftJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`DeleteQueryBuilderWithLeftJoin`](../types/DeleteQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:422](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L422)

Just like [innerJoin](#innerjoin) but adds a left join instead of an inner join.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

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

[`DeleteQueryBuilderWithLeftJoin`](../types/DeleteQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **leftJoin**\<`TE`, `FN`\>(`table`, `callback`): [`DeleteQueryBuilderWithLeftJoin`](../types/DeleteQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:428](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L428)

Just like [innerJoin](#innerjoin) but adds a left join instead of an inner join.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`DeleteQueryBuilderWithLeftJoin`](../types/DeleteQueryBuilderWithLeftJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### limit()

> **limit**(`limit`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:797](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L797)

Adds a limit clause to the query.

A limit clause in a delete query is only supported by some dialects
like MySQL.

### Examples

Delete 5 oldest items in a table:

```ts
await db
  .deleteFrom('pet')
  .orderBy('created_at')
  .limit(5)
  .execute()
```

The generated SQL (MySQL):

```sql
delete from `pet` order by `created_at` limit ?
```

#### Parameters

##### limit

[`ValueExpression`](../types/ValueExpression.md)\<`DB`, `TB`, `number`\>

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

***

### modifyEnd()

> **modifyEnd**(`modifier`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:828](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L828)

This can be used to add any additional SQL to the end of the query.

### Examples

```ts
import { sql } from 'kysely'

await db.deleteFrom('person')
  .where('first_name', '=', 'John')
  .modifyEnd(sql`-- This is a comment`)
  .execute()
```

The generated SQL (MySQL):

```sql
delete from `person`
where `first_name` = "John" -- This is a comment
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orderBy()

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers?`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:721](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L721)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`exprs`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:731](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L731)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Deprecated

It does ~2-2.6x more compile-time instantiations compared to multiple chained `orderBy(expr, modifiers?)` calls (in `order by` clauses with reasonable item counts), and has broken autocompletion.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:742](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L742)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Deprecated

It does ~2.9x more compile-time instantiations compared to a `orderBy(expr, direction)` call.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:751](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L751)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Deprecated

Use `orderBy(expr, (ob) => ...)` instead.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

***

### output()

#### Call Signature

> **output**\<`OE`\>(`selections`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/delete-query-builder.ts:619](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L619)

Allows you to return data from modified rows.

On supported databases like MS SQL Server (MSSQL), this method can be chained
to `insert`, `update`, `delete` and `merge` queries to return data.

Also see the [outputAll](../interfaces/OutputInterface.md#outputall) method.

### Examples

Return one column:

```ts
const { id } = await db
  .insertInto('person')
  .output('inserted.id')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston',
    gender: 'female',
  })
  .executeTakeFirstOrThrow()
```

The generated SQL (MSSQL):

```sql
insert into "person" ("first_name", "last_name", "gender")
output "inserted"."id"
values (@1, @2, @3)
```

Return multiple columns:

```ts
const { old_first_name, old_last_name, new_first_name, new_last_name } = await db
  .updateTable('person')
  .set({ first_name: 'John', last_name: 'Doe' })
  .output([
    'deleted.first_name as old_first_name',
    'deleted.last_name as old_last_name',
    'inserted.first_name as new_first_name',
    'inserted.last_name as new_last_name',
  ])
  .where('created_at', '<', new Date())
  .executeTakeFirstOrThrow()
```

The generated SQL (MSSQL):

```sql
update "person"
set "first_name" = @1, "last_name" = @2
output "deleted"."first_name" as "old_first_name",
  "deleted"."last_name" as "old_last_name",
  "inserted"."first_name" as "new_first_name",
  "inserted"."last_name" as "new_last_name"
where "created_at" < @3
```

Return arbitrary expressions:

```ts
import { sql } from 'kysely'

const { full_name } = await db
  .deleteFrom('person')
  .output((eb) => sql<string>`concat(${eb.ref('deleted.first_name')}, ' ', ${eb.ref('deleted.last_name')})`.as('full_name'))
  .where('created_at', '<', new Date())
  .executeTakeFirstOrThrow()
```

The generated SQL (MSSQL):

```sql
delete from "person"
output concat("deleted"."first_name", ' ', "deleted"."last_name") as "full_name"
where "created_at" < @1
```

Return the action performed on the row:

```ts
await db
  .mergeInto('person')
  .using('pet', 'pet.owner_id', 'person.id')
  .whenMatched()
  .thenDelete()
  .whenNotMatched()
  .thenInsertValues({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'male'
  })
  .output([
    'inserted.id as inserted_id',
    'deleted.id as deleted_id',
  ])
  .execute()
```

The generated SQL (MSSQL):

```sql
merge into "person"
using "pet" on "pet"."owner_id" = "person"."id"
when matched then delete
when not matched then
insert ("first_name", "last_name", "gender")
values (@1, @2, @3)
output "inserted"."id" as "inserted_id", "deleted"."id" as "deleted_id"
```

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, `"deleted"`\>, `"deleted"`\>

##### Parameters

###### selections

readonly `OE`[]

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`CB`\>(`callback`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

Defined in: [query-builder/delete-query-builder.ts:627](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L627)

##### Type Parameters

###### CB

`CB` *extends* [`OutputCallback`](../types/OutputCallback.md)\<`DB`, `TB`, `"deleted"`\>

##### Parameters

###### callback

`CB`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`OE`\>(`selection`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/delete-query-builder.ts:635](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L635)

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, `"deleted"`\>, `"deleted"`\>

##### Parameters

###### selection

`OE`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

***

### outputAll()

> **outputAll**(`table`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

Defined in: [query-builder/delete-query-builder.ts:653](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L653)

Adds an `output {prefix}.*` to an `insert`/`update`/`delete`/`merge` query on databases
that support `output` such as MS SQL Server (MSSQL).

Also see the [output](../interfaces/OutputInterface.md#output) method.

#### Parameters

##### table

`"deleted"`

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

#### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`outputAll`](../interfaces/OutputInterface.md#outputall)

***

### returning()

#### Call Signature

> **returning**\<`SE`\>(`selections`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/delete-query-builder.ts:483](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L483)

Allows you to return data from modified rows.

On supported databases like PostgreSQL, this method can be chained to
`insert`, `update`, `delete` and `merge` queries to return data.

Also see the [returningAll](../interfaces/ReturningInterface.md#returningall) method.

### Examples

Return one column:

```ts
const { id } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning('id')
  .executeTakeFirstOrThrow()
```

Return multiple columns:

```ts
const { id, last_name } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning(['id', 'last_name'])
  .executeTakeFirstOrThrow()
```

Return arbitrary expressions:

```ts
import { sql } from 'kysely'

const { id, full_name, first_pet_id } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning((eb) => [
    'id as id',
    sql<string>`concat(first_name, ' ', last_name)`.as('full_name'),
    eb.selectFrom('pet').select('pet.id').limit(1).as('first_pet_id')
  ])
  .executeTakeFirstOrThrow()
```

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selections

readonly `SE`[]

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`CB`\>(`callback`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

Defined in: [query-builder/delete-query-builder.ts:487](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L487)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`SE`\>(`selection`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/delete-query-builder.ts:491](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L491)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selection

`SE`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

***

### returningAll()

#### Call Signature

> **returningAll**\<`T`\>(`tables`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/delete-query-builder.ts:599](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L599)

Adds `returning *` or `returning table.*` clause to the query.

### Examples

Return all columns.

```ts
const pets = await db
  .deleteFrom('pet')
  .returningAll()
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "pet" returning *
```

Return all columns from all tables

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Zoro')
  .returningAll()
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning *
```

Return all columns from a single table.

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Itachi')
  .returningAll('pet')
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning "pet".*
```

Return all columns from multiple tables.

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Luffy')
  .returningAll(['toy', 'pet'])
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning "toy".*, "pet".*
```

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### tables

readonly `T`[]

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

#### Call Signature

> **returningAll**\<`T`\>(`table`): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/delete-query-builder.ts:603](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L603)

Adds `returning *` or `returning table.*` clause to the query.

### Examples

Return all columns.

```ts
const pets = await db
  .deleteFrom('pet')
  .returningAll()
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "pet" returning *
```

Return all columns from all tables

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Zoro')
  .returningAll()
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning *
```

Return all columns from a single table.

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Itachi')
  .returningAll('pet')
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning "pet".*
```

Return all columns from multiple tables.

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Luffy')
  .returningAll(['toy', 'pet'])
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning "toy".*, "pet".*
```

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### table

`T`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

#### Call Signature

> **returningAll**(): `DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

Defined in: [query-builder/delete-query-builder.ts:607](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L607)

Adds `returning *` or `returning table.*` clause to the query.

### Examples

Return all columns.

```ts
const pets = await db
  .deleteFrom('pet')
  .returningAll()
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "pet" returning *
```

Return all columns from all tables

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Zoro')
  .returningAll()
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning *
```

Return all columns from a single table.

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Itachi')
  .returningAll('pet')
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning "pet".*
```

Return all columns from multiple tables.

```ts
const result = await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Luffy')
  .returningAll(['toy', 'pet'])
  .execute()
```

The generated SQL (PostgreSQL)

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
and "pet"."owner_id" = "person"."id"
and "person"."first_name" = $1
returning "toy".*, "pet".*
```

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

***

### rightJoin()

#### Call Signature

> **rightJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`DeleteQueryBuilderWithRightJoin`](../types/DeleteQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:440](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L440)

Just like [innerJoin](#innerjoin) but adds a right join instead of an inner join.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

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

[`DeleteQueryBuilderWithRightJoin`](../types/DeleteQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

#### Call Signature

> **rightJoin**\<`TE`, `FN`\>(`table`, `callback`): [`DeleteQueryBuilderWithRightJoin`](../types/DeleteQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

Defined in: [query-builder/delete-query-builder.ts:446](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L446)

Just like [innerJoin](#innerjoin) but adds a right join instead of an inner join.

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TB`, `TE`\>

##### Parameters

###### table

`TE`

###### callback

`FN`

##### Returns

[`DeleteQueryBuilderWithRightJoin`](../types/DeleteQueryBuilderWithRightJoin.md)\<`DB`, `TB`, `O`, `TE`\>

***

### stream()

> **stream**(`chunkSizeOrOptions?`): `AsyncIterableIterator`\<`O`\>

Defined in: [query-builder/delete-query-builder.ts:1112](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1112)

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

`number` \| [`StreamOptions`](../interfaces/StreamOptions.md)

#### Returns

`AsyncIterableIterator`\<`O`\>

#### Implementation of

[`Streamable`](../interfaces/Streamable.md).[`stream`](../interfaces/Streamable.md#stream)

***

### toOperationNode()

> **toOperationNode**(): [`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

Defined in: [query-builder/delete-query-builder.ts:1042](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1042)

#### Returns

[`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### top()

> **top**(`expression`, `modifiers?`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:190](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L190)

Changes a `delete from` query into a `delete top from` query.

`top` clause is only supported by some dialects like MS SQL Server.

### Examples

Delete the first 5 rows:

```ts
await db
  .deleteFrom('person')
  .top(5)
  .where('age', '>', 18)
  .executeTakeFirstOrThrow()
```

The generated SQL (MS SQL Server):

```sql
delete top(5) from "person" where "age" > @1
```

Delete the first 50% of rows:

```ts
await db
  .deleteFrom('person')
  .top(50, 'percent')
  .where('age', '>', 18)
  .executeTakeFirstOrThrow()
```

The generated SQL (MS SQL Server):

```sql
delete top(50) percent from "person" where "age" > @1
```

#### Parameters

##### expression

`number` \| `bigint`

##### modifiers?

`"percent"`

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

***

### using()

#### Call Signature

> **using**\<`TE`\>(`tables`): `DeleteQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

Defined in: [query-builder/delete-query-builder.ts:277](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L277)

Adds a `using` clause to the query.

This clause allows adding additional tables to the query for filtering/returning
only. Usually a non-standard syntactic-sugar alternative to a `where` with a sub-query.

### Examples:

```ts
await db
  .deleteFrom('pet')
  .using('person')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Bob')
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
delete from "pet"
using "person"
where "pet"."owner_id" = "person"."id"
  and "person"."first_name" = $1
```

On supported databases such as MySQL, this clause allows using joins, but requires
at least one of the tables after the `from` keyword to be also named after
the `using` keyword. See also [innerJoin](#innerjoin), [leftJoin](#leftjoin), [rightJoin](#rightjoin)
and [fullJoin](#fulljoin).

```ts
await db
  .deleteFrom('pet')
  .using('pet')
  .leftJoin('person', 'person.id', 'pet.owner_id')
  .where('person.first_name', '=', 'Bob')
  .executeTakeFirstOrThrow()
```

The generated SQL (MySQL):

```sql
delete from `pet`
using `pet`
left join `person` on `person`.`id` = `pet`.`owner_id`
where `person`.`first_name` = ?
```

You can also chain multiple invocations of this method, or pass an array to
a single invocation to name multiple tables.

```ts
await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Bob')
  .returning('pet.name')
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
  and "pet"."owner_id" = "person"."id"
  and "person"."first_name" = $1
returning "pet"."name"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, keyof `DB`\>

##### Parameters

###### tables

`TE`[]

##### Returns

`DeleteQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

#### Call Signature

> **using**\<`TE`\>(`table`): `DeleteQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

Defined in: [query-builder/delete-query-builder.ts:281](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L281)

Adds a `using` clause to the query.

This clause allows adding additional tables to the query for filtering/returning
only. Usually a non-standard syntactic-sugar alternative to a `where` with a sub-query.

### Examples:

```ts
await db
  .deleteFrom('pet')
  .using('person')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Bob')
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
delete from "pet"
using "person"
where "pet"."owner_id" = "person"."id"
  and "person"."first_name" = $1
```

On supported databases such as MySQL, this clause allows using joins, but requires
at least one of the tables after the `from` keyword to be also named after
the `using` keyword. See also [innerJoin](#innerjoin), [leftJoin](#leftjoin), [rightJoin](#rightjoin)
and [fullJoin](#fulljoin).

```ts
await db
  .deleteFrom('pet')
  .using('pet')
  .leftJoin('person', 'person.id', 'pet.owner_id')
  .where('person.first_name', '=', 'Bob')
  .executeTakeFirstOrThrow()
```

The generated SQL (MySQL):

```sql
delete from `pet`
using `pet`
left join `person` on `person`.`id` = `pet`.`owner_id`
where `person`.`first_name` = ?
```

You can also chain multiple invocations of this method, or pass an array to
a single invocation to name multiple tables.

```ts
await db
  .deleteFrom('toy')
  .using(['pet', 'person'])
  .whereRef('toy.pet_id', '=', 'pet.id')
  .whereRef('pet.owner_id', '=', 'person.id')
  .where('person.first_name', '=', 'Bob')
  .returning('pet.name')
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
delete from "toy"
using "pet", "person"
where "toy"."pet_id" = "pet"."id"
  and "pet"."owner_id" = "person"."id"
  and "person"."first_name" = $1
returning "pet"."name"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, keyof `DB`\>

##### Parameters

###### table

`TE`

##### Returns

`DeleteQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

***

### where()

#### Call Signature

> **where**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:104](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L104)

Adds a `where` expression to the query.

Calling this method multiple times will combine the expressions using `and`.

Also see [whereRef](../interfaces/WhereInterface.md#whereref)

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
the methods of the [ExpressionBuilder](../interfaces/ExpressionBuilder.md) passed to the callback:

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

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

#### Call Signature

> **where**\<`E`\>(`expression`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:113](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L113)

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

***

### whereRef()

> **whereRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:127](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L127)

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

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`whereRef`](../interfaces/WhereInterface.md#whereref)

***

### withPlugin()

> **withPlugin**(`plugin`): `DeleteQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:1035](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1035)

Returns a copy of this DeleteQueryBuilder instance with the given plugin installed.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`DeleteQueryBuilder`\<`DB`, `TB`, `O`\>
