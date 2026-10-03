[**kysely**](../index.md)

***

[kysely](../modules.md) / ConnectionProvider

# Interface: ConnectionProvider

Defined in: [driver/connection-provider.ts:4](https://github.com/kysely-org/kysely/blob/master/src/driver/connection-provider.ts#L4)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`QueryExecutor`](QueryExecutor.md)

## Methods

### provideConnection()

> **provideConnection**\<`T`\>(`consumer`, `options?`): `Promise`\<`T`\>

Defined in: [driver/connection-provider.ts:9](https://github.com/kysely-org/kysely/blob/master/src/driver/connection-provider.ts#L9)

Provides a connection for the callback and takes care of disposing
the connection after the callback has been run.

#### Type Parameters

##### T

`T`

#### Parameters

##### consumer

(`connection`) => `Promise`\<`T`\>

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`T`\>
