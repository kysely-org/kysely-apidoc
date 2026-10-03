[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedJSONPathBuilder

# Class: AliasedJSONPathBuilder\<O, A\>

Defined in: [query-builder/json-path-builder.ts:277](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L277)

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

### O

`O`

### A

`A` *extends* `string`

## Implements

- [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`O`, `A`\>

## Constructors

### Constructor

> **new AliasedJSONPathBuilder**\<`O`, `A`\>(`jsonPath`, `alias`): `AliasedJSONPathBuilder`\<`O`, `A`\>

Defined in: [query-builder/json-path-builder.ts:284](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L284)

#### Parameters

##### jsonPath

[`TraversedJSONPathBuilder`](TraversedJSONPathBuilder.md)\<`any`, `O`\>

##### alias

[`Expression`](../interfaces/Expression.md)\<`unknown`\> \| `A`

#### Returns

`AliasedJSONPathBuilder`\<`O`, `A`\>

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](../interfaces/AliasNode.md)

Defined in: [query-builder/json-path-builder.ts:302](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L302)

Creates the OperationNode that describes how to compile this expression into SQL.

#### Returns

[`AliasNode`](../interfaces/AliasNode.md)

#### Implementation of

[`AliasedExpression`](../interfaces/AliasedExpression.md).[`toOperationNode`](../interfaces/AliasedExpression.md#tooperationnode)
