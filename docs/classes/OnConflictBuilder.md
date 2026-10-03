[**kysely**](../index.md)

***

[kysely](../modules.md) / OnConflictBuilder

# Class: OnConflictBuilder\<DB, TB\>

Defined in: [query-builder/on-conflict-builder.ts:23](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L23)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

## Implements

- [`WhereInterface`](../interfaces/WhereInterface.md)\<`DB`, `TB`\>

## Constructors

### Constructor

> **new OnConflictBuilder**\<`DB`, `TB`\>(`props`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:29](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L29)

#### Parameters

##### props

[`OnConflictBuilderProps`](../interfaces/OnConflictBuilderProps.md)

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/on-conflict-builder.ts:270](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L270)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### clearWhere()

> **clearWhere**(): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:145](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L145)

Clears all where expressions from the query.

### Examples

```ts
db.selectFrom('person')
  .selectAll()
  .where('id','=',42)
  .clearWhere()
```

The generated SQL(PostgreSQL):

```sql
select * from "person"
```

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`clearWhere`](../interfaces/WhereInterface.md#clearwhere)

***

### column()

> **column**(`column`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:39](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L39)

Specify a single column as the conflict target.

Also see the [columns](#columns), [constraint](#constraint) and [expression](../modules.md#expression)
methods for alternative ways to specify the conflict target.

#### Parameters

##### column

[`AnyColumn`](../types/AnyColumn.md)\<`DB`, `TB`\>

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

***

### columns()

> **columns**(`columns`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:58](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L58)

Specify a list of columns as the conflict target.

Also see the [column](#column), [constraint](#constraint) and [expression](../modules.md#expression)
methods for alternative ways to specify the conflict target.

#### Parameters

##### columns

readonly [`AnyColumn`](../types/AnyColumn.md)\<`DB`, `TB`\>[]

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

***

### constraint()

> **constraint**(`constraintName`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:79](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L79)

Specify a specific constraint by name as the conflict target.

Also see the [column](#column), [columns](#columns) and [expression](../modules.md#expression)
methods for alternative ways to specify the conflict target.

#### Parameters

##### constraintName

`string`

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

***

### doNothing()

> **doNothing**(): [`OnConflictDoNothingBuilder`](OnConflictDoNothingBuilder.md)\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:181](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L181)

Adds the "do nothing" conflict action.

### Examples

```ts
const id = 1
const first_name = 'John'

await db
  .insertInto('person')
  .values({ first_name, id })
  .onConflict((oc) => oc
    .column('id')
    .doNothing()
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "id")
values ($1, $2)
on conflict ("id") do nothing
```

#### Returns

[`OnConflictDoNothingBuilder`](OnConflictDoNothingBuilder.md)\<`DB`, `TB`\>

***

### doUpdateSet()

> **doUpdateSet**(`update`): [`OnConflictUpdateBuilder`](OnConflictUpdateBuilder.md)\<[`OnConflictDatabase`](../types/OnConflictDatabase.md)\<`DB`, `TB`\>, [`OnConflictTables`](../types/OnConflictTables.md)\<`TB`\>\>

Defined in: [query-builder/on-conflict-builder.ts:251](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L251)

Adds the "do update set" conflict action.

### Examples

```ts
const id = 1
const first_name = 'John'

await db
  .insertInto('person')
  .values({ first_name, id })
  .onConflict((oc) => oc
    .column('id')
    .doUpdateSet({ first_name })
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "id")
values ($1, $2)
on conflict ("id")
do update set "first_name" = $3
```

In the next example we use the `ref` method to reference
columns of the virtual table `excluded` in a type-safe way
to create an upsert operation:

```ts
import type { NewPerson } from 'type-editor' // imaginary module

async function upsertPerson(person: NewPerson): Promise<void> {
  await db.insertInto('person')
    .values(person)
    .onConflict((oc) => oc
      .column('id')
      .doUpdateSet((eb) => ({
        first_name: eb.ref('excluded.first_name'),
        last_name: eb.ref('excluded.last_name')
      })
    )
  )
  .execute()
}
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "last_name")
values ($1, $2)
on conflict ("id")
do update set
 "first_name" = excluded."first_name",
 "last_name" = excluded."last_name"
```

#### Parameters

##### update

[`UpdateObjectExpression`](../types/UpdateObjectExpression.md)\<[`OnConflictDatabase`](../types/OnConflictDatabase.md)\<`DB`, `TB`\>, [`OnConflictTables`](../types/OnConflictTables.md)\<`TB`\>, [`OnConflictTables`](../types/OnConflictTables.md)\<`TB`\>\>

#### Returns

[`OnConflictUpdateBuilder`](OnConflictUpdateBuilder.md)\<[`OnConflictDatabase`](../types/OnConflictDatabase.md)\<`DB`, `TB`\>, [`OnConflictTables`](../types/OnConflictTables.md)\<`TB`\>\>

***

### expression()

> **expression**(`expression`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:96](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L96)

Specify an expression as the conflict target.

This can be used if the unique index is an expression index.

Also see the [column](#column), [columns](#columns) and [constraint](#constraint)
methods for alternative ways to specify the conflict target.

#### Parameters

##### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

***

### where()

#### Call Signature

> **where**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:105](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L105)

Adds a `where` expression to the query.

Calling this method multiple times will combine the expressions using `and`.

Also see [whereRef](../interfaces/WhereInterface.md#whereref)

### Examples

<!-- siteExample("where", "Simple where clause", 10) -->

`where` method calls are combined with `AND`:

```ts
const person = await db
  .selectFrom('person')
  .selectAll()
  .where('first_name', '=', 'Jennifer')
  .where('age', '>', 40)
  .executeTakeFirst()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "first_name" = $1 and "age" > $2
```

Operator can be any supported operator or if the typings don't support it
you can always use:

```ts
import { sql } from 'kysely'

sql`your operator`
```

<!-- siteExample("where", "Where in", 20) -->

Find multiple items using a list of identifiers:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where('id', 'in', [1, 2, 3])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "id" in ($1, $2, $3)
```

<!-- siteExample("where", "Object filter", 30) -->

You can use the `and` function to create a simple equality
filter using an object

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where((eb) => eb.and({
    first_name: 'Jennifer',
    last_name: eb.ref('first_name')
  }))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  "first_name" = $1
  and "last_name" = "first_name"
)
```

<!-- siteExample("where", "OR where", 40) -->

To combine conditions using `OR`, you can use the expression builder.
There are two ways to create `OR` expressions. Both are shown in this
example:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  // 1. Using the `or` method on the expression builder:
  .where((eb) => eb.or([
    eb('first_name', '=', 'Jennifer'),
    eb('first_name', '=', 'Sylvester')
  ]))
  // 2. Chaining expressions using the `or` method on the
  // created expressions:
  .where((eb) =>
    eb('last_name', '=', 'Aniston').or('last_name', '=', 'Stallone')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  ("first_name" = $1 or "first_name" = $2)
  and
  ("last_name" = $3 or "last_name" = $4)
)
```

<!-- siteExample("where", "Conditional where calls", 50) -->

You can add expressions conditionally like this:

```ts
import { Expression, SqlBool } from 'kysely'

const firstName: string | undefined = 'Jennifer'
const lastName: string | undefined = 'Aniston'
const under18 = true
const over60 = true

let query = db
  .selectFrom('person')
  .selectAll()

if (firstName) {
  // The query builder is immutable. Remember to reassign
  // the result back to the query variable.
  query = query.where('first_name', '=', firstName)
}

if (lastName) {
  query = query.where('last_name', '=', lastName)
}

if (under18 || over60) {
  // Conditional OR expressions can be added like this.
  query = query.where((eb) => {
    const ors: Expression<SqlBool>[] = []

    if (under18) {
      ors.push(eb('age', '<', 18))
    }

    if (over60) {
      ors.push(eb('age', '>', 60))
    }

    return eb.or(ors)
  })
}

const persons = await query.execute()
```

Both the first and third argument can also be arbitrary expressions like
subqueries. An expression can defined by passing a function and calling
the methods of the [ExpressionBuilder](../interfaces/ExpressionBuilder.md) passed to the callback:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(
    (qb) => qb.selectFrom('pet')
      .select('pet.name')
      .whereRef('pet.owner_id', '=', 'person.id')
      .limit(1),
    '=',
    'Fluffy'
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select *
from "person"
where (
  select "pet"."name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
  limit $1
) = $2
```

A `where in` query can be built by using the `in` operator and an array
of values. The values in the array can also be expressions:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll()
  .where('person.id', 'in', [100, 200, 300])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person" where "id" in ($1, $2, $3)
```

<!-- siteExample("where", "Complex where clause", 60) -->

For complex `where` expressions you can pass in a single callback and
use the `ExpressionBuilder` to build your expression:

```ts
const firstName = 'Jennifer'
const maxAge = 60

const persons = await db
  .selectFrom('person')
  .selectAll('person')
  .where(({ eb, or, and, not, exists, selectFrom }) => and([
    or([
      eb('first_name', '=', firstName),
      eb('age', '<', maxAge)
    ]),
    not(exists(
      selectFrom('pet')
        .select('pet.id')
        .whereRef('pet.owner_id', '=', 'person.id')
    ))
  ]))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where (
  (
    "first_name" = $1
    or "age" < $2
  )
  and not exists (
    select "pet"."id" from "pet" where "pet"."owner_id" = "person"."id"
  )
)
```

If everything else fails, you can always use the [sql](../variables/sql.md) tag
as any of the arguments, including the operator:

```ts
import { sql } from 'kysely'

const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(
    sql<string>`coalesce(first_name, last_name)`,
    'like',
    '%' + name + '%',
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
where coalesce(first_name, last_name) like $1
```

In all examples above the columns were known at compile time
(except for the raw [sql](../variables/sql.md) expressions). By default kysely only
allows you to refer to columns that exist in the database **and**
can be referred to in the current query and context.

Sometimes you may want to refer to columns that come from the user
input and thus are not available at compile time.

You have two options, the [sql](../variables/sql.md) tag or `db.dynamic`. The example below
uses both:

```ts
import { sql } from 'kysely'
const { ref } = db.dynamic

const columnFromUserInput: string = 'id'

const persons = await db
  .selectFrom('person')
  .selectAll()
  .where(ref(columnFromUserInput), '=', 1)
  .where(sql.id(columnFromUserInput), '=', 2)
  .execute()
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

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

`OnConflictBuilder`\<`DB`, `TB`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

#### Call Signature

> **where**\<`E`\>(`expression`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:114](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L114)

##### Type Parameters

###### E

`E` *extends* [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`DB`, `TB`, [`SqlBool`](../types/SqlBool.md)\>

##### Parameters

###### expression

`E`

##### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

##### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`where`](../interfaces/WhereInterface.md#where)

***

### whereRef()

> **whereRef**\<`LRE`, `RRE`\>(`lhs`, `op`, `rhs`): `OnConflictBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/on-conflict-builder.ts:128](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L128)

Adds a `where` clause where both sides of the operator are references
to columns.

The normal `where` method treats the right hand side argument as a
value by default. `whereRef` treats it as a column reference. This method is
expecially useful with joins and correlated subqueries.

### Examples

Usage with a join:

```ts
db.selectFrom(['person', 'pet'])
  .selectAll()
  .whereRef('person.first_name', '=', 'pet.name')
```

The generated SQL (PostgreSQL):

```sql
select * from "person", "pet" where "person"."first_name" = "pet"."name"
```

Usage in a subquery:

```ts
const persons = await db
  .selectFrom('person')
  .selectAll('person')
  .select((eb) => eb
    .selectFrom('pet')
    .select('name')
    .whereRef('pet.owner_id', '=', 'person.id')
    .limit(1)
    .as('pet_name')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*, (
  select "name"
  from "pet"
  where "pet"."owner_id" = "person"."id"
  limit $1
) as "pet_name"
from "person"

#### Type Parameters

##### LRE

`LRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### RRE

`RRE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### lhs

`LRE`

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RRE`

#### Returns

`OnConflictBuilder`\<`DB`, `TB`\>

#### Implementation of

[`WhereInterface`](../interfaces/WhereInterface.md).[`whereRef`](../interfaces/WhereInterface.md#whereref)
