[**kysely**](../index.md)

***

[kysely](../modules.md) / Command

# Class: Command\<T\>

Defined in: [kysely.ts:1297](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1297)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Command**\<`T`\>(`cb`): `Command`\<`T`\>

Defined in: [kysely.ts:1300](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1300)

#### Parameters

##### cb

() => `Promise`\<`T`\>

#### Returns

`Command`\<`T`\>

## Methods

### execute()

> **execute**(): `Promise`\<`T`\>

Defined in: [kysely.ts:1307](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1307)

Executes the command.

#### Returns

`Promise`\<`T`\>
