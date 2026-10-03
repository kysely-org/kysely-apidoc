[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasableExpression

# Interface: AliasableExpression\<T\>

Defined in: [expression/expression.ts:81](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L81)

An expression with an `as` method.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`Expression`](Expression.md)\<`T`\>

### Extended by

- [`RawBuilder`](RawBuilder.md)
- [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)

## Type Parameters

### T

`T`

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

`Expression.expressionType`

## Methods

### as()

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](AliasedExpression.md)\<`T`, `A`\>

Defined in: [expression/expression.ts:143](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L143)

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

`A`

##### Returns

[`AliasedExpression`](AliasedExpression.md)\<`T`, `A`\>

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](AliasedExpression.md)\<`T`, `A`\>

Defined in: [expression/expression.ts:144](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L144)

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

[`Expression`](Expression.md)\<`any`\>

##### Returns

[`AliasedExpression`](AliasedExpression.md)\<`T`, `A`\>

***

### toOperationNode()

> **toOperationNode**(): [`OperationNode`](OperationNode.md)

Defined in: [expression/expression.ts:75](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L75)

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

[`OperationNode`](OperationNode.md)

#### Inherited from

[`Expression`](Expression.md).[`toOperationNode`](Expression.md#tooperationnode)
