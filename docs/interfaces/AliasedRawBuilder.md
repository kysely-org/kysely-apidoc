[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedRawBuilder

# Interface: AliasedRawBuilder\<O, A\>

Defined in: [raw-builder/raw-builder.ts:237](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L237)

[RawBuilder](RawBuilder.md) with an alias. The result of calling [RawBuilder.as](RawBuilder.md#as).

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`AliasedExpression`](AliasedExpression.md)\<`O`, `A`\>

## Type Parameters

### O

`O` = `unknown`

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

### rawBuilder

#### Get Signature

> **get** **rawBuilder**(): [`RawBuilder`](RawBuilder.md)\<`O`\>

Defined in: [raw-builder/raw-builder.ts:241](https://github.com/kysely-org/kysely/blob/master/src/raw-builder/raw-builder.ts#L241)

##### Returns

[`RawBuilder`](RawBuilder.md)\<`O`\>

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](AliasNode.md)

Defined in: [expression/expression.ts:208](https://github.com/kysely-org/kysely/blob/master/src/expression/expression.ts#L208)

Creates the OperationNode that describes how to compile this expression into SQL.

#### Returns

[`AliasNode`](AliasNode.md)

#### Inherited from

[`AliasedExpression`](AliasedExpression.md).[`toOperationNode`](AliasedExpression.md#tooperationnode)
