[**kysely**](../index.md)

***

[kysely](../modules.md) / OrderByItemBuilder

# Class: OrderByItemBuilder

Defined in: [query-builder/order-by-item-builder.ts:8](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L8)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new OrderByItemBuilder**(`props`): `OrderByItemBuilder`

Defined in: [query-builder/order-by-item-builder.ts:11](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L11)

#### Parameters

##### props

[`OrderByItemBuilderProps`](../interfaces/OrderByItemBuilderProps.md)

#### Returns

`OrderByItemBuilder`

## Methods

### asc()

> **asc**(): `OrderByItemBuilder`

Defined in: [query-builder/order-by-item-builder.ts:33](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L33)

Adds `asc` to the `order by` item.

See [desc](#desc) for the opposite.

#### Returns

`OrderByItemBuilder`

***

### collate()

> **collate**(`collation`): `OrderByItemBuilder`

Defined in: [query-builder/order-by-item-builder.ts:70](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L70)

Adds `collate <collationName>` to the `order by` item.

#### Parameters

##### collation

[`Collation`](../types/Collation.md)

#### Returns

`OrderByItemBuilder`

***

### desc()

> **desc**(): `OrderByItemBuilder`

Defined in: [query-builder/order-by-item-builder.ts:20](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L20)

Adds `desc` to the `order by` item.

See [asc](#asc) for the opposite.

#### Returns

`OrderByItemBuilder`

***

### nullsFirst()

> **nullsFirst**(): `OrderByItemBuilder`

Defined in: [query-builder/order-by-item-builder.ts:61](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L61)

Adds `nulls first` to the `order by` item.

This is only supported by some dialects like PostgreSQL and SQLite.

See [nullsLast](#nullslast) for the opposite.

#### Returns

`OrderByItemBuilder`

***

### nullsLast()

> **nullsLast**(): `OrderByItemBuilder`

Defined in: [query-builder/order-by-item-builder.ts:48](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L48)

Adds `nulls last` to the `order by` item.

This is only supported by some dialects like PostgreSQL and SQLite.

See [nullsFirst](#nullsfirst) for the opposite.

#### Returns

`OrderByItemBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`OrderByItemNode`](../interfaces/OrderByItemNode.md)

Defined in: [query-builder/order-by-item-builder.ts:78](https://github.com/kysely-org/kysely/blob/master/src/query-builder/order-by-item-builder.ts#L78)

#### Returns

[`OrderByItemNode`](../interfaces/OrderByItemNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
