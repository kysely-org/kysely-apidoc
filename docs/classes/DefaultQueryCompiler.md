[**kysely**](../index.md)

***

[kysely](../modules.md) / DefaultQueryCompiler

# Class: DefaultQueryCompiler

Defined in: [query-compiler/default-query-compiler.ts:126](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L126)

a `QueryCompiler` compiles a query expressed as a tree of `OperationNodes` into SQL.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNodeVisitor`](OperationNodeVisitor.md)

### Extended by

- [`SqliteQueryCompiler`](SqliteQueryCompiler.md)
- [`MysqlQueryCompiler`](MysqlQueryCompiler.md)
- [`PostgresQueryCompiler`](PostgresQueryCompiler.md)
- [`MssqlQueryCompiler`](MssqlQueryCompiler.md)

## Implements

- [`QueryCompiler`](../interfaces/QueryCompiler.md)

## Constructors

### Constructor

> **new DefaultQueryCompiler**(): `DefaultQueryCompiler`

#### Returns

`DefaultQueryCompiler`

#### Inherited from

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`constructor`](OperationNodeVisitor.md#constructor)

## Properties

### nodeStack

> `protected` `readonly` **nodeStack**: [`OperationNode`](../interfaces/OperationNode.md)[] = `[]`

Defined in: [operation-node/operation-node-visitor.ts:108](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L108)

#### Inherited from

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`nodeStack`](OperationNodeVisitor.md#nodestack)

## Accessors

### numParameters

#### Get Signature

> **get** `protected` **numParameters**(): `number`

Defined in: [query-compiler/default-query-compiler.ts:133](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L133)

##### Returns

`number`

***

### parentNode

#### Get Signature

> **get** `protected` **parentNode**(): [`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

Defined in: [operation-node/operation-node-visitor.ts:110](https://github.com/kysely-org/kysely/blob/master/src/operation-node/operation-node-visitor.ts#L110)

##### Returns

[`OperationNode`](../interfaces/OperationNode.md) \| `undefined`

#### Inherited from

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`parentNode`](OperationNodeVisitor.md#parentnode)

## Methods

### addParameter()

> `protected` **addParameter**(`parameter`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1891](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1891)

#### Parameters

##### parameter

`unknown`

#### Returns

`void`

***

### announcesNewColumnDataType()

> `protected` **announcesNewColumnDataType**(): `boolean`

Defined in: [query-compiler/default-query-compiler.ts:1938](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1938)

controls whether the dialect adds a "type" keyword before a column's new data
type in an ALTER TABLE statement.

#### Returns

`boolean`

***

### append()

> `protected` **append**(`str`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1826](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1826)

#### Parameters

##### str

`string`

#### Returns

`void`

***

### appendImmediateValue()

> `protected` **appendImmediateValue**(`value`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1895](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1895)

#### Parameters

##### value

`unknown`

#### Returns

`void`

***

### appendStringLiteral()

> `protected` **appendStringLiteral**(`value`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1909](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1909)

#### Parameters

##### value

`string`

#### Returns

`void`

***

### appendValue()

> `protected` **appendValue**(`parameter`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1830](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1830)

#### Parameters

##### parameter

`unknown`

#### Returns

`void`

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

***

### compileColumnAlterations()

> `protected` **compileColumnAlterations**(`columnAlterations`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1928](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1928)

#### Parameters

##### columnAlterations

readonly [`AlterTableColumnAlterationNode`](../types/AlterTableColumnAlterationNode.md)[]

#### Returns

`void`

***

### compileDistinctOn()

> `protected` **compileDistinctOn**(`expressions`): `void`

Defined in: [query-compiler/default-query-compiler.ts:274](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L274)

#### Parameters

##### expressions

readonly [`OperationNode`](../interfaces/OperationNode.md)[]

#### Returns

`void`

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

#### Implementation of

[`QueryCompiler`](../interfaces/QueryCompiler.md).[`compileQuery`](../interfaces/QueryCompiler.md#compilequery)

***

### compileUnwrappedIdentifier()

> `protected` **compileUnwrappedIdentifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:498](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L498)

#### Parameters

##### node

[`IdentifierNode`](../interfaces/IdentifierNode.md)

#### Returns

`void`

***

### getAutoIncrement()

> `protected` **getAutoIncrement**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:726](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L726)

