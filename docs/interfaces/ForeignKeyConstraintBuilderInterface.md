[**kysely**](../index.md)

***

[kysely](../modules.md) / ForeignKeyConstraintBuilderInterface

# Interface: ForeignKeyConstraintBuilderInterface\<R\>

Defined in: [schema/foreign-key-constraint-builder.ts:6](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L6)

## Type Parameters

### R

`R`

## Methods

### deferrable()

> **deferrable**(): `R`

Defined in: [schema/foreign-key-constraint-builder.ts:9](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L9)

#### Returns

`R`

***

### initiallyDeferred()

> **initiallyDeferred**(): `R`

Defined in: [schema/foreign-key-constraint-builder.ts:11](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L11)

#### Returns

`R`

***

### initiallyImmediate()

> **initiallyImmediate**(): `R`

Defined in: [schema/foreign-key-constraint-builder.ts:12](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L12)

#### Returns

`R`

***

### notDeferrable()

> **notDeferrable**(): `R`

Defined in: [schema/foreign-key-constraint-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L10)

#### Returns

`R`

***

### onDelete()

> **onDelete**(`onDelete`): `R`

Defined in: [schema/foreign-key-constraint-builder.ts:7](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L7)

#### Parameters

##### onDelete

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`R`

***

### onUpdate()

> **onUpdate**(`onUpdate`): `R`

Defined in: [schema/foreign-key-constraint-builder.ts:8](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L8)

#### Parameters

##### onUpdate

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`R`
