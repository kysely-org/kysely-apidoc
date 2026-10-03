[**kysely**](../index.md)

***

[kysely](../modules.md) / DefaultConnectionProvider

# Class: DefaultConnectionProvider

Defined in: [driver/default-connection-provider.ts:6](https://github.com/kysely-org/kysely/blob/master/src/driver/default-connection-provider.ts#L6)

## Implements

- [`ConnectionProvider`](../interfaces/ConnectionProvider.md)

## Constructors

### Constructor

> **new DefaultConnectionProvider**(`driver`): `DefaultConnectionProvider`

Defined in: [driver/default-connection-provider.ts:9](https://github.com/kysely-org/kysely/blob/master/src/driver/default-connection-provider.ts#L9)

#### Parameters

##### driver

[`Driver`](../interfaces/Driver.md)

#### Returns

`DefaultConnectionProvider`

## Methods

### provideConnection()

> **provideConnection**\<`T`\>(`consumer`, `options?`): `Promise`\<`T`\>

Defined in: [driver/default-connection-provider.ts:13](https://github.com/kysely-org/kysely/blob/master/src/driver/default-connection-provider.ts#L13)

Provides a connection for the callback and takes care of disposing
the connection after the callback has been run.

#### Type Parameters

##### T

`T`

#### Parameters

##### consumer

(`connection`) => `Promise`\<`T`\>

##### options?

[`AbortableOperationOptions`](../interfaces/AbortableOperationOptions.md)

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`ConnectionProvider`](../interfaces/ConnectionProvider.md).[`provideConnection`](../interfaces/ConnectionProvider.md#provideconnection)
