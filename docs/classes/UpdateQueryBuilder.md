[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateQueryBuilder

# Class: UpdateQueryBuilder\<DB, UT, TB, O\>

Defined in: [query-builder/update-query-builder.ts:92](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L92)

## Type Parameters

### DB

`DB`

### UT

`UT` *extends* keyof `DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Implements

- [`WhereInterface`](../interfaces/WhereInterface.md)\<`DB`, `TB`\>
- [`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md)\<`DB`, `TB`, `O`\>
- [`OutputInterface`](../interfaces/OutputInterface.md)\<`DB`, `TB`, `O`\>
- [`OrderByInterface`](../interfaces/OrderByInterface.md)\<`DB`, `TB`, `never`\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)\<`O`\>
- [`Executable`](../interfaces/Executable.md)\<`O`\>
- [`Explainable`](../interfaces/Explainable.md)
- [`Streamable`](../interfaces/Streamable.md)\<`O`\>

## Constructors

### Constructor

> **new UpdateQueryBuilder**\<`DB`, `UT`, `TB`, `O`\>(`props`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:106](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L106)

#### Parameters

##### props

[`UpdateQueryBuilderProps`](../interfaces/UpdateQueryBuilderProps.md)

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

## Methods

### $assertType()

> **$assertType**\<`T`\>(): `O` *extends* `T` ? `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `T`\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

Defined in: [query-builder/update-query-builder.ts:1123](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1123)

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
import type { PersonUpdate, PetUpdate, Species } from 'type-editor' // imaginary module

const person = {
  id: 1,
  gender: 'other',
} satisfies PersonUpdate

const pet = {
  name: 'Fluffy',
} satisfies PetUpdate

const result = await db
  .with('updated_person', (qb) => qb
    .updateTable('person')
    .set(person)
    .where('id', '=', person.id)
    .returning('first_name')
    .$assertType<{ first_name: string }>()
  )
  .with('updated_pet', (qb) => qb
    .updateTable('pet')
    .set(pet)
    .where('owner_id', '=', person.id)
    .returning(['name as pet_name', 'species'])
    .$assertType<{ pet_name: string, species: Species }>()
  )
  .selectFrom(['updated_person', 'updated_pet'])
  .selectAll()
  .executeTakeFirstOrThrow()
```

#### Type Parameters

##### T

`T`

#### Returns

`O` *extends* `T` ? `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `T`\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

***

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/update-query-builder.ts:930](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L930)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

If you want to conditionally call a method on `this`, see
the [$if](#if) method.

### Examples

The next example uses a helper function `log` to log a query:

```ts
import type { Compilable } from 'kysely'
import type { PersonUpdate } from 'type-editor' // imaginary module

function log<T extends Compilable>(qb: T): T {
  console.log(qb.compile())
  return qb
}

const values = {
  first_name: 'John',
} satisfies PersonUpdate

db.updateTable('person')
  .set(values)
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

> **$castTo**\<`C`\>(): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `C`\>

Defined in: [query-builder/update-query-builder.ts:1003](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1003)

Change the output type of the query.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `UpdateQueryBuilder` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `C`\>

***

### $if()

> **$if**\<`O2`\>(`condition`, `func`): `unknown` *extends* `O2` ? `UpdateQueryBuilder`\<`any`, `any`, `any`, `O2`\> : `O2` *extends* [`UpdateResult`](UpdateResult.md) ? `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`UpdateResult`](UpdateResult.md)\> : `O2` *extends* `O` & `E` ? `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O` & `Partial`\<`E`\>\> : `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `Partial`\<`O2`\>\>

Defined in: [query-builder/update-query-builder.ts:972](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L972)

Call `func(this)` if `condition` is true.

This method is especially handy with optional selects. Any `returning` or `returningAll`
method calls add columns as optional fields to the output type when called inside
the `func` callback. This is because we can't know if those selections were actually
made before running the code.

