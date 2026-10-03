[**kysely**](../index.md)

***

[kysely](../modules.md) / Kysely

# Class: Kysely\<DB\>

Defined in: [kysely.ts:97](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L97)

The main Kysely class.

You should create one instance of `Kysely` per database using the Kysely
constructor. Each `Kysely` instance maintains its own connection pool.

### Examples

This example assumes your database has a "person" table:

```ts
import * as Sqlite from 'better-sqlite3'
import { type Generated, Kysely, SqliteDialect } from 'kysely'

interface Database {
  person: {
    id: Generated<number>
    first_name: string
    last_name: string | null
  }
}

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new Sqlite(':memory:'),
  })
})
```

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`QueryCreator`](QueryCreator.md)\<`DB`\>

### Extended by

- [`Transaction`](Transaction.md)

## Type Parameters

### DB

`DB`

The database interface type. Keys of this type must be table names
   in the database and values must be interfaces that describe the rows in those
   tables. See the examples above.

## Implements

- `AsyncDisposable`

## Constructors

### Constructor

> **new Kysely**\<`DB`\>(`args`): `Kysely`\<`DB`\>

Defined in: [kysely.ts:103](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L103)

#### Parameters

##### args

[`KyselyConfig`](../interfaces/KyselyConfig.md)

#### Returns

`Kysely`\<`DB`\>

#### Overrides

