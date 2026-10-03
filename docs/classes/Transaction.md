[**kysely**](../index.md)

***

[kysely](../modules.md) / Transaction

# Class: Transaction\<DB\>

Defined in: [kysely.ts:645](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L645)

The main Kysely class.

You should create one instance of `Kysely` per database using the [Kysely](Kysely.md)
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

- [`Kysely`](Kysely.md)\<`DB`\>

### Extended by

- [`ControlledTransaction`](ControlledTransaction.md)

## Type Parameters

### DB

`DB`

The database interface type. Keys of this type must be table names
   in the database and values must be interfaces that describe the rows in those
   tables. See the examples above.

## Constructors

### Constructor

> **new Transaction**\<`DB`\>(`props`): `Transaction`\<`DB`\>

Defined in: [kysely.ts:648](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L648)

#### Parameters

##### props

[`KyselyProps`](../interfaces/KyselyProps.md)

#### Returns

`Transaction`\<`DB`\>

#### Overrides

[`Kysely`](Kysely.md).[`constructor`](Kysely.md#constructor)

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

#### Inherited from

`Kysely.dynamic`

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

#### Inherited from

`Kysely.fn`

***

### introspection

#### Get Signature

> **get** **introspection**(): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [kysely.ts:163](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L163)

Returns a [database introspector](../interfaces/DatabaseIntrospector.md).

##### Returns

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

#### Inherited from

[`Kysely`](Kysely.md).[`introspection`](Kysely.md#introspection)

***

### isTransaction

#### Get Signature

> **get** **isTransaction**(): `true`

Defined in: [kysely.ts:656](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L656)

Returns true if this `Kysely` instance is a transaction.

You can also use `db instanceof Transaction`.

##### Returns

`true`

#### Overrides

[`Kysely`](Kysely.md).[`isTransaction`](Kysely.md#istransaction)

***

### schema

#### Get Signature

> **get** **schema**(): [`SchemaModule`](SchemaModule.md)

Defined in: [kysely.ts:146](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L146)

Returns the [SchemaModule](SchemaModule.md) module for building database schema.

##### Returns

[`SchemaModule`](SchemaModule.md)

#### Inherited from

[`Kysely`](Kysely.md).[`schema`](Kysely.md#schema)

## Methods

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: [kysely.ts:640](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L640)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Kysely`](Kysely.md).[`[asyncDispose]`](Kysely.md#asyncdispose)

***

### $extendTables()

> **$extendTables**\<`T`\>(): `Transaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

Defined in: [kysely.ts:742](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L742)

Similar to [Kysely.$extendTables](Kysely.md#extendtables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`Transaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

#### Overrides

[`Kysely`](Kysely.md).[`$extendTables`](Kysely.md#extendtables)

***

### $omitTables()

> **$omitTables**\<`T`\>(): `Transaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`\>

Defined in: [kysely.ts:751](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L751)

Similar to [Kysely.$omitTables](Kysely.md#omittables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`Transaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`\>

#### Overrides

[`Kysely`](Kysely.md).[`$omitTables`](Kysely.md#omittables)

***

### $pickTables()

> **$pickTables**\<`T`\>(): `Transaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`\>

Defined in: [kysely.ts:760](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L760)

Similar to [Kysely.$pickTables](Kysely.md#picktables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`Transaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`\>

#### Overrides

[`Kysely`](Kysely.md).[`$pickTables`](Kysely.md#picktables)

***

### case()

#### Call Signature

> **case**(): [`CaseBuilder`](CaseBuilder.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:172](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L172)

Creates a `case` statement/operator.

See [ExpressionBuilder.case](../interfaces/ExpressionBuilder.md#case) for more information.

##### Returns

[`CaseBuilder`](CaseBuilder.md)\<`DB`, keyof `DB`\>

##### Inherited from

[`Kysely`](Kysely.md).[`case`](Kysely.md#case)

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

##### Inherited from

[`Kysely`](Kysely.md).[`case`](Kysely.md#case)

***

### ~~connection()~~

> **connection**(): `never`

Defined in: [kysely.ts:681](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L681)

#### Returns

`never`

#### Deprecated

calling the connection method for a Transaction is not supported

#### Overrides

[`Kysely`](Kysely.md).[`connection`](Kysely.md#connection)

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

[`Kysely`](Kysely.md).[`deleteFrom`](Kysely.md#deletefrom)

***

### ~~destroy()~~

> **destroy**(): `never`

Defined in: [kysely.ts:690](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L690)

#### Returns

`never`

#### Deprecated

calling the destroy method for a Transaction is not supported

#### Overrides

[`Kysely`](Kysely.md).[`destroy`](Kysely.md#destroy)

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

#### Inherited from

[`Kysely`](Kysely.md).[`executeQuery`](Kysely.md#executequery)

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

[`Kysely`](Kysely.md).[`insertInto`](Kysely.md#insertinto)

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

[`Kysely`](Kysely.md).[`mergeInto`](Kysely.md#mergeinto)

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

[`Kysely`](Kysely.md).[`replaceInto`](Kysely.md#replaceinto)

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

[`Kysely`](Kysely.md).[`selectFrom`](Kysely.md#selectfrom)

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

[`Kysely`](Kysely.md).[`selectNoFrom`](Kysely.md#selectnofrom)

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

[`Kysely`](Kysely.md).[`selectNoFrom`](Kysely.md#selectnofrom)

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

[`Kysely`](Kysely.md).[`selectNoFrom`](Kysely.md#selectnofrom)

***

### ~~startTransaction()~~

> **startTransaction**(): `never`

Defined in: [kysely.ts:672](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L672)

#### Returns

`never`

#### Deprecated

calling the controlled transaction method for a Transaction is not supported

#### Overrides

[`Kysely`](Kysely.md).[`startTransaction`](Kysely.md#starttransaction)

***

### ~~transaction()~~

> **transaction**(): `never`

Defined in: [kysely.ts:663](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L663)

#### Returns

`never`

#### Deprecated

calling the transaction method for a Transaction is not supported

#### Overrides

[`Kysely`](Kysely.md).[`transaction`](Kysely.md#transaction)

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

[`Kysely`](Kysely.md).[`updateTable`](Kysely.md#updatetable)

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

[`Kysely`](Kysely.md).[`with`](Kysely.md#with)

***

### withoutPlugins()

> **withoutPlugins**(): `Transaction`\<`DB`\>

Defined in: [kysely.ts:709](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L709)

Similar to [Kysely.withoutPlugins](Kysely.md#withoutplugins) but returns the transaction.

#### Returns

`Transaction`\<`DB`\>

#### Overrides

[`Kysely`](Kysely.md).[`withoutPlugins`](Kysely.md#withoutplugins)

***

### withPlugin()

> **withPlugin**(`plugin`): `Transaction`\<`DB`\>

Defined in: [kysely.ts:699](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L699)

Similar to [Kysely.withPlugin](Kysely.md#withplugin) but returns the transaction.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`Transaction`\<`DB`\>

#### Overrides

[`Kysely`](Kysely.md).[`withPlugin`](Kysely.md#withplugin)

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

[`Kysely`](Kysely.md).[`withRecursive`](Kysely.md#withrecursive)

***

### withSchema()

> **withSchema**(`schema`): `Transaction`\<`DB`\>

Defined in: [kysely.ts:719](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L719)

Similar to [Kysely.withSchema](Kysely.md#withschema) but returns the transaction.

#### Parameters

##### schema

`string`

#### Returns

`Transaction`\<`DB`\>

#### Overrides

[`Kysely`](Kysely.md).[`withSchema`](Kysely.md#withschema)

***

### ~~withTables()~~

> **withTables**\<`T`\>(): `Transaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

Defined in: [kysely.ts:733](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L733)

Similar to [Kysely.withTables](Kysely.md#withtables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`Transaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

#### Deprecated

use [$extendTables](#extendtables) instead.

#### Overrides

[`Kysely`](Kysely.md).[`withTables`](Kysely.md#withtables)
