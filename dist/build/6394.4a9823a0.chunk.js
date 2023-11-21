"use strict";(self.webpackChunkproyectodiciembrestrapi=self.webpackChunkproyectodiciembrestrapi||[]).push([[6394],{84409:(R,l,e)=>{e.d(l,{p:()=>d});var t=e(27279),O=e(87006),E=e(40464);const d=(c={})=>{const{get:_}=(0,O.kY)(),{data:a,isLoading:n}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:m}=await _("/admin/providers");return m},c);return{providers:t.useMemo(()=>a??[],[a]),isLoading:n}}},76394:(R,l,e)=>{e.r(l),e.d(l,{LoginEE:()=>o});var t=e(27279),O=e(84366),E=e(93415),d=e(10701),c=e(32370),_=e(70627),a=e.n(_),n=e(61020),M=e(72450),m=e(13320),u=e(31640),D=e(84409),v=e(80090);const i=(0,M.ZP)(O.i)`
  flex: 1;
`,o=P=>{const{formatMessage:s}=(0,n.Z)(),{isLoading:p,providers:g}=(0,D.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!p&&g.length===0?t.createElement(m.Md,null,t.createElement(u.Z,{...P})):t.createElement(m.Md,null,t.createElement(u.Z,{...P},t.createElement(E.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(i,null),t.createElement(E.x,{paddingLeft:3,paddingRight:3},t.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(v.Z,{providers:g,displayAllProviders:!1})))))};o.defaultProps={onSubmit:P=>P.preventDefault(),requestError:null},o.propTypes={formErrors:a().object.isRequired,modifiedData:a().object.isRequired,onChange:a().func.isRequired,onSubmit:a().func,requestError:a().object}},80090:(R,l,e)=>{e.d(l,{Z:()=>P});var t=e(27279),O=e(10701),E=e(2981),d=e(32370),c=e(23298),_=e(74577),a=e(70627),n=e.n(a),M=e(61020),m=e(47533),u=e(72450);const D=u.ZP.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,v=(0,u.ZP)(O.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,i=({provider:s})=>t.createElement(E.u,{label:s.displayName},t.createElement(D,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,s.displayName)));i.propTypes={provider:n().shape({icon:n().string,displayName:n().string.isRequired,uid:n().string.isRequired}).isRequired};const o=({providers:s,displayAllProviders:p})=>{const{formatMessage:g}=(0,M.Z)();return p?t.createElement(c.r,{gap:4},s.map(r=>t.createElement(_.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):s.length>2&&!p?t.createElement(c.r,{gap:4},s.slice(0,2).map(r=>t.createElement(_.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(_.P,{col:4},t.createElement(E.u,{label:g({id:"global.see-more"})},t.createElement(D,{as:m.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},s.map(r=>t.createElement(i,{key:r.uid,provider:r})))};o.defaultProps={displayAllProviders:!0},o.propTypes={providers:n().arrayOf(n().object).isRequired,displayAllProviders:n().bool};const P=o}}]);
