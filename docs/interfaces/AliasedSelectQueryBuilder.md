[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedSelectQueryBuilder

# Interface: AliasedSelectQueryBuilder\<O, A\>

Defined in: [query-builder/select-query-builder.ts:2743](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2743)

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

- [`AliasedExpression`](AliasedExpression.md)\<`O`, `A`\>

## Type Parameters

### O

`O` = `undefined`

### A

`A` *extends* `string` = `never`

## Accessors

### alias

#### Get Signature

> **get** **alias**(): `A` \| [`Expression`](Expression.md)\<`unknown`\>

Defined in: [expression/expression.ts:203](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L203)

Returns the alias.

##### Returns

`A` \| [`Expression`](Expression.md)\<`unknown`\>

#### Inherited from

`AliasedExpression.alias`

***

### expression

#### Get Signature

> **get** **expression**(): [`Expression`](Expression.md)\<`T`\>

Defined in: [expression/expression.ts:198](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L198)

Returns the aliased expression.

##### Returns

[`Expression`](Expression.md)\<`T`\>

#### Inherited from

`AliasedExpression.expression`

***

### isAliasedSelectQueryBuilder

#### Get Signature

> **get** **isAliasedSelectQueryBuilder**(): `true`

Defined in: [query-builder/select-query-builder.ts:2747](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2747)

##### Returns

`true`

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](AliasNode.md)

Defined in: [expression/expression.ts:208](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L208)

Creates the OperationNode that describes how to compile this expression into SQL.

#### Returns

[`AliasNode`](AliasNode.md)

#### Inherited from

[`AliasedExpression`](AliasedExpression.md).[`toOperationNode`](AliasedExpression.md#tooperationnode)
