[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTableAlias

# Type Alias: ExtractTableAlias\<DB, TE\>

> **ExtractTableAlias**\<`DB`, `TE`\> = `TE` *extends* `` `${string} as ${infer TA}` `` ? `TA` *extends* keyof `DB` ? `TA` : `never` : `TE` *extends* keyof `DB` ? `TE` : `never`

Defined in: [parser/table-parser.ts:44](https://github.com/kysely-org/kysely/blob/master/src/parser/table-parser.ts#L44)

## Type Parameters

### DB

`DB`

### TE

`TE`
