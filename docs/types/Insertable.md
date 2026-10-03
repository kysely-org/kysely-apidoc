[**kysely**](../index.md)

***

[kysely](../modules.md) / Insertable

# Type Alias: Insertable\<R\>

> **Insertable**\<`R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<`object` & `{ [K in NonNullableInsertKeys<R>]: InsertType<R[K]> }` & `{ [K in NullableInsertKeys<R>]?: InsertType<R[K]> }`\>

Defined in: [util/column-type.ts:169](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L169)

Given a table interface, extracts the insert type from all
[ColumnType](ColumnType.md) types.

### Examples

```ts
interface PersonTable {
  id: Generated<number>
  first_name: string
  modified_at: ColumnType<Date, string, never>
}

type InsertablePerson = Insertable<PersonTable>
// {
//   id?: number,
//   first_name: string
//   modified_at: string
// }
```

## Type Parameters

### R

`R`