#### Returns

`string`

***

### getCurrentParameterPlaceholder()

> `protected` **getCurrentParameterPlaceholder**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1843](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1843)

#### Returns

`string`

***

### getExplainOptionAssignment()

> `protected` **getExplainOptionAssignment**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1851](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1851)

#### Returns

`string`

***

### getExplainOptionsDelimiter()

> `protected` **getExplainOptionsDelimiter**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1855](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1855)

#### Returns

`string`

***

### getLeftExplainOptionsWrapper()

> `protected` **getLeftExplainOptionsWrapper**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1847](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1847)

#### Returns

`string`

***

### getLeftIdentifierWrapper()

> `protected` **getLeftIdentifierWrapper**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1835](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1835)

#### Returns

`string`

***

### getRightExplainOptionsWrapper()

> `protected` **getRightExplainOptionsWrapper**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1859](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1859)

#### Returns

`string`

***

### getRightIdentifierWrapper()

> `protected` **getRightIdentifierWrapper**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:1839](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1839)

#### Returns

`string`

***

### getSql()

> `protected` **getSql**(): `string`

Defined in: [query-compiler/default-query-compiler.ts:152](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L152)

#### Returns

`string`

***

### isMinusOperator()

> `protected` **isMinusOperator**(`node`): `node is OperatorNode`

Defined in: [query-compiler/default-query-compiler.ts:1612](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1612)

#### Parameters

##### node

[`OperationNode`](../interfaces/OperationNode.md)

#### Returns

`node is OperatorNode`

***

### sanitizeIdentifier()

> `protected` **sanitizeIdentifier**(`identifier`): `string`

Defined in: [query-compiler/default-query-compiler.ts:1863](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1863)

#### Parameters

##### identifier

`string`

#### Returns

`string`

***

### sanitizeJSONPathMemberValue()

> `protected` **sanitizeJSONPathMemberValue**(`value`): `string`

Defined in: [query-compiler/default-query-compiler.ts:1885](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1885)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### sanitizeStringLiteral()

> `protected` **sanitizeStringLiteral**(`value`): `string`

Defined in: [query-compiler/default-query-compiler.ts:1881](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1881)

#### Parameters

##### value

`string`

#### Returns

`string`

***

### sortSelectModifiers()

> `protected` **sortSelectModifiers**(`arr`): readonly [`SelectModifierNode`](../interfaces/SelectModifierNode.md)[]

Defined in: [query-compiler/default-query-compiler.ts:1915](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1915)

#### Parameters

##### arr

readonly [`SelectModifierNode`](../interfaces/SelectModifierNode.md)[]

#### Returns

readonly [`SelectModifierNode`](../interfaces/SelectModifierNode.md)[]

***

### visitAddColumn()

> `protected` **visitAddColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1213](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1213)

#### Parameters

##### node

[`AddColumnNode`](../interfaces/AddColumnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAddColumn`](OperationNodeVisitor.md#visitaddcolumn)

***

### visitAddConstraint()

> `protected` **visitAddConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1275](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1275)

#### Parameters

##### node

[`AddConstraintNode`](../interfaces/AddConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAddConstraint`](OperationNodeVisitor.md#visitaddconstraint)

***

### visitAddIndex()

> `protected` **visitAddIndex**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1765](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1765)

#### Parameters

##### node

[`AddIndexNode`](../interfaces/AddIndexNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAddIndex`](OperationNodeVisitor.md#visitaddindex)

***

### visitAddValue()

> `protected` **visitAddValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1481](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1481)

#### Parameters

##### node

[`AddValueNode`](../interfaces/AddValueNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAddValue`](OperationNodeVisitor.md#visitaddvalue)

***

### visitAggregateFunction()

> `protected` **visitAggregateFunction**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1532](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1532)

