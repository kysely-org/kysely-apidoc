[**kysely**](../index.md)

***

[kysely](../modules.md) / OutputInterface

# Interface: OutputInterface\<DB, TB, O, OP\>

Defined in: [query-builder/output-interface.ts:12](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L12)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### OP

`OP` *extends* [`OutputPrefix`](../types/OutputPrefix.md) = [`OutputPrefix`](../types/OutputPrefix.md)

## Methods

### output()

#### Call Signature

> **output**\<`OE`\>(`selections`): `OutputInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>, `OP`\>

Defined in: [query-builder/output-interface.ts:132](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L132)

Allows you to return data from modified rows.

On supported databases like MS SQL Server (MSSQL), this method can be chained
to `insert`, `update`, `delete` and `merge` queries to return data.

Also see the [outputAll](#outputall) method.

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

`OE` *extends* [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, `OP`\>, `OP`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` ``

##### Parameters

###### selections

readonly `OE`[]

##### Returns

`OutputInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>, `OP`\>

#### Call Signature

> **output**\<`CB`\>(`callback`): `OutputInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>, `OP`\>

Defined in: [query-builder/output-interface.ts:141](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L141)

##### Type Parameters

###### CB

`CB` *extends* [`OutputCallback`](../types/OutputCallback.md)\<`DB`, `TB`, `OP`\>

##### Parameters

###### callback

`CB`

##### Returns

`OutputInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputCallback`](../types/SelectExpressionFromOutputCallback.md)\<`CB`\>\>, `OP`\>

#### Call Signature

> **output**\<`OE`\>(`selection`): `OutputInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>, `OP`\>

Defined in: [query-builder/output-interface.ts:150](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L150)

##### Type Parameters

###### OE

`OE` *extends* [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<[`OutputDatabase`](../types/OutputDatabase.md)\<`DB`, `TB`, `OP`\>, `OP`\> \| `` `deleted.${string}` `` \| `` `inserted.${string}` `` \| `` `deleted.${string} as ${string}` `` \| `` `inserted.${string} as ${string}` ``

##### Parameters

###### selection

`OE`

##### Returns

`OutputInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, [`SelectExpressionFromOutputExpression`](../types/SelectExpressionFromOutputExpression.md)\<`OE`\>\>, `OP`\>

***

### outputAll()

> **outputAll**(`table`): `OutputInterface`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>, `OP`\>

Defined in: [query-builder/output-interface.ts:165](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L165)

Adds an `output {prefix}.*` to an `insert`/`update`/`delete`/`merge` query on databases
that support `output` such as MS SQL Server (MSSQL).

Also see the [output](#output) method.

#### Parameters

##### table

`OP`

#### Returns

`OutputInterface`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `TB`, `O`\>, `OP`\>
