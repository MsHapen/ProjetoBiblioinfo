import{A as c}from"./autores.88c6c41e.js";import{_ as h,o as l,c as n,a as t,w as _,v as m,F as v,r as p,t as u}from"./index.1193129b.js";import"./index.becf6c0c.js";const e=new c,A={data(){return{autor:{},autores:[]}},async created(){this.autores=await e.buscarTodosOsAutores()},methods:{async salvar(){this.autor.id?await e.atualizarAutores(this.autor):await e.adicionarAutores(this.autor),this.autores=await e.buscarTodosOsAutores(),this.autor={}},async excluir(a){await e.excluirAutor(a.id),this.autores=await e.buscarTodosOsAutores()},editar(a){Object.assign(this.autor,a)}}},b={class:"container"},w=t("div",{class:"title"},[t("h2",null,"Cadastro de autores")],-1),f={class:"form-input"},x={class:"list-autores"},k=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Nome"),t("th",null,"A\xE7\xF5es")])],-1),y=["onClick"],C=["onClick"];function O(a,o,T,g,i,r){return l(),n("div",b,[w,t("div",f,[_(t("input",{type:"text",placeholder:"Autor:","onUpdate:modelValue":o[0]||(o[0]=s=>i.autor.nome=s)},null,512),[[m,i.autor.nome]]),t("button",{onClick:o[1]||(o[1]=(...s)=>r.salvar&&r.salvar(...s))},"Salvar")]),t("div",x,[t("table",null,[k,t("tbody",null,[(l(!0),n(v,null,p(i.autores,s=>(l(),n("tr",{key:s.id},[t("td",null,u(s.id),1),t("td",null,u(s.nome),1),t("td",null,[t("div",null,[t("button",{class:"edit-btn",onClick:d=>r.editar(s)},"editar",8,y),t("button",{class:"edit-btn",onClick:d=>r.excluir(s)},"excluir",8,C)])])]))),128))])])])])}var F=h(A,[["render",O]]);export{F as default};