#### Parameters

##### node

[`AggregateFunctionNode`](../interfaces/AggregateFunctionNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAggregateFunction`](OperationNodeVisitor.md#visitaggregatefunction)

***

### visitAlias()

> `protected` **visitAlias**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:473](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L473)

#### Parameters

##### node

[`AliasNode`](../interfaces/AliasNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAlias`](OperationNodeVisitor.md#visitalias)

***

### visitAlterColumn()

> `protected` **visitAlterColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1234](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1234)

#### Parameters

##### node

[`AlterColumnNode`](../interfaces/AlterColumnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAlterColumn`](OperationNodeVisitor.md#visitaltercolumn)

***

### visitAlterTable()

> `protected` **visitAlterTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1173](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1173)

#### Parameters

##### node

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAlterTable`](OperationNodeVisitor.md#visitaltertable)

***

### visitAlterType()

> `protected` **visitAlterType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1463](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1463)

#### Parameters

##### node

[`AlterTypeNode`](../interfaces/AlterTypeNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAlterType`](OperationNodeVisitor.md#visitaltertype)

***

### visitAnd()

> `protected` **visitAnd**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:508](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L508)

#### Parameters

##### node

[`AndNode`](../interfaces/AndNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitAnd`](OperationNodeVisitor.md#visitand)

***

### visitBinaryOperation()

> `protected` **visitBinaryOperation**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1594](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1594)

#### Parameters

##### node

[`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitBinaryOperation`](OperationNodeVisitor.md#visitbinaryoperation)

***

### visitCase()

> `protected` **visitCase**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1628](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1628)

#### Parameters

##### node

[`CaseNode`](../interfaces/CaseNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCase`](OperationNodeVisitor.md#visitcase)

***

### visitCast()

> `protected` **visitCast**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1790](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1790)

#### Parameters

##### node

[`CastNode`](../interfaces/CastNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCast`](OperationNodeVisitor.md#visitcast)

***

### visitCheckConstraint()

> `protected` **visitCheckConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1091](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1091)

#### Parameters

##### node

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCheckConstraint`](OperationNodeVisitor.md#visitcheckconstraint)

***

### visitCollate()

> `protected` **visitCollate**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1821](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1821)

#### Parameters

##### node

[`CollateNode`](../interfaces/CollateNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCollate`](OperationNodeVisitor.md#visitcollate)

***

### visitColumn()

> `protected` **visitColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:270](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L270)

#### Parameters

##### node

[`ColumnNode`](../interfaces/ColumnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitColumn`](OperationNodeVisitor.md#visitcolumn)

***

### visitColumnDefinition()

> `protected` **visitColumnDefinition**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:656](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L656)

#### Parameters

##### node

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitColumnDefinition`](OperationNodeVisitor.md#visitcolumndefinition)

***

### visitColumnUpdate()

> `protected` **visitColumnUpdate**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:895](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L895)

#### Parameters

##### node

[`ColumnUpdateNode`](../interfaces/ColumnUpdateNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitColumnUpdate`](OperationNodeVisitor.md#visitcolumnupdate)

***

### visitCommonTableExpression()

> `protected` **visitCommonTableExpression**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1144](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1144)

#### Parameters

##### node

[`CommonTableExpressionNode`](../interfaces/CommonTableExpressionNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCommonTableExpression`](OperationNodeVisitor.md#visitcommontableexpression)

***

### visitCommonTableExpressionName()

> `protected` **visitCommonTableExpressionName**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1161](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1161)

#### Parameters

##### node

