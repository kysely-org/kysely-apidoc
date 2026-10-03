[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyConnectionBuilder

# Interface: ReadonlyConnectionBuilder\<DB\>

Defined in: [readonly/readonly-kysely.ts:159](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L159)

Similar to [ConnectionBuilder](../classes/ConnectionBuilder.md) but read-only.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Omit`\<[`ConnectionBuilder`](../classes/ConnectionBuilder.md)\<`DB`\>, `"execute"`\>

## Type Parameters

### DB

`DB`

## Methods

### execute()

> **execute**\<`T`\>(`callback`, `options?`): `Promise`\<`T`\>

Defined in: [readonly/readonly-kysely.ts:166](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L166)

Similar to [ConnectionBuilder.execute](../classes/ConnectionBuilder.md#execute) but read-only.

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`db`) => `Promise`\<`T`\>

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`T`\>
