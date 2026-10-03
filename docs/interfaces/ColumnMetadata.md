[**kysely**](../index.md)

***

[kysely](../modules.md) / ColumnMetadata

# Interface: ColumnMetadata

Defined in: [dialect/database-introspector.ts:36](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L36)

## Properties

### comment?

> `readonly` `optional` **comment?**: `string`

Defined in: [dialect/database-introspector.ts:57](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L57)

***

### dataType

> `readonly` **dataType**: `string`

Defined in: [dialect/database-introspector.ts:47](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L47)

The data type of the column as reported by the database.

NOTE: This value is whatever the database engine returns and it will be
      different on different dialects even if you run the same migrations.
      For example `integer` datatype in a migration will produce `int4`
      on PostgreSQL, `INTEGER` on SQLite and `int` on MySQL.

***

### dataTypeSchema?

> `readonly` `optional` **dataTypeSchema?**: `string`

Defined in: [dialect/database-introspector.ts:52](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L52)

The schema this column's data type was created in.

***

### hasDefaultValue

> `readonly` **hasDefaultValue**: `boolean`

Defined in: [dialect/database-introspector.ts:56](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L56)

***

### isAutoIncrementing

> `readonly` **isAutoIncrementing**: `boolean`

Defined in: [dialect/database-introspector.ts:54](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L54)

***

### isNullable

> `readonly` **isNullable**: `boolean`

Defined in: [dialect/database-introspector.ts:55](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L55)

***

### name

> `readonly` **name**: `string`

Defined in: [dialect/database-introspector.ts:37](https://github.com/kysely-org/kysely/blob/master/src/dialect/database-introspector.ts#L37)
