[**kysely**](../index.md)

***

[kysely](../modules.md) / Updateable

# Type Alias: Updateable\<R\>

> **Updateable**\<`R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<`{ [K in UpdateKeys<R>]?: UpdateType<R[K]> }`\>

Defined in: [util/column-type.ts:197](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L197)

Given a table interface, extracts the update type from all
[ColumnType](ColumnType.md) types.

### Examples

```ts
interface PersonTable {
  id: Generated<number>
  first_name: string
  modified_at: ColumnType<Date, string, never>
}

type UpdateablePerson = Updateable<PersonTable>
// {
//   id?: number,
//   first_name?: string
// }
```

## Type Parameters

### R

`R`
