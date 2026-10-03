[**kysely**](../index.md)

***

[kysely](../modules.md) / InsertQueryBuilder

# Class: InsertQueryBuilder\<DB, TB, O\>

Defined in: [query-builder/insert-query-builder.ts:72](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L72)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Implements

- [`ReturningInterface`](../interfaces/ReturningInterface.md)\<`DB`, `TB`, `O`\>
- [`OutputInterface`](../interfaces/OutputInterface.md)\<`DB`, `TB`, `O`, `"inserted"`\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)\<`O`\>
- [`Executable`](../interfaces/Executable.md)\<`O`\>
- [`Explainable`](../interfaces/Explainable.md)
- [`Streamable`](../interfaces/Streamable.md)\<`O`\>

## Constructors

### Constructor

> **new InsertQueryBuilder**\<`DB`, `TB`, `O`\>(`props`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:84](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L84)

#### Parameters

##### props

[`InsertQueryBuilderProps`](../interfaces/InsertQueryBuilderProps.md)

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

## Methods

### $assertType()

> **$assertType**\<`T`\>(): `O` *extends* `T` ? `InsertQueryBuilder`\<`DB`, `TB`, `T`\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

Defined in: [query-builder/insert-query-builder.ts:1259](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1259)

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
import type { NewPerson, NewPet, Species } from 'type-editor' // imaginary module

async function insertPersonAndPet(person: NewPerson, pet: Omit<NewPet, 'owner_id'>) {
  return await db
    .with('new_person', (qb) => qb
      .insertInto('person')
      .values(person)
      .returning('id')
      .$assertType<{ id: number }>()
    )
    .with('new_pet', (qb) => qb
      .insertInto('pet')
      .values((eb) => ({
        owner_id: eb.selectFrom('new_person').select('id'),
        ...pet
      }))
      .returning(['name as pet_name', 'species'])
      .$assertType<{ pet_name: string, species: Species }>()
    )
    .selectFrom(['new_person', 'new_pet'])
    .selectAll()
    .executeTakeFirstOrThrow()
}
```

#### Type Parameters

##### T

`T`

#### Returns

`O` *extends* `T` ? `InsertQueryBuilder`\<`DB`, `TB`, `T`\> : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"$assertType() call failed: The type passed in is not equal to the output type of the query."`\>

***

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/insert-query-builder.ts:1081](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1081)

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

await db.insertInto('person')
  .values({ first_name: 'John', last_name: 'Doe', gender: 'male' })
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

> **$castTo**\<`C`\>(): `InsertQueryBuilder`\<`DB`, `TB`, `C`\>

Defined in: [query-builder/insert-query-builder.ts:1145](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1145)

Change the output type of the query.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `InsertQueryBuilder` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `C`\>

***

### $if()

> **$if**\<`O2`\>(`condition`, `func`): `O2` *extends* [`InsertResult`](InsertResult.md) ? `InsertQueryBuilder`\<`DB`, `TB`, [`InsertResult`](InsertResult.md)\> : `O2` *extends* `O` & `E` ? `InsertQueryBuilder`\<`DB`, `TB`, `O` & `Partial`\<`E`\>\> : `InsertQueryBuilder`\<`DB`, `TB`, `Partial`\<`O2`\>\>

Defined in: [query-builder/insert-query-builder.ts:1122](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1122)

Call `func(this)` if `condition` is true.

This method is especially handy with optional selects. Any `returning` or `returningAll`
method calls add columns as optional fields to the output type when called inside
the `func` callback. This is because we can't know if those selections were actually
made before running the code.

You can also call any other methods inside the callback.

### Examples

```ts
import type { NewPerson } from 'type-editor' // imaginary module

async function insertPerson(values: NewPerson, returnLastName: boolean) {
  return await db
    .insertInto('person')
    .values(values)
    .returning(['id', 'first_name'])
    .$if(returnLastName, (qb) => qb.returning('last_name'))
    .executeTakeFirstOrThrow()
}
```

Any selections added inside the `if` callback will be added as optional fields to the
output type since we can't know if the selections were actually made before running
the code. In the example above the return type of the `insertPerson` function is:

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

(`qb`) => `InsertQueryBuilder`\<`any`, `any`, `O2`\>

#### Returns

