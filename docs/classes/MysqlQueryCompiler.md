[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlQueryCompiler

# Class: MysqlQueryCompiler

Defined in: [dialect/mysql/mysql-query-compiler.ts:8](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L8)

a `QueryCompiler` compiles a query expressed as a tree of `OperationNodes` into SQL.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`DefaultQueryCompiler`](DefaultQueryCompiler.md)

## Constructors

### Constructor

> **new MysqlQueryCompiler**(): `MysqlQueryCompiler`

#### Returns

`MysqlQueryCompiler`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`constructor`](DefaultQueryCompiler.md#constructor)

## Properties

### nodeStack

> `protected` `readonly` **nodeStack**: [`OperationNode`](../interfaces/OperationNode.md)[] = `[]`

Defined in: [operation-node/operation-node-visitor.ts:108](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L108)

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`nodeStack`](DefaultQueryCompiler.md#nodestack)

## Accessors

### numParameters

#### Get Signature

> **get** `protected` **numParameters**(): `number`

Defined in: [query-compiler/default-query-compiler.ts:133](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L133)

##### Returns

`number`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`numParameters`](DefaultQueryCompiler.md#numparameters)

***

### parentNode

#### Get Signature

> **get** `protected` **parentNode**(): [`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

Defined in: [operation-node/operation-node-visitor.ts:110](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L110)

##### Returns

[`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`parentNode`](DefaultQueryCompiler.md#parentnode)

## Methods

### addParameter()

> `protected` **addParameter**(`parameter`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1891](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1891)

#### Parameters

##### parameter

`unknown`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`addParameter`](DefaultQueryCompiler.md#addparameter)

***

### announcesNewColumnDataType()

> `protected` **announcesNewColumnDataType**(): `boolean`

Defined in: [query-compiler/default-query-compiler.ts:1938](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1938)

controls whether the dialect adds a "type" keyword before a column's new data
type in an ALTER TABLE statement.

#### Returns

`boolean`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`announcesNewColumnDataType`](DefaultQueryCompiler.md#announcesnewcolumndatatype)

***

### append()

> `protected` **append**(`str`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1826](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1826)

#### Parameters

##### str

`string`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`append`](DefaultQueryCompiler.md#append)

***

### appendImmediateValue()

> `protected` **appendImmediateValue**(`value`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1895](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1895)

#### Parameters

##### value

`unknown`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`appendImmediateValue`](DefaultQueryCompiler.md#appendimmediatevalue)

***

### appendStringLiteral()

> `protected` **appendStringLiteral**(`value`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1909](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1909)

#### Parameters

##### value

`string`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`appendStringLiteral`](DefaultQueryCompiler.md#appendstringliteral)

***

### appendValue()

> `protected` **appendValue**(`parameter`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1830](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1830)

#### Parameters

##### parameter

`unknown`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`appendValue`](DefaultQueryCompiler.md#appendvalue)

***

### buildDeferrable()

> `protected` **buildDeferrable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1050](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1050)

#### Parameters

##### node

###### deferrable?

`boolean`

###### initiallyDeferred?

`boolean`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`buildDeferrable`](DefaultQueryCompiler.md#builddeferrable)

***

### compileColumnAlterations()

> `protected` **compileColumnAlterations**(`columnAlterations`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1928](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1928)

#### Parameters

##### columnAlterations

readonly [`AlterTableColumnAlterationNode`](../types/AlterTableColumnAlterationNode.md)[]

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`compileColumnAlterations`](DefaultQueryCompiler.md#compilecolumnalterations)

***

### compileDistinctOn()

> `protected` **compileDistinctOn**(`expressions`): `void`

Defined in: [query-compiler/default-query-compiler.ts:274](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L274)

#### Parameters

##### expressions

readonly [`OperationNode`](../interfaces/OperationNode.md)[]

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`compileDistinctOn`](DefaultQueryCompiler.md#compiledistincton)

***

### compileList()

> `protected` **compileList**(`nodes`, `separator?`): `void`

Defined in: [query-compiler/default-query-compiler.ts:280](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L280)

#### Parameters

##### nodes

readonly [`OperationNode`](../interfaces/OperationNode.md)[]

##### separator?

`string` = `', '`

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`compileList`](DefaultQueryCompiler.md#compilelist)

***

### compileQuery()

> **compileQuery**(`node`, `queryId`): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [query-compiler/default-query-compiler.ts:137](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L137)

#### Parameters

##### node

[`RootOperationNode`](../types/RootOperationNode.md)

##### queryId

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`compileQuery`](DefaultQueryCompiler.md#compilequery)

***

### compileUnwrappedIdentifier()

> `protected` **compileUnwrappedIdentifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:498](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L498)

