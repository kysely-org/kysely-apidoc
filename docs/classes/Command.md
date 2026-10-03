[**kysely**](../index.md)

***

[kysely](../modules.md) / Command

# Class: Command\<T\>

Defined in: [kysely.ts:1292](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1292)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Command**\<`T`\>(`cb`): `Command`\<`T`\>

Defined in: [kysely.ts:1295](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1295)

#### Parameters

##### cb

() => `Promise`\<`T`\>

#### Returns

`Command`\<`T`\>

## Methods

### execute()

> **execute**(): `Promise`\<`T`\>

Defined in: [kysely.ts:1302](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L1302)

Executes the command.

#### Returns

`Promise`\<`T`\>
