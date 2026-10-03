[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyQueryCreator

# Interface: ReadonlyQueryCreator\<DB\>

Defined in: [readonly/readonly-query-creator.ts:13](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-query-creator.ts#L13)

Similar to [QueryCreator](../classes/QueryCreator.md) but read-only.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Pick`\<[`QueryCreator`](../classes/QueryCreator.md)\<`DB`\>, `"selectFrom"` \| `"selectNoFrom"`\>

### Extended by

- [`ReadonlyKysely`](readonly.ReadonlyKysely.md)

## Type Parameters

### DB

`DB`

## Methods

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