#### Parameters

##### node

[`IdentifierNode`](../interfaces/IdentifierNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`compileUnwrappedIdentifier`](DefaultQueryCompiler.md#compileunwrappedidentifier)

***

### getAutoIncrement()

> `protected` **getAutoIncrement**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:726](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L726)

#### Returns

`string`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getAutoIncrement`](DefaultQueryCompiler.md#getautoincrement)

***

### getCurrentParameterPlaceholder()

> `protected` **getCurrentParameterPlaceholder**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:9](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L9)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getCurrentParameterPlaceholder`](DefaultQueryCompiler.md#getcurrentparameterplaceholder)

***

### getExplainOptionAssignment()

> `protected` **getExplainOptionAssignment**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:17](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L17)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getExplainOptionAssignment`](DefaultQueryCompiler.md#getexplainoptionassignment)

***

### getExplainOptionsDelimiter()

> `protected` **getExplainOptionsDelimiter**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:21](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L21)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getExplainOptionsDelimiter`](DefaultQueryCompiler.md#getexplainoptionsdelimiter)

***

### getLeftExplainOptionsWrapper()

> `protected` **getLeftExplainOptionsWrapper**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:13](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L13)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getLeftExplainOptionsWrapper`](DefaultQueryCompiler.md#getleftexplainoptionswrapper)

***

### getLeftIdentifierWrapper()

> `protected` **getLeftIdentifierWrapper**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:29](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L29)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getLeftIdentifierWrapper`](DefaultQueryCompiler.md#getleftidentifierwrapper)

***

### getRightExplainOptionsWrapper()

> `protected` **getRightExplainOptionsWrapper**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:25](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L25)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getRightExplainOptionsWrapper`](DefaultQueryCompiler.md#getrightexplainoptionswrapper)

***

### getRightIdentifierWrapper()

> `protected` **getRightIdentifierWrapper**(): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:33](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L33)

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getRightIdentifierWrapper`](DefaultQueryCompiler.md#getrightidentifierwrapper)

***

### getSql()

> `protected` **getSql**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:152](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L152)

#### Returns

`string`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`getSql`](DefaultQueryCompiler.md#getsql)

***

### isMinusOperator()

> `protected` **isMinusOperator**(`node`): `node is OperatorNode`

Defined in: [query-compiler/default-query-compiler.ts:1612](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1612)

#### Parameters

##### node

[`OperationNode`](../interfaces/OperationNode.md)

#### Returns

`node is OperatorNode`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`isMinusOperator`](DefaultQueryCompiler.md#isminusoperator)

***

### sanitizeIdentifier()

> `protected` **sanitizeIdentifier**(`identifier`): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:37](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L37)

#### Parameters

##### identifier

`string`

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`sanitizeIdentifier`](DefaultQueryCompiler.md#sanitizeidentifier)

***

### sanitizeJSONPathMemberValue()

> `protected` **sanitizeJSONPathMemberValue**(`value`): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:59](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L59)

Member values appear inside `"..."` in the JSON path, which itself sits
inside a SQL string literal. They must therefore be escaped twice — once
for the JSON path grammar, then again for MySQL's string literal parser.

#### Parameters

##### value

`string`

#### Returns