[`CommonTableExpressionNameNode`](../interfaces/CommonTableExpressionNameNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCommonTableExpressionName`](OperationNodeVisitor.md#visitcommontableexpressionname)

***

### visitCreateIndex()

> `protected` **visitCreateIndex**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:950](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L950)

#### Parameters

##### node

[`CreateIndexNode`](../interfaces/CreateIndexNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCreateIndex`](OperationNodeVisitor.md#visitcreateindex)

***

### visitCreateSchema()

> `protected` **visitCreateSchema**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1010](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1010)

#### Parameters

##### node

[`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCreateSchema`](OperationNodeVisitor.md#visitcreateschema)

***

### visitCreateTable()

> `protected` **visitCreateTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:610](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L610)

#### Parameters

##### node

[`CreateTableNode`](../interfaces/CreateTableNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCreateTable`](OperationNodeVisitor.md#visitcreatetable)

***

### visitCreateType()

> `protected` **visitCreateType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1434](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1434)

#### Parameters

##### node

[`CreateTypeNode`](../interfaces/CreateTypeNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCreateType`](OperationNodeVisitor.md#visitcreatetype)

***

### visitCreateView()

> `protected` **visitCreateView**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1314](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1314)

#### Parameters

##### node

[`CreateViewNode`](../interfaces/CreateViewNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitCreateView`](OperationNodeVisitor.md#visitcreateview)

***

### visitDataType()

> `protected` **visitDataType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:768](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L768)

#### Parameters

##### node

[`DataTypeNode`](../interfaces/DataTypeNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDataType`](OperationNodeVisitor.md#visitdatatype)

***

### visitDefaultInsertValue()

> `protected` **visitDefaultInsertValue**(`_`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1528](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1528)

#### Parameters

##### \_

[`DefaultInsertValueNode`](../interfaces/DefaultInsertValueNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDefaultInsertValue`](OperationNodeVisitor.md#visitdefaultinsertvalue)

***

### visitDefaultValue()

> `protected` **visitDefaultValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1416](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1416)

#### Parameters

##### node

[`DefaultValueNode`](../interfaces/DefaultValueNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDefaultValue`](OperationNodeVisitor.md#visitdefaultvalue)

***

### visitDeleteQuery()

> `protected` **visitDeleteQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:394](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L394)

#### Parameters

##### node

[`DeleteQueryNode`](../interfaces/DeleteQueryNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDeleteQuery`](OperationNodeVisitor.md#visitdeletequery)

***

### visitDropColumn()

> `protected` **visitDropColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1225](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1225)

#### Parameters

##### node

[`DropColumnNode`](../interfaces/DropColumnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropColumn`](OperationNodeVisitor.md#visitdropcolumn)

***

### visitDropConstraint()

> `protected` **visitDropConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1280](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1280)

#### Parameters

##### node

[`DropConstraintNode`](../interfaces/DropConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropConstraint`](OperationNodeVisitor.md#visitdropconstraint)

***

### visitDropIndex()

> `protected` **visitDropIndex**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:991](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L991)

#### Parameters

##### node

[`DropIndexNode`](../interfaces/DropIndexNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropIndex`](OperationNodeVisitor.md#visitdropindex)

***

### visitDropSchema()

> `protected` **visitDropSchema**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1020](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1020)

#### Parameters

##### node

[`DropSchemaNode`](../interfaces/DropSchemaNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropSchema`](OperationNodeVisitor.md#visitdropschema)

***

### visitDropTable()

> `protected` **visitDropTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:748](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L748)

#### Parameters

##### node

[`DropTableNode`](../interfaces/DropTableNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropTable`](OperationNodeVisitor.md#visitdroptable)

***

### visitDropType()

> `protected` **visitDropType**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1444](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1444)

#### Parameters

##### node

[`DropTypeNode`](../interfaces/DropTypeNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropType`](OperationNodeVisitor.md#visitdroptype)

***

### visitDropView()

> `protected` **visitDropView**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1368](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1368)

#### Parameters

##### node

[`DropViewNode`](../interfaces/DropViewNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitDropView`](OperationNodeVisitor.md#visitdropview)

***

### visitExplain()

> `protected` **visitExplain**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1503](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1503)

#### Parameters

##### node

[`ExplainNode`](../interfaces/ExplainNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitExplain`](OperationNodeVisitor.md#visitexplain)

***

### visitFetch()

> `protected` **visitFetch**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1798](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1798)

#### Parameters

##### node

[`FetchNode`](../interfaces/FetchNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitFetch`](OperationNodeVisitor.md#visitfetch)

***

### visitForeignKeyConstraint()

> `protected` **visitForeignKeyConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1103](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1103)

#### Parameters

##### node

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitForeignKeyConstraint`](OperationNodeVisitor.md#visitforeignkeyconstraint)

***

### visitFrom()

> `protected` **visitFrom**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:261](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L261)

#### Parameters

##### node

[`FromNode`](../interfaces/FromNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitFrom`](OperationNodeVisitor.md#visitfrom)

***

### visitFunction()

> `protected` **visitFunction**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1621](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1621)

