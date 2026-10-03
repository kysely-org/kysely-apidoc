[**kysely**](../index.md)

***

[kysely](../modules.md) / ReturningCallbackRow

# Type Alias: ReturningCallbackRow\<DB, TB, O, CB\>

> **ReturningCallbackRow**\<`DB`, `TB`, `O`, `CB`\> = `O` *extends* [`InsertResult`](../classes/InsertResult.md) \| [`DeleteResult`](../classes/DeleteResult.md) \| [`UpdateResult`](../classes/UpdateResult.md) \| [`MergeResult`](../classes/MergeResult.md) ? [`CallbackSelection`](CallbackSelection.md)\<`DB`, `TB`, `CB`\> : `O` & [`CallbackSelection`](CallbackSelection.md)\<`DB`, `TB`, `CB`\>

Defined in: [parser/returning-parser.ts:16](https://github.com/kysely-org/kysely/blob/master/src/parser/returning-parser.ts#L16)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### CB

`CB`