`string`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`sanitizeJSONPathMemberValue`](DefaultQueryCompiler.md#sanitizejsonpathmembervalue)

***

### sanitizeStringLiteral()

> `protected` **sanitizeStringLiteral**(`value`): `string`

Defined in: [dialect/mysql/mysql-query-compiler.ts:48](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L48)

MySQL requires escaping backslashes in string literals when using the
default NO_BACKSLASH_ESCAPES=OFF mode. Without this, a backslash
followed by a quote (\') can break out of the string literal.

#### Parameters

##### value

`string`

#### Returns

`string`

#### See

https://dev.mysql.com/doc/refman/9.6/en/string-literals.html

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`sanitizeStringLiteral`](DefaultQueryCompiler.md#sanitizestringliteral)

***

### sortSelectModifiers()

> `protected` **sortSelectModifiers**(`arr`): readonly [`SelectModifierNode`](../interfaces/SelectModifierNode.md)[]

Defined in: [query-compiler/default-query-compiler.ts:1915](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1915)

#### Parameters

##### arr

readonly [`SelectModifierNode`](../interfaces/SelectModifierNode.md)[]

#### Returns

readonly [`SelectModifierNode`](../interfaces/SelectModifierNode.md)[]

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`sortSelectModifiers`](DefaultQueryCompiler.md#sortselectmodifiers)

***

### visitAddColumn()

> `protected` **visitAddColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1213](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1213)

#### Parameters

##### node

[`AddColumnNode`](../interfaces/AddColumnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAddColumn`](DefaultQueryCompiler.md#visitaddcolumn)

***

### visitAddConstraint()

> `protected` **visitAddConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1275](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1275)

#### Parameters

##### node

[`AddConstraintNode`](../interfaces/AddConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAddConstraint`](DefaultQueryCompiler.md#visitaddconstraint)

***

### visitAddIndex()

> `protected` **visitAddIndex**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1765](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1765)

#### Parameters

##### node

[`AddIndexNode`](../interfaces/AddIndexNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAddIndex`](DefaultQueryCompiler.md#visitaddindex)

***

### visitAddValue()

> `protected` **visitAddValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1481](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1481)

#### Parameters

##### node

[`AddValueNode`](../interfaces/AddValueNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAddValue`](DefaultQueryCompiler.md#visitaddvalue)

***

### visitAggregateFunction()

> `protected` **visitAggregateFunction**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1532](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1532)

#### Parameters

##### node

[`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAggregateFunction`](DefaultQueryCompiler.md#visitaggregatefunction)

***

### visitAlias()

> `protected` **visitAlias**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:473](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L473)

#### Parameters

##### node

[`AliasNode`](../interfaces/AliasNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAlias`](DefaultQueryCompiler.md#visitalias)

***

### visitAlterColumn()

> `protected` **visitAlterColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1234](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1234)

#### Parameters

##### node

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAlterColumn`](DefaultQueryCompiler.md#visitaltercolumn)

***

### visitAlterTable()

> `protected` **visitAlterTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1173](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1173)

#### Parameters

##### node

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAlterTable`](DefaultQueryCompiler.md#visitaltertable)

***

### visitAlterType()

> `protected` **visitAlterType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1463](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1463)

#### Parameters

##### node

[`AlterTypeNode`](../interfaces/AlterTypeNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAlterType`](DefaultQueryCompiler.md#visitaltertype)

***

### visitAnd()

> `protected` **visitAnd**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:508](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L508)

#### Parameters

##### node

[`AndNode`](../interfaces/AndNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitAnd`](DefaultQueryCompiler.md#visitand)

***

### visitBinaryOperation()

> `protected` **visitBinaryOperation**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1594](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1594)

#### Parameters

##### node

[`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitBinaryOperation`](DefaultQueryCompiler.md#visitbinaryoperation)

***

### visitCase()

> `protected` **visitCase**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1628](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1628)

#### Parameters

##### node

[`CaseNode`](../interfaces/CaseNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCase`](DefaultQueryCompiler.md#visitcase)

***

### visitCast()

> `protected` **visitCast**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1790](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1790)

#### Parameters

##### node

[`CastNode`](../interfaces/CastNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCast`](DefaultQueryCompiler.md#visitcast)

***

### visitCheckConstraint()

> `protected` **visitCheckConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1091](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1091)

#### Parameters

##### node

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCheckConstraint`](DefaultQueryCompiler.md#visitcheckconstraint)

***

### visitCollate()

> `protected` **visitCollate**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1821](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1821)

#### Parameters

##### node

[`CollateNode`](../interfaces/CollateNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCollate`](DefaultQueryCompiler.md#visitcollate)

***

### visitColumn()

> `protected` **visitColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:270](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L270)

#### Parameters

##### node

[`ColumnNode`](../interfaces/ColumnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitColumn`](DefaultQueryCompiler.md#visitcolumn)

***

### visitColumnDefinition()

> `protected` **visitColumnDefinition**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:656](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L656)

