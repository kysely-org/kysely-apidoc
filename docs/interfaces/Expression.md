[**kysely**](../index.md)

***

[kysely](../modules.md) / Expression

# Interface: Expression\<T\>

Defined in: [expression/expression.ts:26](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L26)

`Expression` represents an arbitrary SQL expression with a type.

Most Kysely methods accept instances of `Expression` and most classes like `SelectQueryBuilder`
and the return value of the [sql](../variables/sql.md) template tag implement it.

### Examples

```ts
import { type Expression, sql } from 'kysely'

const exp1: Expression<string> = sql<string>`CONCAT('hello', ' ', 'world')`
const exp2: Expression<{ first_name: string }> = db.selectFrom('person').select('first_name')
```

You can implement the `Expression` interface to create your own type-safe utilities for Kysely.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNodeSource`](OperationNodeSource.md)

### Extended by

- [`AliasableExpression`](AliasableExpression.md)

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

## Methods

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

#### Overrides

[`OperationNodeSource`](OperationNodeSource.md).[`toOperationNode`](OperationNodeSource.md#tooperationnode)
