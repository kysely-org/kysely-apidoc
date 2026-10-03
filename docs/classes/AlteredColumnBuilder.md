[**kysely**](../index.md)

***

[kysely](../modules.md) / AlteredColumnBuilder

# Class: AlteredColumnBuilder

Defined in: [schema/alter-column-builder.ts:95](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L95)

Allows us to force consumers to do exactly one alteration to a column.

One cannot do no alterations:

```ts
await db.schema
  .alterTable('person')
//  .execute() // Property 'execute' does not exist on type 'AlteredColumnBuilder'.
```

```ts
await db.schema
  .alterTable('person')
//  .alterColumn('age', (ac) => ac) // Type 'AlterColumnBuilder' is not assignable to type 'AlteredColumnBuilder'.
//  .execute()
```

One cannot do multiple alterations:

```ts
await db.schema
  .alterTable('person')
//  .alterColumn('age', (ac) => ac.dropNotNull().setNotNull()) // Property 'setNotNull' does not exist on type 'AlteredColumnBuilder'.
//  .execute()
```

Which would now throw a compilation error, instead of a runtime error.

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new AlteredColumnBuilder**(`alterColumnNode`): `AlteredColumnBuilder`

Defined in: [schema/alter-column-builder.ts:98](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L98)

#### Parameters

##### alterColumnNode

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

#### Returns

`AlteredColumnBuilder`

## Methods

### toOperationNode()

> **toOperationNode**(): [`AlterColumnNode`](../interfaces/AlterColumnNode.md)

Defined in: [schema/alter-column-builder.ts:102](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L102)

#### Returns

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