#### Parameters

##### node

[`FunctionNode`](../interfaces/FunctionNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitFunction`](OperationNodeVisitor.md#visitfunction)

***

### visitGenerated()

> `protected` **visitGenerated**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1388](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1388)

#### Parameters

##### node

[`GeneratedNode`](../interfaces/GeneratedNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitGenerated`](OperationNodeVisitor.md#visitgenerated)

***

### visitGroupBy()

> `protected` **visitGroupBy**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:796](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L796)

#### Parameters

##### node

[`GroupByNode`](../interfaces/GroupByNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitGroupBy`](OperationNodeVisitor.md#visitgroupby)

***

### visitGroupByItem()

> `protected` **visitGroupByItem**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:801](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L801)

#### Parameters

##### node

[`GroupByItemNode`](../interfaces/GroupByItemNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitGroupByItem`](OperationNodeVisitor.md#visitgroupbyitem)

***

### visitHaving()

> `protected` **visitHaving**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:300](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L300)

#### Parameters

##### node

[`HavingNode`](../interfaces/HavingNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitHaving`](OperationNodeVisitor.md#visithaving)

***

### visitIdentifier()

> `protected` **visitIdentifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:492](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L492)

#### Parameters

##### node

[`IdentifierNode`](../interfaces/IdentifierNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitIdentifier`](OperationNodeVisitor.md#visitidentifier)

***

### visitInsertQuery()

> `protected` **visitInsertQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:305](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L305)

#### Parameters

##### node

[`InsertQueryNode`](../interfaces/InsertQueryNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitInsertQuery`](OperationNodeVisitor.md#visitinsertquery)

***

### visitJoin()

> `protected` **visitJoin**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:563](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L563)

#### Parameters

##### node

[`JoinNode`](../interfaces/JoinNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitJoin`](OperationNodeVisitor.md#visitjoin)

***

### visitJSONOperatorChain()

> `protected` **visitJSONOperatorChain**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1699](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1699)

#### Parameters

##### node

[`JSONOperatorChainNode`](../interfaces/JSONOperatorChainNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitJSONOperatorChain`](OperationNodeVisitor.md#visitjsonoperatorchain)

***

### visitJSONPath()

> `protected` **visitJSONPath**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1669](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1669)

#### Parameters

##### node

[`JSONPathNode`](../interfaces/JSONPathNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitJSONPath`](OperationNodeVisitor.md#visitjsonpath)

***

### visitJSONPathLeg()

> `protected` **visitJSONPathLeg**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1683](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1683)

#### Parameters

##### node

[`JSONPathLegNode`](../interfaces/JSONPathLegNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitJSONPathLeg`](OperationNodeVisitor.md#visitjsonpathleg)

***

### visitJSONReference()

> `protected` **visitJSONReference**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1664](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1664)

#### Parameters

##### node

[`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitJSONReference`](OperationNodeVisitor.md#visitjsonreference)

***

### visitLimit()

> `protected` **visitLimit**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:901](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L901)

#### Parameters

##### node

[`LimitNode`](../interfaces/LimitNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitLimit`](OperationNodeVisitor.md#visitlimit)

***

### visitList()

> `protected` **visitList**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1130](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1130)

