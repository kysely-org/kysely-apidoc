[**kysely**](../index.md)

***

[kysely](../modules.md) / ControlledTransactionBuilder

# Class: ControlledTransactionBuilder\<DB\>

Defined in: [kysely.ts:947](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L947)

## Type Parameters

### DB

`DB`

## Constructors

### Constructor

> **new ControlledTransactionBuilder**\<`DB`\>(`props`): `ControlledTransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:950](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L950)

#### Parameters

##### props

[`TransactionBuilderProps`](../interfaces/TransactionBuilderProps.md)

#### Returns

`ControlledTransactionBuilder`\<`DB`\>

## Methods

### execute()

> **execute**(): `Promise`\<[`ControlledTransaction`](ControlledTransaction.md)\<`DB`, \[\]\>\>

Defined in: [kysely.ts:970](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L970)

#### Returns

`Promise`\<[`ControlledTransaction`](ControlledTransaction.md)\<`DB`, \[\]\>\>

***

### setAccessMode()

> **setAccessMode**(`accessMode`): `ControlledTransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:954](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L954)

#### Parameters

##### accessMode

`"read only"` \| `"read write"`

#### Returns

`ControlledTransactionBuilder`\<`DB`\>

***

### setIsolationLevel()

> **setIsolationLevel**(`isolationLevel`): `ControlledTransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:961](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L961)

#### Parameters

##### isolationLevel

`"read uncommitted"` \| `"read committed"` \| `"repeatable read"` \| `"serializable"` \| `"snapshot"`

#### Returns

`ControlledTransactionBuilder`\<`DB`\>
