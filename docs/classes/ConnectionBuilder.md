[**kysely**](../index.md)

***

[kysely](../modules.md) / ConnectionBuilder

# Class: ConnectionBuilder\<DB\>

Defined in: [kysely.ts:848](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L848)

## Type Parameters

### DB

`DB`

## Constructors

### Constructor

> **new ConnectionBuilder**\<`DB`\>(`props`): `ConnectionBuilder`\<`DB`\>

Defined in: [kysely.ts:851](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L851)

#### Parameters

##### props

[`ConnectionBuilderProps`](../interfaces/ConnectionBuilderProps.md)

#### Returns

`ConnectionBuilder`\<`DB`\>

## Methods

### execute()

> **execute**\<`T`\>(`callback`, `options?`): `Promise`\<`T`\>

Defined in: [kysely.ts:855](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L855)

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
