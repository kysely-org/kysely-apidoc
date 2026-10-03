[**kysely**](../index.md)

***

[kysely](../modules.md) / ReturningAllRow

# Type Alias: ReturningAllRow\<DB, TB, O\>

> **ReturningAllRow**\<`DB`, `TB`, `O`\> = `O` *extends* [`InsertResult`](../classes/InsertResult.md) \| [`DeleteResult`](../classes/DeleteResult.md) \| [`UpdateResult`](../classes/UpdateResult.md) \| [`MergeResult`](../classes/MergeResult.md) ? [`AllSelection`](AllSelection.md)\<`DB`, `TB`\> : `O` & [`AllSelection`](AllSelection.md)\<`DB`, `TB`\>

Defined in: [parser/returning-parser.ts:21](https://github.com/kysely-org/kysely/blob/master/src/parser/returning-parser.ts#L21)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`
