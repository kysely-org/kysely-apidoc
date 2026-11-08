[**kysely**](../index.md)

***

[kysely](../modules.md) / TransactionBuilder

# Class: TransactionBuilder\<DB\>

Defined in: [kysely.ts:876](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L876)

## Type Parameters

### DB

`DB`

## Constructors

### Constructor

> **new TransactionBuilder**\<`DB`\>(`props`): `TransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:879](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L879)

#### Parameters

##### props

[`TransactionBuilderProps`](../interfaces/TransactionBuilderProps.md)

#### Returns

`TransactionBuilder`\<`DB`\>

## Methods

### execute()

> **execute**\<`T`\>(`callback`): `Promise`\<`T`\>

Defined in: [kysely.ts:897](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L897)

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`trx`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### setAccessMode()

> **setAccessMode**(`accessMode`): `TransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:883](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L883)

#### Parameters

##### accessMode

`"read only"` \| `"read write"`

#### Returns

`TransactionBuilder`\<`DB`\>

***

### setIsolationLevel()

> **setIsolationLevel**(`isolationLevel`): `TransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:890](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L890)

#### Parameters

##### isolationLevel

`"read uncommitted"` \| `"read committed"` \| `"repeatable read"` \| `"serializable"` \| `"snapshot"`

#### Returns

`TransactionBuilder`\<`DB`\>
