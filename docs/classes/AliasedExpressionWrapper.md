[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedExpressionWrapper

# Class: AliasedExpressionWrapper\<T, A\>

Defined in: [expression/expression-wrapper.ts:272](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L272)

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

## Type Parameters

### T

`T`

### A

`A` *extends* `string`

## Implements

- [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`T`, `A`\>

## Constructors

### Constructor

> **new AliasedExpressionWrapper**\<`T`, `A`\>(`expr`, `alias`): `AliasedExpressionWrapper`\<`T`, `A`\>

Defined in: [expression/expression-wrapper.ts:279](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L279)

#### Parameters

##### expr

[`Expression`](../interfaces/Expression.md)\<`T`\>

##### alias

[`Expression`](../interfaces/Expression.md)\<`unknown`\> \| `A`

#### Returns

`AliasedExpressionWrapper`\<`T`, `A`\>

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](../interfaces/AliasNode.md)

Defined in: [expression/expression-wrapper.ts:294](https://github.com/kysely-org/kysely/blob/master/src/expression/expression-wrapper.ts#L294)

Creates the OperationNode that describes how to compile this expression into SQL.

#### Returns

[`AliasNode`](../interfaces/AliasNode.md)

#### Implementation of

[`AliasedExpression`](../interfaces/AliasedExpression.md).[`toOperationNode`](../interfaces/AliasedExpression.md#tooperationnode)