#### Parameters

##### node

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitColumnDefinition`](DefaultQueryCompiler.md#visitcolumndefinition)

***

### visitColumnUpdate()

> `protected` **visitColumnUpdate**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:895](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L895)

#### Parameters

##### node

[`ColumnUpdateNode`](../interfaces/ColumnUpdateNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitColumnUpdate`](DefaultQueryCompiler.md#visitcolumnupdate)

***

### visitCommonTableExpression()

> `protected` **visitCommonTableExpression**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1144](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1144)

#### Parameters

##### node

[`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCommonTableExpression`](DefaultQueryCompiler.md#visitcommontableexpression)

***

### visitCommonTableExpressionName()

> `protected` **visitCommonTableExpressionName**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1161](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1161)

#### Parameters

##### node

[`CommonTableExpressionNameNode`](../interfaces/CommonTableExpressionNameNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCommonTableExpressionName`](DefaultQueryCompiler.md#visitcommontableexpressionname)

***

### visitCreateIndex()

> `protected` **visitCreateIndex**(`node`): `void`

Defined in: [dialect/mysql/mysql-query-compiler.ts:65](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-query-compiler.ts#L65)

#### Parameters

##### node

[`CreateIndexNode`](../interfaces/CreateIndexNode.md)

#### Returns

`void`

#### Overrides

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCreateIndex`](DefaultQueryCompiler.md#visitcreateindex)

***

### visitCreateSchema()

> `protected` **visitCreateSchema**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1010](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1010)

#### Parameters

##### node

[`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCreateSchema`](DefaultQueryCompiler.md#visitcreateschema)

***

### visitCreateTable()

> `protected` **visitCreateTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:610](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L610)

#### Parameters

##### node

[`CreateTableNode`](../interfaces/CreateTableNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCreateTable`](DefaultQueryCompiler.md#visitcreatetable)

***

### visitCreateType()

> `protected` **visitCreateType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1434](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1434)

#### Parameters

##### node

[`CreateTypeNode`](../interfaces/CreateTypeNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCreateType`](DefaultQueryCompiler.md#visitcreatetype)

***

### visitCreateView()

> `protected` **visitCreateView**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1314](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1314)

#### Parameters

##### node