#### Parameters

##### node

[`ListNode`](../interfaces/ListNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitList`](OperationNodeVisitor.md#visitlist)

***

### visitMatched()

> `protected` **visitMatched**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1753](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1753)

#### Parameters

##### node

[`MatchedNode`](../interfaces/MatchedNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitMatched`](OperationNodeVisitor.md#visitmatched)

***

### visitMergeQuery()

> `protected` **visitMergeQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1711](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1711)

#### Parameters

##### node

[`MergeQueryNode`](../interfaces/MergeQueryNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitMergeQuery`](OperationNodeVisitor.md#visitmergequery)

***

### visitModifyColumn()

> `protected` **visitModifyColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1270](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1270)

#### Parameters

##### node

[`ModifyColumnNode`](../interfaces/ModifyColumnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitModifyColumn`](OperationNodeVisitor.md#visitmodifycolumn)

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

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitNode`](OperationNodeVisitor.md#visitnode)

***

### visitOffset()

> `protected` **visitOffset**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:906](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L906)

#### Parameters

##### node

[`OffsetNode`](../interfaces/OffsetNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOffset`](OperationNodeVisitor.md#visitoffset)

***

### visitOn()

> `protected` **visitOn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:574](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L574)

#### Parameters

##### node

[`OnNode`](../interfaces/OnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOn`](OperationNodeVisitor.md#visiton)

***

### visitOnConflict()

> `protected` **visitOnConflict**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:911](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L911)

#### Parameters

##### node

[`OnConflictNode`](../interfaces/OnConflictNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOnConflict`](OperationNodeVisitor.md#visitonconflict)

***

### visitOnDuplicateKey()

> `protected` **visitOnDuplicateKey**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:945](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L945)

#### Parameters

##### node

[`OnDuplicateKeyNode`](../interfaces/OnDuplicateKeyNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOnDuplicateKey`](OperationNodeVisitor.md#visitonduplicatekey)

***

### visitOperator()

> `protected` **visitOperator**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:591](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L591)

#### Parameters

##### node

[`OperatorNode`](../interfaces/OperatorNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOperator`](OperationNodeVisitor.md#visitoperator)

***

### visitOr()

> `protected` **visitOr**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:514](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L514)

#### Parameters

##### node

[`OrNode`](../interfaces/OrNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOr`](OperationNodeVisitor.md#visitor)

***

### visitOrAction()

> `protected` **visitOrAction**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1817](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1817)

#### Parameters

##### node

[`OrActionNode`](../interfaces/OrActionNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOrAction`](OperationNodeVisitor.md#visitoraction)

***

### visitOrderBy()

> `protected` **visitOrderBy**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:772](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L772)

#### Parameters

##### node

[`OrderByNode`](../interfaces/OrderByNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOrderBy`](OperationNodeVisitor.md#visitorderby)

***

### visitOrderByItem()

> `protected` **visitOrderByItem**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:777](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L777)

#### Parameters

##### node

[`OrderByItemNode`](../interfaces/OrderByItemNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOrderByItem`](OperationNodeVisitor.md#visitorderbyitem)

***

### visitOutput()

> `protected` **visitOutput**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1804](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1804)

#### Parameters

##### node

[`OutputNode`](../interfaces/OutputNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOutput`](OperationNodeVisitor.md#visitoutput)

***

### visitOver()

> `protected` **visitOver**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1567](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1567)

#### Parameters

##### node

[`OverNode`](../interfaces/OverNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitOver`](OperationNodeVisitor.md#visitover)

***

### visitParens()

> `protected` **visitParens**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:557](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L557)

#### Parameters

##### node

