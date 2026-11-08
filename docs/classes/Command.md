[**kysely**](../index.md)

***

[kysely](../modules.md) / Command

# Class: Command\<T\>

Defined in: [kysely.ts:1358](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1358)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Command**\<`T`\>(`cb`): `Command`\<`T`\>

Defined in: [kysely.ts:1361](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1361)

#### Parameters

##### cb

() => `Promise`\<`T`\>

#### Returns

`Command`\<`T`\>

## Methods

### execute()

> **execute**(): `Promise`\<`T`\>

Defined in: [kysely.ts:1368](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1368)

Executes the command.

#### Returns

`Promise`\<`T`\>
