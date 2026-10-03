[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyControlledTransaction

# Interface: ReadonlyControlledTransaction\<DB, S\>

Defined in: [readonly/readonly-kysely.ts:299](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L299)

Similar to [ControlledTransaction](../classes/ControlledTransaction.md) but read-only.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`ReadonlyTransaction`](readonly.ReadonlyTransaction.md)\<`DB`\>.`Pick`\<[`ControlledTransaction`](../classes/ControlledTransaction.md)\<`DB`, `S`\>, `"commit"` \| `"isCommitted"` \| `"isRolledBack"` \| `"rollback"`\>

## Type Parameters

### DB

`DB`

### S

`S` *extends* `string`[] = \[\]

## Properties

### dynamic

> **dynamic**: [`DynamicModule`](../classes/DynamicModule.md)\<`DB`\>

Defined in: [kysely.ts:156](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L156)

#### Inherited from

`ReadonlyTransaction.dynamic`

***

### fn

> **fn**: [`FunctionModule`](FunctionModule.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:232](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L232)

#### Inherited from

`ReadonlyTransaction.fn`

***

### introspection

> **introspection**: [`DatabaseIntrospector`](DatabaseIntrospector.md)

Defined in: [kysely.ts:163](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L163)

#### Inherited from

[`ControlledTransaction`](../classes/ControlledTransaction.md).[`introspection`](../classes/ControlledTransaction.md#introspection)

***

### isCommitted

> **isCommitted**: `boolean`

Defined in: [kysely.ts:999](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L999)

#### Inherited from

[`ControlledTransaction`](../classes/ControlledTransaction.md).[`isCommitted`](../classes/ControlledTransaction.md#iscommitted)

***

### isRolledBack

> **isRolledBack**: `boolean`

Defined in: [kysely.ts:1003](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1003)

#### Inherited from

[`ControlledTransaction`](../classes/ControlledTransaction.md).[`isRolledBack`](../classes/ControlledTransaction.md#isrolledback)

***

### isTransaction

> **isTransaction**: `true`

Defined in: [kysely.ts:656](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L656)

#### Inherited from

[`Transaction`](../classes/Transaction.md).[`isTransaction`](../classes/Transaction.md#istransaction)

***

### schema

> **schema**: [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-kysely.ts:98](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L98)

#### Inherited from

`ReadonlyTransaction.schema`

## Methods

### $extendTables()

> **$extendTables**\<`T`\>(): `ReadonlyControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

Defined in: [readonly/readonly-kysely.ts:358](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L358)

Similar to [ControlledTransaction.$extendTables](../classes/ControlledTransaction.md#extendtables) but read-only.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`ReadonlyControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`$extendTables`](readonly.ReadonlyTransaction.md#extendtables)

***

### $omitTables()

> **$omitTables**\<`T`\>(): `ReadonlyControlledTransaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`, `S`\>

Defined in: [readonly/readonly-kysely.ts:365](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L365)

Similar to [ControlledTransaction.$omitTables](../classes/ControlledTransaction.md#omittables) but read-only.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`ReadonlyControlledTransaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`, `S`\>

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`$omitTables`](readonly.ReadonlyTransaction.md#omittables)

***

### $pickTables()

> **$pickTables**\<`T`\>(): `ReadonlyControlledTransaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`, `S`\>

Defined in: [readonly/readonly-kysely.ts:373](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L373)

Similar to [ControlledTransaction.$pickTables](../classes/ControlledTransaction.md#picktables) but read-only.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`ReadonlyControlledTransaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`, `S`\>

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`$pickTables`](readonly.ReadonlyTransaction.md#picktables)

***

### case()

#### Call Signature

> **case**(): [`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:172](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L172)

Creates a `case` statement/operator.

See [ExpressionBuilder.case](ExpressionBuilder.md#case) for more information.

##### Returns

[`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, keyof `DB`\>

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`case`](readonly.ReadonlyTransaction.md#case)

#### Call Signature

> **case**\<`V`\>(`value`): [`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, keyof `DB`, `V`\>

Defined in: [kysely.ts:174](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L174)

Creates a `case` statement/operator.

See [ExpressionBuilder.case](ExpressionBuilder.md#case) for more information.

##### Type Parameters

###### V

`V`

##### Parameters

###### value

[`Expression`](Expression.md)\<`V`\>

##### Returns

[`CaseBuilder`](../classes/CaseBuilder.md)\<`DB`, keyof `DB`, `V`\>

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`case`](readonly.ReadonlyTransaction.md#case)

***

### commit()

> **commit**(): [`Command`](../classes/Command.md)\<`void`\>

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

[`Command`](../classes/Command.md)\<`void`\>

#### Inherited from

`Pick.commit`

***

### ~~connection()~~

> **connection**(): `never`

Defined in: [kysely.ts:681](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L681)

#### Returns

`never`

#### Deprecated

calling the connection method for a Transaction is not supported

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`connection`](readonly.ReadonlyTransaction.md#connection)

***

### ~~deleteFrom()~~

> **deleteFrom**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-query-creator.ts:20](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L20)

#### Parameters

##### args

...`any`[]

#### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

#### Deprecated

not allowed with a read-only Kysely instance.

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`deleteFrom`](readonly.ReadonlyTransaction.md#deletefrom)

***

### ~~destroy()~~

> **destroy**(): `never`

Defined in: [kysely.ts:690](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L690)

#### Returns

`never`

#### Deprecated

calling the destroy method for a Transaction is not supported

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`destroy`](readonly.ReadonlyTransaction.md#destroy)

***

### executeQuery()

#### Call Signature

> **executeQuery**\<`R`\>(`query`, `options?`): `Promise`\<[`ReadonlyQueryResult`](readonly.ReadonlyQueryResult.md)\<`R`\>\>

Defined in: [readonly/readonly-kysely.ts:76](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L76)

Similar to [Kysely.executeQuery](../classes/Kysely.md#executequery) but read-only.

##### Type Parameters

###### R

`R`

##### Parameters

###### query

[`ReadonlyCompiledQuery`](../types/readonly.ReadonlyCompiledQuery.md)\<`R`\> \| [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `any`, `R`\>

###### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

##### Returns

`Promise`\<[`ReadonlyQueryResult`](readonly.ReadonlyQueryResult.md)\<`R`\>\>

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`executeQuery`](readonly.ReadonlyTransaction.md#executequery)

#### Call Signature

> **executeQuery**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-kysely.ts:84](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L84)

##### Parameters

###### args

...`any`[]

##### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

##### Deprecated

not allowed with a read-only Kysely instance.

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`executeQuery`](readonly.ReadonlyTransaction.md#executequery)

***

### ~~getExecutor()~~

> **getExecutor**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-kysely.ts:91](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L91)

#### Parameters

##### args

...`any`[]

#### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

#### Deprecated

not allowed with a read-only Kysely instance.

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`getExecutor`](readonly.ReadonlyTransaction.md#getexecutor)

***

### ~~insertInto()~~

> **insertInto**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-query-creator.ts:27](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L27)

#### Parameters

##### args

...`any`[]

#### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

#### Deprecated

not allowed with a read-only Kysely instance.

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`insertInto`](readonly.ReadonlyTransaction.md#insertinto)

***

### ~~mergeInto()~~

> **mergeInto**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-query-creator.ts:34](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L34)

#### Parameters

##### args

...`any`[]

#### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

#### Deprecated

not allowed with a read-only Kysely instance.

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`mergeInto`](readonly.ReadonlyTransaction.md#mergeinto)

***

### releaseSavepoint()

> **releaseSavepoint**\<`SN`\>(`savepointName`): [`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](../classes/Command.md)\<`ReadonlyControlledTransaction`\<`DB`, [`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\>\> : `never`

Defined in: [readonly/readonly-kysely.ts:309](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L309)

Similar to [ControlledTransaction.releaseSavepoint](../classes/ControlledTransaction.md#releasesavepoint) but read-only.

#### Type Parameters

##### SN

`SN` *extends* `string`

#### Parameters

##### savepointName

`SN`

#### Returns

[`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](../classes/Command.md)\<`ReadonlyControlledTransaction`\<`DB`, [`ReleaseSavepoint`](../types/readonly.ReleaseSavepoint.md)\>\> : `never`

***

### ~~replaceInto()~~

> **replaceInto**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-query-creator.ts:41](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L41)

#### Parameters

##### args

...`any`[]

#### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

#### Deprecated

not allowed with a read-only Kysely instance.

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`replaceInto`](readonly.ReadonlyTransaction.md#replaceinto)

***

### rollback()

> **rollback**(): [`Command`](../classes/Command.md)\<`void`\>

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

[`Command`](../classes/Command.md)\<`void`\>

#### Inherited from

`Pick.rollback`

***

### rollbackToSavepoint()

> **rollbackToSavepoint**\<`SN`\>(`savepointName`): [`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](../classes/Command.md)\<`ReadonlyControlledTransaction`\<`DB`, [`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\>\> : `never`

Defined in: [readonly/readonly-kysely.ts:318](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L318)

Similar to [ControlledTransaction.rollbackToSavepoint](../classes/ControlledTransaction.md#rollbacktosavepoint) but read-only.

#### Type Parameters

##### SN

`SN` *extends* `string`

#### Parameters

##### savepointName

`SN`

#### Returns

[`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\<`S`, `SN`\> *extends* `string`[] ? [`Command`](../classes/Command.md)\<`ReadonlyControlledTransaction`\<`DB`, [`RollbackToSavepoint`](../types/readonly.RollbackToSavepoint.md)\>\> : `never`

***

### savepoint()

> **savepoint**\<`SN`\>(`savepointName`): [`Command`](../classes/Command.md)\<`ReadonlyControlledTransaction`\<`DB`, \[`...S[]`, `SN`\]\>\>

Defined in: [readonly/readonly-kysely.ts:327](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L327)

Similar to [ControlledTransaction.savepoint](../classes/ControlledTransaction.md#savepoint) but read-only.

#### Type Parameters

##### SN

`SN` *extends* `string`

#### Parameters

##### savepointName

`SN` *extends* `S` ? `never` : `SN`

#### Returns

[`Command`](../classes/Command.md)\<`ReadonlyControlledTransaction`\<`DB`, \[`...S[]`, `SN`\]\>\>

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

`TE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `never`\> \| readonly [`TableExpression`](../types/TableExpression.md)\<`DB`, `never`\>[]

#### Parameters

##### from

`TE`

#### Returns

[`SelectFrom`](../types/SelectFrom.md)\<`DB`, `never`, `TE`\>

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`selectFrom`](readonly.ReadonlyTransaction.md#selectfrom)

***

### selectNoFrom()

#### Call Signature

> **selectNoFrom**\<`SE`\>(`selections`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

Defined in: [query-creator.ts:224](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L224)

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as [SelectQueryBuilder.select](SelectQueryBuilder.md#select). See its
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

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`selectNoFrom`](readonly.ReadonlyTransaction.md#selectnofrom)

#### Call Signature

> **selectNoFrom**\<`CB`\>(`callback`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `never`, [`CallbackSelection`](../types/CallbackSelection.md)\<`DB`, `never`, `CB`\>\>

Defined in: [query-creator.ts:228](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L228)

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as [SelectQueryBuilder.select](SelectQueryBuilder.md#select). See its
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

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `never`, [`CallbackSelection`](../types/CallbackSelection.md)\<`DB`, `never`, `CB`\>\>

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`selectNoFrom`](readonly.ReadonlyTransaction.md#selectnofrom)

#### Call Signature

> **selectNoFrom**\<`SE`\>(`selection`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

Defined in: [query-creator.ts:232](https://github.com/kysely-org/kysely/blob/master/src/query-creator.ts#L232)

Creates a `select` query builder without a `from` clause.

If you want to create a `select from` query, use the `selectFrom` method instead.
This one can be used to create a plain `select` statement without a `from` clause.

This method accepts the same inputs as [SelectQueryBuilder.select](SelectQueryBuilder.md#select). See its
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

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`DB`, `never`, [`Selection`](../types/Selection.md)\<`DB`, `never`, `SE`\>\>

##### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`selectNoFrom`](readonly.ReadonlyTransaction.md#selectnofrom)

***

### ~~startTransaction()~~

> **startTransaction**(): `never`

Defined in: [kysely.ts:672](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L672)

#### Returns

`never`

#### Deprecated

calling the controlled transaction method for a Transaction is not supported

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`startTransaction`](readonly.ReadonlyTransaction.md#starttransaction)

***

### ~~transaction()~~

> **transaction**(): `never`

Defined in: [kysely.ts:663](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L663)

#### Returns

`never`

#### Deprecated

calling the transaction method for a Transaction is not supported

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`transaction`](readonly.ReadonlyTransaction.md#transaction)

***

### ~~updateTable()~~

> **updateTable**(...`args`): [`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-query-creator.ts:48](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L48)

#### Parameters

##### args

...`any`[]

#### Returns

[`KyselyTypeError`](KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

#### Deprecated

not allowed with a read-only Kysely instance.

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`updateTable`](readonly.ReadonlyTransaction.md#updatetable)

***

### with()

> **with**\<`N`, `E`\>(`nameOrBuilder`, `expression`): [`ReadonlyQueryCreatorWithCommonTableExpression`](../types/readonly.ReadonlyQueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

Defined in: [readonly/readonly-query-creator.ts:55](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L55)

Similar to [QueryCreator.with](../classes/QueryCreator.md#with) but read-only.

#### Type Parameters

##### N

`N` *extends* `string`

##### E

`E` *extends* [`ReadonlyCommonTableExpression`](../types/readonly.ReadonlyCommonTableExpression.md)\<`DB`, `N`\>

#### Parameters

##### nameOrBuilder

`N` \| [`CTEBuilderCallback`](../types/readonly.CTEBuilderCallback.md)\<`N`\>

##### expression

`E`

#### Returns

[`ReadonlyQueryCreatorWithCommonTableExpression`](../types/readonly.ReadonlyQueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`with`](readonly.ReadonlyTransaction.md#with)

***

### withoutPlugins()

> **withoutPlugins**(): `ReadonlyControlledTransaction`\<`DB`, `S`\>

Defined in: [readonly/readonly-kysely.ts:334](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L334)

Similar to [ControlledTransaction.withoutPlugins](../classes/ControlledTransaction.md#withoutplugins) but read-only.

#### Returns

`ReadonlyControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`withoutPlugins`](readonly.ReadonlyTransaction.md#withoutplugins)

***

### withPlugin()

> **withPlugin**(`plugin`): `ReadonlyControlledTransaction`\<`DB`, `S`\>

Defined in: [readonly/readonly-kysely.ts:339](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L339)

Similar to [ControlledTransaction.withPlugin](../classes/ControlledTransaction.md#withplugin) but read-only.

#### Parameters

##### plugin

[`KyselyPlugin`](KyselyPlugin.md)

#### Returns

`ReadonlyControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`withPlugin`](readonly.ReadonlyTransaction.md#withplugin)

***

### withRecursive()

> **withRecursive**\<`N`, `E`\>(`nameOrBuilder`, `expression`): [`ReadonlyQueryCreatorWithCommonTableExpression`](../types/readonly.ReadonlyQueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

Defined in: [readonly/readonly-query-creator.ts:63](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L63)

Similar to [QueryCreator.withRecursive](../classes/QueryCreator.md#withrecursive) but read-only.

#### Type Parameters

##### N

`N` *extends* `string`

##### E

`E` *extends* [`ReadonlyRecursiveCommonTableExpression`](../types/readonly.ReadonlyRecursiveCommonTableExpression.md)\<`DB`, `N`\>

#### Parameters

##### nameOrBuilder

`N` \| [`CTEBuilderCallback`](../types/readonly.CTEBuilderCallback.md)\<`N`\>

##### expression

`E`

#### Returns

[`ReadonlyQueryCreatorWithCommonTableExpression`](../types/readonly.ReadonlyQueryCreatorWithCommonTableExpression.md)\<`DB`, `N`, `E`\>

#### Inherited from

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`withRecursive`](readonly.ReadonlyTransaction.md#withrecursive)

***

### withSchema()

> **withSchema**(`schema`): `ReadonlyControlledTransaction`\<`DB`, `S`\>

Defined in: [readonly/readonly-kysely.ts:344](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L344)

Similar to [ControlledTransaction.withSchema](../classes/ControlledTransaction.md#withschema) but read-only.

#### Parameters

##### schema

`string`

#### Returns

`ReadonlyControlledTransaction`\<`DB`, `S`\>

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`withSchema`](readonly.ReadonlyTransaction.md#withschema)

***

### ~~withTables()~~

> **withTables**\<`T`\>(): `ReadonlyControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

Defined in: [readonly/readonly-kysely.ts:351](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L351)

Similar to [ControlledTransaction.withTables](../classes/ControlledTransaction.md#withtables) but read-only.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`ReadonlyControlledTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>, `S`\>

#### Deprecated

use [$extendTables](#extendtables) instead.

#### Overrides

[`ReadonlyTransaction`](readonly.ReadonlyTransaction.md).[`withTables`](readonly.ReadonlyTransaction.md#withtables)