[`CreateViewNode`](../interfaces/CreateViewNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitCreateView`](DefaultQueryCompiler.md#visitcreateview)

***

### visitDataType()

> `protected` **visitDataType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:768](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L768)

#### Parameters

##### node

[`DataTypeNode`](../interfaces/DataTypeNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDataType`](DefaultQueryCompiler.md#visitdatatype)

***

### visitDefaultInsertValue()

> `protected` **visitDefaultInsertValue**(`_`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1528](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1528)

#### Parameters

##### \_

[`DefaultInsertValueNode`](../interfaces/DefaultInsertValueNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDefaultInsertValue`](DefaultQueryCompiler.md#visitdefaultinsertvalue)

***

### visitDefaultValue()

> `protected` **visitDefaultValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1416](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1416)

#### Parameters

##### node

[`DefaultValueNode`](../interfaces/DefaultValueNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDefaultValue`](DefaultQueryCompiler.md#visitdefaultvalue)

***

### visitDeleteQuery()

> `protected` **visitDeleteQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:394](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L394)

#### Parameters

##### node

[`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDeleteQuery`](DefaultQueryCompiler.md#visitdeletequery)

***

### visitDropColumn()

> `protected` **visitDropColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1225](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1225)

#### Parameters

##### node

[`DropColumnNode`](../interfaces/DropColumnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropColumn`](DefaultQueryCompiler.md#visitdropcolumn)

***

### visitDropConstraint()

> `protected` **visitDropConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1280](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1280)

#### Parameters

##### node

[`DropConstraintNode`](../interfaces/DropConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropConstraint`](DefaultQueryCompiler.md#visitdropconstraint)

***

### visitDropIndex()

> `protected` **visitDropIndex**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:991](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L991)

#### Parameters

##### node

[`DropIndexNode`](../interfaces/DropIndexNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropIndex`](DefaultQueryCompiler.md#visitdropindex)

***

### visitDropSchema()

> `protected` **visitDropSchema**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1020](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1020)

#### Parameters

##### node

[`DropSchemaNode`](../interfaces/DropSchemaNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropSchema`](DefaultQueryCompiler.md#visitdropschema)

***

### visitDropTable()

> `protected` **visitDropTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:748](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L748)

#### Parameters

##### node

[`DropTableNode`](../interfaces/DropTableNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropTable`](DefaultQueryCompiler.md#visitdroptable)

***

### visitDropType()

> `protected` **visitDropType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1444](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1444)

#### Parameters

##### node

[`DropTypeNode`](../interfaces/DropTypeNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropType`](DefaultQueryCompiler.md#visitdroptype)

***

### visitDropView()

> `protected` **visitDropView**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1368](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1368)

#### Parameters

##### node

[`DropViewNode`](../interfaces/DropViewNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitDropView`](DefaultQueryCompiler.md#visitdropview)

***

### visitExplain()

> `protected` **visitExplain**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1503](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1503)

#### Parameters

##### node

[`ExplainNode`](../interfaces/ExplainNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitExplain`](DefaultQueryCompiler.md#visitexplain)

***

### visitFetch()

> `protected` **visitFetch**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1798](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1798)

#### Parameters

##### node

[`FetchNode`](../interfaces/FetchNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitFetch`](DefaultQueryCompiler.md#visitfetch)

***

### visitForeignKeyConstraint()

> `protected` **visitForeignKeyConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1103](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1103)

#### Parameters

##### node

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitForeignKeyConstraint`](DefaultQueryCompiler.md#visitforeignkeyconstraint)

***

### visitFrom()

> `protected` **visitFrom**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:261](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L261)

#### Parameters

##### node

[`FromNode`](../interfaces/FromNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitFrom`](DefaultQueryCompiler.md#visitfrom)

***

### visitFunction()

> `protected` **visitFunction**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1621](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1621)

#### Parameters

##### node

[`FunctionNode`](../interfaces/FunctionNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitFunction`](DefaultQueryCompiler.md#visitfunction)

***

### visitGenerated()

> `protected` **visitGenerated**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1388](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1388)

#### Parameters

##### node

[`GeneratedNode`](../interfaces/GeneratedNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitGenerated`](DefaultQueryCompiler.md#visitgenerated)

***

### visitGroupBy()

> `protected` **visitGroupBy**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:796](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L796)

#### Parameters

##### node

[`GroupByNode`](../interfaces/GroupByNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitGroupBy`](DefaultQueryCompiler.md#visitgroupby)

***

### visitGroupByItem()

> `protected` **visitGroupByItem**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:801](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L801)

#### Parameters

##### node

[`GroupByItemNode`](../interfaces/GroupByItemNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitGroupByItem`](DefaultQueryCompiler.md#visitgroupbyitem)

***

### visitHaving()

> `protected` **visitHaving**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:300](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L300)

#### Parameters

##### node

[`HavingNode`](../interfaces/HavingNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitHaving`](DefaultQueryCompiler.md#visithaving)

***

### visitIdentifier()

> `protected` **visitIdentifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:492](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L492)

#### Parameters

##### node

[`IdentifierNode`](../interfaces/IdentifierNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitIdentifier`](DefaultQueryCompiler.md#visitidentifier)

***

### visitInsertQuery()

> `protected` **visitInsertQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:305](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L305)

#### Parameters

##### node

[`InsertQueryNode`](../interfaces/InsertQueryNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitInsertQuery`](DefaultQueryCompiler.md#visitinsertquery)

***

### visitJoin()

> `protected` **visitJoin**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:563](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L563)

#### Parameters

##### node

[`JoinNode`](../interfaces/JoinNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitJoin`](DefaultQueryCompiler.md#visitjoin)

***

### visitJSONOperatorChain()

> `protected` **visitJSONOperatorChain**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1699](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1699)

#### Parameters

##### node

[`JSONOperatorChainNode`](../interfaces/JSONOperatorChainNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitJSONOperatorChain`](DefaultQueryCompiler.md#visitjsonoperatorchain)

***

### visitJSONPath()

> `protected` **visitJSONPath**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1669](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1669)

#### Parameters

##### node

[`JSONPathNode`](../interfaces/JSONPathNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitJSONPath`](DefaultQueryCompiler.md#visitjsonpath)

***

### visitJSONPathLeg()

> `protected` **visitJSONPathLeg**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1683](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1683)

#### Parameters

##### node

[`JSONPathLegNode`](../interfaces/JSONPathLegNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitJSONPathLeg`](DefaultQueryCompiler.md#visitjsonpathleg)

***

### visitJSONReference()

> `protected` **visitJSONReference**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1664](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1664)

#### Parameters

##### node

[`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitJSONReference`](DefaultQueryCompiler.md#visitjsonreference)

***

### visitLimit()

> `protected` **visitLimit**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:901](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L901)

#### Parameters

##### node

[`LimitNode`](../interfaces/LimitNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitLimit`](DefaultQueryCompiler.md#visitlimit)

***

### visitList()

> `protected` **visitList**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1130](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1130)

#### Parameters

##### node

[`ListNode`](../interfaces/ListNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitList`](DefaultQueryCompiler.md#visitlist)

***

### visitMatched()

> `protected` **visitMatched**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1753](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1753)

#### Parameters

##### node

[`MatchedNode`](../interfaces/MatchedNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitMatched`](DefaultQueryCompiler.md#visitmatched)

***

### visitMergeQuery()

> `protected` **visitMergeQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1711](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1711)

#### Parameters

##### node

[`MergeQueryNode`](../interfaces/MergeQueryNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitMergeQuery`](DefaultQueryCompiler.md#visitmergequery)

***

### visitModifyColumn()

> `protected` **visitModifyColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1270](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1270)

#### Parameters

##### node

[`ModifyColumnNode`](../interfaces/ModifyColumnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitModifyColumn`](DefaultQueryCompiler.md#visitmodifycolumn)

***

### visitNode()

> `protected` `readonly` **visitNode**(`node`): `void`

Defined in: [operation-node/operation-node-visitor.ts:218](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L218)

#### Parameters

##### node

[`OperationNode`](../interfaces/OperationNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitNode`](DefaultQueryCompiler.md#visitnode)

***

### visitOffset()

> `protected` **visitOffset**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:906](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L906)

#### Parameters

##### node

[`OffsetNode`](../interfaces/OffsetNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOffset`](DefaultQueryCompiler.md#visitoffset)

***

### visitOn()

> `protected` **visitOn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:574](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L574)

#### Parameters

##### node

[`OnNode`](../interfaces/OnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOn`](DefaultQueryCompiler.md#visiton)

***

### visitOnConflict()

> `protected` **visitOnConflict**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:911](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L911)

#### Parameters

##### node

[`OnConflictNode`](../interfaces/OnConflictNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOnConflict`](DefaultQueryCompiler.md#visitonconflict)

***

### visitOnDuplicateKey()

> `protected` **visitOnDuplicateKey**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:945](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L945)

#### Parameters

##### node

[`OnDuplicateKeyNode`](../interfaces/OnDuplicateKeyNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOnDuplicateKey`](DefaultQueryCompiler.md#visitonduplicatekey)

***

### visitOperator()

> `protected` **visitOperator**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:591](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L591)

#### Parameters

##### node

[`OperatorNode`](../interfaces/OperatorNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOperator`](DefaultQueryCompiler.md#visitoperator)

***

### visitOr()

> `protected` **visitOr**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:514](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L514)

#### Parameters

##### node

[`OrNode`](../interfaces/OrNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOr`](DefaultQueryCompiler.md#visitor)

***

### visitOrAction()

> `protected` **visitOrAction**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1817](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1817)

#### Parameters

##### node

[`OrActionNode`](../interfaces/OrActionNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOrAction`](DefaultQueryCompiler.md#visitoraction)

***

### visitOrderBy()

> `protected` **visitOrderBy**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:772](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L772)

#### Parameters

##### node

[`OrderByNode`](../interfaces/OrderByNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOrderBy`](DefaultQueryCompiler.md#visitorderby)

***

### visitOrderByItem()

> `protected` **visitOrderByItem**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:777](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L777)

#### Parameters

##### node

[`OrderByItemNode`](../interfaces/OrderByItemNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOrderByItem`](DefaultQueryCompiler.md#visitorderbyitem)

***

### visitOutput()

> `protected` **visitOutput**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1804](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1804)

#### Parameters

##### node

[`OutputNode`](../interfaces/OutputNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOutput`](DefaultQueryCompiler.md#visitoutput)

***

### visitOver()

> `protected` **visitOver**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1567](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1567)

#### Parameters

##### node

[`OverNode`](../interfaces/OverNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitOver`](DefaultQueryCompiler.md#visitover)

***

### visitParens()

> `protected` **visitParens**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:557](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L557)

#### Parameters

##### node

[`ParensNode`](../interfaces/ParensNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitParens`](DefaultQueryCompiler.md#visitparens)

***

### visitPartitionBy()

> `protected` **visitPartitionBy**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1585](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1585)

#### Parameters

##### node

[`PartitionByNode`](../interfaces/PartitionByNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitPartitionBy`](DefaultQueryCompiler.md#visitpartitionby)

***

### visitPartitionByItem()

> `protected` **visitPartitionByItem**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1590](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1590)

#### Parameters

##### node

[`PartitionByItemNode`](../interfaces/PartitionByItemNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitPartitionByItem`](DefaultQueryCompiler.md#visitpartitionbyitem)

***

### visitPrimaryKeyConstraint()

> `protected` **visitPrimaryKeyConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1034](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1034)

#### Parameters

##### node

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitPrimaryKeyConstraint`](DefaultQueryCompiler.md#visitprimarykeyconstraint)

***

### visitPrimitiveValueList()

> `protected` **visitPrimitiveValueList**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:540](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L540)

#### Parameters

##### node

[`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitPrimitiveValueList`](DefaultQueryCompiler.md#visitprimitivevaluelist)

***

### visitRaw()

> `protected` **visitRaw**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:579](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L579)

#### Parameters

##### node

[`RawNode`](../interfaces/RawNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitRaw`](DefaultQueryCompiler.md#visitraw)

***

### visitReference()

> `protected` **visitReference**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:479](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L479)

