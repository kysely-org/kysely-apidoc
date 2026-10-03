[**kysely**](../index.md)

***

[kysely](../modules.md) / ControlledTransaction

# Class: ControlledTransaction\<DB, S\>

Defined in: [kysely.ts:972](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L972)

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

- [`Transaction`](Transaction.md)\<`DB`\>

## Type Parameters

### DB

`DB`

The database interface type. Keys of this type must be table names
   in the database and values must be interfaces that describe the rows in those
   tables. See the examples above.

### S

`S` *extends* `string`[] = \[\]

## Constructors

### Constructor

> **new ControlledTransaction**\<`DB`, `S`\>(`props`): `ControlledTransaction`\<`DB`, `S`\>

Defined in: [kysely.ts:980](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L980)

#### Parameters

##### props

[`ControlledTransactionProps`](../interfaces/ControlledTransactionProps.md)

#### Returns

`ControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`constructor`](Transaction.md#constructor)

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

`Transaction.dynamic`

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

`Transaction.fn`

***

### introspection

#### Get Signature

> **get** **introspection**(): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [kysely.ts:163](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L163)

Returns a [database introspector](../interfaces/DatabaseIntrospector.md).

##### Returns

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

#### Inherited from

[`Transaction`](Transaction.md).[`introspection`](Transaction.md#introspection)

***

### isCommitted

#### Get Signature

> **get** **isCommitted**(): `boolean`

Defined in: [kysely.ts:999](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L999)

##### Returns

`boolean`

***

### isRolledBack

#### Get Signature

> **get** **isRolledBack**(): `boolean`

Defined in: [kysely.ts:1003](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1003)

##### Returns

`boolean`

***

### isTransaction

#### Get Signature

> **get** **isTransaction**(): `true`

Defined in: [kysely.ts:656](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L656)

Returns true if this `Kysely` instance is a transaction.

You can also use `db instanceof Transaction`.

##### Returns

`true`

#### Inherited from

[`Transaction`](Transaction.md).[`isTransaction`](Transaction.md#istransaction)

***

### schema

#### Get Signature

> **get** **schema**(): [`SchemaModule`](SchemaModule.md)

Defined in: [kysely.ts:146](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L146)

Returns the [SchemaModule](SchemaModule.md) module for building database schema.

##### Returns

[`SchemaModule`](SchemaModule.md)

#### Inherited from

[`Transaction`](Transaction.md).[`schema`](Transaction.md#schema)

## Methods

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Defined in: [kysely.ts:640](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L640)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Transaction`](Transaction.md).[`[asyncDispose]`](Transaction.md#asyncdispose)

***

### $extendTables()

> **$extendTables**\<`T`\>(): `ControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

Defined in: [kysely.ts:1262](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1262)

Similar to [Kysely.$extendTables](Kysely.md#extendtables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`ControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`$extendTables`](Transaction.md#extendtables)

***

### $omitTables()

> **$omitTables**\<`T`\>(): `ControlledTransaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`, `S`\>

Defined in: [kysely.ts:1268](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1268)

Similar to [Kysely.$omitTables](Kysely.md#omittables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`ControlledTransaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`$omitTables`](Transaction.md#omittables)

***

### $pickTables()

> **$pickTables**\<`T`\>(): `ControlledTransaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`, `S`\>

Defined in: [kysely.ts:1275](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1275)

Similar to [Kysely.$pickTables](Kysely.md#picktables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`ControlledTransaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`$pickTables`](Transaction.md#picktables)

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

[`Transaction`](Transaction.md).[`case`](Transaction.md#case)

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

[`Transaction`](Transaction.md).[`case`](Transaction.md#case)

***

### commit()

> **commit**(): [`Command`](Command.md)\<`void`\>

Defined in: [kysely.ts:1031](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1031)

Commits the transaction.

See [rollback](#rollback).

### Examples

```ts
import type { Kysely } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const trx = await db.startTransaction().execute()

try {
  await doSomething(trx)

  await trx.commit().execute()
} catch (error) {
  await trx.rollback().execute()
}

async function doSomething(kysely: Kysely<Database>) {}
```

#### Returns

[`Command`](Command.md)\<`void`\>

***

### ~~connection()~~

> **connection**(): `never`

Defined in: [kysely.ts:681](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L681)

#### Returns

`never`

#### Deprecated

calling the connection method for a Transaction is not supported

#### Inherited from

[`Transaction`](Transaction.md).[`connection`](Transaction.md#connection)

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

[`Transaction`](Transaction.md).[`deleteFrom`](Transaction.md#deletefrom)

***

### ~~destroy()~~

> **destroy**(): `never`

Defined in: [kysely.ts:690](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L690)

#### Returns

`never`

#### Deprecated

calling the destroy method for a Transaction is not supported

#### Inherited from

[`Transaction`](Transaction.md).[`destroy`](Transaction.md#destroy)

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

[`Transaction`](Transaction.md).[`executeQuery`](Transaction.md#executequery)

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

[`Transaction`](Transaction.md).[`insertInto`](Transaction.md#insertinto)

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

[`Transaction`](Transaction.md).[`mergeInto`](Transaction.md#mergeinto)

***

### releaseSavepoint()

> **releaseSavepoint**\<`SN`\>(`savepointName`): [`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](Command.md)\<`ControlledTransaction`\<`DB`, [`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\>\> : `never`

Defined in: [kysely.ts:1213](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1213)

Releases a savepoint with a given name.

See [savepoint](#savepoint) and [rollbackToSavepoint](#rollbacktosavepoint).

You must use the same instance returned by [savepoint](#savepoint), or
escape the type-check by using `as any`.

### Examples

```ts
import type { Kysely } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const trx = await db.startTransaction().execute()

await insertJennifer(trx)

const trxAfterJennifer = await trx.savepoint('after_jennifer').execute()

try {
  await doSomething(trxAfterJennifer)
} catch (error) {
  await trxAfterJennifer.rollbackToSavepoint('after_jennifer').execute()
}

await trxAfterJennifer.releaseSavepoint('after_jennifer').execute()

await doSomethingElse(trx)

async function insertJennifer(kysely: Kysely<Database>) {}
async function doSomething(kysely: Kysely<Database>) {}
async function doSomethingElse(kysely: Kysely<Database>) {}
```

#### Type Parameters

##### SN

`SN` *extends* `string`

#### Parameters

##### savepointName

`SN`

#### Returns

[`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](Command.md)\<`ControlledTransaction`\<`DB`, [`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\>\> : `never`

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

[`Transaction`](Transaction.md).[`replaceInto`](Transaction.md#replaceinto)

***

### rollback()

> **rollback**(): [`Command`](Command.md)\<`void`\>

Defined in: [kysely.ts:1067](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1067)

Rolls back the transaction.

See [commit](#commit) and [rollbackToSavepoint](#rollbacktosavepoint).

### Examples

```ts
import type { Kysely } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const trx = await db.startTransaction().execute()

try {
  await doSomething(trx)

  await trx.commit().execute()
} catch (error) {
  await trx.rollback().execute()
}

async function doSomething(kysely: Kysely<Database>) {}
```

#### Returns

[`Command`](Command.md)\<`void`\>

***

### rollbackToSavepoint()

> **rollbackToSavepoint**\<`SN`\>(`savepointName`): [`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](Command.md)\<`ControlledTransaction`\<`DB`, [`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\>\> : `never`

Defined in: [kysely.ts:1156](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1156)

Rolls back to a savepoint with a given name.

See [savepoint](#savepoint) and [releaseSavepoint](#releasesavepoint).

You must use the same instance returned by [savepoint](#savepoint), or
escape the type-check by using `as any`.

### Examples

```ts
import type { Kysely } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const trx = await db.startTransaction().execute()

await insertJennifer(trx)

const trxAfterJennifer = await trx.savepoint('after_jennifer').execute()

try {
  await doSomething(trxAfterJennifer)
} catch (error) {
  await trxAfterJennifer.rollbackToSavepoint('after_jennifer').execute()
}

async function insertJennifer(kysely: Kysely<Database>) {}
async function doSomething(kysely: Kysely<Database>) {}
```

#### Type Parameters

##### SN

`SN` *extends* `string`

#### Parameters

##### savepointName

`SN`

#### Returns

[`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](Command.md)\<`ControlledTransaction`\<`DB`, [`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\>\> : `never`

***

### savepoint()

> **savepoint**\<`SN`\>(`savepointName`): [`Command`](Command.md)\<`ControlledTransaction`\<`DB`, \[`...S[]`, `SN`\]\>\>

Defined in: [kysely.ts:1108](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1108)

Creates a savepoint with a given name.

See [rollbackToSavepoint](#rollbacktosavepoint) and [releaseSavepoint](#releasesavepoint).

For a type-safe experience, you should use the returned instance from now on.

### Examples

```ts
import type { Kysely } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const trx = await db.startTransaction().execute()

await insertJennifer(trx)

const trxAfterJennifer = await trx.savepoint('after_jennifer').execute()

try {
  await doSomething(trxAfterJennifer)
} catch (error) {
  await trxAfterJennifer.rollbackToSavepoint('after_jennifer').execute()
}

async function insertJennifer(kysely: Kysely<Database>) {}
async function doSomething(kysely: Kysely<Database>) {}
```

#### Type Parameters

##### SN

`SN` *extends* `string`

#### Parameters

##### savepointName

`SN` *extends* `S` ? `never` : `SN`

#### Returns

[`Command`](Command.md)\<`ControlledTransaction`\<`DB`, \[`...S[]`, `SN`\]\>\>

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

[`Transaction`](Transaction.md).[`selectFrom`](Transaction.md#selectfrom)

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

[`Transaction`](Transaction.md).[`selectNoFrom`](Transaction.md#selectnofrom)

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

[`Transaction`](Transaction.md).[`selectNoFrom`](Transaction.md#selectnofrom)

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

[`Transaction`](Transaction.md).[`selectNoFrom`](Transaction.md#selectnofrom)

***

### ~~startTransaction()~~

> **startTransaction**(): `never`

Defined in: [kysely.ts:672](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L672)

#### Returns

`never`

#### Deprecated

calling the controlled transaction method for a Transaction is not supported

#### Inherited from

[`Transaction`](Transaction.md).[`startTransaction`](Transaction.md#starttransaction)

***

### ~~transaction()~~

> **transaction**(): `never`

Defined in: [kysely.ts:663](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L663)

#### Returns

`never`

#### Deprecated

calling the transaction method for a Transaction is not supported

#### Inherited from

[`Transaction`](Transaction.md).[`transaction`](Transaction.md#transaction)

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

[`Transaction`](Transaction.md).[`updateTable`](Transaction.md#updatetable)

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

[`Transaction`](Transaction.md).[`with`](Transaction.md#with)

***

### withoutPlugins()

> **withoutPlugins**(): `ControlledTransaction`\<`DB`, `S`\>

Defined in: [kysely.ts:1240](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1240)

Similar to [Kysely.withoutPlugins](Kysely.md#withoutplugins) but returns the transaction.

#### Returns

`ControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`withoutPlugins`](Transaction.md#withoutplugins)

***

### withPlugin()

> **withPlugin**(`plugin`): `ControlledTransaction`\<`DB`, `S`\>

Defined in: [kysely.ts:1233](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1233)

Similar to [Kysely.withPlugin](Kysely.md#withplugin) but returns the transaction.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`ControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`withPlugin`](Transaction.md#withplugin)

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

[`Transaction`](Transaction.md).[`withRecursive`](Transaction.md#withrecursive)

***

### withSchema()

> **withSchema**(`schema`): `ControlledTransaction`\<`DB`, `S`\>

Defined in: [kysely.ts:1247](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1247)

Similar to [Kysely.withSchema](Kysely.md#withschema) but returns the transaction.

#### Parameters

##### schema

`string`

#### Returns

`ControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`Transaction`](Transaction.md).[`withSchema`](Transaction.md#withschema)

***

### ~~withTables()~~

> **withTables**\<`T`\>(): `ControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

Defined in: [kysely.ts:1256](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1256)

Similar to [Kysely.withTables](Kysely.md#withtables) but returns the transaction.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`ControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

#### Deprecated

use [$extendTables](#extendtables) instead.

#### Overrides

[`Transaction`](Transaction.md).[`withTables`](Transaction.md#withtables)
