[**kysely**](../index.md)

***

[kysely](../modules.md) / AliasedAggregateFunctionBuilder

# Class: AliasedAggregateFunctionBuilder\<DB, TB, O, A\>

Defined in: [query-builder/aggregate-function-builder.ts:458](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L458)

[AggregateFunctionBuilder](AggregateFunctionBuilder.md) with an alias. The result of calling [AggregateFunctionBuilder.as](AggregateFunctionBuilder.md#as).

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O` = `unknown`

### A

`A` *extends* `string` = `never`

## Implements

- [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`O`, `A`\>

## Constructors

### Constructor

> **new AliasedAggregateFunctionBuilder**\<`DB`, `TB`, `O`, `A`\>(`aggregateFunctionBuilder`, `alias`): `AliasedAggregateFunctionBuilder`\<`DB`, `TB`, `O`, `A`\>

Defined in: [query-builder/aggregate-function-builder.ts:467](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L467)

#### Parameters

##### aggregateFunctionBuilder

[`AggregateFunctionBuilder`](AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

##### alias

`A`

#### Returns

`AliasedAggregateFunctionBuilder`\<`DB`, `TB`, `O`, `A`\>

## Methods

### toOperationNode()

> **toOperationNode**(): [`AliasNode`](../interfaces/AliasNode.md)

Defined in: [query-builder/aggregate-function-builder.ts:485](https://github.com/kysely-org/kysely/blob/master/src/query-builder/aggregate-function-builder.ts#L485)

Creates the OperationNode that describes how to compile this expression into SQL.

#### Returns

[`AliasNode`](../interfaces/AliasNode.md)

#### Implementation of

[`AliasedExpression`](../interfaces/AliasedExpression.md).[`toOperationNode`](../interfaces/AliasedExpression.md#tooperationnode)
