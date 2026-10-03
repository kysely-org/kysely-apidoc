[**kysely**](../index.md)

***

[kysely](../modules.md) / WheneableMergeQueryBuilder

# Class: WheneableMergeQueryBuilder\<DB, TT, ST, O\>

Defined in: [query-builder/merge-query-builder.ts:320](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L320)

## Type Parameters

### DB

`DB`

### TT

`TT` *extends* keyof `DB`

### ST

`ST` *extends* keyof `DB`

### O

`O`

## Implements

- [`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md)\<`DB`, `TT` \| `ST`, `O`\>
- [`OutputInterface`](../interfaces/OutputInterface.md)\<`DB`, `TT`, `O`\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)\<`O`\>
- [`Executable`](../interfaces/Executable.md)\<`O`\>

## Constructors

### Constructor

> **new WheneableMergeQueryBuilder**\<`DB`, `TT`, `ST`, `O`\>(`props`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:335](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L335)

#### Parameters

##### props

[`MergeQueryBuilderProps`](../interfaces/MergeQueryBuilderProps.md)

#### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/merge-query-builder.ts:807](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L807)

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

await db.updateTable('person')
  .set({ first_name: 'John' })
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

### $if()

> **$if**\<`O2`\>(`condition`, `func`): `O2` *extends* [`MergeResult`](MergeResult.md) ? `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`MergeResult`](MergeResult.md)\> : `O2` *extends* `O` & `E` ? `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O` & `Partial`\<`E`\>\> : `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `Partial`\<`O2`\>\>

Defined in: [query-builder/merge-query-builder.ts:849](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L849)

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

(`qb`) => `WheneableMergeQueryBuilder`\<`any`, `any`, `any`, `O2`\>

#### Returns

`O2` *extends* [`MergeResult`](MergeResult.md) ? `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`MergeResult`](MergeResult.md)\> : `O2` *extends* `O` & `E` ? `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O` & `Partial`\<`E`\>\> : `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `Partial`\<`O2`\>\>

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)\<`O`\>

Defined in: [query-builder/merge-query-builder.ts:873](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L873)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<`O`\>

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

Defined in: [query-builder/merge-query-builder.ts:880](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L880)

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

Defined in: [query-builder/merge-query-builder.ts:901](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L901)

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

Defined in: [query-builder/merge-query-builder.ts:909](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L909)

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

### modifyEnd()

> **modifyEnd**(`modifier`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:362](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L362)

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

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

***

### output()

#### Call Signature

> **output**\<`OE`\>(`selections`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/merge-query-builder.ts:713](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L713)

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

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`CB`\>(`callback`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

Defined in: [query-builder/merge-query-builder.ts:722](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L722)

##### Type Parameters

###### CB

`CB` *extends* [`OutputCallback`](../types/OutputCallback.md)\<`DB`, `TT`\>

##### Parameters

###### callback

`CB`

##### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

#### Call Signature

> **output**\<`OE`\>(`selection`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

Defined in: [query-builder/merge-query-builder.ts:731](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L731)

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` `` \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TT`, [`OutputPrefix`](../types/OutputPrefix.md)\>, [`OutputPrefix`](../types/OutputPrefix.md)\>

##### Parameters

###### selection

`OE`

##### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>\>

##### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`output`](../interfaces/OutputInterface.md#output)

***

### outputAll()

> **outputAll**(`table`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT`, `O`\>\>

Defined in: [query-builder/merge-query-builder.ts:750](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L750)

Adds an `output {prefix}.*` to an `insert`/`update`/`delete`/`merge` query on databases
that support `output` such as MS SQL Server (MSSQL).

