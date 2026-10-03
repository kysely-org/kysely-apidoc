[**kysely**](../index.md)

***

[kysely](../modules.md) / SingleConnectionProvider

# Class: SingleConnectionProvider

Defined in: [driver/single-connection-provider.ts:6](https://github.com/kysely-org/kysely/blob/master/src/driver/single-connection-provider.ts#L6)

## Implements

- [`ConnectionProvider`](../interfaces/ConnectionProvider.md)

## Constructors

### Constructor

> **new SingleConnectionProvider**(`connection`): `SingleConnectionProvider`

Defined in: [driver/single-connection-provider.ts:10](https://github.com/kysely-org/kysely/blob/master/src/driver/single-connection-provider.ts#L10)

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

#### Returns

`SingleConnectionProvider`

## Methods

### provideConnection()

> **provideConnection**\<`T`\>(`consumer`): `Promise`\<`T`\>

Defined in: [driver/single-connection-provider.ts:14](https://github.com/kysely-org/kysely/blob/master/src/driver/single-connection-provider.ts#L14)

Provides a connection for the callback and takes care of disposing
the connection after the callback has been run.

#### Type Parameters

##### T

`T`

#### Parameters

##### consumer

(`connection`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`ConnectionProvider`](../interfaces/ConnectionProvider.md).[`provideConnection`](../interfaces/ConnectionProvider.md#provideconnection)
