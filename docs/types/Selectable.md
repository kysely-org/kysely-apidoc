[**kysely**](../index.md)

***

[kysely](../modules.md) / Selectable

# Type Alias: Selectable\<R\>

> **Selectable**\<`R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<`{ [K in NonNeverSelectKeys<R>]: SelectType<R[K]> }`\>

Defined in: [util/column-type.ts:144](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L144)

Given a table interface, extracts the select type from all
[ColumnType](ColumnType.md) types.

### Examples

```ts
interface PersonTable {
  id: Generated<number>
  first_name: string
  modified_at: ColumnType<Date, string, never>
}

type Person = Selectable<PersonTable>
// {
//   id: number,
//   first_name: string
//   modified_at: Date
// }
```

## Type Parameters

### R

`R`