[`QueryCreator`](QueryCreator.md).[`constructor`](QueryCreator.md#constructor)

### Constructor

> **new Kysely**\<`DB`\>(`args`): `Kysely`\<`DB`\>

Defined in: [kysely.ts:104](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L104)

#### Parameters

##### args

[`KyselyProps`](../interfaces/KyselyProps.md)

#### Returns

`Kysely`\<`DB`\>

#### Overrides

`QueryCreator<DB>.constructor`

## Accessors

### dynamic

#### Get Signature

> **get** **dynamic**(): [`DynamicModule`](DynamicModule.md)\<`DB`\>

Defined in: [kysely.ts:156](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L156)

Returns a the [DynamicModule](DynamicModule.md) module.

The [DynamicModule](DynamicModule.md) module can be used to bypass strict typing and
passing in dynamic values for the queries.

##### Returns

[`DynamicModule`](DynamicModule.md)\<`DB`\>

***

### fn

#### Get Signature

> **get** **fn**(): [`FunctionModule`](../interfaces/FunctionModule.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:232](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L232)

Returns a [FunctionModule](../interfaces/FunctionModule.md) that can be used to write somewhat type-safe function
calls.

```ts
const { count } = db.fn

await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select([
    'id',
    count('pet.id').as('person_count'),
  ])
  .groupBy('person.id')
  .having(count('pet.id'), '>', 10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", count("pet"."id") as "person_count"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."id"
having count("pet"."id") > $1
```

Why "somewhat" type-safe? Because the function calls are not bound to the
current query context. They allow you to reference columns and tables that
are not in the current query. E.g. remove the `innerJoin` from the previous
query and TypeScript won't even complain.

If you want to make the function calls fully type-safe, you can use the
[ExpressionBuilder.fn](../interfaces/ExpressionBuilder.md#fn) getter for a query context-aware, stricter [FunctionModule](../interfaces/FunctionModule.md).

```ts
await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => [
    'person.id',
    eb.fn.count('pet.id').as('pet_count')
  ])
  .groupBy('person.id')
  .having((eb) => eb.fn.count('pet.id'), '>', 10)
  .execute()
```

##### Returns

[`FunctionModule`](../interfaces/FunctionModule.md)\<`DB`, keyof `DB`\>

***

### introspection

#### Get Signature

> **get** **introspection**(): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [kysely.ts:163](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L163)

Returns a [database introspector](../interfaces/DatabaseIntrospector.md).

##### Returns

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

***

### isTransaction

#### Get Signature

> **get** **isTransaction**(): `boolean`

Defined in: [kysely.ts:614](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L614)

Returns true if this `Kysely` instance is a transaction.

You can also use `db instanceof Transaction`.

##### Returns

`boolean`

***

### schema

#### Get Signature

> **get** **schema**(): [`SchemaModule`](SchemaModule.md)

Defined in: [kysely.ts:146](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L146)

Returns the [SchemaModule](SchemaModule.md) module for building database schema.

##### Returns

[`SchemaModule`](SchemaModule.md)

## Methods

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: [kysely.ts:640](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L640)

#### Returns

`Promise`\<`void`\>

#### Implementation of

`AsyncDisposable.[asyncDispose]`

***

### $extendTables()

> **$extendTables**\<`T`\>(): `Kysely`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

Defined in: [kysely.ts:512](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L512)

Returns a copy of this Kysely instance with tables added to its
database type.

This method only modifies the types and doesn't affect any of the
executed queries in any way.

### Examples

The following example adds and uses a temporary table:

```ts
await db.schema
  .createTable('temp_table')
  .temporary()
  .addColumn('some_column', 'integer')
  .execute()

const tempDb = db.$extendTables<{
  temp_table: {
    some_column: number
  }
}>()

await tempDb
  .insertInto('temp_table')
  .values({ some_column: 100 })
  .execute()
```

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`Kysely`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

***

### $omitTables()

> **$omitTables**\<`T`\>(): `Kysely`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`\>

Defined in: [kysely.ts:548](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L548)

Returns a copy of this Kysely instance without the given tables (provided as
a union type of table names).

This method only modifies the types and doesn't affect any of the executed
queries in any way.

See also [$pickTables](#picktables) and [$extendTables](#extendtables).

### Examples

The following example omits tables not used in the downstream query. This
can help with compile-time performance as downstream checks and calculations
work against a smaller scope of the database - less tables and columns.

Don't optimize prematurely! Build your queries first, measure later. If you
realize the query has a noticeable impact on compilation - try the helper.

```ts
const results = await db
  .$omitTables<'toy'>()
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .selectAll()
  .execute()
```

The query is arguably less readable now, and changing it is less obvious -
e.g. adding another table.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`Kysely`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`\>

***

### $pickTables()

> **$pickTables**\<`T`\>(): `Kysely`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`\>

Defined in: [kysely.ts:584](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L584)

Returns a copy of this Kysely instance with just the given tables (provided as
a union type of table names).

This method only modifies the types and doesn't affect any of the executed
queries in any way.

See also [$omitTables](#omittables) and [$extendTables](#extendtables).

### Examples

The following example picks the tables used in the downstream query. This
can help with compile-time performance as downstream checks and calculations
work against a smaller scope of the database - less tables and columns.

Don't optimize prematurely! Build your queries first, measure later. If you
realize the query has a noticeable impact on compilation - try the helper.

```ts
const results = await db
  .$pickTables<'person' | 'pet'>()
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .selectAll()
  .execute()
```

The query is arguably less readable now, and changing it is less obvious -
e.g. adding another table.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`Kysely`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`\>

***

### case()

#### Call Signature

> **case**(): [`CaseBuilder`](CaseBuilder.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:172](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L172)

Creates a `case` statement/operator.

See [ExpressionBuilder.case](../interfaces/ExpressionBuilder.md#case) for more information.

##### Returns

[`CaseBuilder`](CaseBuilder.md)\<`DB`, keyof `DB`\>

#### Call Signature

> **case**\<`V`\>(`value`): [`CaseBuilder`](CaseBuilder.md)\<`DB`, keyof `DB`, `V`\>

Defined in: [kysely.ts:174](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L174)

Creates a `case` statement/operator.

See [ExpressionBuilder.case](../interfaces/ExpressionBuilder.md#case) for more information.

##### Type Parameters

###### V

`V`

##### Parameters

###### value

[`Expression`](../interfaces/Expression.md)\<`V`\>

##### Returns

[`CaseBuilder`](CaseBuilder.md)\<`DB`, keyof `DB`, `V`\>

***

### connection()

> **connection**(): [`ConnectionBuilder`](ConnectionBuilder.md)\<`DB`\>

Defined in: [kysely.ts:446](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L446)

Provides a kysely instance bound to a single database connection.

### Examples

```ts
await db
  .connection()
  .execute(async (db) => {
    // `db` is an instance of `Kysely` that's bound to a single
    // database connection. All queries executed through `db` use
    // the same connection.
    await doStuff(db)
  })

async function doStuff(kysely: typeof db) {
  // ...
}
```

#### Returns

[`ConnectionBuilder`](ConnectionBuilder.md)\<`DB`\>

***

### deleteFrom()

> **deleteFrom**\<`TE`\>(`from`): [`DeleteFrom`](../types/DeleteFrom.md)\<`DB`, `TE`\>

Defined in: [query-creator.ts:399](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L399)

Creates a delete query.

See the [DeleteQueryBuilder.where](DeleteQueryBuilder.md#where) method for examples on how to specify
a where clause for the delete operation.

The return value of the query is an instance of [DeleteResult](DeleteResult.md).

### Examples

<!-- siteExample("delete", "Single row", 10) -->

Delete a single row:

```ts
const result = await db
  .deleteFrom('person')
  .where('person.id', '=', 1)
  .executeTakeFirst()

console.log(result.numDeletedRows)
```

The generated SQL (PostgreSQL):

```sql
delete from "person" where "person"."id" = $1
```

Some databases such as MySQL support deleting from multiple tables:

```ts
const result = await db
  .deleteFrom(['person', 'pet'])
  .using('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .where('person.id', '=', 1)
  .executeTakeFirst()
```

The generated SQL (MySQL):

```sql
delete from `person`, `pet`
using `person`
inner join `pet` on `pet`.`owner_id` = `person`.`id`
where `person`.`id` = ?
```

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `never`\> \| readonly [`TableExpression`](../types/TableExpression.md)\<`DB`, `never`\>[]

#### Parameters

##### from

`TE`

#### Returns

[`DeleteFrom`](../types/DeleteFrom.md)\<`DB`, `TE`\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`deleteFrom`](QueryCreator.md#deletefrom)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [kysely.ts:605](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L605)

Releases all resources and disconnects from the database.

You need to call this when you are done using the `Kysely` instance.

#### Returns

`Promise`\<`void`\>

***

### executeQuery()

> **executeQuery**\<`R`\>(`query`, `options?`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

Defined in: [kysely.ts:631](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L631)

Executes a given compiled query or query builder.

See [splitting build, compile and execute code recipe](https://github.com/kysely-org/kysely/blob/master/site/docs/recipes/0004-splitting-query-building-and-execution.md#execute-compiled-queries) for more information.

#### Type Parameters

##### R

`R`

#### Parameters

##### query

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<`R`\> \| [`Compilable`](../interfaces/Compilable.md)\<`R`\>

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

***

### insertInto()

> **insertInto**\<`T`\>(`table`): [`InsertQueryBuilder`](InsertQueryBuilder.md)\<`DB`, `T`, [`InsertResult`](InsertResult.md)\>

Defined in: [query-creator.ts:287](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L287)

Creates an insert query.

The return value of this query is an instance of [InsertResult](InsertResult.md). [InsertResult](InsertResult.md)
has the [insertId](InsertResult.md#insertid) field that holds the auto incremented id of
the inserted row if the db returned one.

See the [values](InsertQueryBuilder.md#values) method for more info and examples. Also see
the [returning](../interfaces/ReturningInterface.md#returning) method for a way to return columns
on supported databases like PostgreSQL.

### Examples

```ts
const result = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .executeTakeFirst()

console.log(result.insertId)
```

Some databases like PostgreSQL support the `returning` method:

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

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### table

`T`

#### Returns

[`InsertQueryBuilder`](InsertQueryBuilder.md)\<`DB`, `T`, [`InsertResult`](InsertResult.md)\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`insertInto`](QueryCreator.md#insertinto)

***

### mergeInto()

> **mergeInto**\<`TR`\>(`targetTable`): [`MergeInto`](../types/MergeInto.md)\<`DB`, `TR`\>

Defined in: [query-creator.ts:531](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L531)

Creates a merge query.

The return value of the query is a [MergeResult](MergeResult.md).

See the [MergeQueryBuilder.using](MergeQueryBuilder.md#using) method for examples on how to specify
the other table.

### Examples

<!-- siteExample("merge", "Source row existence", 10) -->

Update a target column based on the existence of a source row:

```ts
const result = await db
  .mergeInto('person as target')
  .using('pet as source', 'source.owner_id', 'target.id')
  .whenMatchedAnd('target.has_pets', '!=', 'Y')
  .thenUpdateSet({ has_pets: 'Y' })
  .whenNotMatchedBySourceAnd('target.has_pets', '=', 'Y')
  .thenUpdateSet({ has_pets: 'N' })
  .executeTakeFirstOrThrow()

console.log(result.numChangedRows)
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet"
on "pet"."owner_id" = "person"."id"
when matched and "has_pets" != $1
then update set "has_pets" = $2
when not matched by source and "has_pets" = $3
then update set "has_pets" = $4
```

<!-- siteExample("merge", "Temporary changes table", 20) -->

Merge new entries from a temporary changes table:

```ts
const result = await db
  .mergeInto('wine as target')
  .using(
    'wine_stock_change as source',
    'source.wine_name',
    'target.name',
  )
  .whenNotMatchedAnd('source.stock_delta', '>', 0)
  .thenInsertValues(({ ref }) => ({
    name: ref('source.wine_name'),
    stock: ref('source.stock_delta'),
  }))
  .whenMatchedAnd(
    (eb) => eb('target.stock', '+', eb.ref('source.stock_delta')),
    '>',
    0,
  )
  .thenUpdateSet('stock', (eb) =>
    eb('target.stock', '+', eb.ref('source.stock_delta')),
  )
  .whenMatched()
  .thenDelete()
  .executeTakeFirstOrThrow()
```

The generated SQL (PostgreSQL):

```sql
merge into "wine" as "target"
using "wine_stock_change" as "source"
on "source"."wine_name" = "target"."name"
when not matched and "source"."stock_delta" > $1
then insert ("name", "stock") values ("source"."wine_name", "source"."stock_delta")
when matched and "target"."stock" + "source"."stock_delta" > $2
then update set "stock" = "target"."stock" + "source"."stock_delta"
when matched
then delete
```

#### Type Parameters

##### TR

`TR` *extends* `string`

#### Parameters

##### targetTable

`TR`

#### Returns

[`MergeInto`](../types/MergeInto.md)\<`DB`, `TR`\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`mergeInto`](QueryCreator.md#mergeinto)

***

### replaceInto()

> **replaceInto**\<`T`\>(`table`): [`InsertQueryBuilder`](InsertQueryBuilder.md)\<`DB`, `T`, [`InsertResult`](InsertResult.md)\>

Defined in: [query-creator.ts:336](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L336)

Creates a "replace into" query.

This is only supported by some dialects like MySQL or SQLite.

Similar to MySQL's [InsertQueryBuilder.onDuplicateKeyUpdate](InsertQueryBuilder.md#onduplicatekeyupdate) that deletes
and inserts values on collision instead of updating existing rows.

An alias of SQLite's [InsertQueryBuilder.orReplace](InsertQueryBuilder.md#orreplace).

The return value of this query is an instance of [InsertResult](InsertResult.md). [InsertResult](InsertResult.md)
has the [insertId](InsertResult.md#insertid) field that holds the auto incremented id of
the inserted row if the db returned one.

See the [values](InsertQueryBuilder.md#values) method for more info and examples.

### Examples

```ts
const result = await db
  .replaceInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .executeTakeFirstOrThrow()

console.log(result.insertId)
```

The generated SQL (MySQL):

```sql
replace into `person` (`first_name`, `last_name`) values (?, ?)
```

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### table

`T`

#### Returns

[`InsertQueryBuilder`](InsertQueryBuilder.md)\<`DB`, `T`, [`InsertResult`](InsertResult.md)\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`replaceInto`](QueryCreator.md#replaceinto)

***

### selectFrom()

> **selectFrom**\<`TE`\>(`from`): [`SelectFrom`](../types/SelectFrom.md)\<`DB`, `never`, `TE`\>

Defined in: [query-creator.ts:165](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L165)

Creates a `select` query builder for the given table or tables.

The tables passed to this method are built as the query's `from` clause.

### Examples

Create a select query for one table:

```ts
db.selectFrom('person').selectAll()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
```

Create a select query for one table with an alias:

```ts
const persons = await db.selectFrom('person as p')
  .select(['p.id', 'first_name'])
  .execute()

console.log(persons[0].id)
```

The generated SQL (PostgreSQL):

```sql
select "p"."id", "first_name" from "person" as "p"
```

Create a select query from a subquery:

```ts
const persons = await db.selectFrom(
    (eb) => eb.selectFrom('person').select('person.id as identifier').as('p')
  )
  .select('p.identifier')
  .execute()

console.log(persons[0].identifier)
```

The generated SQL (PostgreSQL):

```sql
select "p"."identifier",
from (
  select "person"."id" as "identifier" from "person"
) as p
```

Create a select query from raw sql:

```ts
import { sql } from 'kysely'

const items = await db
  .selectFrom(sql<{ one: number }>`(select 1 as one)`.as('q'))
  .select('q.one')
  .execute()

console.log(items[0].one)
```

The generated SQL (PostgreSQL):

```sql
select "q"."one",
from (
  select 1 as one
) as q
```

When you use the `sql` tag you need to also provide the result type of the
raw snippet / query so that Kysely can figure out what columns are
available for the rest of the query.

The `selectFrom` method also accepts an array for multiple tables. All
the above examples can also be used in an array.

```ts
import { sql } from 'kysely'

const items = await db.selectFrom([
    'person as p',
    db.selectFrom('pet').select('pet.species').as('a'),
    sql<{ one: number }>`(select 1 as one)`.as('q')
  ])
  .select(['p.id', 'a.species', 'q.one'])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "p".id, "a"."species", "q"."one"
from
  "person" as "p",
  (select "pet"."species" from "pet") as a,
  (select 1 as one) as "q"
```

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `never`\> \| readonly [`TableExpression`](../types/TableExpression.md)\<`DB`, `never`\>[]

#### Parameters

##### from

`TE`

#### Returns

[`SelectFrom`](../types/SelectFrom.md)\<`DB`, `never`, `TE`\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`selectFrom`](QueryCreator.md#selectfrom)

***

### selectNoFrom()

#### Call Signature

> **selectNoFrom**\<`SE`\>(`selections`): [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

Defined in: [query-creator.ts:224](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L224)

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as [SelectQueryBuilder.select](../interfaces/SelectQueryBuilder.md#select). See its
documentation for more examples.

### Examples

```ts
const result = await db.selectNoFrom((eb) => [
  eb.selectFrom('person')
    .select('id')
    .where('first_name', '=', 'Jennifer')
    .limit(1)
    .as('jennifer_id'),
  eb.selectFrom('pet')
    .select('id')
    .where('name', '=', 'Doggo')
    .limit(1)
    .as('doggo_id')
])
.executeTakeFirstOrThrow()

console.log(result.jennifer_id)
console.log(result.doggo_id)
```

The generated SQL (PostgreSQL):

```sql
select (
  select "id"
  from "person"
  where "first_name" = $1
  limit $2
) as "jennifer_id", (
  select "id"
  from "pet"
  where "name" = $3
  limit $4
) as "doggo_id"
```

##### Type Parameters

###### SE

`SE` *extends* [`SelectExpression`](../types/SelectExpression.md)\<`DB`, `never`\>

##### Parameters

###### selections

readonly `SE`[]

##### Returns

[`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

##### Inherited from

[`QueryCreator`](QueryCreator.md).[`selectNoFrom`](QueryCreator.md#selectnofrom)

#### Call Signature

> **selectNoFrom**\<`CB`\>(`callback`): [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `never`, [`CallbackSelection`](../types/CallbackSelection.md)\<`DB`, `never`, `CB`\>\>

Defined in: [query-creator.ts:228](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L228)

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as [SelectQueryBuilder.select](../interfaces/SelectQueryBuilder.md#select). See its
documentation for more examples.

### Examples

```ts
const result = await db.selectNoFrom((eb) => [
  eb.selectFrom('person')
    .select('id')
    .where('first_name', '=', 'Jennifer')
    .limit(1)
    .as('jennifer_id'),
  eb.selectFrom('pet')
    .select('id')
    .where('name', '=', 'Doggo')
    .limit(1)
    .as('doggo_id')
])
.executeTakeFirstOrThrow()

console.log(result.jennifer_id)
console.log(result.doggo_id)
```

The generated SQL (PostgreSQL):

```sql
select (
  select "id"
  from "person"
  where "first_name" = $1
  limit $2
) as "jennifer_id", (
  select "id"
  from "pet"
  where "name" = $3
  limit $4
) as "doggo_id"
```

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `never`\>

##### Parameters

###### callback

`CB`

##### Returns

[`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `never`, [`CallbackSelection`](../types/CallbackSelection.md)\<`DB`, `never`, `CB`\>\>

##### Inherited from

[`QueryCreator`](QueryCreator.md).[`selectNoFrom`](QueryCreator.md#selectnofrom)

#### Call Signature

> **selectNoFrom**\<`SE`\>(`selection`): [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

Defined in: [query-creator.ts:232](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L232)

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as [SelectQueryBuilder.select](../interfaces/SelectQueryBuilder.md#select). See its
documentation for more examples.

### Examples

```ts
const result = await db.selectNoFrom((eb) => [
  eb.selectFrom('person')
    .select('id')
    .where('first_name', '=', 'Jennifer')
    .limit(1)
    .as('jennifer_id'),
  eb.selectFrom('pet')
    .select('id')
    .where('name', '=', 'Doggo')
    .limit(1)
    .as('doggo_id')
])
.executeTakeFirstOrThrow()

console.log(result.jennifer_id)
console.log(result.doggo_id)
```

The generated SQL (PostgreSQL):

```sql
select (
  select "id"
  from "person"
  where "first_name" = $1
  limit $2
) as "jennifer_id", (
  select "id"
  from "pet"
  where "name" = $3
  limit $4
) as "doggo_id"
```

##### Type Parameters

###### SE

`SE` *extends* [`SelectExpression`](../types/SelectExpression.md)\<`DB`, `never`\>

##### Parameters

###### selection

`SE`

##### Returns

[`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

##### Inherited from

[`QueryCreator`](QueryCreator.md).[`selectNoFrom`](QueryCreator.md#selectnofrom)

***

### startTransaction()

> **startTransaction**(): [`ControlledTransactionBuilder`](ControlledTransactionBuilder.md)\<`DB`\>

Defined in: [kysely.ts:422](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L422)

Creates a [ControlledTransactionBuilder](ControlledTransactionBuilder.md) that can be used to run queries inside a controlled transaction.

The returned [ControlledTransactionBuilder](ControlledTransactionBuilder.md) can be used to configure the transaction.
The [ControlledTransactionBuilder.execute](ControlledTransactionBuilder.md#execute) method can then be called
to start the transaction and return a [ControlledTransaction](ControlledTransaction.md).

A [ControlledTransaction](ControlledTransaction.md) allows you to commit and rollback manually,
execute savepoint commands. It extends [Transaction](Transaction.md) which extends Kysely,
so you can run queries inside the transaction. Once the transaction is committed,
or rolled back, it can't be used anymore - all queries will throw an error.
This is to prevent accidentally running queries outside the transaction - where
atomicity is not guaranteed anymore.

### Examples

<!-- siteExample("transactions", "Controlled transaction", 11) -->

A controlled transaction allows you to commit and rollback manually, execute
savepoint commands, and queries in general.

In this example we start a transaction, use it to insert two rows and then commit
the transaction. If an error is thrown, we catch it and rollback the transaction.

```ts
const trx = await db.startTransaction().execute()

try {
  const jennifer = await trx.insertInto('person')
    .values({
      first_name: 'Jennifer',
      last_name: 'Aniston',
      age: 40,
    })
    .returning('id')
    .executeTakeFirstOrThrow()

  const catto = await trx.insertInto('pet')
    .values({
      owner_id: jennifer.id,
      name: 'Catto',
      species: 'cat',
      is_favorite: false,
    })
    .returningAll()
    .executeTakeFirstOrThrow()

  await trx.commit().execute()

  // ...
} catch (error) {
  await trx.rollback().execute()
}
```

<!-- siteExample("transactions", "Controlled transaction /w savepoints", 12) -->

A controlled transaction allows you to commit and rollback manually, execute
savepoint commands, and queries in general.

In this example we start a transaction, insert a person, create a savepoint,
try inserting a toy and a pet, and if an error is thrown, we rollback to the
savepoint. Eventually we release the savepoint, insert an audit record and
commit the transaction. If an error is thrown, we catch it and rollback the
transaction.

```ts
const trx = await db.startTransaction().execute()

try {
  const jennifer = await trx
    .insertInto('person')
    .values({
      first_name: 'Jennifer',
      last_name: 'Aniston',
      age: 40,
    })
    .returning('id')
    .executeTakeFirstOrThrow()

  const trxAfterJennifer = await trx.savepoint('after_jennifer').execute()

  try {
    const catto = await trxAfterJennifer
      .insertInto('pet')
      .values({
        owner_id: jennifer.id,
        name: 'Catto',
        species: 'cat',
      })
      .returning('id')
      .executeTakeFirstOrThrow()

    await trxAfterJennifer
      .insertInto('toy')
      .values({ name: 'Bone', price: 1.99, pet_id: catto.id })
      .execute()
  } catch (error) {
    await trxAfterJennifer.rollbackToSavepoint('after_jennifer').execute()
  }

  await trxAfterJennifer.releaseSavepoint('after_jennifer').execute()

  await trx.insertInto('audit').values({ action: 'added Jennifer' }).execute()

  await trx.commit().execute()
} catch (error) {
  await trx.rollback().execute()
}
```

#### Returns

[`ControlledTransactionBuilder`](ControlledTransactionBuilder.md)\<`DB`\>

***

### transaction()

> **transaction**(): [`TransactionBuilder`](TransactionBuilder.md)\<`DB`\>

Defined in: [kysely.ts:307](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L307)

Creates a [TransactionBuilder](TransactionBuilder.md) that can be used to run queries inside a transaction.

The returned [TransactionBuilder](TransactionBuilder.md) can be used to configure the transaction. The
[TransactionBuilder.execute](TransactionBuilder.md#execute) method can then be called to run the transaction.
[TransactionBuilder.execute](TransactionBuilder.md#execute) takes a function that is run inside the
transaction. If the function throws an exception,
1. the exception is caught,
2. the transaction is rolled back, and
3. the exception is thrown again.
Otherwise the transaction is committed.

The callback function passed to the [execute](TransactionBuilder.md#execute)
method gets the transaction object as its only argument. The transaction is
of type [Transaction](Transaction.md) which inherits Kysely. Any query
started through the transaction object is executed inside the transaction.

To run a controlled transaction, allowing you to commit and rollback manually,
use [startTransaction](#starttransaction) instead.

### Examples

<!-- siteExample("transactions", "Simple transaction", 10) -->

This example inserts two rows in a transaction. If an exception is thrown inside
the callback passed to the `execute` method,
1. the exception is caught,
2. the transaction is rolled back, and
3. the exception is thrown again.
Otherwise the transaction is committed.

```ts
const catto = await db.transaction().execute(async (trx) => {
  const jennifer = await trx.insertInto('person')
    .values({
      first_name: 'Jennifer',
      last_name: 'Aniston',
      age: 40,
    })
    .returning('id')
    .executeTakeFirstOrThrow()

  return await trx.insertInto('pet')
    .values({
      owner_id: jennifer.id,
      name: 'Catto',
      species: 'cat',
      is_favorite: false,
    })
    .returningAll()
    .executeTakeFirst()
})
```

Setting the isolation level:

```ts
import type { Kysely } from 'kysely'

await db
  .transaction()
  .setIsolationLevel('serializable')
  .execute(async (trx) => {
    await doStuff(trx)
  })

async function doStuff(kysely: typeof db) {
  // ...
}
```

#### Returns

[`TransactionBuilder`](TransactionBuilder.md)\<`DB`\>

***

### updateTable()

> **updateTable**\<`TE`\>(`tables`): [`UpdateTable`](../types/UpdateTable.md)\<`DB`, `TE`\>

Defined in: [query-creator.ts:435](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L435)

Creates an update query.

See the [UpdateQueryBuilder.where](UpdateQueryBuilder.md#where) method for examples on how to specify
a where clause for the update operation.

See the [UpdateQueryBuilder.set](UpdateQueryBuilder.md#set) method for examples on how to
specify the updates.

The return value of the query is an [UpdateResult](UpdateResult.md).

### Examples

```ts
const result = await db
  .updateTable('person')
  .set({ first_name: 'Jennifer' })
  .where('person.id', '=', 1)
  .executeTakeFirst()

console.log(result.numUpdatedRows)
```

#### Type Parameters

##### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `never`\> \| readonly [`TableExpression`](../types/TableExpression.md)\<`DB`, `never`\>[]

#### Parameters

##### tables

`TE`

#### Returns

[`UpdateTable`](../types/UpdateTable.md)\<`DB`, `TE`\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`updateTable`](QueryCreator.md#updatetable)

***

### with()

> **with**\<`N`, `E`\>(`nameOrBuilder`, `expression`): [`QueryCreatorWithCommonTableExpression`](../types/QueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

Defined in: [query-creator.ts:656](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L656)

Creates a `with` query (Common Table Expression).

### Examples

<!-- siteExample("cte", "Simple selects", 10) -->

Common table expressions (CTE) are a great way to modularize complex queries.
Essentially they allow you to run multiple separate queries within a
single roundtrip to the DB.

Since CTEs are a part of the main query, query optimizers inside DB
engines are able to optimize the overall query. For example, postgres
is able to inline the CTEs inside the using queries if it decides it's
faster.

```ts
const result = await db
  // Create a CTE called `jennifers` that selects all
  // persons named 'Jennifer'.
  .with(
    'jennifers',
    db
      .selectFrom('person')
      .where('first_name', '=', 'Jennifer')
      .select(['id', 'age']),
  )
  // Select all rows from the `jennifers` CTE and
  // further filter it.
  // To refer to a CTE in another CTE, use the callback variant of `with`.
  .with('adult_jennifers', (db) =>
    db.selectFrom('jennifers').where('age', '>', 18).select(['id', 'age']),
  )
  // Finally select all adult jennifers that are
  // also younger than 60.
  .selectFrom('adult_jennifers')
  .where('age', '<', 60)
  .selectAll()
  .execute()
```

<!-- siteExample("cte", "Inserts, updates and deletions", 20) -->

Some databases like postgres also allow you to run other queries than selects
in CTEs. On these databases CTEs are extremely powerful:

```ts
const result = await db
  .with('new_person', (db) => db
    .insertInto('person')
    .values({
      first_name: 'Jennifer',
      age: 35,
    })
    .returning('id')
  )
  .with('new_pet', (db) => db
    .insertInto('pet')
    .values({
      name: 'Doggo',
      species: 'dog',
      is_favorite: true,
      // Use the id of the person we just inserted.
      owner_id: db
        .selectFrom('new_person')
        .select('id')
    })
    .returning('id')
  )
  .selectFrom(['new_person', 'new_pet'])
  .select([
    'new_person.id as person_id',
    'new_pet.id as pet_id'
  ])
  .execute()
```

The CTE name can optionally specify column names in addition to
a name. In that case Kysely requires the expression to retun
rows with the same columns.

```ts
await db
  .with('jennifers(id, age)', (db) => db
    .selectFrom('person')
    .where('first_name', '=', 'Jennifer')
    // This is ok since we return columns with the same
    // names as specified by `jennifers(id, age)`.
    .select(['id', 'age'])
  )
  .selectFrom('jennifers')
  .selectAll()
  .execute()
```

The first argument can also be a callback. The callback is passed
a `CTEBuilder` instance that can be used to configure the CTE:

```ts
await db
  .with(
    (cte) => cte('jennifers').materialized(),
    (db) => db
      .selectFrom('person')
      .where('first_name', '=', 'Jennifer')
      .select(['id', 'age'])
  )
  .selectFrom('jennifers')
  .selectAll()
  .execute()
```

#### Type Parameters

##### N

`N` *extends* `string`

##### E

`E` *extends* [`CommonTableExpression`](../types/CommonTableExpression.md)\<`DB`, `N`\>

#### Parameters

##### nameOrBuilder

`N` \| [`CTEBuilderCallback`](../types/readonly.CTEBuilderCallback.md)\<`N`\>

##### expression

`E`

#### Returns

[`QueryCreatorWithCommonTableExpression`](../types/QueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`with`](QueryCreator.md#with)

***

### withoutPlugins()

> **withoutPlugins**(): `Kysely`\<`DB`\>

Defined in: [kysely.ts:463](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L463)

Returns a copy of this Kysely instance without any plugins.

#### Returns

`Kysely`\<`DB`\>

#### Overrides

[`QueryCreator`](QueryCreator.md).[`withoutPlugins`](QueryCreator.md#withoutplugins)

***

### withPlugin()

> **withPlugin**(`plugin`): `Kysely`\<`DB`\>

Defined in: [kysely.ts:453](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L453)

Returns a copy of this Kysely instance with the given plugin installed.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`Kysely`\<`DB`\>

#### Overrides

[`QueryCreator`](QueryCreator.md).[`withPlugin`](QueryCreator.md#withplugin)

***

### withRecursive()

> **withRecursive**\<`N`, `E`\>(`nameOrBuilder`, `expression`): [`QueryCreatorWithCommonTableExpression`](../types/QueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

Defined in: [query-creator.ts:680](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L680)

Creates a recursive `with` query (Common Table Expression).

Note that recursiveness is a property of the whole `with` statement.
You cannot have recursive and non-recursive CTEs in a same `with` statement.
Therefore the recursiveness is determined by the **first** `with` or
`withRecusive` call you make.

See the [with](#with) method for examples and more documentation.

#### Type Parameters

##### N

`N` *extends* `string`

##### E

`E` *extends* [`RecursiveCommonTableExpression`](../types/RecursiveCommonTableExpression.md)\<`DB`, `N`\>

#### Parameters

##### nameOrBuilder

`N` \| [`CTEBuilderCallback`](../types/readonly.CTEBuilderCallback.md)\<`N`\>

##### expression

`E`

#### Returns

[`QueryCreatorWithCommonTableExpression`](../types/QueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

#### Inherited from

[`QueryCreator`](QueryCreator.md).[`withRecursive`](QueryCreator.md#withrecursive)

***

### withSchema()

> **withSchema**(`schema`): `Kysely`\<`DB`\>

Defined in: [kysely.ts:473](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L473)

#### Parameters

##### schema

`string`

#### Returns

`Kysely`\<`DB`\>

#### Overrides

[`QueryCreator`](QueryCreator.md).[`withSchema`](QueryCreator.md#withschema)

***

### ~~withTables()~~

> **withTables**\<`T`\>(): `Kysely`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

Defined in: [kysely.ts:594](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L594)

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`Kysely`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

#### Deprecated

use [$extendTables](#extendtables) instead.
