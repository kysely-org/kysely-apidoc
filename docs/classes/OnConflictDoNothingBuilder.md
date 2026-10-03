[**kysely**](../index.md)

***

[kysely](../modules.md) / OnConflictDoNothingBuilder

# Class: OnConflictDoNothingBuilder\<DB, _TB\>

Defined in: [query-builder/on-conflict-builder.ts:285](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L285)

## Type Parameters

### DB

`DB`

### _TB

`_TB` *extends* keyof `DB`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new OnConflictDoNothingBuilder**\<`DB`, `_TB`\>(`props`): `OnConflictDoNothingBuilder`\<`DB`, `_TB`\>

Defined in: [query-builder/on-conflict-builder.ts:291](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L291)

#### Parameters

##### props

[`OnConflictBuilderProps`](../interfaces/OnConflictBuilderProps.md)

#### Returns

`OnConflictDoNothingBuilder`\<`DB`, `_TB`\>

## Methods

### toOperationNode()

> **toOperationNode**(): [`OnConflictNode`](../interfaces/OnConflictNode.md)

Defined in: [query-builder/on-conflict-builder.ts:295](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L295)

#### Returns

[`OnConflictNode`](../interfaces/OnConflictNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