You can also call any other methods inside the callback.

### Examples

```ts
import type { PersonUpdate } from 'type-editor' // imaginary module

async function updatePerson(id: number, updates: PersonUpdate, returnLastName: boolean) {
  return await db
    .updateTable('person')
    .set(updates)
    .where('id', '=', id)
    .returning(['id', 'first_name'])
    .$if(returnLastName, (qb) => qb.returning('last_name'))
    .executeTakeFirstOrThrow()
}
```

Any selections added inside the `if` callback will be added as optional fields to the
output type since we can't know if the selections were actually made before running
the code. In the example above the return type of the `updatePerson` function is:

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

(`qb`) => `UpdateQueryBuilder`\<`any`, `any`, `any`, `O2`\>

#### Returns

`unknown` *extends* `O2` ? `UpdateQueryBuilder`\<`any`, `any`, `any`, `O2`\> : `O2` *extends* [`UpdateResult`](UpdateResult.md) ? `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`UpdateResult`](UpdateResult.md)\> : `O2` *extends* `O` & `E` ? `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O` & `Partial`\<`E`\>\> : `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `Partial`\<`O2`\>\>

***

### $narrowType()

> **$narrowType**\<`T`\>(): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

Defined in: [query-builder/update-query-builder.ts:1065](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1065)

Narrows (parts of) the output type of the query.

Kysely tries to be as type-safe as possible, but in some cases we have to make
compromises for better maintainability and compilation performance. At present,
Kysely doesn't narrow the output type of the query based on [set](#set) input
when using [where](#where) and/or [returning](#returning) or [returningAll](#returningall).

This utility method is very useful for these situations, as it removes unncessary
runtime assertion/guard code. Its input type is limited to the output type
of the query, so you can't add a column that doesn't exist, or change a column's
type to something that doesn't exist in its union type.

### Examples

Turn this code:

```ts
import type { Person } from 'type-editor' // imaginary module

const id = 1
const now = new Date().toISOString()

const person = await db.updateTable('person')
  .set({ deleted_at: now })
  .where('id', '=', id)
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

const id = 1
const now = new Date().toISOString()

const person = await db.updateTable('person')
  .set({ deleted_at: now })
  .where('id', '=', id)
  .where('nullable_column', 'is not', null)
  .returningAll()
  .$narrowType<{ deleted_at: Date; nullable_column: NotNull }>()
  .executeTakeFirstOrThrow()

functionThatExpectsPersonWithNonNullValue(person)
```

#### Type Parameters

##### T

`T`

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

***

### clearOrderBy()

> **clearOrderBy**(): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:506](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L506)

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

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

#### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`clearOrderBy`](../interfaces/OrderByInterface.md#clearorderby)

***

### clearReturning()

> **clearReturning**(): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`UpdateResult`](UpdateResult.md)\>

Defined in: [query-builder/update-query-builder.ts:893](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L893)

Clears all `returning` clauses from the query.

### Examples

```ts
db.updateTable('person')
  .returningAll()
  .set({ age: 39 })
  .where('first_name', '=', 'John')
  .clearReturning()
```

The generated SQL(PostgreSQL):

```sql
update "person" set "age" = 39 where "first_name" = "John"
```

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`UpdateResult`](UpdateResult.md)\>

***

### clearWhere()

