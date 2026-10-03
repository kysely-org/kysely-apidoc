[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlSysTables

# Interface: MssqlSysTables

Defined in: [dialect/mssql/mssql-introspector.ts:173](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L173)

## Properties

### sys.columns

> **sys.columns**: `object`

Defined in: [dialect/mssql/mssql-introspector.ts:174](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L174)

#### column\_id

> **column\_id**: `number`

#### default\_object\_id

> **default\_object\_id**: `number`

#### generated\_always\_type\_desc

> **generated\_always\_type\_desc**: `string`

#### is\_computed

> **is\_computed**: `boolean`

#### is\_identity

> **is\_identity**: `boolean`

#### is\_nullable

> **is\_nullable**: `boolean`

#### is\_rowguidcol

> **is\_rowguidcol**: `boolean`

#### name

> **name**: `string`

#### object\_id

> **object\_id**: `number`

#### system\_type\_id

> **system\_type\_id**: `number`

#### user\_type\_id

> **user\_type\_id**: `number`

***

### sys.extended\_properties

> **sys.extended\_properties**: `object`

Defined in: [dialect/mssql/mssql-introspector.ts:215](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L215)

#### major\_id

> **major\_id**: `number`

#### minor\_id

> **minor\_id**: `number`

#### name

> **name**: `string`

#### value

> **value**: `string`

***

### sys.schemas

> **sys.schemas**: `object`

Defined in: [dialect/mssql/mssql-introspector.ts:221](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L221)

#### name

> **name**: `string`

#### schema\_id

> **schema\_id**: `number`

***

### sys.tables

> **sys.tables**: `object`

Defined in: [dialect/mssql/mssql-introspector.ts:226](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L226)

#### name

> **name**: `string`

#### object\_id

> **object\_id**: `number`

#### schema\_id

> **schema\_id**: `number`

#### type

> **type**: `"U "`

***

### sys.types

> **sys.types**: `object`

Defined in: [dialect/mssql/mssql-introspector.ts:276](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L276)

#### is\_nullable

> **is\_nullable**: `boolean`

#### name

> **name**: `string`

#### schema\_id

> **schema\_id**: `number`

#### system\_type\_id

> **system\_type\_id**: `number`

#### user\_type\_id

> **user\_type\_id**: `number`

***

### sys.views

> **sys.views**: `object`

Defined in: [dialect/mssql/mssql-introspector.ts:293](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-introspector.ts#L293)

#### name

> **name**: `string`

#### object\_id

> **object\_id**: `number`

#### schema\_id

> **schema\_id**: `number`

#### type

> **type**: `"V "`