#### Parameters

##### node

[`ReferenceNode`](../interfaces/ReferenceNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitReference`](DefaultQueryCompiler.md#visitreference)

***

### visitReferences()

> `protected` **visitReferences**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:730](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L730)

#### Parameters

##### node

[`ReferencesNode`](../interfaces/ReferencesNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitReferences`](DefaultQueryCompiler.md#visitreferences)

***

### visitRefreshMaterializedView()

> `protected` **visitRefreshMaterializedView**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1350](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1350)

#### Parameters

##### node

[`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitRefreshMaterializedView`](DefaultQueryCompiler.md#visitrefreshmaterializedview)

***

### visitRenameColumn()

> `protected` **visitRenameColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1218](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1218)

#### Parameters

##### node

[`RenameColumnNode`](../interfaces/RenameColumnNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitRenameColumn`](DefaultQueryCompiler.md#visitrenamecolumn)

***

### visitRenameConstraint()

> `protected` **visitRenameConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1296](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1296)

#### Parameters

##### node

[`RenameConstraintNode`](../interfaces/RenameConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitRenameConstraint`](DefaultQueryCompiler.md#visitrenameconstraint)

***

### visitRenameValue()

> `protected` **visitRenameValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1496](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1496)

#### Parameters

##### node

[`RenameValueNode`](../interfaces/RenameValueNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitRenameValue`](DefaultQueryCompiler.md#visitrenamevalue)

***

### visitReturning()

> `protected` **visitReturning**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:468](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L468)

#### Parameters

##### node

[`ReturningNode`](../interfaces/ReturningNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitReturning`](DefaultQueryCompiler.md#visitreturning)

***

### visitSchemableIdentifier()

> `protected` **visitSchemableIdentifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:599](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L599)