> **clearWhere**(): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:150](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L150)

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

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`clearWhere`](../interfaces/WhereInterface.md#clearwhere)

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

Defined in: [query-builder/update-query-builder.ts:1146](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1146)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

Defined in: [query-builder/update-query-builder.ts:1153](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1153)

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

Defined in: [query-builder/update-query-builder.ts:1179](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1179)

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

Defined in: [query-builder/update-query-builder.ts:1187](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1187)

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

Defined in: [query-builder/update-query-builder.ts:1236](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1236)

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

### from()

#### Call Signature

> **from**\<`TE`\>(`table`): `UpdateQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, `UT`, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

Defined in: [query-builder/update-query-builder.ts:236](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L236)

Adds a from clause to the update query.

This is supported only on some databases like PostgreSQL.

The API is the same as [QueryCreator.selectFrom](QueryCreator.md#selectfrom).

### Examples

```ts
db.updateTable('person')
  .from('pet')
  .set((eb) => ({
    first_name: eb.ref('pet.name')
  }))
  .whereRef('pet.owner_id', '=', 'person.id')
```

The generated SQL (PostgreSQL):

```sql
update "person"
set "first_name" = "pet"."name"
from "pet"
where "pet"."owner_id" = "person"."id"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### table

`TE`

##### Returns

`UpdateQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, `UT`, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

#### Call Signature

> **from**\<`TE`\>(`table`): `UpdateQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, `UT`, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

Defined in: [query-builder/update-query-builder.ts:240](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L240)

Adds a from clause to the update query.

This is supported only on some databases like PostgreSQL.

The API is the same as [QueryCreator.selectFrom](QueryCreator.md#selectfrom).

### Examples

```ts
db.updateTable('person')
  .from('pet')
  .set((eb) => ({
    first_name: eb.ref('pet.name')
  }))
  .whereRef('pet.owner_id', '=', 'person.id')
```

The generated SQL (PostgreSQL):

```sql
update "person"
set "first_name" = "pet"."name"
from "pet"
where "pet"."owner_id" = "person"."id"
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### table

`TE`[]

##### Returns

`UpdateQueryBuilder`\<[`From`](../types/From.md)\<`DB`, `TE`\>, `UT`, [`FromTables`](../types/FromTables.md)\<`DB`, `TB`, `TE`\>, `O`\>

***

### fullJoin()

#### Call Signature

> **fullJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`UpdateQueryBuilderWithFullJoin`](../types/UpdateQueryBuilderWithFullJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:429](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L429)

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

[`UpdateQueryBuilderWithFullJoin`](../types/UpdateQueryBuilderWithFullJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

#### Call Signature

> **fullJoin**\<`TE`, `FN`\>(`table`, `callback`): [`UpdateQueryBuilderWithFullJoin`](../types/UpdateQueryBuilderWithFullJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:439](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L439)

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

[`UpdateQueryBuilderWithFullJoin`](../types/UpdateQueryBuilderWithFullJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

***

### innerJoin()

#### Call Signature

> **innerJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`UpdateQueryBuilderWithInnerJoin`](../types/UpdateQueryBuilderWithInnerJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:363](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L363)

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

[`UpdateQueryBuilderWithInnerJoin`](../types/UpdateQueryBuilderWithInnerJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

#### Call Signature

> **innerJoin**\<`TE`, `FN`\>(`table`, `callback`): [`UpdateQueryBuilderWithInnerJoin`](../types/UpdateQueryBuilderWithInnerJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:373](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L373)

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

[`UpdateQueryBuilderWithInnerJoin`](../types/UpdateQueryBuilderWithInnerJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

***

### leftJoin()

#### Call Signature

> **leftJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`UpdateQueryBuilderWithLeftJoin`](../types/UpdateQueryBuilderWithLeftJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:385](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L385)

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

[`UpdateQueryBuilderWithLeftJoin`](../types/UpdateQueryBuilderWithLeftJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

#### Call Signature

> **leftJoin**\<`TE`, `FN`\>(`table`, `callback`): [`UpdateQueryBuilderWithLeftJoin`](../types/UpdateQueryBuilderWithLeftJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:395](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L395)

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

[`UpdateQueryBuilderWithLeftJoin`](../types/UpdateQueryBuilderWithLeftJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

***

### limit()

> **limit**(`limit`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:534](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L534)

Adds a limit clause to the update query for supported databases, such as MySQL.

### Examples

Update the first 2 rows in the 'person' table:

```ts
await db
  .updateTable('person')
  .set({ first_name: 'Foo' })
  .limit(2)
  .execute()
```

The generated SQL (MySQL):

```sql
update `person` set `first_name` = ? limit ?
```

#### Parameters

##### limit

[`ValueExpression`](../types/ValueExpression.md)\<`DB`, `TB`, `number`\>

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

***

### modifyEnd()

> **modifyEnd**(`modifier`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:864](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L864)

This can be used to add any additional SQL to the end of the query.

### Examples

```ts
import { sql } from 'kysely'

await db.updateTable('person')
  .set({ age: 39 })
  .where('first_name', '=', 'John')
  .modifyEnd(sql.raw('-- This is a comment'))
  .execute()
```

The generated SQL (MySQL):

```sql
update `person`
set `age` = 39
where `first_name` = "John" -- This is a comment
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

***

### orderBy()

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers?`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:461](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L461)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`exprs`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:471](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L471)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Deprecated

It does ~2-2.6x more compile-time instantiations compared to multiple chained `orderBy(expr, modifiers?)` calls (in `order by` clauses with reasonable item counts), and has broken autocompletion.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:482](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L482)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Deprecated

It does ~2.9x more compile-time instantiations compared to a `orderBy(expr, direction)` call.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:491](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L491)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

##### Remarks

This is only supported by some dialects like MySQL or SQLite with `SQLITE_ENABLE_UPDATE_DELETE_LIMIT`.

##### Deprecated

Use `orderBy(expr, (ob) => ...)` instead.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

***

### output()

#### Call Signature

> **output**\<`OE`\>(`selections`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/update-query-builder.ts:792](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L792)

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

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `UT`, [`OutputPrefix`](../types/OutputPrefix.md)\>, [`OutputPrefix`](../types/OutputPrefix.md)\>

##### Parameters

###### selections

readonly `OE`[]

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`CB`\>(`callback`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

Defined in: [query-builder/update-query-builder.ts:801](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L801)

##### Type Parameters

###### CB

`CB` *extends* [`OutputCallback`](../types/OutputCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`OE`\>(`selection`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/update-query-builder.ts:810](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L810)

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, [`OutputPrefix`](../types/OutputPrefix.md)\>, [`OutputPrefix`](../types/OutputPrefix.md)\>

##### Parameters

###### selection

`OE`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

***

### outputAll()

> **outputAll**(`table`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

Defined in: [query-builder/update-query-builder.ts:829](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L829)

Adds an `output {prefix}.*` to an `insert`/`update`/`delete`/`merge` query on databases
that support `output` such as MS SQL Server (MSSQL).

Also see the [output](../interfaces/OutputInterface.md#output) method.

#### Parameters

##### table

[`OutputPrefix`](../types/OutputPrefix.md)

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

#### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`outputAll`](../interfaces/OutputInterface.md#outputall)

***

### returning()

#### Call Signature

> **returning**\<`SE`\>(`selections`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/update-query-builder.ts:748](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L748)

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

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`CB`\>(`callback`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

Defined in: [query-builder/update-query-builder.ts:752](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L752)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`SE`\>(`selection`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/update-query-builder.ts:756](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L756)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selection

`SE`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

***

### returningAll()

#### Call Signature

> **returningAll**\<`T`\>(`tables`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/update-query-builder.ts:772](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L772)

Adds a `returning *` or `returning table.*` to an insert/update/delete/merge
query on databases that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/MultiTableReturningInterface.md#returning) method.

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### tables

readonly `T`[]

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

#### Call Signature

> **returningAll**\<`T`\>(`table`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/update-query-builder.ts:776](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L776)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/ReturningInterface.md#returning) method.

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### table

`T`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

#### Call Signature

> **returningAll**(): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

Defined in: [query-builder/update-query-builder.ts:780](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L780)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/ReturningInterface.md#returning) method.

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

***

### rightJoin()

#### Call Signature

> **rightJoin**\<`TE`, `K1`, `K2`\>(`table`, `k1`, `k2`): [`UpdateQueryBuilderWithRightJoin`](../types/UpdateQueryBuilderWithRightJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:407](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L407)

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

[`UpdateQueryBuilderWithRightJoin`](../types/UpdateQueryBuilderWithRightJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

#### Call Signature

> **rightJoin**\<`TE`, `FN`\>(`table`, `callback`): [`UpdateQueryBuilderWithRightJoin`](../types/UpdateQueryBuilderWithRightJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

Defined in: [query-builder/update-query-builder.ts:417](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L417)

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

[`UpdateQueryBuilderWithRightJoin`](../types/UpdateQueryBuilderWithRightJoin.md)\<`DB`, `UT`, `TB`, `O`, `TE`\>

***

### set()

#### Call Signature

> **set**(`update`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:721](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L721)

Sets the values to update for an [update](Kysely.md#updatetable) query.

This method takes an object whose keys are column names and values are
values to update. In addition to the column's type, the values can be
any expressions such as raw [sql](../variables/sql.md) snippets or select queries.

This method also accepts a callback that returns the update object. The
callback takes an instance of [ExpressionBuilder](../interfaces/ExpressionBuilder.md) as its only argument.
The expression builder can be used to create arbitrary update expressions.

The return value of an update query is an instance of [UpdateResult](UpdateResult.md).
You can use the [returning](#returning) method on supported databases to get out
the updated rows.

### Examples

<!-- siteExample("update", "Single row", 10) -->

Update a row in `person` table:

```ts
const result = await db
  .updateTable('person')
  .set({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .where('id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
update "person" set "first_name" = $1, "last_name" = $2 where "id" = $3
```

<!-- siteExample("update", "Complex values", 20) -->

As always, you can provide a callback to the `set` method to get access
to an expression builder:

```ts
const result = await db
  .updateTable('person')
  .set((eb) => ({
    age: eb('age', '+', 1),
    first_name: eb.selectFrom('pet').select('name').limit(1),
    last_name: 'updated',
  }))
  .where('id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
update "person"
set
  "first_name" = (select "name" from "pet" limit $1),
  "age" = "age" + $2,
  "last_name" = $3
where
  "id" = $4
```

If you provide two arguments the first one is interpreted as the column
(or other target) and the second as the value:

```ts
import { sql } from 'kysely'

const result = await db
  .updateTable('person')
  .set('first_name', 'Foo')
  // As always, both arguments can be arbitrary expressions or
  // callbacks that give you access to an expression builder:
  .set(sql<string>`address['postalCode']`, (eb) => eb.val('61710'))
  .where('id', '=', 1)
  .executeTakeFirst()
```

On PostgreSQL you can chain `returning` to the query to get
the updated rows' columns (or any other expression) as the
return value:

```ts
const row = await db
  .updateTable('person')
  .set({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .where('id', '=', 1)
  .returning('id')
  .executeTakeFirstOrThrow()

row.id
```

The generated SQL (PostgreSQL):

```sql
update "person" set "first_name" = $1, "last_name" = $2 where "id" = $3 returning "id"
```

In addition to primitives, the values can arbitrary expressions including
raw `sql` snippets or subqueries:

```ts
import { sql } from 'kysely'

const result = await db
  .updateTable('person')
  .set(({ selectFrom, ref, fn, eb }) => ({
    first_name: selectFrom('person').select('first_name').limit(1),
    middle_name: ref('first_name'),
    age: eb('age', '+', 1),
    last_name: sql<string>`${'Ani'} || ${'ston'}`,
  }))
  .where('id', '=', 1)
  .executeTakeFirst()

console.log(result.numUpdatedRows)
```

The generated SQL (PostgreSQL):

```sql
update "person" set
"first_name" = (select "first_name" from "person" limit $1),
"middle_name" = "first_name",
"age" = "age" + $2,
"last_name" = $3 || $4
where "id" = $5
```

<!-- siteExample("update", "MySQL joins", 30) -->

MySQL allows you to join tables directly to the "main" table and update
rows of all joined tables. This is possible by passing all tables to the
`updateTable` method as a list and adding the `ON` conditions as `WHERE`
statements. You can then use the `set(column, value)` variant to update
columns using table qualified names.

The `UpdateQueryBuilder` also has `innerJoin` etc. join methods, but those
can only be used as part of a PostgreSQL `update set from join` query.
Due to type complexity issues, we unfortunately can't make the same
methods work in both cases.

```ts
const result = await db
  .updateTable(['person', 'pet'])
  .set('person.first_name', 'Updated person')
  .set('pet.name', 'Updated doggo')
  .whereRef('person.id', '=', 'pet.owner_id')
  .where('person.id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (MySQL):

```sql
update
  `person`,
  `pet`
set
  `person`.`first_name` = ?,
  `pet`.`name` = ?
where
  `person`.`id` = `pet`.`owner_id`
  and `person`.`id` = ?
```

##### Parameters

###### update

[`UpdateObjectExpression`](../types/UpdateObjectExpression.md)\<`DB`, `TB`, `UT`\>

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

#### Call Signature

> **set**\<`RE`\>(`key`, `value`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:725](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L725)

Sets the values to update for an [update](Kysely.md#updatetable) query.

This method takes an object whose keys are column names and values are
values to update. In addition to the column's type, the values can be
any expressions such as raw [sql](../variables/sql.md) snippets or select queries.

This method also accepts a callback that returns the update object. The
callback takes an instance of [ExpressionBuilder](../interfaces/ExpressionBuilder.md) as its only argument.
The expression builder can be used to create arbitrary update expressions.

The return value of an update query is an instance of [UpdateResult](UpdateResult.md).
You can use the [returning](#returning) method on supported databases to get out
the updated rows.

### Examples

<!-- siteExample("update", "Single row", 10) -->

Update a row in `person` table:

```ts
const result = await db
  .updateTable('person')
  .set({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .where('id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
update "person" set "first_name" = $1, "last_name" = $2 where "id" = $3
```

<!-- siteExample("update", "Complex values", 20) -->

As always, you can provide a callback to the `set` method to get access
to an expression builder:

```ts
const result = await db
  .updateTable('person')
  .set((eb) => ({
    age: eb('age', '+', 1),
    first_name: eb.selectFrom('pet').select('name').limit(1),
    last_name: 'updated',
  }))
  .where('id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
update "person"
set
  "first_name" = (select "name" from "pet" limit $1),
  "age" = "age" + $2,
  "last_name" = $3
where
  "id" = $4
```

If you provide two arguments the first one is interpreted as the column
(or other target) and the second as the value:

```ts
import { sql } from 'kysely'

const result = await db
  .updateTable('person')
  .set('first_name', 'Foo')
  // As always, both arguments can be arbitrary expressions or
  // callbacks that give you access to an expression builder:
  .set(sql<string>`address['postalCode']`, (eb) => eb.val('61710'))
  .where('id', '=', 1)
  .executeTakeFirst()
```

On PostgreSQL you can chain `returning` to the query to get
the updated rows' columns (or any other expression) as the
return value:

```ts
const row = await db
  .updateTable('person')
  .set({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .where('id', '=', 1)
  .returning('id')
  .executeTakeFirstOrThrow()

row.id
```

The generated SQL (PostgreSQL):

```sql
update "person" set "first_name" = $1, "last_name" = $2 where "id" = $3 returning "id"
```

In addition to primitives, the values can arbitrary expressions including
raw `sql` snippets or subqueries:

```ts
import { sql } from 'kysely'

const result = await db
  .updateTable('person')
  .set(({ selectFrom, ref, fn, eb }) => ({
    first_name: selectFrom('person').select('first_name').limit(1),
    middle_name: ref('first_name'),
    age: eb('age', '+', 1),
    last_name: sql<string>`${'Ani'} || ${'ston'}`,
  }))
  .where('id', '=', 1)
  .executeTakeFirst()

console.log(result.numUpdatedRows)
```

The generated SQL (PostgreSQL):

```sql
update "person" set
"first_name" = (select "first_name" from "person" limit $1),
"middle_name" = "first_name",
"age" = "age" + $2,
"last_name" = $3 || $4
where "id" = $5
```

<!-- siteExample("update", "MySQL joins", 30) -->

MySQL allows you to join tables directly to the "main" table and update
rows of all joined tables. This is possible by passing all tables to the
`updateTable` method as a list and adding the `ON` conditions as `WHERE`
statements. You can then use the `set(column, value)` variant to update
columns using table qualified names.

The `UpdateQueryBuilder` also has `innerJoin` etc. join methods, but those
can only be used as part of a PostgreSQL `update set from join` query.
Due to type complexity issues, we unfortunately can't make the same
methods work in both cases.

```ts
const result = await db
  .updateTable(['person', 'pet'])
  .set('person.first_name', 'Updated person')
  .set('pet.name', 'Updated doggo')
  .whereRef('person.id', '=', 'pet.owner_id')
  .where('person.id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (MySQL):

```sql
update
  `person`,
  `pet`
set
  `person`.`first_name` = ?,
  `pet`.`name` = ?
where
  `person`.`id` = `pet`.`owner_id`
  and `person`.`id` = ?
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `UT`, `any`\>

##### Parameters

###### key

`RE`

###### value

[`ValueExpression`](../types/ValueExpression.md)\<`DB`, `TB`, [`ExtractUpdateTypeFromReferenceExpression`](../types/ExtractUpdateTypeFromReferenceExpression.md)\<`DB`, `UT`, `RE`\>\>

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

***

### stream()

> **stream**(`chunkSizeOrOptions?`): `AsyncIterableIterator`\<`O`\>

Defined in: [query-builder/update-query-builder.ts:1214](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1214)

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

> **toOperationNode**(): [`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

Defined in: [query-builder/update-query-builder.ts:1139](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1139)

#### Returns

[`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### top()

> **top**(`expression`, `modifiers?`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:196](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L196)

Changes an `update` query into a `update top` query.

`top` clause is only supported by some dialects like MS SQL Server.

### Examples

Update the first row:

```ts
await db.updateTable('person')
  .top(1)
  .set({ first_name: 'Foo' })
  .where('age', '>', 18)
  .executeTakeFirstOrThrow()
```

The generated SQL (MS SQL Server):

```sql
update top(1) "person" set "first_name" = @1 where "age" > @2
```

Update the 50% first rows:

```ts
await db.updateTable('person')
  .top(50, 'percent')
  .set({ first_name: 'Foo' })
  .where('age', '>', 18)
  .executeTakeFirstOrThrow()
```

The generated SQL (MS SQL Server):

```sql
update top(50) percent "person" set "first_name" = @1 where "age" > @2
```

#### Parameters

##### expression

`number` \| `bigint`

##### modifiers?

`"percent"`

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

***

### where()

#### Call Signature

> **where**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:110](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L110)

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

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

#### Call Signature

> **where**\<`E`\>(`expression`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:119](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L119)

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

***

### whereRef()

> **whereRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:133](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L133)

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

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`whereRef`](../interfaces/WhereInterface.md#whereref)

***

### withPlugin()

> **withPlugin**(`plugin`): `UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>

Defined in: [query-builder/update-query-builder.ts:1132](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1132)

Returns a copy of this UpdateQueryBuilder instance with the given plugin installed.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`UpdateQueryBuilder`\<`DB`, `UT`, `TB`, `O`\>
