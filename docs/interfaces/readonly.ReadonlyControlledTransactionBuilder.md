[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyControlledTransactionBuilder

# Interface: ReadonlyControlledTransactionBuilder\<DB\>

Defined in: [readonly/readonly-kysely.ts:275](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L275)

Similar to [ControlledTransactionBuilder](../classes/ControlledTransactionBuilder.md) but read-only.

## Type Parameters

### DB

`DB`

## Methods

### execute()

> **execute**(): `Promise`\<[`ReadonlyControlledTransaction`](readonly.ReadonlyControlledTransaction.md)\<`DB`, \[\]\>\>

Defined in: [readonly/readonly-kysely.ts:279](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L279)

Similar to [ControlledTransactionBuilder.execute](../classes/ControlledTransactionBuilder.md#execute) but read-only.

#### Returns

`Promise`\<[`ReadonlyControlledTransaction`](readonly.ReadonlyControlledTransaction.md)\<`DB`, \[\]\>\>

***

### setAccessMode()

> **setAccessMode**(`accessMode`): `ReadonlyControlledTransactionBuilder`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:284](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L284)

Similar to [ControlledTransactionBuilder.setAccessMode](../classes/ControlledTransactionBuilder.md#setaccessmode) but read-only.

#### Parameters

##### accessMode

`"read only"`

#### Returns

`ReadonlyControlledTransactionBuilder`\<`DB`\>

***

### setIsolationLevel()

> **setIsolationLevel**(`isolationLevel`): `ReadonlyControlledTransactionBuilder`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:291](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L291)

Similar to [ControlledTransactionBuilder.setIsolationLevel](../classes/ControlledTransactionBuilder.md#setisolationlevel) but read-only.

#### Parameters

##### isolationLevel

`"read uncommitted"` \| `"read committed"` \| `"repeatable read"` \| `"serializable"` \| `"snapshot"`

#### Returns

`ReadonlyControlledTransactionBuilder`\<`DB`\>
