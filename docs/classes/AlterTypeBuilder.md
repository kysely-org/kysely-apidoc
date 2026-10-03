[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTypeBuilder

# Class: AlterTypeBuilder\<N\>

Defined in: [schema/alter-type-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-builder.ts#L15)

This builder can be used to create `alter type` queries.

## Type Parameters

### N

`N` *extends* `string`

## Constructors

### Constructor

> **new AlterTypeBuilder**\<`N`\>(`props`): `AlterTypeBuilder`\<`N`\>

Defined in: [schema/alter-type-builder.ts:18](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-builder.ts#L18)

#### Parameters

##### props

[`AlterTypeBuilderProps`](../interfaces/AlterTypeBuilderProps.md)

#### Returns

`AlterTypeBuilder`\<`N`\>

## Methods

### addValue()

> **addValue**\<`V`\>(`value`): [`AlterTypeAddValueBuilder`](AlterTypeAddValueBuilder.md)\<`V`\>

Defined in: [schema/alter-type-builder.ts:25](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-builder.ts#L25)

Adds a new value to an enum type.

#### Type Parameters

##### V

`V` *extends* `string`

#### Parameters

##### value

`V`

#### Returns

[`AlterTypeAddValueBuilder`](AlterTypeAddValueBuilder.md)\<`V`\>

***

### renameTo()

> **renameTo**\<`NN`\>(`newName`): [`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>

Defined in: [schema/alter-type-builder.ts:37](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-builder.ts#L37)

Rename the type.

#### Type Parameters

##### NN

`NN` *extends* `string`

#### Parameters

##### newName

`NN` *extends* `N` ? `never` : `NN`

#### Returns

[`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>

***

### renameValue()

> **renameValue**\<`OV`, `NV`\>(`oldValue`, `newValue`): [`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>

Defined in: [schema/alter-type-builder.ts:51](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-builder.ts#L51)

Renames a value of an enum type.

#### Type Parameters

##### OV

`OV` *extends* `string`

##### NV

`NV` *extends* `string`

#### Parameters

##### oldValue

`OV`

##### newValue

`NV` *extends* `OV` ? `never` : `NV`

#### Returns

[`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>

***

### setSchema()

> **setSchema**\<`NS`\>(`schema`): [`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>

Defined in: [schema/alter-type-builder.ts:69](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-builder.ts#L69)

Changes the type's schema.

#### Type Parameters

##### NS

`NS` *extends* `string`

#### Parameters

##### schema

`NS` *extends* `N` *extends* `` `${S}.${string}` `` ? `S` : `never` ? `never` : `NS`

#### Returns

[`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>
