(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(e,t,n){var content=n(278);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("1a44c282",content,!0,{sourceMap:!1})},266:function(e,t){},267:function(e,t){},274:function(e,t){},277:function(e,t,n){"use strict";var r=n(258);n.n(r).a},278:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".editor[data-v-46f1f5ec]{width:100%;height:100%}",""])},290:function(e,t,n){"use strict";n.r(t);var r=n(254),o=n(255),c=n(263),l=n(257),d=n(265),f=n(6),h=n(264),m=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},v=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"onDotStringChanged",value:function(){this.$el.innerHTML=this.html}},{key:"mounted",value:function(){this.$el.innerHTML=this.html}}]),t}(h.c);m([Object(h.b)({type:String,required:!0})],v.prototype,"html",void 0),m([Object(h.d)("html",{immediate:!1,deep:!1})],v.prototype,"onDotStringChanged",null);var y=v=m([Object(h.a)({})],v),j=n(42),O=Object(j.a)(y,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null).exports,w=n(269),k=n(275),x=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},S=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).apply(this,arguments))).viz=new k.a({Module:w.Module,render:w.render}),e.svgString="",e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"ondotSourceChanged",value:function(){this.dotSource&&this.renderit()}},{key:"mounted",value:function(){this.renderit()}},{key:"renderit",value:function(){var e=this;this.viz.renderString(this.dotSource).then(function(t){e.svgString=t}).catch(function(t){e.viz=new k.a({Module:w.Module,render:w.render}),e.svgString=t})}}]),t}(h.c);x([Object(h.b)({type:String,required:!0})],S.prototype,"dotSource",void 0),x([Object(h.d)("dotSource",{immediate:!1,deep:!1})],S.prototype,"ondotSourceChanged",null);var R=S=x([Object(h.a)({components:{InlineString:O}})],S),M=Object(j.a)(R,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("inline-string",{attrs:{html:this.svgString}})],1)},[],!1,null,null,null).exports,z=n(276),_=n.n(z),D={keywords:["strict","graph","digraph","node","edge","subgraph","rank","abstract","_","->",":","=",","],builtins:["rank","rankdir","ranksep","size","ratio","label","headlabel","taillabel","arrowhead","samehead","samearrowhead","arrowtail","sametail","samearrowtail","arrowsize","labeldistance","labelangle","labelfontsize","dir","width","height","angle","fontsize","fontcolor","same","weight","color","bgcolor","style","shape","fillcolor","nodesep","id"],attributes:["doublecircle","circle","diamond","box","point","ellipse","record","inv","invdot","dot","dashed","dotted","filled","back","forward"],symbols:/[=><!~?:&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_\x80-\xFF][\w\x80-\xFF]*/,{cases:{"@keywords":"keyword","@builtins":"predefined","@attributes":"constructor","@default":"identifier"}}],{include:"@whitespace"},[/<(?!@symbols)/,{token:"string.html.quote",bracket:"@open",next:"html"}],[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@keywords":"keyword","@default":"operator"}}],[/[;,]/,"delimiter"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}]],comment:[[/[^\/*]+/,"comment"],[/\/\*/,"comment","@push"],["\\*/","comment","@pop"],[/[\/*]/,"comment"]],html:[[/[^<>&]+/,"string.html"],[/&\w+;/,"string.html.escape"],[/&/,"string.html"],[/</,{token:"string.html.quote",bracket:"@open",next:"@push"}],[/>/,{token:"string.html.quote",bracket:"@close",next:"@pop"}]],string:[[/[^\\"&]+/,"string"],[/\\"/,"string.escape"],[/&\w+;/,"string.escape"],[/[\\&]/,"string"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"],[/#.*$/,"comment"]]}},$=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"load",value:function(){window.monaco.languages.register({id:"xdot"}),window.monaco.languages.setMonarchTokensProvider("xdot",D)}}]),e}(),P=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},C=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).apply(this,arguments))).source="digraph G {\n  graph [bgcolor=invis]\n  a1 -> b1 -> c\n  a2 -> b2 -> c\n}",e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"editorDidMount",value:function(e){(new $).load()}}]),t}(h.c),F=C=P([Object(h.a)({components:{GraphVizRenderer:M,MonacoEditor:_.a}})],C),E=(n(277),n(113)),L=n.n(E),T=n(106),V=n(107),A=Object(j.a)(F,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"",fluid:"","fill-height":""}},[n("no-ssr",{attrs:{placeholder:"Loading..."}},[n("v-flex",{attrs:{"d-flex":""}}),e._v(" "),n("v-flex",{attrs:{"d-flex":"","fill-height":""}},[n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{md6:"","d-flex":"","fill-height":""}},[n("monaco-editor",{staticClass:"editor",attrs:{language:"xdot",theme:"vs-dark"},on:{editorDidMount:e.editorDidMount},model:{value:e.source,callback:function(t){e.source=t},expression:"source"}})],1),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{md6:"","d-flex":"","fill-height":""}},[n("graph-viz-renderer",{attrs:{"dot-source":e.source}})],1)],1)],1)],1)],1)},[],!1,null,"46f1f5ec",null);t.default=A.exports;L()(A,{VFlex:T.a,VLayout:V.a})}}]);