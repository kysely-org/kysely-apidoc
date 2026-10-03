[**kysely**](../index.md)

***

[kysely](../modules.md) / ConnectionBuilder

# Class: ConnectionBuilder\<DB\>

Defined in: [kysely.ts:834](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L834)

## Type Parameters

### DB

`DB`

## Constructors

### Constructor

> **new ConnectionBuilder**\<`DB`\>(`props`): `ConnectionBuilder`\<`DB`\>

Defined in: [kysely.ts:837](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L837)

#### Parameters

##### props

[`ConnectionBuilderProps`](../interfaces/ConnectionBuilderProps.md)

#### Returns

`ConnectionBuilder`\<`DB`\>

## Methods

### execute()

> **execute**\<`T`\>(`callback`, `options?`): `Promise`\<`T`\>

Defined in: [kysely.ts:841](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L841)

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`db`) => `Promise`\<`T`\>

##### options?

[`AbortableOperationOptions`](../interfaces/AbortableOperationOptions.md)

#### Returns

`Promise`\<`T`\>