Also see the [output](../interfaces/OutputInterface.md#output) method.

#### Parameters

##### table

[`OutputPrefix`](../types/OutputPrefix.md)

#### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT`, `O`\>\>

#### Implementation of

[`OutputInterface`](../interfaces/OutputInterface.md).[`outputAll`](../interfaces/OutputInterface.md#outputall)

***

### returning()

#### Call Signature

> **returning**\<`SE`\>(`selections`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT` \| `ST`, `O`, `SE`\>\>

Defined in: [query-builder/merge-query-builder.ts:665](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L665)

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

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TT` \| `ST`\>

##### Parameters

###### selections

readonly `SE`[]

##### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT` \| `ST`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`CB`\>(`callback`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TT` \| `ST`, `O`, `CB`\>\>

Defined in: [query-builder/merge-query-builder.ts:669](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L669)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TT` \| `ST`\>

##### Parameters

###### callback

`CB`

##### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TT` \| `ST`, `O`, `CB`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

#### Call Signature

> **returning**\<`SE`\>(`selection`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT` \| `ST`, `O`, `SE`\>\>

Defined in: [query-builder/merge-query-builder.ts:678](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L678)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TT` \| `ST`\>

##### Parameters

###### selection

`SE`

##### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TT` \| `ST`, `O`, `SE`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returning`](../interfaces/MultiTableReturningInterface.md#returning)

***

### returningAll()

#### Call Signature

> **returningAll**\<`T`\>(`table`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/merge-query-builder.ts:692](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L692)

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

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

#### Call Signature

> **returningAll**(): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT` \| `ST`, `O`\>\>

Defined in: [query-builder/merge-query-builder.ts:696](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L696)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](../interfaces/ReturningInterface.md#returning) method.

##### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TT` \| `ST`, `O`\>\>

##### Implementation of

[`MultiTableReturningInterface`](../interfaces/MultiTableReturningInterface.md).[`returningAll`](../interfaces/MultiTableReturningInterface.md#returningall)

***

### toOperationNode()

> **toOperationNode**(): [`MergeQueryNode`](../interfaces/MergeQueryNode.md)

Defined in: [query-builder/merge-query-builder.ts:866](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L866)

#### Returns

[`MergeQueryNode`](../interfaces/MergeQueryNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### top()

> **top**(`expression`, `modifiers?`): `WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:377](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L377)

See [MergeQueryBuilder.top](MergeQueryBuilder.md#top).

#### Parameters

##### expression

`number` \| `bigint`

##### modifiers?

`"percent"`

#### Returns

`WheneableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

***

### whenMatched()

> **whenMatched**(): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:418](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L418)

Adds a simple `when matched` clause to the query.

For a `when matched` clause with an `and` condition, see [whenMatchedAnd](#whenmatchedand).

For a simple `when not matched` clause, see [whenNotMatched](#whennotmatched).

For a `when not matched` clause with an `and` condition, see [whenNotMatchedAnd](#whennotmatchedand).

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

#### Returns

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

***

### whenMatchedAnd()

#### Call Signature

> **whenMatchedAnd**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:449](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L449)

Adds the `when matched` clause to the query with an `and` condition.

This method is similar to [SelectQueryBuilder.where](../interfaces/SelectQueryBuilder.md#where), so see the documentation
for that method for more examples.

For a simple `when matched` clause (without an `and` condition) see [whenMatched](#whenmatched).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatchedAnd('person.first_name', '=', 'John')
  .thenDelete()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched and "person"."first_name" = $1 then
  delete
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT` \| `ST`, `any`\>

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

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

#### Call Signature

> **whenMatchedAnd**\<`E`\>(`expression`): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:458](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L458)

Adds the `when matched` clause to the query with an `and` condition.

This method is similar to [SelectQueryBuilder.where](../interfaces/SelectQueryBuilder.md#where), so see the documentation
for that method for more examples.

For a simple `when matched` clause (without an `and` condition) see [whenMatched](#whenmatched).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatchedAnd('person.first_name', '=', 'John')
  .thenDelete()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched and "person"."first_name" = $1 then
  delete
```

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TT` \| `ST`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

***

### whenMatchedAndRef()

> **whenMatchedAndRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:475](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L475)

Adds the `when matched` clause to the query with an `and` condition. But unlike
[whenMatchedAnd](#whenmatchedand), this method accepts a column reference as the 3rd argument.

This method is similar to [SelectQueryBuilder.whereRef](../interfaces/SelectQueryBuilder.md#whereref), so see the documentation
for that method for more examples.

#### Type Parameters

##### LRE

`LRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT` \| `ST`, `any`\>

##### RRE

`RRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT` \| `ST`, `any`\>

#### Parameters

##### lhs

`LRE`

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RRE`

#### Returns

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT` \| `ST`, `O`\>

***

### whenNotMatched()

> **whenNotMatched**(): [`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:530](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L530)

Adds a simple `when not matched` clause to the query.

For a `when not matched` clause with an `and` condition, see [whenNotMatchedAnd](#whennotmatchedand).

For a simple `when matched` clause, see [whenMatched](#whenmatched).

For a `when matched` clause with an `and` condition, see [whenMatchedAnd](#whenmatchedand).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenNotMatched()
  .thenInsertValues({
    first_name: 'John',
    last_name: 'Doe',
  })
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when not matched then
  insert ("first_name", "last_name") values ($1, $2)
```

#### Returns

[`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### whenNotMatchedAnd()

#### Call Signature

> **whenNotMatchedAnd**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): [`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:566](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L566)

Adds the `when not matched` clause to the query with an `and` condition.

This method is similar to [SelectQueryBuilder.where](../interfaces/SelectQueryBuilder.md#where), so see the documentation
for that method for more examples.

For a simple `when not matched` clause (without an `and` condition) see [whenNotMatched](#whennotmatched).

Unlike [whenMatchedAnd](#whenmatchedand), you cannot reference columns from the table merged into.

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenNotMatchedAnd('pet.name', '=', 'Lucky')
  .thenInsertValues({
    first_name: 'John',
    last_name: 'Doe',
  })
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when not matched and "pet"."name" = $1 then
  insert ("first_name", "last_name") values ($2, $3)
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `ST`, `any`\>

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

[`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

#### Call Signature

> **whenNotMatchedAnd**\<`E`\>(`expression`): [`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:575](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L575)

Adds the `when not matched` clause to the query with an `and` condition.

This method is similar to [SelectQueryBuilder.where](../interfaces/SelectQueryBuilder.md#where), so see the documentation
for that method for more examples.

For a simple `when not matched` clause (without an `and` condition) see [whenNotMatched](#whennotmatched).

Unlike [whenMatchedAnd](#whenmatchedand), you cannot reference columns from the table merged into.

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenNotMatchedAnd('pet.name', '=', 'Lucky')
  .thenInsertValues({
    first_name: 'John',
    last_name: 'Doe',
  })
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when not matched and "pet"."name" = $1 then
  insert ("first_name", "last_name") values ($2, $3)
```

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `ST`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

[`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### whenNotMatchedAndRef()

> **whenNotMatchedAndRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): [`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:594](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L594)

Adds the `when not matched` clause to the query with an `and` condition. But unlike
[whenNotMatchedAnd](#whennotmatchedand), this method accepts a column reference as the 3rd argument.

Unlike [whenMatchedAndRef](#whenmatchedandref), you cannot reference columns from the target table.

This method is similar to [SelectQueryBuilder.whereRef](../interfaces/SelectQueryBuilder.md#whereref), so see the documentation
for that method for more examples.

#### Type Parameters

##### LRE

`LRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `ST`, `any`\>

##### RRE

`RRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `ST`, `any`\>

#### Parameters

##### lhs

`LRE`

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RRE`

#### Returns

[`NotMatchedThenableMergeQueryBuilder`](NotMatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### whenNotMatchedBySource()

> **whenNotMatchedBySource**(): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:612](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L612)

Adds a simple `when not matched by source` clause to the query.

Supported in MS SQL Server.

Similar to [whenNotMatched](#whennotmatched), but returns a [MatchedThenableMergeQueryBuilder](MatchedThenableMergeQueryBuilder.md).

#### Returns

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

***

### whenNotMatchedBySourceAnd()

#### Call Signature

> **whenNotMatchedBySourceAnd**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:629](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L629)

Adds the `when not matched by source` clause to the query with an `and` condition.

Supported in MS SQL Server.

Similar to [whenNotMatchedAnd](#whennotmatchedand), but returns a [MatchedThenableMergeQueryBuilder](MatchedThenableMergeQueryBuilder.md).

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT`, `any`\>

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

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

#### Call Signature

> **whenNotMatchedBySourceAnd**\<`E`\>(`expression`): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:638](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L638)

Adds the `when not matched by source` clause to the query with an `and` condition.

Supported in MS SQL Server.

Similar to [whenNotMatchedAnd](#whennotmatchedand), but returns a [MatchedThenableMergeQueryBuilder](MatchedThenableMergeQueryBuilder.md).

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TT`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

***

### whenNotMatchedBySourceAndRef()

> **whenNotMatchedBySourceAndRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): [`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:654](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L654)

Adds the `when not matched by source` clause to the query with an `and` condition.

Similar to [whenNotMatchedAndRef](#whennotmatchedandref), but you can reference columns from
the target table, and not from source table and returns a [MatchedThenableMergeQueryBuilder](MatchedThenableMergeQueryBuilder.md).

#### Type Parameters

##### LRE

`LRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT`, `any`\>

##### RRE

`RRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT`, `any`\>

#### Parameters

##### lhs

`LRE`

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RRE`

#### Returns

[`MatchedThenableMergeQueryBuilder`](MatchedThenableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `TT`, `O`\>