[`ParensNode`](../interfaces/ParensNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitParens`](OperationNodeVisitor.md#visitparens)

***

### visitPartitionBy()

> `protected` **visitPartitionBy**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1585](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1585)

#### Parameters

##### node

[`PartitionByNode`](../interfaces/PartitionByNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitPartitionBy`](OperationNodeVisitor.md#visitpartitionby)

***

### visitPartitionByItem()

> `protected` **visitPartitionByItem**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1590](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1590)

#### Parameters

##### node

[`PartitionByItemNode`](../interfaces/PartitionByItemNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitPartitionByItem`](OperationNodeVisitor.md#visitpartitionbyitem)

***

### visitPrimaryKeyConstraint()

> `protected` **visitPrimaryKeyConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1034](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1034)

#### Parameters

##### node

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitPrimaryKeyConstraint`](OperationNodeVisitor.md#visitprimarykeyconstraint)

***

### visitPrimitiveValueList()

> `protected` **visitPrimitiveValueList**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:540](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L540)

#### Parameters

##### node

[`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitPrimitiveValueList`](OperationNodeVisitor.md#visitprimitivevaluelist)

***

### visitRaw()

> `protected` **visitRaw**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:579](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L579)

#### Parameters

##### node

[`RawNode`](../interfaces/RawNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitRaw`](OperationNodeVisitor.md#visitraw)

***

### visitReference()

> `protected` **visitReference**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:479](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L479)

#### Parameters

##### node

[`ReferenceNode`](../interfaces/ReferenceNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitReference`](OperationNodeVisitor.md#visitreference)

***

### visitReferences()

> `protected` **visitReferences**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:730](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L730)

#### Parameters

##### node

[`ReferencesNode`](../interfaces/ReferencesNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitReferences`](OperationNodeVisitor.md#visitreferences)

***

### visitRefreshMaterializedView()

> `protected` **visitRefreshMaterializedView**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1350](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1350)

#### Parameters

##### node

[`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitRefreshMaterializedView`](OperationNodeVisitor.md#visitrefreshmaterializedview)

***

### visitRenameColumn()

> `protected` **visitRenameColumn**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1218](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1218)

#### Parameters

##### node

[`RenameColumnNode`](../interfaces/RenameColumnNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitRenameColumn`](OperationNodeVisitor.md#visitrenamecolumn)

***

### visitRenameConstraint()

> `protected` **visitRenameConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1296](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1296)

#### Parameters

##### node

[`RenameConstraintNode`](../interfaces/RenameConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitRenameConstraint`](OperationNodeVisitor.md#visitrenameconstraint)

***

### visitRenameValue()

> `protected` **visitRenameValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1496](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1496)

#### Parameters

##### node

[`RenameValueNode`](../interfaces/RenameValueNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitRenameValue`](OperationNodeVisitor.md#visitrenamevalue)

***

### visitReturning()

> `protected` **visitReturning**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:468](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L468)

#### Parameters

##### node

