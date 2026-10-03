[**kysely**](../index.md)

***

[kysely](../modules.md) / CallbackSelection

# Type Alias: CallbackSelection\<DB, TB, CB\>

> **CallbackSelection**\<`DB`, `TB`, `CB`\> = `CB` *extends* (`eb`) => `ReadonlyArray`\<infer SE\> ? [`Selection`](Selection.md)\<`DB`, `TB`, `SE`\> : `never`

Defined in: [parser/select-parser.ts:61](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L61)

Turns a SelectCallback into a selection object.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### CB

`CB`
