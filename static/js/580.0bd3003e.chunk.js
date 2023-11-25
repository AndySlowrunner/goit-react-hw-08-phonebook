"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[580],{580:(e,t,n)=>{n.r(t),n.d(t,{Contacts:()=>J});var a,s=n(434),r=n(168),c=n(867);const i=c.ZP.form(a||(a=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 164px;\n    gap: 4px;\n"])));var l=n(382);const o=(0,l.oM)({name:"filter",initialState:{filter:""},reducers:{setFilter(e,t){e.filter=t.payload}}}),{setFilter:d}=o.actions;o.reducer;var h=n(916);const p=e=>e.contacts.items,x=e=>e.filter.filter,u=e=>e.contacts.isLoading,m=e=>e.contacts.error,g=(0,h.P1)([p,x],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))));var j=n(184);const b=()=>{const e=(0,s.I0)(),t=(0,s.v9)(x),n=(0,s.v9)(g);console.log(n.length);return(0,j.jsx)(j.Fragment,{children:n.length>0?(0,j.jsxs)(i,{children:[(0,j.jsx)("label",{children:"Find contacts by name"}),(0,j.jsx)("input",{type:"text",value:t,onChange:t=>{e(d(t.target.value))}})]}):(0,j.jsx)("p",{children:"Please, add your contacts!"})})};var Z,f,y,v=n(705);const w=(0,c.ZP)(v.l0)(Z||(Z=(0,r.Z)(["\n    width: 164px;\n    padding: 8px 124px 8px 8px;\n\n    display: flex;\n    flex-direction: column;\n    border: 2px solid black;\n    gap: 8px;\n"]))),C=c.ZP.button(f||(f=(0,r.Z)(["\n    width: 90px;\n"]))),k=c.ZP.div(y||(y=(0,r.Z)(["\n    margin-left: 10px;\n"])));var P=n(7),A=n(294);A.Z.defaults.baseURL="https://6557686cbd4bcef8b61294a7.mockapi.io";const F=(0,l.hg)("contacts/fetchAll",(async(e,t)=>{try{return(await A.Z.get("/contacts")).data}catch(n){return t.rejectWithValue(n.message)}})),L=(0,l.hg)("contacts/addContact",(async(e,t)=>{try{return(await A.Z.post("/contacts",e)).data}catch(n){return t.rejectWithValue(n.message)}})),_=(0,l.hg)("contacts/deleteContact",(async(e,t)=>{try{return(await A.Z.delete("/contacts/".concat(e))).data}catch(n){return t.rejectWithValue(n.message)}})),q=P.Ry().shape({name:P.Z_().required(),phone:P.Z_().required()}),N=()=>{const e=(0,s.I0)(),t=(0,s.v9)(p);return(0,j.jsx)(v.J9,{initialValues:{name:"",phone:""},onSubmit:(n,a)=>{let{resetForm:s}=a;t.some((e=>e.name.toLowerCase()===n.name.toLowerCase()))?alert("".concat(n.name," is already in contacts.")):(e(L({...n})),s())},validationSchema:q,children:(0,j.jsxs)(w,{children:[(0,j.jsx)("label",{children:"Name"}),(0,j.jsx)(v.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,j.jsx)("label",{children:"Number"}),(0,j.jsx)(v.gN,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,j.jsx)(C,{type:"submit",children:"Add contact"})]})})};var z,I;const V=c.ZP.li(z||(z=(0,r.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    height: 24px;\n"]))),R=c.ZP.ul(I||(I=(0,r.Z)(["\n    padding: 0;\n"]))),S=()=>{const e=(0,s.v9)(g),t=(0,s.I0)();return(0,j.jsx)(R,{children:e.map((e=>{let{name:n,phone:a,id:s}=e;return(0,j.jsxs)(V,{children:[(0,j.jsxs)("p",{children:[n,":"," "+a]}),(0,j.jsx)("button",{onClick:()=>{t(_(s))},children:"Delete"})]},s)}))})};var W=n(791);const J=()=>{const e=(0,s.I0)(),t=(0,s.v9)(u),n=(0,s.v9)(m);return(0,W.useEffect)((()=>{e(F())}),[e]),(0,j.jsxs)(k,{children:[(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(N,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(b,{}),t&&!n&&(0,j.jsx)("b",{children:"Request in progress..."}),(0,j.jsx)(S,{})]})}}}]);
//# sourceMappingURL=580.0bd3003e.chunk.js.map