#### Parameters

##### node

[`SchemableIdentifierNode`](../interfaces/SchemableIdentifierNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitSchemableIdentifier`](DefaultQueryCompiler.md#visitschemableidentifier)

***

### visitSelectAll()

> `protected` **visitSelectAll**(`_`): `void`

Defined in: [query-compiler/default-query-compiler.ts:488](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L488)

#### Parameters

##### \_

[`SelectAllNode`](../interfaces/SelectAllNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitSelectAll`](DefaultQueryCompiler.md#visitselectall)

***

### visitSelection()

> `protected` **visitSelection**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:266](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L266)

#### Parameters

##### node

[`SelectionNode`](../interfaces/SelectionNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitSelection`](DefaultQueryCompiler.md#visitselection)

***

### visitSelectModifier()

> `protected` **visitSelectModifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1421](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1421)

#### Parameters

##### node

[`SelectModifierNode`](../interfaces/SelectModifierNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitSelectModifier`](DefaultQueryCompiler.md#visitselectmodifier)

***

### visitSelectQuery()

> `protected` **visitSelectQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:156](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L156)

#### Parameters

##### node

[`SelectQueryNode`](../interfaces/SelectQueryNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitSelectQuery`](DefaultQueryCompiler.md#visitselectquery)

***

### visitSetOperation()

> `protected` **visitSetOperation**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1303](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1303)

#### Parameters

##### node

[`SetOperationNode`](../interfaces/SetOperationNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitSetOperation`](DefaultQueryCompiler.md#visitsetoperation)

***

### visitTable()

> `protected` **visitTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:595](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L595)

