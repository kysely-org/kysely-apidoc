[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyTransactionBuilder

# Interface: ReadonlyTransactionBuilder\<DB\>

Defined in: [readonly/readonly-kysely.ts:175](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L175)

Similar to [TransactionBuilder](../classes/TransactionBuilder.md) but read-only.

## Type Parameters

### DB

`DB`

## Methods

### execute()

> **execute**\<`T`\>(`callback`): `Promise`\<`T`\>

Defined in: [readonly/readonly-kysely.ts:179](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L179)

Similar to [TransactionBuilder.execute](../classes/TransactionBuilder.md#execute) but read-only.

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

> **setAccessMode**(`accessMode`): `ReadonlyTransactionBuilder`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:184](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L184)

Similar to [TransactionBuilder.setAccessMode](../classes/TransactionBuilder.md#setaccessmode) but read-only.

#### Parameters

##### accessMode

`"read only"`

#### Returns

`ReadonlyTransactionBuilder`\<`DB`\>

***

### setIsolationLevel()

> **setIsolationLevel**(`isolationLevel`): `ReadonlyTransactionBuilder`\<`DB`\>

Defined in: [readonly/readonly-kysely.ts:189](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L189)

Similar to [TransactionBuilder.setIsolationLevel](../classes/TransactionBuilder.md#setisolationlevel) but read-only.

#### Parameters

##### isolationLevel

`"read uncommitted"` \| `"read committed"` \| `"repeatable read"` \| `"serializable"` \| `"snapshot"`

#### Returns

`ReadonlyTransactionBuilder`\<`DB`\>
