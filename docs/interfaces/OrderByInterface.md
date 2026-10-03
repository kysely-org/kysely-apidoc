[**kysely**](../index.md)

***

[kysely](../modules.md) / OrderByInterface

# Interface: OrderByInterface\<DB, TB, O\>

Defined in: [query-builder/order-by-interface.ts:8](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-interface.ts#L8)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`SelectQueryBuilder`](SelectQueryBuilder.md)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Methods

### clearOrderBy()

> **clearOrderBy**(): `OrderByInterface`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/order-by-interface.ts:182](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-interface.ts#L182)

Clears the `order by` clause from the query.

See [orderBy](#orderby) for adding an `order by` clause or item to a query.

### Examples

```ts
const query = db
  .selectFrom('person')
  .selectAll()
  .orderBy('id', 'desc')

const results = await query
  .clearOrderBy()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
```

#### Returns

`OrderByInterface`\<`DB`, `TB`, `O`\>

***

### orderBy()

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers?`): `OrderByInterface`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/order-by-interface.ts:125](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-interface.ts#L125)

Adds an `order by` clause to the query.

`orderBy` calls are additive. Meaning, additional `orderBy` calls append to
the existing order by clause.

`orderBy` is supported in select queries on all dialects. In MySQL, you can
also use `orderBy` in update and delete queries.

In a single call you can add a single column/expression or multiple columns/expressions.

Single column/expression calls can have 1-2 arguments. The first argument is
the expression to order by, while the second optional argument is the direction
(`asc` or `desc`), a callback that accepts and returns an [OrderByItemBuilder](../classes/OrderByItemBuilder.md)
or an expression.

See [clearOrderBy](#clearorderby) to remove the `order by` clause from a query.

### Examples

Single column/expression per call:

```ts
await db
  .selectFrom('person')
  .select('person.first_name as fn')
  .orderBy('id')
  .orderBy('fn', 'desc')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name" as "fn"
from "person"
order by "id", "fn" desc
```

Building advanced modifiers:

```ts
await db
  .selectFrom('person')
  .select('person.first_name as fn')
  .orderBy('id', (ob) => ob.desc().nullsFirst())
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name" as "fn"
from "person"
order by "id" desc nulls first
```

The order by expression can also be a raw sql expression or a subquery
in addition to column references:

```ts
import { sql } from 'kysely'

await db
  .selectFrom('person')
  .selectAll()
  .orderBy((eb) => eb.selectFrom('pet')
    .select('pet.name')
    .whereRef('pet.owner_id', '=', 'person.id')
    .limit(1)
  )
  .orderBy(
    sql<string>`concat(first_name, last_name) asc`
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
order by
  ( select "pet"."name"
    from "pet"
    where "pet"."owner_id" = "person"."id"
    limit $1
  ) asc,
  concat(first_name, last_name) asc
```

`dynamic.ref` can be used to refer to columns not known at
compile time:

```ts
async function someQuery(orderBy: string) {
  const { ref } = db.dynamic

  return await db
    .selectFrom('person')
    .select('person.first_name as fn')
    .orderBy(ref(orderBy))
    .execute()
}

someQuery('fn')
```

The generated SQL (PostgreSQL):

```sql
select "person"."first_name" as "fn"
from "person"
order by "fn"
```

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`OrderByInterface`\<`DB`, `TB`, `O`\>

#### Call Signature

> **orderBy**\<`OE`\>(`exprs`): `OrderByInterface`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/order-by-interface.ts:134](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-interface.ts#L134)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`OrderByInterface`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2-2.6x more compile-time instantiations compared to multiple chained `orderBy(expr, modifiers?)` calls (in `order by` clauses with reasonable item counts), and has broken autocompletion.

#### Call Signature

> **orderBy**\<`OE`\>(`expr`): `OrderByInterface`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/order-by-interface.ts:145](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-interface.ts#L145)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`OrderByInterface`\<`DB`, `TB`, `O`\>

##### Deprecated

It does ~2.9x more compile-time instantiations compared to a `orderBy(expr, direction)` call.

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers`): `OrderByInterface`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/order-by-interface.ts:153](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-interface.ts#L153)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](Expression.md)\<`any`\>

##### Returns

`OrderByInterface`\<`DB`, `TB`, `O`\>

##### Deprecated

Use `orderBy(expr, (ob) => ...)` instead.
