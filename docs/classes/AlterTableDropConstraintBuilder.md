[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableDropConstraintBuilder

# Class: AlterTableDropConstraintBuilder

Defined in: [schema/alter-table-drop-constraint-builder.ts:11](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L11)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new AlterTableDropConstraintBuilder**(`props`): `AlterTableDropConstraintBuilder`

Defined in: [schema/alter-table-drop-constraint-builder.ts:16](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L16)

#### Parameters

##### props

[`AlterTableDropConstraintBuilderProps`](../interfaces/AlterTableDropConstraintBuilderProps.md)

#### Returns

`AlterTableDropConstraintBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/alter-table-drop-constraint-builder.ts:66](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L66)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### cascade()

> **cascade**(): `AlterTableDropConstraintBuilder`

Defined in: [schema/alter-table-drop-constraint-builder.ts:34](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L34)

#### Returns

`AlterTableDropConstraintBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/alter-table-drop-constraint-builder.ts:77](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L77)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/alter-table-drop-constraint-builder.ts:84](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L84)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifExists()

> **ifExists**(): `AlterTableDropConstraintBuilder`

Defined in: [schema/alter-table-drop-constraint-builder.ts:20](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L20)

#### Returns

`AlterTableDropConstraintBuilder`

***

### restrict()

> **restrict**(): `AlterTableDropConstraintBuilder`

Defined in: [schema/alter-table-drop-constraint-builder.ts:48](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L48)

#### Returns

`AlterTableDropConstraintBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`AlterTableNode`](../interfaces/AlterTableNode.md)

Defined in: [schema/alter-table-drop-constraint-builder.ts:70](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-drop-constraint-builder.ts#L70)

#### Returns

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
