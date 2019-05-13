(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{936:function(e,t,n){"use strict";n.r(t);var r,o,c,d,f,l,h,m,v,_,y,k,w,x,C,E=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e})},e}();!function(e){e.create=function(line,e){return{line:line,character:e}},e.is=function(e){var t=e;return ee.objectLiteral(t)&&ee.number(t.line)&&ee.number(t.character)}}(r||(r={})),function(e){e.create=function(e,t,n,o){if(ee.number(e)&&ee.number(t)&&ee.number(n)&&ee.number(o))return{start:r.create(e,t),end:r.create(n,o)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+o+"]")},e.is=function(e){var t=e;return ee.objectLiteral(t)&&r.is(t.start)&&r.is(t.end)}}(o||(o={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return ee.defined(t)&&o.is(t.range)&&(ee.string(t.uri)||ee.undefined(t.uri))}}(c||(c={})),function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return ee.number(t.red)&&ee.number(t.green)&&ee.number(t.blue)&&ee.number(t.alpha)}}(d||(d={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return o.is(t.range)&&d.is(t.color)}}(f||(f={})),function(e){e.create=function(label,e,t){return{label:label,textEdit:e,additionalTextEdits:t}},e.is=function(e){var t=e;return ee.string(t.label)&&(ee.undefined(t.textEdit)||w.is(t))&&(ee.undefined(t.additionalTextEdits)||ee.typedArray(t.additionalTextEdits,w.is))}}(l||(l={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(h||(h={})),function(e){e.create=function(e,t,n,r,o){var c={startLine:e,endLine:t};return ee.defined(n)&&(c.startCharacter=n),ee.defined(r)&&(c.endCharacter=r),ee.defined(o)&&(c.kind=o),c},e.is=function(e){var t=e;return ee.number(t.startLine)&&ee.number(t.startLine)&&(ee.undefined(t.startCharacter)||ee.number(t.startCharacter))&&(ee.undefined(t.endCharacter)||ee.number(t.endCharacter))&&(ee.undefined(t.kind)||ee.string(t.kind))}}(m||(m={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return ee.defined(t)&&c.is(t.location)&&ee.string(t.message)}}(v||(v={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(_||(_={})),function(e){e.create=function(e,t,n,code,source,r){var o={range:e,message:t};return ee.defined(n)&&(o.severity=n),ee.defined(code)&&(o.code=code),ee.defined(source)&&(o.source=source),ee.defined(r)&&(o.relatedInformation=r),o},e.is=function(e){var t=e;return ee.defined(t)&&o.is(t.range)&&ee.string(t.message)&&(ee.number(t.severity)||ee.undefined(t.severity))&&(ee.number(t.code)||ee.string(t.code)||ee.undefined(t.code))&&(ee.string(t.source)||ee.undefined(t.source))&&(ee.undefined(t.relatedInformation)||ee.typedArray(t.relatedInformation,v.is))}}(y||(y={})),function(e){e.create=function(title,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r={title:title,command:e};return ee.defined(t)&&t.length>0&&(r.arguments=t),r},e.is=function(e){var t=e;return ee.defined(t)&&ee.string(t.title)&&ee.string(t.command)}}(k||(k={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return ee.objectLiteral(t)&&ee.string(t.newText)&&o.is(t.range)}}(w||(w={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return ee.defined(t)&&T.is(t.textDocument)&&Array.isArray(t.edits)}}(x||(x={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||ee.typedArray(t.documentChanges,x.is))}}(C||(C={}));var I,T,S,M,R,P,A,F,L,O,j,D,W,V,K,N,H,U=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(w.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(w.replace(e,t))},e.prototype.delete=function(e){this.edits.push(w.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new U(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new U(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(T.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:o=[]};this._workspaceEdit.documentChanges.push(n),r=new U(o),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var o=[];this._workspaceEdit.changes[e]=o,r=new U(o),this._textEditChanges[e]=r}return r}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return ee.defined(t)&&ee.string(t.uri)}}(I||(I={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return ee.defined(t)&&ee.string(t.uri)&&ee.number(t.version)}}(T||(T={})),function(e){e.create=function(e,t,n,text){return{uri:e,languageId:t,version:n,text:text}},e.is=function(e){var t=e;return ee.defined(t)&&ee.string(t.uri)&&ee.string(t.languageId)&&ee.number(t.version)&&ee.string(t.text)}}(S||(S={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(M||(M={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(M||(M={})),function(e){e.is=function(e){var t=e;return ee.objectLiteral(e)&&M.is(t.kind)&&ee.string(t.value)}}(R||(R={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(P||(P={})),function(e){e.PlainText=1,e.Snippet=2}(A||(A={})),function(e){e.create=function(label){return{label:label}}}(F||(F={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(L||(L={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return ee.string(t)||ee.objectLiteral(t)&&ee.string(t.language)&&ee.string(t.value)}}(O||(O={})),function(e){e.is=function(e){var t=e;return ee.objectLiteral(t)&&(R.is(t.contents)||O.is(t.contents)||ee.typedArray(t.contents,O.is))&&(void 0===e.range||o.is(e.range))}}(j||(j={})),function(e){e.create=function(label,e){return e?{label:label,documentation:e}:{label:label}}}(D||(D={})),function(e){e.create=function(label,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];var r={label:label};return ee.defined(e)&&(r.documentation=e),ee.defined(t)?r.parameters=t:r.parameters=[],r}}(W||(W={})),function(e){e.Text=1,e.Read=2,e.Write=3}(V||(V={})),function(e){e.create=function(e,t){var n={range:e};return ee.number(t)&&(n.kind=t),n}}(K||(K={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(N||(N={})),function(e){e.create=function(e,t,n,r,o){var c={name:e,kind:t,location:{uri:r,range:n}};return o&&(c.containerName=o),c}}(H||(H={}));var z,J,B,Q,$,G=function(){return function(){}}();!function(e){e.create=function(e,t,n,r,o,c){var d={name:e,detail:t,kind:n,range:r,selectionRange:o};return void 0!==c&&(d.children=c),d},e.is=function(e){var t=e;return t&&ee.string(t.name)&&ee.string(t.detail)&&ee.number(t.kind)&&o.is(t.range)&&o.is(t.selectionRange)&&(void 0===t.deprecated||ee.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))}}(G||(G={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(z||(z={})),function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return ee.defined(t)&&ee.typedArray(t.diagnostics,y.is)&&(void 0===t.only||ee.typedArray(t.only,ee.string))}}(J||(J={})),function(e){e.create=function(title,e,t){var n={title:title};return k.is(e)?n.command=e:n.edit=e,void 0!==t&&(n.kind=t),n},e.is=function(e){var t=e;return t&&ee.string(t.title)&&(void 0===t.diagnostics||ee.typedArray(t.diagnostics,y.is))&&(void 0===t.kind||ee.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||k.is(t.command))&&(void 0===t.edit||C.is(t.edit))}}(B||(B={})),function(e){e.create=function(e,data){var t={range:e};return ee.defined(data)&&(t.data=data),t},e.is=function(e){var t=e;return ee.defined(t)&&o.is(t.range)&&(ee.undefined(t.command)||k.is(t.command))}}(Q||(Q={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return ee.defined(t)&&ee.number(t.tabSize)&&ee.boolean(t.insertSpaces)}}($||($={}));var X=function(){return function(){}}();!function(e){e.create=function(e,t,data){return{range:e,target:t,data:data}},e.is=function(e){var t=e;return ee.defined(t)&&o.is(t.range)&&(ee.undefined(t.target)||ee.string(t.target))}}(X||(X={}));var Y,Z;!function(e){e.create=function(e,t,n,content){return new te(e,t,n,content)},e.is=function(e){var t=e;return!!(ee.defined(t)&&ee.string(t.uri)&&(ee.undefined(t.languageId)||ee.string(t.languageId))&&ee.number(t.lineCount)&&ee.func(t.getText)&&ee.func(t.positionAt)&&ee.func(t.offsetAt))},e.applyEdits=function(e,t){for(var text=e.getText(),n=function e(data,t){if(data.length<=1)return data;var p=data.length/2|0,n=data.slice(0,p),r=data.slice(p);e(n,t),e(r,t);for(var o=0,c=0,i=0;o<n.length&&c<r.length;){var d=t(n[o],r[c]);data[i++]=d<=0?n[o++]:r[c++]}for(;o<n.length;)data[i++]=n[o++];for(;c<r.length;)data[i++]=r[c++];return data}(t,function(a,b){var e=a.range.start.line-b.range.start.line;return 0===e?a.range.start.character-b.range.start.character:e}),r=text.length,i=n.length-1;i>=0;i--){var o=n[i],c=e.offsetAt(o.range.start),d=e.offsetAt(o.range.end);if(!(d<=r))throw new Error("Ovelapping edit");text=text.substring(0,c)+o.newText+text.substring(d,text.length),r=c}return text}}(Y||(Y={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(Z||(Z={}));var ee,te=function(){function e(e,t,n,content){this._uri=e,this._languageId=t,this._version=n,this._content=content,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],text=this._content,t=!0,i=0;i<text.length;i++){t&&(e.push(i),t=!1);var n=text.charAt(i);t="\r"===n||"\n"===n,"\r"===n&&i+1<text.length&&"\n"===text.charAt(i+1)&&i++}t&&text.length>0&&e.push(text.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,o=t.length;if(0===o)return r.create(0,e);for(;n<o;){var c=Math.floor((n+o)/2);t[c]>e?o=c:n=c+1}var line=n-1;return r.create(line,e-t[line])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(ee||(ee={}));var ne=monaco.Range,re=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},c=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(o)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){c(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){c(e.model),o(e.model)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(c(e),o(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(e){return code="number"==typeof(t=e).code?String(t.code):t.code,{severity:ie(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:code,source:t.source};var t,code});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t,r)})}).then(void 0,function(e){console.error(e)})},e}();function ie(e){switch(e){case _.Error:return monaco.MarkerSeverity.Error;case _.Warning:return monaco.MarkerSeverity.Warning;case _.Information:return monaco.MarkerSeverity.Info;case _.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function oe(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ae(e){if(e)return new ne(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ue(e){var t=monaco.languages.CompletionItemKind;switch(e){case P.Text:return t.Text;case P.Method:return t.Method;case P.Function:return t.Function;case P.Constructor:return t.Constructor;case P.Field:return t.Field;case P.Variable:return t.Variable;case P.Class:return t.Class;case P.Interface:return t.Interface;case P.Module:return t.Module;case P.Property:return t.Property;case P.Unit:return t.Unit;case P.Value:return t.Value;case P.Enum:return t.Enum;case P.Keyword:return t.Keyword;case P.Snippet:return t.Snippet;case P.Color:return t.Color;case P.File:return t.File;case P.Reference:return t.Reference}return t.Property}function se(e){if(e)return{range:ae(e.range),text:e.newText}}var ce=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n,r){e.getWordUntilPosition(t);var o=e.uri;return this._worker(o).then(function(e){return e.doComplete(o.toString(),oe(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:ue(e.kind)};return e.textEdit&&(t.range=ae(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(se)),e.insertTextFormat===A.Snippet&&(t.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:e.isIncomplete,suggestions:t}}})},e}();function de(e){var t=monaco.languages.DocumentHighlightKind;switch(e){case V.Read:return t.Read;case V.Write:return t.Write;case V.Text:return t.Text}return t.Text}var fe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),oe(t))}).then(function(e){if(e)return e.map(function(e){return{range:ae(e.range),kind:de(e.kind)}})})},e}(),le=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var n=e.uri;return this._worker(n).then(function(e){return e.findDocumentLinks(n.toString())}).then(function(e){if(e)return e.map(function(e){return{range:ae(e.range),url:e.target}})})},e}();function ge(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var he=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.format(r.toString(),null,ge(t)).then(function(e){if(e&&0!==e.length)return e.map(se)})})},e}(),pe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=e.uri;return this._worker(o).then(function(e){return e.format(o.toString(),function(e){if(e)return{start:oe(e.getStartPosition()),end:oe(e.getEndPosition())}}(t),ge(n)).then(function(e){if(e&&0!==e.length)return e.map(se)})})},e}(),me=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),t)}).then(function(e){if(e)return e.map(function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case h.Comment:return monaco.languages.FoldingRangeKind.Comment;case h.Imports:return monaco.languages.FoldingRangeKind.Imports;case h.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),t})})},e}();function ve(e){var t=new E(e),n=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new ce(n)),monaco.languages.registerDocumentHighlightProvider(r,new fe(n)),monaco.languages.registerLinkProvider(r,new le(n)),monaco.languages.registerFoldingRangeProvider(r,new me(n)),"html"===r&&(monaco.languages.registerDocumentFormattingEditProvider(r,new he(n)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new pe(n)),new re(r,n,e))}n.d(t,"setupMode",function(){return ve})}}]);