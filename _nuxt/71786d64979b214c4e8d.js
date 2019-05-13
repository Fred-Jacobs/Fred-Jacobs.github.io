(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{934:function(e,n,t){"use strict";t.r(n);var r,o,c,d,f,l,h,m,v,_,y,k,w,x,C,E,I,S,T,M=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then(function(n){e=n}).then(function(e){return n._worker.withSyncedResources(t)}).then(function(n){return e})},e}();!function(e){e.create=function(line,e){return{line:line,character:e}},e.is=function(e){var n=e;return ie.objectLiteral(n)&&ie.number(n.line)&&ie.number(n.character)}}(r||(r={})),function(e){e.create=function(e,n,t,o){if(ie.number(e)&&ie.number(n)&&ie.number(t)&&ie.number(o))return{start:r.create(e,n),end:r.create(t,o)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+o+"]")},e.is=function(e){var n=e;return ie.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}}(o||(o={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return ie.defined(n)&&o.is(n.range)&&(ie.string(n.uri)||ie.undefined(n.uri))}}(c||(c={})),function(e){e.create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},e.is=function(e){var n=e;return ie.defined(n)&&o.is(n.targetRange)&&ie.string(n.targetUri)&&(o.is(n.targetSelectionRange)||ie.undefined(n.targetSelectionRange))&&(o.is(n.originSelectionRange)||ie.undefined(n.originSelectionRange))}}(d||(d={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return ie.number(n.red)&&ie.number(n.green)&&ie.number(n.blue)&&ie.number(n.alpha)}}(f||(f={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return o.is(n.range)&&f.is(n.color)}}(l||(l={})),function(e){e.create=function(label,e,n){return{label:label,textEdit:e,additionalTextEdits:n}},e.is=function(e){var n=e;return ie.string(n.label)&&(ie.undefined(n.textEdit)||x.is(n))&&(ie.undefined(n.additionalTextEdits)||ie.typedArray(n.additionalTextEdits,x.is))}}(h||(h={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(m||(m={})),function(e){e.create=function(e,n,t,r,o){var c={startLine:e,endLine:n};return ie.defined(t)&&(c.startCharacter=t),ie.defined(r)&&(c.endCharacter=r),ie.defined(o)&&(c.kind=o),c},e.is=function(e){var n=e;return ie.number(n.startLine)&&ie.number(n.startLine)&&(ie.undefined(n.startCharacter)||ie.number(n.startCharacter))&&(ie.undefined(n.endCharacter)||ie.number(n.endCharacter))&&(ie.undefined(n.kind)||ie.string(n.kind))}}(v||(v={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return ie.defined(n)&&c.is(n.location)&&ie.string(n.message)}}(_||(_={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(y||(y={})),function(e){e.create=function(e,n,t,code,source,r){var o={range:e,message:n};return ie.defined(t)&&(o.severity=t),ie.defined(code)&&(o.code=code),ie.defined(source)&&(o.source=source),ie.defined(r)&&(o.relatedInformation=r),o},e.is=function(e){var n=e;return ie.defined(n)&&o.is(n.range)&&ie.string(n.message)&&(ie.number(n.severity)||ie.undefined(n.severity))&&(ie.number(n.code)||ie.string(n.code)||ie.undefined(n.code))&&(ie.string(n.source)||ie.undefined(n.source))&&(ie.undefined(n.relatedInformation)||ie.typedArray(n.relatedInformation,_.is))}}(k||(k={})),function(e){e.create=function(title,e){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var r={title:title,command:e};return ie.defined(n)&&n.length>0&&(r.arguments=n),r},e.is=function(e){var n=e;return ie.defined(n)&&ie.string(n.title)&&ie.string(n.command)}}(w||(w={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return ie.objectLiteral(n)&&ie.string(n.newText)&&o.is(n.range)}}(x||(x={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return ie.defined(n)&&F.is(n.textDocument)&&Array.isArray(n.edits)}}(C||(C={})),function(e){e.create=function(e,n){var t={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(t.options=n),t},e.is=function(e){var n=e;return n&&"create"===n.kind&&ie.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||ie.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||ie.boolean(n.options.ignoreIfExists)))}}(E||(E={})),function(e){e.create=function(e,n,t){var r={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),r},e.is=function(e){var n=e;return n&&"rename"===n.kind&&ie.string(n.oldUri)&&ie.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||ie.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||ie.boolean(n.options.ignoreIfExists)))}}(I||(I={})),function(e){e.create=function(e,n){var t={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(t.options=n),t},e.is=function(e){var n=e;return n&&"delete"===n.kind&&ie.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||ie.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||ie.boolean(n.options.ignoreIfNotExists)))}}(S||(S={})),function(e){e.is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every(function(e){return ie.string(e.kind)?E.is(e)||I.is(e)||S.is(e):C.is(e)}))}}(T||(T={}));var R,F,P,A,D,L,O,j,W,N,U,V,H,K,z,B,J,$=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(x.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(x.replace(e,n))},e.prototype.delete=function(e){this.edits.push(x.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){if(C.is(e)){var t=new $(e.edits);n._textEditChanges[e.textDocument.uri]=t}}):e.changes&&Object.keys(e.changes).forEach(function(t){var r=new $(e.changes[t]);n._textEditChanges[t]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(F.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n=e;if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:o=[]};this._workspaceEdit.documentChanges.push(t),r=new $(o),this._textEditChanges[n.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var o=[];this._workspaceEdit.changes[e]=o,r=new $(o),this._textEditChanges[e]=r}return r},e.prototype.createFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(E.create(e,n))},e.prototype.renameFile=function(e,n,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(I.create(e,n,t))},e.prototype.deleteFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(S.create(e,n))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return ie.defined(n)&&ie.string(n.uri)}}(R||(R={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return ie.defined(n)&&ie.string(n.uri)&&(null===n.version||ie.number(n.version))}}(F||(F={})),function(e){e.create=function(e,n,t,text){return{uri:e,languageId:n,version:t,text:text}},e.is=function(e){var n=e;return ie.defined(n)&&ie.string(n.uri)&&ie.string(n.languageId)&&ie.number(n.version)&&ie.string(n.text)}}(P||(P={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(A||(A={})),function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(A||(A={})),function(e){e.is=function(e){var n=e;return ie.objectLiteral(e)&&A.is(n.kind)&&ie.string(n.value)}}(D||(D={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(L||(L={})),function(e){e.PlainText=1,e.Snippet=2}(O||(O={})),function(e){e.create=function(label){return{label:label}}}(j||(j={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(W||(W={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return ie.string(n)||ie.objectLiteral(n)&&ie.string(n.language)&&ie.string(n.value)}}(N||(N={})),function(e){e.is=function(e){var n=e;return!!n&&ie.objectLiteral(n)&&(D.is(n.contents)||N.is(n.contents)||ie.typedArray(n.contents,N.is))&&(void 0===e.range||o.is(e.range))}}(U||(U={})),function(e){e.create=function(label,e){return e?{label:label,documentation:e}:{label:label}}}(V||(V={})),function(e){e.create=function(label,e){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var r={label:label};return ie.defined(e)&&(r.documentation=e),ie.defined(n)?r.parameters=n:r.parameters=[],r}}(H||(H={})),function(e){e.Text=1,e.Read=2,e.Write=3}(K||(K={})),function(e){e.create=function(e,n){var t={range:e};return ie.number(n)&&(t.kind=n),t}}(z||(z={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(B||(B={})),function(e){e.create=function(e,n,t,r,o){var c={name:e,kind:n,location:{uri:r,range:t}};return o&&(c.containerName=o),c}}(J||(J={}));var Q,G,X,Y,Z,ee=function(){return function(){}}();!function(e){e.create=function(e,n,t,r,o,c){var d={name:e,detail:n,kind:t,range:r,selectionRange:o};return void 0!==c&&(d.children=c),d},e.is=function(e){var n=e;return n&&ie.string(n.name)&&ie.number(n.kind)&&o.is(n.range)&&o.is(n.selectionRange)&&(void 0===n.detail||ie.string(n.detail))&&(void 0===n.deprecated||ie.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(ee||(ee={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(Q||(Q={})),function(e){e.create=function(e,n){var t={diagnostics:e};return null!=n&&(t.only=n),t},e.is=function(e){var n=e;return ie.defined(n)&&ie.typedArray(n.diagnostics,k.is)&&(void 0===n.only||ie.typedArray(n.only,ie.string))}}(G||(G={})),function(e){e.create=function(title,e,n){var t={title:title};return w.is(e)?t.command=e:t.edit=e,void 0!==n&&(t.kind=n),t},e.is=function(e){var n=e;return n&&ie.string(n.title)&&(void 0===n.diagnostics||ie.typedArray(n.diagnostics,k.is))&&(void 0===n.kind||ie.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||w.is(n.command))&&(void 0===n.edit||T.is(n.edit))}}(X||(X={})),function(e){e.create=function(e,data){var n={range:e};return ie.defined(data)&&(n.data=data),n},e.is=function(e){var n=e;return ie.defined(n)&&o.is(n.range)&&(ie.undefined(n.command)||w.is(n.command))}}(Y||(Y={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return ie.defined(n)&&ie.number(n.tabSize)&&ie.boolean(n.insertSpaces)}}(Z||(Z={}));var ne=function(){return function(){}}();!function(e){e.create=function(e,n,data){return{range:e,target:n,data:data}},e.is=function(e){var n=e;return ie.defined(n)&&o.is(n.range)&&(ie.undefined(n.target)||ie.string(n.target))}}(ne||(ne={}));var te,re;!function(e){e.create=function(e,n,t,content){return new oe(e,n,t,content)},e.is=function(e){var n=e;return!!(ie.defined(n)&&ie.string(n.uri)&&(ie.undefined(n.languageId)||ie.string(n.languageId))&&ie.number(n.lineCount)&&ie.func(n.getText)&&ie.func(n.positionAt)&&ie.func(n.offsetAt))},e.applyEdits=function(e,n){for(var text=e.getText(),t=function e(data,n){if(data.length<=1)return data;var p=data.length/2|0,t=data.slice(0,p),r=data.slice(p);e(t,n),e(r,n);for(var o=0,c=0,i=0;o<t.length&&c<r.length;){var d=n(t[o],r[c]);data[i++]=d<=0?t[o++]:r[c++]}for(;o<t.length;)data[i++]=t[o++];for(;c<r.length;)data[i++]=r[c++];return data}(n,function(a,b){var e=a.range.start.line-b.range.start.line;return 0===e?a.range.start.character-b.range.start.character:e}),r=text.length,i=t.length-1;i>=0;i--){var o=t[i],c=e.offsetAt(o.range.start),d=e.offsetAt(o.range.end);if(!(d<=r))throw new Error("Overlapping edit");text=text.substring(0,c)+o.newText+text.substring(d,text.length),r=c}return text}}(te||(te={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(re||(re={}));var ie,oe=function(){function e(e,n,t,content){this._uri=e,this._languageId=n,this._version=t,this._content=content,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],text=this._content,n=!0,i=0;i<text.length;i++){n&&(e.push(i),n=!1);var t=text.charAt(i);n="\r"===t||"\n"===t,"\r"===t&&i+1<text.length&&"\n"===text.charAt(i+1)&&i++}n&&text.length>0&&e.push(text.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,o=n.length;if(0===o)return r.create(0,e);for(;t<o;){var c=Math.floor((t+o)/2);n[c]>e?o=c:t=c+1}var line=t-1;return r.create(line,e-n[line])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(ie||(ie={}));var ae=monaco.Range,ue=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var o=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t))},c=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(o)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){c(e)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){c(e.model),o(e.model)})),this._disposables.push(t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(c(e),o(e))})})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(t){return t.doValidation(e.toString()).then(function(t){var r=t.map(function(e){return code="number"==typeof(n=e).code?String(n.code):n.code,{severity:se(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:code,source:n.source};var n,code});monaco.editor.setModelMarkers(monaco.editor.getModel(e),n,r)})}).then(void 0,function(e){console.error(e)})},e}();function se(e){switch(e){case y.Error:return monaco.MarkerSeverity.Error;case y.Warning:return monaco.MarkerSeverity.Warning;case y.Information:return monaco.MarkerSeverity.Info;case y.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function ce(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function de(e){if(e)return new ae(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function fe(e){var n=monaco.languages.CompletionItemKind;switch(e){case L.Text:return n.Text;case L.Method:return n.Method;case L.Function:return n.Function;case L.Constructor:return n.Constructor;case L.Field:return n.Field;case L.Variable:return n.Variable;case L.Class:return n.Class;case L.Interface:return n.Interface;case L.Module:return n.Module;case L.Property:return n.Property;case L.Unit:return n.Unit;case L.Value:return n.Value;case L.Enum:return n.Enum;case L.Keyword:return n.Keyword;case L.Snippet:return n.Snippet;case L.Color:return n.Color;case L.File:return n.File;case L.Reference:return n.Reference}return n.Property}function le(e){if(e)return{range:de(e.range),text:e.newText}}var ge=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t,r){var o=e.uri;return this._worker(o).then(function(e){return e.doComplete(o.toString(),ce(n))}).then(function(t){if(t){var r=e.getWordUntilPosition(n),o=new ae(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),c=t.items.map(function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:o,kind:fe(e.kind)};return e.textEdit&&(n.range=de(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(le)),e.insertTextFormat===O.Snippet&&(n.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),n});return{isIncomplete:t.isIncomplete,suggestions:c}}})},e}();function he(e){return"string"==typeof e?{value:e}:(n=e)&&"object"==typeof n&&"string"==typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function pe(e){if(e)return Array.isArray(e)?e.map(he):[he(e)]}var me=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.doHover(r.toString(),ce(n))}).then(function(e){if(e)return{range:de(e.range),contents:pe(e.contents)}})},e}();function ve(e){var n=monaco.languages.DocumentHighlightKind;switch(e){case K.Read:return n.Read;case K.Write:return n.Write;case K.Text:return n.Text}return n.Text}var be=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),ce(n))}).then(function(e){if(e)return e.map(function(e){return{range:de(e.range),kind:ve(e.kind)}})})},e}();function _e(e){var n=monaco.languages.SymbolKind;switch(e){case B.File:return n.Array;case B.Module:return n.Module;case B.Namespace:return n.Namespace;case B.Package:return n.Package;case B.Class:return n.Class;case B.Method:return n.Method;case B.Property:return n.Property;case B.Field:return n.Field;case B.Constructor:return n.Constructor;case B.Enum:return n.Enum;case B.Interface:return n.Interface;case B.Function:return n.Function;case B.Variable:return n.Variable;case B.Constant:return n.Constant;case B.String:return n.String;case B.Number:return n.Number;case B.Boolean:return n.Boolean;case B.Array:return n.Array}return n.Function}var ye=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:_e(e.kind),range:de(e.location.range),selectionRange:de(e.location.range)}})})},e}(),ke=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentLinks(t.toString())}).then(function(e){if(e)return{links:e.map(function(e){return{range:de(e.range),url:e.target}})}})},e}();function we(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var xe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.format(r.toString(),null,we(n)).then(function(e){if(e&&0!==e.length)return e.map(le)})})},e}(),Ce=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var o=e.uri;return this._worker(o).then(function(e){return e.format(o.toString(),function(e){if(e)return{start:ce(e.getStartPosition()),end:ce(e.getEndPosition())}}(n),we(t)).then(function(e){if(e&&0!==e.length)return e.map(le)})})},e}(),Ee=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(n.kind=function(e){switch(e){case m.Comment:return monaco.languages.FoldingRangeKind.Comment;case m.Imports:return monaco.languages.FoldingRangeKind.Imports;case m.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),n})})},e}();function Ie(e){var n=new M(e),t=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new ge(t)),monaco.languages.registerHoverProvider(r,new me(t)),monaco.languages.registerDocumentHighlightProvider(r,new be(t)),monaco.languages.registerLinkProvider(r,new ke(t)),monaco.languages.registerFoldingRangeProvider(r,new Ee(t)),monaco.languages.registerDocumentSymbolProvider(r,new ye(t)),"html"===r&&(monaco.languages.registerDocumentFormattingEditProvider(r,new xe(t)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new Ce(t)),new ue(r,t,e))}t.d(n,"setupMode",function(){return Ie})}}]);