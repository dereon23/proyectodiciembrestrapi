"use strict";(self.webpackChunkproyectodiciembrestrapi=self.webpackChunkproyectodiciembrestrapi||[]).push([[302],{98374:(W,g,e)=>{e.d(g,{F:()=>p});var t=e(27279),u=e(87006),L=e(61020),M=e(40464);const p=(y={},O={})=>{const{id:m="",...f}=y,{get:d}=(0,u.kY)(),{locale:C}=(0,L.Z)(),h=(0,u.Xe)(C,{sensitivity:"base"}),{data:n,error:v,isError:o,isLoading:I,refetch:A}=(0,M.useQuery)(["roles",m,f],async()=>{const{data:r}=await d(`/admin/roles/${m??""}`,{params:f});return r},O);return{roles:t.useMemo(()=>{let r=[];return n&&(Array.isArray(n.data)?r=n.data:r=[n.data]),[...r].sort((R,P)=>h.compare(R.name,P.name))},[n,h]),error:v,isError:o,isLoading:I,refetch:A}}},29388:(W,g,e)=>{e.r(g),e.d(g,{SingleSignOn:()=>K,default:()=>Z});var t=e(27279),u=e(27997),L=e(73354),M=e(27875),p=e(48102),y=e(74758),O=e(10701),m=e(32370),f=e(23298),d=e(74577),C=e(2548),h=e(5627),n=e(78955),v=e(97232),o=e(87006),I=e(59082),A=e(6078),b=e.n(A),r=e(61020),R=e(59461),P=e(3101),x=e(98374),B=e(36364),c=e(47853);const F=c.Ry().shape({autoRegister:c.Xg().required(o.I0.required),defaultRole:c.nK().when("autoRegister",(a,l)=>a?l.required(o.I0.required):l.nullable()),ssoLockedRoles:c.IX().nullable().of(c.nK().when("ssoLockedRoles",(a,l)=>a?l.required(o.I0.required):l.nullable()))}),K=()=>{(0,o.go)();const{formatMessage:a}=(0,r.Z)(),l=(0,R.v9)(B._),{isLoading:G,allowedActions:{canUpdate:D,canReadRoles:X}}=(0,o.ss)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:i,initialData:z,isLoading:H,modifiedData:E,showHeaderButtonLoader:N},,{handleChange:S,handleSubmit:Q}]=(0,P.G)("/admin/providers/options",F,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:U,isLoading:Y}=(0,x.F)(void 0,{enabled:X}),$=G||Y||H;return t.createElement(u.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(L.o,{tabIndex:-1},t.createElement("form",{onSubmit:Q},t.createElement(M.T,{primaryAction:t.createElement(p.z,{"data-testid":"save-button",disabled:b()(z,E),loading:N,startIcon:t.createElement(I.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(y.D,null,$?t.createElement(o.dO,null):t.createElement(O.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(m.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(f.r,{gap:4},t.createElement(d.P,{col:6,m:6,s:12},t.createElement(C.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!D,checked:E.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{S({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(d.P,{col:6,m:6,s:12},t.createElement(h.P,{disabled:!D,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole.id,defaultMessage:i.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{S({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:E.defaultRole},U.map(({id:s,name:T})=>t.createElement(n.W,{key:s,value:s.toString()},T)))),t.createElement(d.P,{col:6,m:6,s:12},t.createElement(v.NU,{disabled:!D,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles.id,defaultMessage:i.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{S({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{S({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:E.ssoLockedRoles||[],withTags:!0},U.map(({id:s,name:T})=>t.createElement(v.ML,{key:s,value:s.toString()},T))))))))))},Z=()=>{const a=(0,R.v9)(B._);return t.createElement(o.O4,{permissions:a.settings.sso.main},t.createElement(K,null))}}}]);
