[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterColumnBuilder

# Class: AlterColumnBuilder

Defined in: [schema/alter-column-builder.ts:12](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L12)

## Constructors

### Constructor

> **new AlterColumnBuilder**(`column`): `AlterColumnBuilder`

Defined in: [schema/alter-column-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L15)

#### Parameters

##### column

`string`

#### Returns

`AlterColumnBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/alter-column-builder.ts:61](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L61)

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

### dropDefault()

> **dropDefault**(): [`AlteredColumnBuilder`](AlteredColumnBuilder.md)

Defined in: [schema/alter-column-builder.ts:39](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L39)

#### Returns

[`AlteredColumnBuilder`](AlteredColumnBuilder.md)

***

### dropNotNull()

> **dropNotNull**(): [`AlteredColumnBuilder`](AlteredColumnBuilder.md)

Defined in: [schema/alter-column-builder.ts:51](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L51)

#### Returns

[`AlteredColumnBuilder`](AlteredColumnBuilder.md)

***

### setDataType()

> **setDataType**(`dataType`): [`AlteredColumnBuilder`](AlteredColumnBuilder.md)

Defined in: [schema/alter-column-builder.ts:19](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L19)

#### Parameters

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

#### Returns

[`AlteredColumnBuilder`](AlteredColumnBuilder.md)

***

### setDefault()

> **setDefault**(`value`): [`AlteredColumnBuilder`](AlteredColumnBuilder.md)

Defined in: [schema/alter-column-builder.ts:29](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L29)

#### Parameters

##### value

`unknown`

#### Returns

[`AlteredColumnBuilder`](AlteredColumnBuilder.md)

***

### setNotNull()

> **setNotNull**(): [`AlteredColumnBuilder`](AlteredColumnBuilder.md)

Defined in: [schema/alter-column-builder.ts:45](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-column-builder.ts#L45)

#### Returns

[`AlteredColumnBuilder`](AlteredColumnBuilder.md)
