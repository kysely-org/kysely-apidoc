[**kysely**](../index.md)

***

[kysely](../modules.md) / RawBuilder

# Interface: RawBuilder\<O\>

Defined in: [raw-builder/raw-builder.ts:26](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L26)

An instance of this class can be used to create raw SQL snippets or queries.

You shouldn't need to create `RawBuilder` instances directly. Instead you should
use the [sql](../variables/sql.md) template tag.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`AliasableExpression`](AliasableExpression.md)\<`O`\>

## Type Parameters

### O

`O`

## Accessors

### expressionType

#### Get Signature

> **get** **expressionType**(): `T` \| `undefined`

Defined in: [expression/expression.ts:51](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L51)

All expressions need to have this getter for complicated type-related reasons.
Simply add this getter for your expression and always return `undefined` from it:

### Examples

```ts
import { type Expression, type OperationNode, sql } from 'kysely'

class SomeExpression<T> implements Expression<T> {
  get expressionType(): T | undefined {
    return undefined
  }

  toOperationNode(): OperationNode {
    return sql`some sql here`.toOperationNode()
  }
}
```

The getter is needed to make the expression assignable to another expression only
if the types `T` are assignable. Without this property (or some other property
that references `T`), you could assing `Expression<string>` to `Expression<number>`.

##### Returns

`T` \| `undefined`

#### Inherited from

`AliasableExpression.expressionType`

***

### isRawBuilder

#### Get Signature

> **get** **isRawBuilder**(): `true`

Defined in: [raw-builder/raw-builder.ts:27](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L27)

##### Returns

`true`

## Methods

### $castTo()

> **$castTo**\<`C`\>(): `RawBuilder`\<`C`\>

Defined in: [raw-builder/raw-builder.ts:96](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L96)

Change the output type of the raw expression.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `RawBuilder` with a new output type.

#### Type Parameters

##### C

`C`

#### Returns

`RawBuilder`\<`C`\>

***

### $notNull()

> **$notNull**(): `RawBuilder`\<`Exclude`\<`O`, `null`\>\>

Defined in: [raw-builder/raw-builder.ts:107](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L107)

Omit null from the expression's type.

This function can be useful in cases where you know an expression can't be
null, but Kysely is unable to infer it.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of `this` with a new output type.

#### Returns

`RawBuilder`\<`Exclude`\<`O`, `null`\>\>

***

### as()

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedRawBuilder`](AliasedRawBuilder.md)\<`O`, `A`\>

Defined in: [raw-builder/raw-builder.ts:87](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L87)

Returns an aliased version of the SQL expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
import { sql } from 'kysely'

const result = await db
  .selectFrom('person')
  .select(
    sql<string>`concat(first_name, ' ', last_name)`.as('full_name')
  )
  .executeTakeFirstOrThrow()

// `full_name: string` field exists in the result type.
console.log(result.full_name)
```

The generated SQL (PostgreSQL):

```sql
select concat(first_name, ' ', last_name) as "full_name"
from "person"
```

You can also pass in a raw SQL snippet but in that case you must
provide the alias as the only type argument:

```ts
import { sql } from 'kysely'

const values = sql<{ a: number, b: string }>`(values (1, 'foo'))`

// The alias is `t(a, b)` which specifies the column names
// in addition to the table name. We must tell kysely that
// columns of the table can be referenced through `t`
// by providing an explicit type argument.
const aliasedValues = values.as<'t'>(sql`t(a, b)`)

await db
  .insertInto('person')
  .columns(['first_name', 'last_name'])
  .expression(
    db.selectFrom(aliasedValues).select(['t.a', 't.b'])
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "last_name")
from (values (1, 'foo')) as t(a, b)
select "t"."a", "t"."b"
```

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

`A`

##### Returns

[`AliasedRawBuilder`](AliasedRawBuilder.md)\<`O`, `A`\>

##### Overrides

