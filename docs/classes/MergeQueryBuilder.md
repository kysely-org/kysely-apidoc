[**kysely**](../index.md)

***

[kysely](../modules.md) / MergeQueryBuilder

# Class: MergeQueryBuilder\<DB, TT, O\>

Defined in: [query-builder/merge-query-builder.ts:74](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L74)

## Type Parameters

### DB

`DB`

### TT

`TT` *extends* keyof `DB`

### O

`O`

## Implements

- [`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md)\<`DB`, `TT`, `O`\>
- [`OutputInterface`](../interfaces/OutputInterface.md)\<`DB`, `TT`, `O`\>

## Constructors

### Constructor

> **new MergeQueryBuilder**\<`DB`, `TT`, `O`\>(`props`): `MergeQueryBuilder`\<`DB`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:79](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L79)

#### Parameters

##### props

[`MergeQueryBuilderProps`](../interfaces/MergeQueryBuilderProps.md)

#### Returns

`MergeQueryBuilder`\<`DB`, `TT`, `O`\>

## Methods

### modifyEnd()

> **modifyEnd**(`modifier`): `MergeQueryBuilder`\<`DB`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:106](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L106)

This can be used to add any additional SQL to the end of the query.

### Examples

```ts
import { sql } from 'kysely'

await db
  .mergeInto('person')
  .using('pet', 'pet.owner_id', 'person.id')
  .whenMatched()
  .thenDelete()
  .modifyEnd(sql.raw('-- this is a comment'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person" using "pet" on "pet"."owner_id" = "person"."id" when matched then delete -- this is a comment
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`MergeQueryBuilder`\<`DB`, `TT`, `O`\>

***

### output()

#### Call Signature

> **output**\<`OE`\>(`selections`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/merge-query-builder.ts:267](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L267)

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

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TT`, [`OutputPrefix`](../types/OutputPrefix.md)\>, [`OutputPrefix`](../types/OutputPrefix.md)\>

##### Parameters

###### selections

readonly `OE`[]

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`CB`\>(`callback`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

Defined in: [query-builder/merge-query-builder.ts:275](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L275)

##### Type Parameters

###### CB

`CB` *extends* [`OutputCallback`](../types/OutputCallback.md)\<`DB`, `TT`\>

##### Parameters

###### callback

`CB`

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`OE`\>(`selection`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/merge-query-builder.ts:283](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L283)

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TT`, [`OutputPrefix`](../types/OutputPrefix.md)\>, [`OutputPrefix`](../types/OutputPrefix.md)\>

##### Parameters

###### selection

`OE`

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

***

### outputAll()

> **outputAll**(`table`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT`, `O`\>\>

Defined in: [query-builder/merge-query-builder.ts:301](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L301)

Adds an `output {prefix}.*` to an `insert`/`update`/`delete`/`merge` query on databases
that support `output` such as MS SQL Server (MSSQL).

Also see the [output](../interfaces/OutputInterface.md#output) method.

#### Parameters

##### table

[`OutputPrefix`](../types/OutputPrefix.md)

#### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT`, `O`\>\>

#### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`outputAll`](../interfaces/OutputInterface.md#outputall)

***

### returning()

#### Call Signature

> **returning**\<`SE`\>(`selections`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, `SE`\>\>

Defined in: [query-builder/merge-query-builder.ts:229](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L229)

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

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TT`\>

##### Parameters

###### selections

readonly `SE`[]

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`CB`\>(`callback`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TT`, `O`, `CB`\>\>

Defined in: [query-builder/merge-query-builder.ts:233](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L233)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TT`\>

##### Parameters

###### callback

`CB`

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TT`, `O`, `CB`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`SE`\>(`selection`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, `SE`\>\>

Defined in: [query-builder/merge-query-builder.ts:237](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L237)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TT`\>

##### Parameters

###### selection

`SE`

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

***

### returningAll()

#### Call Signature

> **returningAll**\<`T`\>(`table`): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/merge-query-builder.ts:251](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L251)

Adds a `returning *` or `returning table.*` to an insert/update/delete/merge
query on databases that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/MultiTableReturningInterface.md#returning) method.

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### table

`T`

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

#### Call Signature

> **returningAll**(): `MergeQueryBuilder`\<`DB`, `TT`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT`, `O`\>\>

Defined in: [query-builder/merge-query-builder.ts:255](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L255)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/ReturningInterface.md#returning) method.

##### Returns

`MergeQueryBuilder`\<`DB`, `TT`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

***

### top()

> **top**(`expression`, `modifiers?`): `MergeQueryBuilder`\<`DB`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:163](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L163)

Changes a `merge into` query to an `merge top into` query.

`top` clause is only supported by some dialects like MS SQL Server.

### Examples

Affect 5 matched rows at most:

```ts
await db.mergeInto('person')
  .top(5)
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenDelete()
  .execute()
```

The generated SQL (MS SQL Server):

```sql
merge top(5) into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  delete
```

Affect 50% of matched rows:

```ts
await db.mergeInto('person')
  .top(50, 'percent')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenDelete()
  .execute()
```

The generated SQL (MS SQL Server):

```sql
merge top(50) percent into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  delete
```

#### Parameters

##### expression

`number` \| `bigint`

##### modifiers?

`"percent"`

#### Returns

`MergeQueryBuilder`\<`DB`, `TT`, `O`\>

***

### using()

#### Call Signature

> **using**\<`TE`, `K1`, `K2`\>(`sourceTable`, `k1`, `k2`): [`ExtractWheneableMergeQueryBuilder`](../types/ExtractWheneableMergeQueryBuilder.md)\<`DB`, `TT`, `TE`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:201](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L201)

Adds the `using` clause to the query.

This method is similar to [SelectQueryBuilder.innerJoin](../interfaces/SelectQueryBuilder.md#innerjoin), so see the
documentation for that method for more examples.

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenDelete()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  delete
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TT`\>

###### K1

`K1` *extends* `string`

###### K2

`K2` *extends* `string`

##### Parameters

###### sourceTable

`TE`

###### k1

`K1`

###### k2

`K2`

##### Returns

[`ExtractWheneableMergeQueryBuilder`](../types/ExtractWheneableMergeQueryBuilder.md)\<`DB`, `TT`, `TE`, `O`\>

#### Call Signature

> **using**\<`TE`, `FN`\>(`sourceTable`, `callback`): [`ExtractWheneableMergeQueryBuilder`](../types/ExtractWheneableMergeQueryBuilder.md)\<`DB`, `TT`, `TE`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:211](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L211)

Adds the `using` clause to the query.

This method is similar to [SelectQueryBuilder.innerJoin](../interfaces/SelectQueryBuilder.md#innerjoin), so see the
documentation for that method for more examples.

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenDelete()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  delete
```

##### Type Parameters

###### TE

`TE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`AliasedDynamicTableBuilder`](AliasedDynamicTableBuilder.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TT`\>

###### FN

`FN` *extends* [`JoinCallbackExpression`](../types/JoinCallbackExpression.md)\<`DB`, `TT`, `TE`\>

##### Parameters

###### sourceTable

`TE`

###### callback

`FN`

##### Returns

[`ExtractWheneableMergeQueryBuilder`](../types/ExtractWheneableMergeQueryBuilder.md)\<`DB`, `TT`, `TE`, `O`\>
