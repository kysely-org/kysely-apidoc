[**kysely**](../index.md)

***

[kysely](../modules.md) / ControlledTransactionBuilder

# Class: ControlledTransactionBuilder\<DB\>

Defined in: [kysely.ts:929](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L929)

## Type Parameters

### DB

`DB`

## Constructors

### Constructor

> **new ControlledTransactionBuilder**\<`DB`\>(`props`): `ControlledTransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:932](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L932)

#### Parameters

##### props

[`TransactionBuilderProps`](../interfaces/TransactionBuilderProps.md)

#### Returns

`ControlledTransactionBuilder`\<`DB`\>

## Methods

### execute()

> **execute**(): `Promise`\<[`ControlledTransaction`](ControlledTransaction.md)\<`DB`, \[\]\>\>

Defined in: [kysely.ts:952](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L952)

#### Returns

`Promise`\<[`ControlledTransaction`](ControlledTransaction.md)\<`DB`, \[\]\>\>

***

### setAccessMode()

> **setAccessMode**(`accessMode`): `ControlledTransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:936](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L936)

#### Parameters

##### accessMode

`"read only"` \| `"read write"`

#### Returns

`ControlledTransactionBuilder`\<`DB`\>

***

### setIsolationLevel()

> **setIsolationLevel**(`isolationLevel`): `ControlledTransactionBuilder`\<`DB`\>

Defined in: [kysely.ts:943](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L943)

#### Parameters

##### isolationLevel

`"read uncommitted"` \| `"read committed"` \| `"repeatable read"` \| `"serializable"` \| `"snapshot"`

#### Returns

`ControlledTransactionBuilder`\<`DB`\>