[`AliasableExpression`](AliasableExpression.md).[`as`](AliasableExpression.md#as)

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedRawBuilder`](AliasedRawBuilder.md)\<`O`, `A`\>

Defined in: [raw-builder/raw-builder.ts:88](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L88)

Returns an aliased version of the expression.

### Examples

In addition to slapping `as "the_alias"` at the end of the expression,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select((eb) =>
    // `eb.fn<string>` returns an AliasableExpression<string>
    eb.fn<string>('concat', ['first_name', eb.val(' '), 'last_name']).as('full_name')
  )
  .executeTakeFirstOrThrow()

// `full_name: string` field exists in the result type.
console.log(result.full_name)
```

The generated SQL (PostgreSQL):

```sql
select
  concat("first_name", $1, "last_name") as "full_name"
from
  "person"
```

You can also pass in a raw SQL snippet (or any expression) but in that case you must
provide the alias as the only type argument:

```ts
import { sql } from 'kysely'

const values = sql<{ a: number, b: string }>`(values (1, 'foo'))`

// The alias is `t(a, b)` which specifies the column names
// in addition to the table name. We must tell kysely that
// columns of the table can be referenced through `t`
// by providing an explicit type argument.
const aliasedValues = values.as<'t'>(sql`t(a, b)`)

await db
  .insertInto('person')
  .columns(['first_name', 'last_name'])
  .expression(
    db.selectFrom(aliasedValues).select(['t.a', 't.b'])
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
insert into "person" ("first_name", "last_name")
from (values (1, 'foo')) as t(a, b)
select "t"."a", "t"."b"
```

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

[`Expression`](Expression.md)\<`any`\>

##### Returns

[`AliasedRawBuilder`](AliasedRawBuilder.md)\<`O`, `A`\>

##### Overrides

[`AliasableExpression`](AliasableExpression.md).[`as`](AliasableExpression.md#as)

***

### compile()

> **compile**(`executorProvider`): [`CompiledQuery`](CompiledQuery.md)\<`O`\>

Defined in: [raw-builder/raw-builder.ts:126](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L126)

Compiles the builder to a `CompiledQuery`.

### Examples

```ts
import { sql } from 'kysely'

const compiledQuery = sql`select * from ${sql.table('person')}`.compile(db)
console.log(compiledQuery.sql)
```

#### Parameters

##### executorProvider

`QueryExecutorProvider`

#### Returns

[`CompiledQuery`](CompiledQuery.md)\<`O`\>

***

### execute()

> **execute**(`executorProvider`, `options?`): `Promise`\<[`QueryResult`](QueryResult.md)\<`O`\>\>

Defined in: [raw-builder/raw-builder.ts:139](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L139)

Executes the raw query.

### Examples

```ts
import { sql } from 'kysely'

const result = await sql`select * from ${sql.table('person')}`.execute(db)
```

#### Parameters

##### executorProvider

`QueryExecutorProvider`

##### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

#### Returns

`Promise`\<[`QueryResult`](QueryResult.md)\<`O`\>\>

***

### toOperationNode()

> **toOperationNode**(): [`RawNode`](RawNode.md)

Defined in: [raw-builder/raw-builder.ts:144](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L144)

Creates the OperationNode that describes how to compile this expression into SQL.

### Examples

If you are creating a custom expression, it's often easiest to use the [sql](../variables/sql.md)
template tag to build the node:

```ts
import { type Expression, type OperationNode, sql } from 'kysely'

class SomeExpression<T> implements Expression<T> {
  get expressionType(): T | undefined {
    return undefined
  }

  toOperationNode(): OperationNode {
    return sql`some sql here`.toOperationNode()
  }
}
```

#### Returns

[`RawNode`](RawNode.md)

#### Overrides

[`AliasableExpression`](AliasableExpression.md).[`toOperationNode`](AliasableExpression.md#tooperationnode)

***

### withPlugin()

> **withPlugin**(`plugin`): `RawBuilder`\<`O`\>

Defined in: [raw-builder/raw-builder.ts:112](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L112)

Adds a plugin for this SQL snippet.

#### Parameters

##### plugin

[`KyselyPlugin`](KyselyPlugin.md)

#### Returns

`RawBuilder`\<`O`\>
