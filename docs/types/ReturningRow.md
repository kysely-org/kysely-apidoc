[**kysely**](../index.md)

***

[kysely](../modules.md) / ReturningRow

# Type Alias: ReturningRow\<DB, TB, O, SE\>

> **ReturningRow**\<`DB`, `TB`, `O`, `SE`\> = `O` *extends* [`InsertResult`](../classes/InsertResult.md) \| [`DeleteResult`](../classes/DeleteResult.md) \| [`UpdateResult`](../classes/UpdateResult.md) \| [`MergeResult`](../classes/MergeResult.md) ? [`Selection`](Selection.md)\<`DB`, `TB`, `SE`\> : `O` & [`Selection`](Selection.md)\<`DB`, `TB`, `SE`\>

Defined in: [parser/returning-parser.ts:11](https://github.com/kysely-org/kysely/blob/master/src/parser/returning-parser.ts#L11)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### SE

`SE`