#### Parameters

##### node

[`TableNode`](../interfaces/TableNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitTable`](DefaultQueryCompiler.md#visittable)

***

### visitTop()

> `protected` **visitTop**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1809](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1809)

#### Parameters

##### node

[`TopNode`](../interfaces/TopNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitTop`](DefaultQueryCompiler.md#visittop)

***

### visitTuple()

> `protected` **visitTuple**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:534](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L534)

#### Parameters

##### node

[`TupleNode`](../interfaces/TupleNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitTuple`](DefaultQueryCompiler.md#visittuple)

***

### visitUnaryOperation()

> `protected` **visitUnaryOperation**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1602](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1602)

#### Parameters

##### node

[`UnaryOperationNode`](../interfaces/UnaryOperationNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitUnaryOperation`](DefaultQueryCompiler.md#visitunaryoperation)

***

### visitUniqueConstraint()

> `protected` **visitUniqueConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1071](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1071)

#### Parameters

##### node

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitUniqueConstraint`](DefaultQueryCompiler.md#visituniqueconstraint)

***

### visitUpdateQuery()

> `protected` **visitUpdateQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:805](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L805)

#### Parameters

##### node

[`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitUpdateQuery`](DefaultQueryCompiler.md#visitupdatequery)

***

### visitUsing()

> `protected` **visitUsing**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1616](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1616)

#### Parameters

##### node

[`UsingNode`](../interfaces/UsingNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitUsing`](DefaultQueryCompiler.md#visitusing)

***

### visitValue()

> `protected` **visitValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:520](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L520)

#### Parameters

##### node

[`ValueNode`](../interfaces/ValueNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitValue`](DefaultQueryCompiler.md#visitvalue)

***

### visitValueList()

> `protected` **visitValueList**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:528](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L528)

#### Parameters

##### node

[`ValueListNode`](../interfaces/ValueListNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitValueList`](DefaultQueryCompiler.md#visitvaluelist)

***

### visitValues()

> `protected` **visitValues**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:389](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L389)

#### Parameters

##### node

[`ValuesNode`](../interfaces/ValuesNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitValues`](DefaultQueryCompiler.md#visitvalues)

***

### visitWhen()

> `protected` **visitWhen**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1653](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1653)

#### Parameters

##### node

[`WhenNode`](../interfaces/WhenNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitWhen`](DefaultQueryCompiler.md#visitwhen)

***

### visitWhere()

> `protected` **visitWhere**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:295](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L295)

#### Parameters

##### node

[`WhereNode`](../interfaces/WhereNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitWhere`](DefaultQueryCompiler.md#visitwhere)

***

### visitWith()

> `protected` **visitWith**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1134](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1134)

#### Parameters

##### node

[`WithNode`](../interfaces/WithNode.md)

#### Returns

`void`

#### Inherited from

[`DefaultQueryCompiler`](DefaultQueryCompiler.md).[`visitWith`](DefaultQueryCompiler.md#visitwith)