[`ReturningNode`](../interfaces/ReturningNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitReturning`](OperationNodeVisitor.md#visitreturning)

***

### visitSchemableIdentifier()

> `protected` **visitSchemableIdentifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:599](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L599)

#### Parameters

##### node

[`SchemableIdentifierNode`](../interfaces/SchemableIdentifierNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitSchemableIdentifier`](OperationNodeVisitor.md#visitschemableidentifier)

***

### visitSelectAll()

> `protected` **visitSelectAll**(`_`): `void`

Defined in: [query-compiler/default-query-compiler.ts:488](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L488)

#### Parameters

##### \_

[`SelectAllNode`](../interfaces/SelectAllNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitSelectAll`](OperationNodeVisitor.md#visitselectall)

***

### visitSelection()

> `protected` **visitSelection**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:266](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L266)

#### Parameters

##### node

[`SelectionNode`](../interfaces/SelectionNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitSelection`](OperationNodeVisitor.md#visitselection)

***

### visitSelectModifier()

> `protected` **visitSelectModifier**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1421](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1421)

#### Parameters

##### node

[`SelectModifierNode`](../interfaces/SelectModifierNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitSelectModifier`](OperationNodeVisitor.md#visitselectmodifier)

***

### visitSelectQuery()

> `protected` **visitSelectQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:156](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L156)

#### Parameters

##### node

[`SelectQueryNode`](../interfaces/SelectQueryNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitSelectQuery`](OperationNodeVisitor.md#visitselectquery)

***

### visitSetOperation()

> `protected` **visitSetOperation**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1303](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1303)

#### Parameters

##### node

[`SetOperationNode`](../interfaces/SetOperationNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitSetOperation`](OperationNodeVisitor.md#visitsetoperation)

***

### visitTable()

> `protected` **visitTable**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:595](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L595)

#### Parameters

##### node

[`TableNode`](../interfaces/TableNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitTable`](OperationNodeVisitor.md#visittable)

***

### visitTop()

> `protected` **visitTop**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1809](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1809)

#### Parameters

##### node

[`TopNode`](../interfaces/TopNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitTop`](OperationNodeVisitor.md#visittop)

***

### visitTuple()

> `protected` **visitTuple**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:534](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L534)

#### Parameters

##### node

[`TupleNode`](../interfaces/TupleNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitTuple`](OperationNodeVisitor.md#visittuple)

***

### visitUnaryOperation()

> `protected` **visitUnaryOperation**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1602](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1602)

#### Parameters

##### node

[`UnaryOperationNode`](../interfaces/UnaryOperationNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitUnaryOperation`](OperationNodeVisitor.md#visitunaryoperation)

***

### visitUniqueConstraint()

> `protected` **visitUniqueConstraint**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1071](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1071)

#### Parameters

##### node

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitUniqueConstraint`](OperationNodeVisitor.md#visituniqueconstraint)

***

### visitUpdateQuery()

> `protected` **visitUpdateQuery**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:805](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L805)

#### Parameters

##### node

[`UpdateQueryNode`](../interfaces/UpdateQueryNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitUpdateQuery`](OperationNodeVisitor.md#visitupdatequery)

***

### visitUsing()

> `protected` **visitUsing**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1616](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1616)

#### Parameters

##### node

[`UsingNode`](../interfaces/UsingNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitUsing`](OperationNodeVisitor.md#visitusing)

***

### visitValue()

> `protected` **visitValue**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:520](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L520)

#### Parameters

##### node

[`ValueNode`](../interfaces/ValueNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitValue`](OperationNodeVisitor.md#visitvalue)

***

### visitValueList()

> `protected` **visitValueList**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:528](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L528)

#### Parameters

##### node

[`ValueListNode`](../interfaces/ValueListNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitValueList`](OperationNodeVisitor.md#visitvaluelist)

***

### visitValues()

> `protected` **visitValues**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:389](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L389)

#### Parameters

##### node

[`ValuesNode`](../interfaces/ValuesNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitValues`](OperationNodeVisitor.md#visitvalues)

***

### visitWhen()

> `protected` **visitWhen**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1653](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1653)

#### Parameters

##### node

[`WhenNode`](../interfaces/WhenNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitWhen`](OperationNodeVisitor.md#visitwhen)

***

### visitWhere()

> `protected` **visitWhere**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:295](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L295)

#### Parameters

##### node

[`WhereNode`](../interfaces/WhereNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitWhere`](OperationNodeVisitor.md#visitwhere)

***

### visitWith()

> `protected` **visitWith**(`node`): `void`

Defined in: [query-compiler/default-query-compiler.ts:1134](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/default-query-compiler.ts#L1134)

#### Parameters

##### node

[`WithNode`](../interfaces/WithNode.md)

#### Returns

`void`

#### Overrides

[`OperationNodeVisitor`](OperationNodeVisitor.md).[`visitWith`](OperationNodeVisitor.md#visitwith)
