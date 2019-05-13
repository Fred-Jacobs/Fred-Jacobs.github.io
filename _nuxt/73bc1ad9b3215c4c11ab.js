(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{937:function(e,t,n){"use strict";n.r(t);var o,r,c=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=this._defaults.getWorkerMaxIdleTime(),t=Date.now()-this._lastUsedTime;e>0&&t>e&&this._stopWorker()}},e.prototype._getClient=function(){var e=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var p=this._worker.getProxy();this._defaults.getEagerModelSync()&&(p=p.then(function(t){return e._worker.withSyncedResources(monaco.editor.getModels().filter(function(t){return t.getModeId()===e._modeId}).map(function(e){return e.uri}))})),this._client=p}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e})},e}(),l=(o=function(e,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])})(e,b)},function(e,b){function t(){this.constructor=e}o(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),m=monaco.Uri,f=monaco.Promise;function d(e,t){if("string"==typeof e)return e;for(var n=e,o="",r=0;n;){if(r){o+=t;for(var i=0;i<r;i++)o+="  "}o+=n.messageText,r++,n=n.next}return o}function h(e){return e?e.map(function(e){return e.text}).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(r||(r={}));var v=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,span){var t=this._offsetToPosition(e,span.start),n=this._offsetToPosition(e,span.start+span.length);return{startLineNumber:t.lineNumber,startColumn:t.column,endLineNumber:n.lineNumber,endColumn:n.column}},e}(),_=function(e){function t(t,n,o){var r=e.call(this,o)||this;r._defaults=t,r._selector=n,r._disposables=[],r._listener=Object.create(null);var c=function(e){if(e.getModeId()===n){var t,o=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri)},500)});r._listener[e.uri.toString()]={dispose:function(){o.dispose(),clearTimeout(t)}},r._doValidate(e.uri)}},l=function(e){monaco.editor.setModelMarkers(e,r._selector,[]);var t=e.uri.toString();r._listener[t]&&(r._listener[t].dispose(),delete r._listener[t])};return r._disposables.push(monaco.editor.onDidCreateModel(c)),r._disposables.push(monaco.editor.onWillDisposeModel(l)),r._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){l(e.model),c(e.model)})),r._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];l(n)}}}),r._disposables.push(r._defaults.onDidChange(function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];l(n),c(n)}})),monaco.editor.getModels().forEach(c),r}return l(t,e),t.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},t.prototype._doValidate=function(e){var t=this;this._worker(e).then(function(n){if(!monaco.editor.getModel(e))return null;var o=[],r=t._defaults.getDiagnosticsOptions(),c=r.noSyntaxValidation,l=r.noSemanticValidation;return c||o.push(n.getSyntacticDiagnostics(e.toString())),l||o.push(n.getSemanticDiagnostics(e.toString())),f.join(o)}).then(function(n){if(!n||!monaco.editor.getModel(e))return null;var o=n.reduce(function(p,e){return e.concat(p)},[]).map(function(n){return t._convertDiagnostics(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t._selector,o)}).then(void 0,function(e){console.error(e)})},t.prototype._convertDiagnostics=function(e,t){var n=this._offsetToPosition(e,t.start),o=n.lineNumber,r=n.column,c=this._offsetToPosition(e,t.start+t.length),l=c.lineNumber,m=c.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:o,startColumn:r,endLineNumber:l,endColumn:m,message:d(t.messageText,"\n")}},t}(v),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,o,r){e.getWordUntilPosition(n);var c=e.uri,l=this._positionToOffset(c,n);return this._worker(c).then(function(e){return e.getCompletionsAtPosition(c.toString(),l)}).then(function(e){if(e)return{suggestions:e.entries.map(function(e){return{uri:c,position:n,label:e.name,insertText:e.name,sortText:e.sortText,kind:t.convertKind(e.kind)}})}})},t.prototype.resolveCompletionItem=function(e,n,o,r){var c=this,l=o,m=l.uri,f=l.position;return this._worker(m).then(function(e){return e.getCompletionEntryDetails(m.toString(),c._positionToOffset(m,f),l.label)}).then(function(details){return details?{uri:m,position:f,label:details.name,kind:t.convertKind(details.kind),detail:h(details.displayParts),documentation:{value:h(details.documentation)}}:l})},t.convertKind=function(e){switch(e){case P.primitiveType:case P.keyword:return monaco.languages.CompletionItemKind.Keyword;case P.variable:case P.localVariable:return monaco.languages.CompletionItemKind.Variable;case P.memberVariable:case P.memberGetAccessor:case P.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case P.function:case P.memberFunction:case P.constructSignature:case P.callSignature:case P.indexSignature:return monaco.languages.CompletionItemKind.Function;case P.enum:return monaco.languages.CompletionItemKind.Enum;case P.module:return monaco.languages.CompletionItemKind.Module;case P.class:return monaco.languages.CompletionItemKind.Class;case P.interface:return monaco.languages.CompletionItemKind.Interface;case P.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},t}(v),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return l(t,e),t.prototype.provideSignatureHelp=function(e,t,n){var o=this,r=e.uri;return this._worker(r).then(function(e){return e.getSignatureHelpItems(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]};return e.items.forEach(function(e){var n={label:"",documentation:null,parameters:[]};n.label+=h(e.prefixDisplayParts),e.parameters.forEach(function(p,i,a){var label=h(p.displayParts),t={label:label,documentation:h(p.documentation)};n.label+=label,n.parameters.push(t),i<a.length-1&&(n.label+=h(e.separatorDisplayParts))}),n.label+=h(e.suffixDisplayParts),t.signatures.push(n)}),t}})},t}(v),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideHover=function(e,t,n){var o=this,r=e.uri;return this._worker(r).then(function(e){return e.getQuickInfoAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e){var t=h(e.documentation),n=e.tags?e.tags.map(function(e){var label="*@"+e.name+"*";return e.text?label+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):label}).join("  \n\n"):"",c=h(e.displayParts);return{range:o._textSpanToRange(r,e.textSpan),contents:[{value:"```js\n"+c+"\n```\n"},{value:t+(n?"\n\n"+n:"")}]}}})},t}(v),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){var o=this,r=e.uri;return this._worker(r).then(function(e){return e.getOccurrencesAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e)return e.map(function(e){return{range:o._textSpanToRange(r,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})})},t}(v),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDefinition=function(e,t,n){var o=this,r=e.uri;return this._worker(r).then(function(e){return e.getDefinitionAtPosition(r.toString(),o._positionToOffset(r,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var c=r[n],l=m.parse(c.fileName);monaco.editor.getModel(l)&&t.push({uri:l,range:o._textSpanToRange(l,c.textSpan)})}return t}})},t}(v),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideReferences=function(e,t,n,o){var r=this,c=e.uri;return this._worker(c).then(function(e){return e.getReferencesAtPosition(c.toString(),r._positionToOffset(c,t))}).then(function(e){if(e){for(var t=[],n=0,o=e;n<o.length;n++){var c=o[n],l=m.parse(c.fileName);monaco.editor.getModel(l)&&t.push({uri:l,range:r._textSpanToRange(l,c.textSpan)})}return t}})},t}(v),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentSymbols=function(e,t){var n=this,o=e.uri;return this._worker(o).then(function(e){return e.getNavigationBarItems(o.toString())}).then(function(e){if(e){var t=function(e,r,c){var l={name:r.text,detail:"",kind:x[r.kind]||monaco.languages.SymbolKind.Variable,range:n._textSpanToRange(o,r.spans[0]),selectionRange:n._textSpanToRange(o,r.spans[0]),containerName:c};if(r.childItems&&r.childItems.length>0)for(var m=0,f=r.childItems;m<f.length;m++){var d=f[m];t(e,d,l.name)}e.push(l)},r=[];return e.forEach(function(e){return t(r,e)}),r}})},t}(v),P=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),x=Object.create(null);x[P.module]=monaco.languages.SymbolKind.Module,x[P.class]=monaco.languages.SymbolKind.Class,x[P.enum]=monaco.languages.SymbolKind.Enum,x[P.interface]=monaco.languages.SymbolKind.Interface,x[P.memberFunction]=monaco.languages.SymbolKind.Method,x[P.memberVariable]=monaco.languages.SymbolKind.Property,x[P.memberGetAccessor]=monaco.languages.SymbolKind.Property,x[P.memberSetAccessor]=monaco.languages.SymbolKind.Property,x[P.variable]=monaco.languages.SymbolKind.Variable,x[P.const]=monaco.languages.SymbolKind.Variable,x[P.localVariable]=monaco.languages.SymbolKind.Variable,x[P.variable]=monaco.languages.SymbolKind.Variable,x[P.function]=monaco.languages.SymbolKind.Function,x[P.localFunction]=monaco.languages.SymbolKind.Function;var O,K,D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:r.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(v),A=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,o){var r=this,c=e.uri;return this._worker(c).then(function(e){return e.getFormattingEditsForRange(c.toString(),r._positionToOffset(c,{lineNumber:t.startLineNumber,column:t.startColumn}),r._positionToOffset(c,{lineNumber:t.endLineNumber,column:t.endColumn}),D._convertOptions(n))}).then(function(e){if(e)return e.map(function(e){return r._convertTextChanges(c,e)})})},t}(D),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,o,r){var c=this,l=e.uri;return this._worker(l).then(function(e){return e.getFormattingEditsAfterKeystroke(l.toString(),c._positionToOffset(l,t),n,D._convertOptions(o))}).then(function(e){if(e)return e.map(function(e){return c._convertTextChanges(l,e)})})},t}(D);function M(e){K=V(e,"typescript")}function N(e){O=V(e,"javascript")}function E(){return new monaco.Promise(function(e,t){if(!O)return t("JavaScript not registered!");e(O)})}function R(){return new monaco.Promise(function(e,t){if(!K)return t("TypeScript not registered!");e(K)})}function V(e,t){var n=new c(t,e),o=function(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return n.getLanguageServiceWorker.apply(n,[e].concat(t))};return monaco.languages.registerCompletionItemProvider(t,new y(o)),monaco.languages.registerSignatureHelpProvider(t,new S(o)),monaco.languages.registerHoverProvider(t,new w(o)),monaco.languages.registerDocumentHighlightProvider(t,new k(o)),monaco.languages.registerDefinitionProvider(t,new T(o)),monaco.languages.registerReferenceProvider(t,new I(o)),monaco.languages.registerDocumentSymbolProvider(t,new C(o)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new A(o)),monaco.languages.registerOnTypeFormattingEditProvider(t,new F(o)),new _(e,t,o),o}n.d(t,"setupTypeScript",function(){return M}),n.d(t,"setupJavaScript",function(){return N}),n.d(t,"getJavaScriptWorker",function(){return E}),n.d(t,"getTypeScriptWorker",function(){return R})}}]);