`O2` *extends* [`InsertResult`](InsertResult.md) ? `InsertQueryBuilder`\<`DB`, `TB`, [`InsertResult`](InsertResult.md)\> : `O2` *extends* `O` & `E` ? `InsertQueryBuilder`\<`DB`, `TB`, `O` & `Partial`\<`E`\>\> : `InsertQueryBuilder`\<`DB`, `TB`, `Partial`\<`O2`\>\>

***

### $narrowType()

> **$narrowType**\<`T`\>(): `InsertQueryBuilder`\<`DB`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

Defined in: [query-builder/insert-query-builder.ts:1207](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1207)

Narrows (parts of) the output type of the query.

Kysely tries to be as type-safe as possible, but in some cases we have to make
compromises for better maintainability and compilation performance. At present,
Kysely doesn't narrow the output type of the query based on [values](#values) input
when using [returning](#returning) or [returningAll](#returningall).

This utility method is very useful for these situations, as it removes unncessary
runtime assertion/guard code. Its input type is limited to the output type
of the query, so you can't add a column that doesn't exist, or change a column's
type to something that doesn't exist in its union type.

### Examples

Turn this code:

```ts
import type { Person } from 'type-editor' // imaginary module

const person = await db.insertInto('person')
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'male',
    nullable_column: 'hell yeah!'
  })
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

const person = await db.insertInto('person')
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'male',
    nullable_column: 'hell yeah!'
  })
  .returningAll()
  .$narrowType<{ nullable_column: NotNull }>()
  .executeTakeFirstOrThrow()

functionThatExpectsPersonWithNonNullValue(person)
```

#### Type Parameters

##### T

`T`

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`NarrowPartial`](../types/NarrowPartial.md)\<`O`, `T`\>\>

***

### clearReturning()

> **clearReturning**(): `InsertQueryBuilder`\<`DB`, `TB`, [`InsertResult`](InsertResult.md)\>

Defined in: [query-builder/insert-query-builder.ts:1049](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1049)

Clears all `returning` clauses from the query.

### Examples

```ts
await db.insertInto('person')
  .values({ first_name: 'James', last_name: 'Smith', gender: 'male' })
  .returning(['first_name'])
  .clearReturning()
  .execute()
```

The generated SQL(PostgreSQL):

