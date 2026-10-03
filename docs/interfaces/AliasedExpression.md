[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedExpression

# Interface: AliasedExpression\<T, A\>

Defined in: [expression/expression.ts:191](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L191)

A type that holds an expression and an alias for it.

`AliasedExpression<T, A>` can be used in places where, in addition to the value type `T`, you
also need a name `A` for that value. For example anything you can pass into the `select` method
needs to implement an `AliasedExpression<T, A>`. `A` becomes the name of the selected expression
in the result and `T` becomes its type.

### Examples

```ts
import {
  AliasNode,
  type AliasedExpression,
  type Expression,
  IdentifierNode
} from 'kysely'

class SomeAliasedExpression<T, A extends string> implements AliasedExpression<T, A> {
  #expression: Expression<T>
  #alias: A

  constructor(expression: Expression<T>, alias: A) {
    this.#expression = expression
    this.#alias = alias
  }

  get expression(): Expression<T> {
    return this.#expression
  }

  get alias(): A {
    return this.#alias
  }

  toOperationNode(): AliasNode {
    return AliasNode.create(
      this.#expression.toOperationNode(),
      IdentifierNode.create(this.#alias)
    )
  }
}
```

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNodeSource`](OperationNodeSource.md)

### Extended by

- [`AliasedSelectQueryBuilder`](AliasedSelectQueryBuilder.md)
- [`AliasedRawBuilder`](AliasedRawBuilder.md)

## Type Parameters

### T

`T`

### A

`A` *extends* `string`

## Accessors

### alias

#### Get Signature

> **get** **alias**(): `A` \| [`Expression`](Expression.md)\<`unknown`\>

Defined in: [expression/expression.ts:203](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L203)

Returns the alias.

##### Returns

`A` \| [`Expression`](Expression.md)\<`unknown`\>

***

### expression

#### Get Signature

> **get** **expression**(): [`Expression`](Expression.md)\<`T`\>

Defined in: [expression/expression.ts:198](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L198)

Returns the aliased expression.

##### Returns

[`Expression`](Expression.md)\<`T`\>

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](AliasNode.md)

Defined in: [expression/expression.ts:208](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L208)

Creates the OperationNode that describes how to compile this expression into SQL.

#### Returns

[`AliasNode`](AliasNode.md)

#### Overrides

[`OperationNodeSource`](OperationNodeSource.md).[`toOperationNode`](OperationNodeSource.md#tooperationnode)
