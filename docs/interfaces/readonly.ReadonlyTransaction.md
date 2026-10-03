[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyTransaction

# Interface: ReadonlyTransaction\<DB\>

Defined in: [readonly/readonly-kysely.ts:197](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L197)

Similar to [Transaction](../classes/Transaction.md) but read-only.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Pick`\<[`ReadonlyKysely`](readonly.ReadonlyKysely.md)\<`DB`\>, `"case"` \| `"deleteFrom"` \| `"dynamic"` \| `"executeQuery"` \| `"fn"` \| `"getExecutor"` \| `"insertInto"` \| `"introspection"` \| `"mergeInto"` \| `"replaceInto"` \| `"schema"` \| `"selectFrom"` \| `"selectNoFrom"` \| `"updateTable"` \| `"with"` \| `"withRecursive"`\>.`Pick`\<[`Transaction`](../classes/Transaction.md)\<`DB`\>, `"connection"` \| `"destroy"` \| `"isTransaction"` \| `"startTransaction"` \| `"transaction"`\>

### Extended by

- [`ReadonlyControlledTransaction`](readonly.ReadonlyControlledTransaction.md)

## Type Parameters

### DB

`DB`

## Properties

### dynamic

> **dynamic**: [`DynamicModule`](../classes/DynamicModule.md)\<`DB`\>

Defined in: [kysely.ts:156](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L156)

#### Inherited from

`Pick.dynamic`

***

### fn

> **fn**: [`FunctionModule`](FunctionModule.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:232](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L232)

#### Inherited from

`Pick.fn`

***

### introspection

> **introspection**: [`DatabaseIntrospector`](DatabaseIntrospector.md)

Defined in: [kysely.ts:163](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L163)

#### Inherited from

[`ControlledTransaction`](../classes/ControlledTransaction.md).[`introspection`](../classes/ControlledTransaction.md#introspection)

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

`Pick.schema`

## Methods

### $extendTables()

> **$extendTables**\<`T`\>(): `ReadonlyTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

Defined in: [readonly/readonly-kysely.ts:253](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L253)

Similar to [Transaction.$extendTables](../classes/Transaction.md#extendtables) but read-only.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`ReadonlyTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

***

### $omitTables()

> **$omitTables**\<`T`\>(): `ReadonlyTransaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`\>

Defined in: [readonly/readonly-kysely.ts:260](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L260)

Similar to [Transaction.$omitTables](../classes/Transaction.md#omittables) but read-only.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`ReadonlyTransaction`\<`DB` *extends* `object` ? `Omit`\<`DB`, `T`\> : `DB`\>

***

### $pickTables()

> **$pickTables**\<`T`\>(): `ReadonlyTransaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`\>

Defined in: [readonly/readonly-kysely.ts:267](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L267)

Similar to [Transaction.$pickTables](../classes/Transaction.md#picktables) but read-only.

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Returns

`ReadonlyTransaction`\<`DB` *extends* `object` ? `Pick`\<`DB`, `T`\> : `DB`\>

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

`Pick.case`

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

`Pick.case`

***

### ~~connection()~~

> **connection**(): `never`

Defined in: [kysely.ts:681](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L681)

#### Returns

`never`

#### Deprecated

calling the connection method for a Transaction is not supported

#### Inherited from

`Pick.connection`

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

`Pick.deleteFrom`

***

### ~~destroy()~~

> **destroy**(): `never`

Defined in: [kysely.ts:690](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L690)

#### Returns

`never`

#### Deprecated

calling the destroy method for a Transaction is not supported

#### Inherited from

`Pick.destroy`

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

`Pick.executeQuery`

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

`Pick.executeQuery`

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

`Pick.getExecutor`

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

`Pick.insertInto`

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

`Pick.mergeInto`

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

`Pick.replaceInto`

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

`Pick.selectFrom`

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

`Pick.selectNoFrom`

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

`Pick.selectNoFrom`

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

`Pick.selectNoFrom`

***

### ~~startTransaction()~~

> **startTransaction**(): `never`

Defined in: [kysely.ts:672](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L672)

#### Returns

`never`

#### Deprecated

calling the controlled transaction method for a Transaction is not supported

#### Inherited from

`Pick.startTransaction`

***

### ~~transaction()~~

> **transaction**(): `never`

Defined in: [kysely.ts:663](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L663)

#### Returns

`never`

#### Deprecated

calling the transaction method for a Transaction is not supported

#### Inherited from

`Pick.transaction`

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

`Pick.updateTable`

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

`Pick.with`

***

### withoutPlugins()

> **withoutPlugins**(): `ReadonlyTransaction`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:229](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L229)

Similar to [Transaction.withoutPlugins](../classes/Transaction.md#withoutplugins) but read-only.

#### Returns

`ReadonlyTransaction`\<`DB`\>

***

### withPlugin()

> **withPlugin**(`plugin`): `ReadonlyTransaction`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:234](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L234)

Similar to [Transaction.withPlugin](../classes/Transaction.md#withplugin) but read-only.

#### Parameters

##### plugin

[`KyselyPlugin`](KyselyPlugin.md)

#### Returns

`ReadonlyTransaction`\<`DB`\>

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

`Pick.withRecursive`

***

### withSchema()

> **withSchema**(`schema`): `ReadonlyTransaction`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:239](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L239)

Similar to [Transaction.withSchema](../classes/Transaction.md#withschema) but read-only.

#### Parameters

##### schema

`string`

#### Returns

`ReadonlyTransaction`\<`DB`\>

***

### ~~withTables()~~

> **withTables**\<`T`\>(): `ReadonlyTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

Defined in: [readonly/readonly-kysely.ts:246](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L246)

Similar to [Transaction.withTables](../classes/Transaction.md#withtables) but read-only.

#### Type Parameters

##### T

`T` *extends* `Record`\<`string`, `Record`\<`string`, `any`\>\>

#### Returns

`ReadonlyTransaction`\<[`DrainOuterGeneric`](../types/DrainOuterGeneric.md)\<`DB` & `T`\>\>

#### Deprecated

use [$extendTables](#extendtables) instead.