```sql
insert into "person" ("first_name", "last_name", "gender") values ($1, $2, $3)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`InsertResult`](InsertResult.md)\>

***

### columns()

> **columns**(`columns`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:300](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L300)

Sets the columns to insert.

The [values](#values) method sets both the columns and the values and this method
is not needed. But if you are using the [expression](../modules.md#expression) method, you can use
this method to set the columns to insert.

### Examples

```ts
await db.insertInto('person')
  .columns(['first_name'])
  .expression((eb) => eb.selectFrom('pet').select('pet.name'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name")
select "pet"."name" from "pet"
```

#### Parameters

##### columns

readonly keyof `DB`\[`TB`\] & `string`[]

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)\<`O`\>

Defined in: [query-builder/insert-query-builder.ts:1282](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1282)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<`O`\>

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### defaultValues()

> **defaultValues**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:371](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L371)

Creates an `insert into "person" default values` query.

### Examples

```ts
await db.insertInto('person')
  .defaultValues()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" default values
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### execute()

> **execute**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

Defined in: [query-builder/insert-query-builder.ts:1289](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1289)

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

Defined in: [query-builder/insert-query-builder.ts:1315](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1315)

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

Defined in: [query-builder/insert-query-builder.ts:1323](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1323)

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

Defined in: [query-builder/insert-query-builder.ts:1372](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1372)

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

### expression()

> **expression**(`expression`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:343](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L343)

Insert an arbitrary expression. For example the result of a select query.

### Examples

<!-- siteExample("insert", "Insert subquery", 50) -->

You can create an `INSERT INTO SELECT FROM` query using the `expression` method.
This API doesn't follow our WYSIWYG principles and might be a bit difficult to
remember. The reasons for this design stem from implementation difficulties.

```ts
const result = await db.insertInto('person')
  .columns(['first_name', 'last_name', 'age'])
  .expression((eb) => eb
    .selectFrom('pet')
    .select((eb) => [
      'pet.name',
      eb.val('Petson').as('last_name'),
      eb.lit(7).as('age'),
    ])
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "last_name", "age")
select "pet"."name", $1 as "last_name", 7 as "age from "pet"
```

#### Parameters

##### expression

[`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, `any`\>

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### ignore()

> **ignore**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:455](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L455)

Changes an `insert into` query to an `insert ignore into` query.

This is only supported by some dialects like MySQL.

To avoid a footgun, when invoked with the SQLite dialect, this method will
be handled like [orIgnore](#orignore). See also, [orAbort](#orabort), [orFail](#orfail),
[orReplace](#orreplace), and [orRollback](#orrollback).

If you use the ignore modifier, ignorable errors that occur while executing the
insert statement are ignored. For example, without ignore, a row that duplicates
an existing unique index or primary key value in the table causes a duplicate-key
error and the statement is aborted. With ignore, the row is discarded and no error
occurs.

### Examples

```ts
await db.insertInto('person')
  .ignore()
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'female',
  })
  .execute()
```

The generated SQL (MySQL):

```sql
insert ignore into `person` (`first_name`, `last_name`, `gender`) values (?, ?, ?)
```

The generated SQL (SQLite):

```sql
insert or ignore into "person" ("first_name", "last_name", "gender") values (?, ?, ?)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### modifyEnd()

> **modifyEnd**(`modifier`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:405](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L405)

This can be used to add any additional SQL to the end of the query.

### Examples

```ts
import { sql } from 'kysely'

await db.insertInto('person')
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'male',
  })
  .modifyEnd(sql`-- This is a comment`)
  .execute()
```

The generated SQL (MySQL):

```sql
insert into `person` ("first_name", "last_name", "gender")
values (?, ?, ?) -- This is a comment
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### onConflict()

> **onConflict**(`callback`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:883](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L883)

Adds an `on conflict` clause to the query.

`on conflict` is only supported by some dialects like PostgreSQL and SQLite. On MySQL
you can use [ignore](#ignore) and [onDuplicateKeyUpdate](#onduplicatekeyupdate) to achieve similar results.

### Examples

```ts
await db
  .insertInto('pet')
  .values({
    name: 'Catto',
    species: 'cat',
    owner_id: 3,
  })
  .onConflict((oc) => oc
    .column('name')
    .doUpdateSet({ species: 'hamster' })
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "pet" ("name", "species", "owner_id")
values ($1, $2, $3)
on conflict ("name")
do update set "species" = $4
```

You can provide the name of the constraint instead of a column name:

```ts
await db
  .insertInto('pet')
  .values({
    name: 'Catto',
    species: 'cat',
    owner_id: 3,
  })
  .onConflict((oc) => oc
    .constraint('pet_name_key')
    .doUpdateSet({ species: 'hamster' })
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "pet" ("name", "species", "owner_id")
values ($1, $2, $3)
on conflict on constraint "pet_name_key"
do update set "species" = $4
```

You can also specify an expression as the conflict target in case
the unique index is an expression index:

```ts
import { sql } from 'kysely'

await db
  .insertInto('pet')
  .values({
    name: 'Catto',
    species: 'cat',
    owner_id: 3,
  })
  .onConflict((oc) => oc
    .expression(sql<string>`lower(name)`)
    .doUpdateSet({ species: 'hamster' })
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "pet" ("name", "species", "owner_id")
values ($1, $2, $3)
on conflict (lower(name))
do update set "species" = $4
```

You can add a filter for the update statement like this:

```ts
await db
  .insertInto('pet')
  .values({
    name: 'Catto',
    species: 'cat',
    owner_id: 3,
  })
  .onConflict((oc) => oc
    .column('name')
    .doUpdateSet({ species: 'hamster' })
    .where('excluded.name', '!=', 'Catto')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "pet" ("name", "species", "owner_id")
values ($1, $2, $3)
on conflict ("name")
do update set "species" = $4
where "excluded"."name" != $5
```

You can create an `on conflict do nothing` clauses like this:

```ts
await db
  .insertInto('pet')
  .values({
    name: 'Catto',
    species: 'cat',
    owner_id: 3,
  })
  .onConflict((oc) => oc
    .column('name')
    .doNothing()
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "pet" ("name", "species", "owner_id")
values ($1, $2, $3)
on conflict ("name") do nothing
```

You can refer to the columns of the virtual `excluded` table
in a type-safe way using a callback and the `ref` method of
`ExpressionBuilder`:

```ts
await db.insertInto('person')
  .values({
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    gender: 'male',
  })
  .onConflict(oc => oc
    .column('id')
    .doUpdateSet({
      first_name: (eb) => eb.ref('excluded.first_name'),
      last_name: (eb) => eb.ref('excluded.last_name')
    })
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("id", "first_name", "last_name", "gender")
values ($1, $2, $3, $4)
on conflict ("id")
do update set
 "first_name" = "excluded"."first_name",
 "last_name" = "excluded"."last_name"
```

#### Parameters

##### callback

(`builder`) => [`OnConflictUpdateBuilder`](OnConflictUpdateBuilder.md)\<[`OnConflictDatabase`](../types/OnConflictDatabase.md)\<`DB`, `TB`\>, [`OnConflictTables`](../types/OnConflictTables.md)\<`TB`\>\> \| [`OnConflictDoNothingBuilder`](OnConflictDoNothingBuilder.md)\<`DB`, `TB`\>

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### onDuplicateKeyUpdate()

> **onDuplicateKeyUpdate**(`update`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:937](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L937)

Adds `on duplicate key update` to the query.

If you specify `on duplicate key update`, and a row is inserted that would cause
a duplicate value in a unique index or primary key, an update of the old row occurs.

This is only implemented by some dialects like MySQL. On most dialects you should
use [onConflict](#onconflict) instead.

### Examples

```ts
await db
  .insertInto('person')
  .values({
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    gender: 'male',
  })
  .onDuplicateKeyUpdate({ updated_at: new Date().toISOString() })
  .execute()
```

The generated SQL (MySQL):

```sql
insert into `person` (`id`, `first_name`, `last_name`, `gender`)
values (?, ?, ?, ?)
on duplicate key update `updated_at` = ?
```

#### Parameters

##### update

[`UpdateObjectExpression`](../types/UpdateObjectExpression.md)\<`DB`, `TB`, `TB`\>

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orAbort()

> **orAbort**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:534](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L534)

Changes an `insert into` query to an `insert or abort into` query.

This is only supported by some dialects like SQLite.

See also, [orIgnore](#orignore), [orFail](#orfail), [orReplace](#orreplace), and [orRollback](#orrollback).

### Examples

```ts
await db.insertInto('person')
  .orAbort()
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'female',
  })
  .execute()
```

The generated SQL (SQLite):

```sql
insert or abort into "person" ("first_name", "last_name", "gender") values (?, ?, ?)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orFail()

> **orFail**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:569](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L569)

Changes an `insert into` query to an `insert or fail into` query.

This is only supported by some dialects like SQLite.

See also, [orIgnore](#orignore), [orAbort](#orabort), [orReplace](#orreplace), and [orRollback](#orrollback).

### Examples

```ts
await db.insertInto('person')
  .orFail()
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'female',
  })
  .execute()
```

The generated SQL (SQLite):

```sql
insert or fail into "person" ("first_name", "last_name", "gender") values (?, ?, ?)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orIgnore()

> **orIgnore**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:499](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L499)

Changes an `insert into` query to an `insert or ignore into` query.

This is only supported by some dialects like SQLite.

To avoid a footgun, when invoked with the MySQL dialect, this method will
be handled like [ignore](#ignore).

See also, [orAbort](#orabort), [orFail](#orfail), [orReplace](#orreplace), and [orRollback](#orrollback).

### Examples

```ts
await db.insertInto('person')
  .orIgnore()
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'female',
  })
  .execute()
```

The generated SQL (SQLite):

```sql
insert or ignore into "person" ("first_name", "last_name", "gender") values (?, ?, ?)
```

The generated SQL (MySQL):

```sql
insert ignore into `person` (`first_name`, `last_name`, `gender`) values (?, ?, ?)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orReplace()

> **orReplace**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:606](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L606)

Changes an `insert into` query to an `insert or replace into` query.

This is only supported by some dialects like SQLite.

You can also use [Kysely.replaceInto](Kysely.md#replaceinto) to achieve the same result.

See also, [orIgnore](#orignore), [orAbort](#orabort), [orFail](#orfail), and [orRollback](#orrollback).

### Examples

```ts
await db.insertInto('person')
  .orReplace()
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'female',
  })
  .execute()
```

The generated SQL (SQLite):

```sql
insert or replace into "person" ("first_name", "last_name", "gender") values (?, ?, ?)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### orRollback()

> **orRollback**(): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:641](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L641)

Changes an `insert into` query to an `insert or rollback into` query.

This is only supported by some dialects like SQLite.

See also, [orIgnore](#orignore), [orAbort](#orabort), [orFail](#orfail), and [orReplace](#orreplace).

### Examples

```ts
await db.insertInto('person')
  .orRollback()
  .values({
    first_name: 'John',
    last_name: 'Doe',
    gender: 'female',
  })
  .execute()
```

The generated SQL (SQLite):

```sql
insert or rollback into "person" ("first_name", "last_name", "gender") values (?, ?, ?)
```

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### output()

#### Call Signature

> **output**\<`OE`\>(`selections`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/insert-query-builder.ts:984](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L984)

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

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `inserted.${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, `"inserted"`\>, `"inserted"`\>

##### Parameters

###### selections

readonly `OE`[]

##### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`CB`\>(`callback`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

Defined in: [query-builder/insert-query-builder.ts:992](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L992)

##### Type Parameters

###### CB

`CB` *extends* [`OutputCallback`](../types/OutputCallback.md)\<`DB`, `TB`, `"inserted"`\>

##### Parameters

###### callback

`CB`

##### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`OE`\>(`selection`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/insert-query-builder.ts:1000](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1000)

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `inserted.${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, `"inserted"`\>, `"inserted"`\>

##### Parameters

###### selection

`OE`

##### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

***

### outputAll()

> **outputAll**(`table`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

Defined in: [query-builder/insert-query-builder.ts:1018](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1018)

Adds an `output {prefix}.*` to an `insert`/`update`/`delete`/`merge` query on databases
that support `output` such as MS SQL Server (MSSQL).

Also see the [output](../interfaces/OutputInterface.md#output) method.

#### Parameters

##### table

`"inserted"`

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>\>

#### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`outputAll`](../interfaces/OutputInterface.md#outputall)

***

### returning()

#### Call Signature

> **returning**\<`SE`\>(`selections`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/insert-query-builder.ts:950](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L950)

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

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Implementation of

[`ReturningInterface`](../interfaces/ReturningInterface.md).[`returning`](../interfaces/ReturningInterface.md#returning)

#### Call Signature

> **returning**\<`CB`\>(`callback`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

Defined in: [query-builder/insert-query-builder.ts:954](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L954)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

##### Implementation of

[`ReturningInterface`](../interfaces/ReturningInterface.md).[`returning`](../interfaces/ReturningInterface.md#returning)

#### Call Signature

> **returning**\<`SE`\>(`selection`): `InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/insert-query-builder.ts:958](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L958)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selection

`SE`

##### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Implementation of

[`ReturningInterface`](../interfaces/ReturningInterface.md).[`returning`](../interfaces/ReturningInterface.md#returning)

***

### returningAll()

> **returningAll**(): `InsertQueryBuilder`\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`TB`\]\>\>

Defined in: [query-builder/insert-query-builder.ts:974](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L974)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/ReturningInterface.md#returning) method.

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`TB`\]\>\>

#### Implementation of

[`ReturningInterface`](../interfaces/ReturningInterface.md).[`returningAll`](../interfaces/ReturningInterface.md#returningall)

***

### stream()

> **stream**(`chunkSizeOrOptions?`): `AsyncIterableIterator`\<`O`\>

Defined in: [query-builder/insert-query-builder.ts:1350](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1350)

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

> **toOperationNode**(): [`InsertQueryNode`](../interfaces/InsertQueryNode.md)

Defined in: [query-builder/insert-query-builder.ts:1275](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1275)

#### Returns

[`InsertQueryNode`](../interfaces/InsertQueryNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### top()

> **top**(`expression`, `modifiers?`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:697](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L697)

Changes an `insert into` query to an `insert top into` query.

`top` clause is only supported by some dialects like MS SQL Server.

### Examples

Insert the first 5 rows:

```ts
import { sql } from 'kysely'

await db.insertInto('person')
  .top(5)
  .columns(['first_name', 'gender'])
  .expression(
    (eb) => eb.selectFrom('pet').select(['name', sql.lit('other').as('gender')])
  )
  .execute()
```

The generated SQL (MS SQL Server):

```sql
insert top(5) into "person" ("first_name", "gender") select "name", 'other' as "gender" from "pet"
```

Insert the first 50 percent of rows:

```ts
import { sql } from 'kysely'

await db.insertInto('person')
  .top(50, 'percent')
  .columns(['first_name', 'gender'])
  .expression(
    (eb) => eb.selectFrom('pet').select(['name', sql.lit('other').as('gender')])
  )
  .execute()
```

The generated SQL (MS SQL Server):

```sql
insert top(50) percent into "person" ("first_name", "gender") select "name", 'other' as "gender" from "pet"
```

#### Parameters

##### expression

`number` \| `bigint`

##### modifiers?

`"percent"`

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### values()

> **values**(`insert`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:265](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L265)

Sets the values to insert for an [insert](Kysely.md#insertinto) query.

This method takes an object whose keys are column names and values are
values to insert. In addition to the column's type, the values can be
raw [sql](../variables/sql.md) snippets or select queries.

You must provide all fields you haven't explicitly marked as nullable
or optional using [Generated](../types/Generated.md) or [ColumnType](../types/ColumnType.md).

The return value of an `insert` query is an instance of [InsertResult](InsertResult.md). The
[insertId](InsertResult.md#insertid) field holds the auto incremented primary
key if the database returned one.

On PostgreSQL and some other dialects, you need to call `returning` to get
something out of the query.

Also see the [expression](../modules.md#expression) method for inserting the result of a select
query or any other expression.

### Examples

<!-- siteExample("insert", "Single row", 10) -->

Insert a single row:

```ts
const result = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston',
    age: 40
  })
  .executeTakeFirst()

// `insertId` is only available on dialects that
// automatically return the id of the inserted row
// such as MySQL and SQLite. On PostgreSQL, for example,
// you need to add a `returning` clause to the query to
// get anything out. See the "returning data" example.
console.log(result.insertId)
```

The generated SQL (MySQL):

```sql
insert into `person` (`first_name`, `last_name`, `age`) values (?, ?, ?)
```

<!-- siteExample("insert", "Multiple rows", 20) -->

On dialects that support it (for example PostgreSQL) you can insert multiple
rows by providing an array. Note that the return value is once again very
dialect-specific. Some databases may only return the id of the *last* inserted
row and some return nothing at all unless you call `returning`.

```ts
await db
  .insertInto('person')
  .values([{
    first_name: 'Jennifer',
    last_name: 'Aniston',
    age: 40,
  }, {
    first_name: 'Arnold',
    last_name: 'Schwarzenegger',
    age: 70,
  }])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "last_name", "age") values (($1, $2, $3), ($4, $5, $6))
```

<!-- siteExample("insert", "Returning data", 30) -->

On supported dialects like PostgreSQL you need to chain `returning` to the query to get
the inserted row's columns (or any other expression) as the return value. `returning`
works just like `select`. Refer to `select` method's examples and documentation for
more info.

```ts
const result = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston',
    age: 40,
  })
  .returning(['id', 'first_name as name'])
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "last_name", "age") values ($1, $2, $3) returning "id", "first_name" as "name"
```

<!-- siteExample("insert", "Complex values", 40) -->

In addition to primitives, the values can also be arbitrary expressions.
You can build the expressions by using a callback and calling the methods
on the expression builder passed to it:

```ts
import { sql } from 'kysely'

const ani = "Ani"
const ston = "ston"

const result = await db
  .insertInto('person')
  .values(({ ref, selectFrom, fn }) => ({
    first_name: 'Jennifer',
    last_name: sql<string>`concat(${ani}, ${ston})`,
    middle_name: ref('first_name'),
    age: selectFrom('person')
      .select(fn.avg<number>('age').as('avg_age')),
  }))
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" (
  "first_name",
  "last_name",
  "middle_name",
  "age"
)
values (
  $1,
  concat($2, $3),
  "first_name",
  (select avg("age") as "avg_age" from "person")
)
```

You can also use the callback version of subqueries or raw expressions:

```ts
await db.with('jennifer', (db) => db
  .selectFrom('person')
  .where('first_name', '=', 'Jennifer')
  .select(['id', 'first_name', 'gender'])
  .limit(1)
).insertInto('pet').values((eb) => ({
  owner_id: eb.selectFrom('jennifer').select('id'),
  name: eb.selectFrom('jennifer').select('first_name'),
  species: 'cat',
}))
.execute()
```

The generated SQL (PostgreSQL):

```sql
with "jennifer" as (
  select "id", "first_name", "gender"
  from "person"
  where "first_name" = $1
  limit $2
)
insert into "pet" ("owner_id", "name", "species")
values (
 (select "id" from "jennifer"),
 (select "first_name" from "jennifer"),
 $3
)
```

#### Parameters

##### insert

[`InsertExpression`](../types/InsertExpression.md)\<`DB`, `TB`\>

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>

***

### withPlugin()

> **withPlugin**(`plugin`): `InsertQueryBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/insert-query-builder.ts:1268](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-query-builder.ts#L1268)

Returns a copy of this InsertQueryBuilder instance with the given plugin installed.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`InsertQueryBuilder`\<`DB`, `TB`, `O`\>
