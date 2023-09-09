"use strict";(self.webpackChunkonlin_shop_front_end=self.webpackChunkonlin_shop_front_end||[]).push([[341],{8279:function(e,n,t){t.d(n,{R:function(){return M}});var a,r,o,c,l,i,u=t(9439),s=t(2791),d=t(5705),m=t(1413),p=t(4925),h=t(168),y=t(5867),v=t(184),b=y.ZP.div(a||(a=(0,h.Z)(["\n  color: red;\n"]))),x=function(e){return(0,v.jsx)(b,{children:e.children})},g=y.ZP.div(r||(r=(0,h.Z)(["\n  margin-bottom: 20px;\n  input,\n  textarea,\n  select {\n    display: block;\n    width: 400px;\n    padding: 6px 12px;\n    font-size: 14px;\n    border-radius: 4px;\n  }\n"]))),f=y.ZP.div(o||(o=(0,h.Z)(["\n  font-weight: bold;\n  display: flex;\n  margin-bottom: 5px;\n"]))),j=y.ZP.div(c||(c=(0,h.Z)(["\n  display: inline-block;\n"]))),k=y.ZP.div(l||(l=(0,h.Z)(["\n  display: flex;\n  gap: 4px;\n"]))),Z=["label","name"],F=function(e){var n=e.label,t=e.name,a=(0,p.Z)(e,Z);return(0,v.jsxs)(g,{children:[(0,v.jsx)(f,{htmlFor:t,children:n}),(0,v.jsx)(d.gN,(0,m.Z)({name:t,id:t},a)),(0,v.jsx)(d.Bc,{name:t,component:x})]})},S=["label","name"],q=function(e){var n=e.label,t=e.name,a=(0,p.Z)(e,S);return(0,v.jsxs)(g,{children:[(0,v.jsx)(f,{htmlFor:t,children:n}),(0,v.jsx)(d.gN,(0,m.Z)({as:"textarea",name:t,id:t},a)),(0,v.jsx)(d.Bc,{name:t,component:x})]})},w=["label","name","options"],B=function(e){var n=e.label,t=e.name,a=e.options,r=(0,p.Z)(e,w);return(0,v.jsxs)(g,{children:[(0,v.jsx)(f,{htmlFor:t,children:n}),(0,v.jsx)(d.gN,(0,m.Z)((0,m.Z)({as:"select",name:t,id:t},r),{},{children:null===a||void 0===a?void 0:a.map((function(e){return(0,v.jsx)("option",{value:e.value,children:e.key},e.value)}))})),(0,v.jsx)(d.Bc,{name:t,component:x})]})},N=["label","name","options"],P=function(e){var n=e.label,t=e.name,a=e.options,r=(0,p.Z)(e,N);return(0,v.jsxs)("div",{className:"control",children:[(0,v.jsx)("label",{htmlFor:t,children:n}),(0,v.jsx)(d.gN,(0,m.Z)((0,m.Z)({name:t},r),{},{children:function(e){var n=e.field;return a.map((function(e){return(0,v.jsxs)(s.Fragment,{children:[(0,v.jsx)("input",(0,m.Z)((0,m.Z)({},n),{},{id:e.value,type:"radio",value:e.value,checked:e.value===n.value})),(0,v.jsx)("label",{className:"inlineBlock",htmlFor:e.value,children:e.key})]},e.key)}))}})),(0,v.jsx)(d.Bc,{name:t,component:x})]})},R=["label","name","options"],C=function(e){var n=e.label,t=e.name,a=e.options,r=(0,p.Z)(e,R);return(0,v.jsxs)("div",{style:{marginBottom:20},children:[(0,v.jsx)(f,{htmlFor:t,children:n}),(0,v.jsx)(d.gN,(0,m.Z)((0,m.Z)({name:t},r),{},{children:function(e){var n=e.field;return a.map((function(e){return(0,v.jsx)(s.Fragment,{children:(0,v.jsxs)(k,{children:[(0,v.jsx)("input",(0,m.Z)((0,m.Z)({},n),{},{id:e.value,type:"checkbox",value:e.value,checked:n.value.includes(e.value)})),(0,v.jsx)(j,{htmlFor:e.value,children:e.key})]})},e.key)}))}})),(0,v.jsx)(d.Bc,{name:t,component:x})]})},_=["label","name","type","setFiles"],z=function(e){var n=e.label,t=e.name,a=e.type,r=e.setFiles,o=(0,p.Z)(e,_);return(0,v.jsxs)(g,{children:[(0,v.jsx)(f,{htmlFor:t,children:n}),(0,v.jsx)(d.gN,(0,m.Z)((0,m.Z)({name:t},o),{},{children:function(e){var n=e.field,c=e.form.setFieldValue;return(0,v.jsx)("input",(0,m.Z)((0,m.Z)((0,m.Z)({},n),o),{},{type:a,id:t,multiple:!0,onChange:function(e){var n=e.currentTarget.files;console.log(n),r(n),c("image",e.currentTarget.value)}}))}})),(0,v.jsx)(d.Bc,{name:t,component:x})]})},T=["label","name"],A=function(e){var n=e.label,t=e.name,a=(0,p.Z)(e,T);return(0,v.jsxs)(g,{children:[(0,v.jsx)(f,{htmlFor:t,children:n}),(0,v.jsx)(d.F2,{name:t,children:function(e){var n=e.push,r=e.remove,o=e.form.values["".concat(t)];return(0,v.jsx)("div",{children:o.map((function(e,o){return(0,v.jsxs)("div",{children:[(0,v.jsx)(d.gN,(0,m.Z)({name:"".concat(t,"[").concat(o,"]")},a)),o>0&&(0,v.jsx)("button",{type:"button",onClick:function(){return r(o)},children:"-"}),(0,v.jsx)("button",{type:"button",onClick:function(){return n("")},children:"+"})]},o)}))})}}),(0,v.jsx)(d.Bc,{name:t,component:x})]})},I=["control"],L=function(e){var n=e.control,t=(0,p.Z)(e,I);switch(n){case"input":return(0,v.jsx)(F,(0,m.Z)({},t));case"textarea":return(0,v.jsx)(q,(0,m.Z)({},t));case"select":return(0,v.jsx)(B,(0,m.Z)({},t));case"radio":return(0,v.jsx)(P,(0,m.Z)({},t));case"checkbox":return(0,v.jsx)(C,(0,m.Z)({},t));case"inputFile":return(0,v.jsx)(z,(0,m.Z)({},t));case"inputList":return(0,v.jsx)(A,(0,m.Z)({},t));default:return null}},D=t(6727),E=y.ZP.button(i||(i=(0,h.Z)(["\n  align-self: ",";\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  background-color: ",";\n\n  padding-top: 10px;\n  padding-left: auto;\n  padding-right: auto;\n  padding-bottom: 10px;\n  border-radius: ",";\n  border: ",";\n  box-shadow: ",";\n  width: ","px;\n  height: ","px;\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n    border: ",";\n  }\n"])),(function(e){return e.center&&"center"}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.fontWeights.normal}),(function(e){return e.disabled?"".concat(e.theme.colors.notActiveText):e.active&&!e.disabled?"".concat(e.theme.colors.white," "):"".concat(e.theme.colors.deepBlue)}),(function(e){var n=e.active,t=e.theme;return e.disabled?"".concat(t.colors.backgroundBody):n?"".concat(t.colors.accentColor," "):"".concat(t.colors.backgroundBody)}),(function(e){return e.theme.radii.sm}),(function(e){return e.disabled?"none":"".concat(e.theme.borders.normal," ").concat(e.theme.colors.deepBlue)}),(function(e){return e.theme.boxShadow.btn}),(function(e){return e.size}),(function(e){return e.height}),(function(e){return e.disabled?"".concat(e.theme.colors.notActiveText):" ".concat(e.theme.colors.white)}),(function(e){return e.disabled?"".concat(e.theme.colors.backgroundBody):" ".concat(e.theme.colors.accentColor)}),(function(e){return"".concat(e.theme.borders.normal," ").concat(e.theme.colors.transparent)})),O=function(e){var n=e.textContent,t=e.onClick,a=e.size,r=e.type,o=e.height,c=e.active,l=e.disabled,i=e.center;return(0,v.jsx)(E,{center:i,active:c,type:r,onClick:t,size:a,height:o,disabled:l,children:n})},V={productName:"",brand:"",image:"",description:"",category:"",subcategory:"",createdFor:[],price:"",tags:[""]},X=D.Ry({productName:D.Z_().required("Required"),brand:D.Z_().required("Required"),image:D.nK().nullable(),description:D.Z_().required("Required"),category:D.Z_().required("Required"),subcategory:D.Z_().required("Required"),createdFor:D.IX().required("Required"),price:D.Rx().required("Required"),tags:D.IX().required("Required")}),J=[{key:"Select a category",value:""},{key:"\u041c\u0430\u043a\u0456\u044f\u0436",value:"make-up",subcategory:[{key:"Select a category",value:""},{key:"\u041e\u0447\u0456",value:"eyes"},{key:"\u0411\u0440\u043e\u0432\u0438",value:"eyebrows"},{key:"\u0413\u0443\u0431\u0438",value:"lips"},{key:"\u041e\u0431\u043b\u0438\u0447\u0447\u044f",value:"face"}]},{key:"\u0412\u043e\u043b\u043e\u0441\u0441\u044f",value:"hairy",subcategory:[{key:"Select a subcategory",value:""},{key:"\u0411\u0430\u043b\u044c\u0437\u0430\u043c\u0438",value:"balms"},{key:"\u041a\u043e\u043d\u0434\u0438\u0446\u0456\u043e\u043d\u0435\u0440\u0438",value:"hair conditioners"},{key:"\u0428\u0430\u043c\u043f\u0443\u043d\u0456",value:"shampoos"},{key:"\u041e\u043b\u0456\u044f",value:"oil"},{key:"\u0413\u0440\u0435\u0431\u0456\u043d\u0446\u0456, \u0449\u0456\u0442\u043a\u0438",value:"brushes"}]},{key:"\u0422\u0456\u043b\u043e & \u0412\u0430\u043d\u043d\u0430",value:"body",subcategory:[{key:"Select a subcategory",value:""},{key:"\u041c\u0430\u0441\u043b\u0430 \u0442\u0430 \u043e\u043b\u0456\u0457",value:"oils for body"},{key:"\u0417\u0430\u0441\u043c\u0430\u0433\u0430 & SPF",value:"suntan & SPF"},{key:"\u041a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0442\u0456\u043b\u0430",value:"body cosmetics"},{key:"\u0414\u0435\u0437\u043e\u0434\u043e\u0440\u0430\u043d\u0442\u0438 & \u0410\u043d\u0442\u0438\u043f\u0435\u0440\u0441\u043f\u0456\u0440\u0430\u043d\u0442\u0438",value:"deodorants & antiperspirants"},{key:"\u0413\u043e\u043b\u0456\u043d\u043d\u044f & \u0415\u043f\u0456\u043b\u044f\u0446\u0456\u044f",value:"shaving & epilation"},{key:"\u0413\u0456\u0433\u0456\u0454\u043d\u0430",value:"hygiene"},{key:"\u0412\u0430\u043d\u043d\u0430 & \u0414\u0443\u0448",value:"bath & shower"}]},{key:"\u041f\u0430\u0440\u0444\u0443\u043c\u0435\u0440\u0456\u044f",value:"perfumery",subcategory:[{key:"Select a subcategory",value:""},{key:"\u041e\u0434\u0435\u043a\u043e\u043b\u043e\u043d\u0438",value:"colognes"},{key:"\u0410\u0440\u043e\u043c\u0430\u0442\u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0443",value:"aromas for the home"},{key:"\u041f\u0430\u0440\u0444\u0443\u043c\u043e\u0432\u0430\u043d\u0430 \u0432\u043e\u0434\u0430",value:"perfumed water"}]},{key:"\u041f\u043e\u0434\u0430\u0440\u0443\u043d\u043a\u0438",value:"gifts",subcategory:[{key:"Select a subcategory",value:""},{key:"\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442",value:"certificate"},{key:"\u041d\u0430\u0431\u043e\u0440\u0438",value:"gift sets"}]},{key:"\u0417\u0434\u043e\u0440\u043e\u0432'\u044f & \u0422\u0443\u0440\u0431\u043e\u0442\u0430",value:"health",subcategory:[{key:"Select a subcategory",value:""},{key:"\u0414\u0435\u0440\u043c\u0430\u0442\u043e\u043a\u043e\u0441\u043c\u0435\u0442\u0438\u043a\u0430",value:"dermatocosmetics"},{key:"\u0406\u043d\u0442\u0438\u043c\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438",value:"intimate goods"},{key:"\u0417\u0443\u0431\u0438",value:"teeth"}]}],K=[{key:"male",value:"male"},{key:"female",value:"female"}],M=function(e){var n=e.data,t=e.isEditing,a=e.closeOnSubmit,r=(0,s.useState)([]),o=(0,u.Z)(r,2),c=o[0],l=o[1];return(0,v.jsx)(d.J9,{initialValues:n||V,onSubmit:function(e,n){var r=e.productName,o=e.category,l=e.subcategory,i=e.createdFor,u=e.description,s=e.brand,d=e.price,m=e.tags,p=new FormData;p.append("image",c[0]),p.append("productName",r),p.append("category",o),p.append("brand",s),p.append("description",u),p.append("createdFor",i),p.append("price",d),p.append("subcategory",l),p.append("tags",m),t&&a()},validationSchema:X,validateOnMount:!0,children:function(e){var t;return(0,v.jsxs)(d.l0,{encType:"multipart/form-data",children:[(0,v.jsx)(L,{control:"input",label:"Product",name:"productName",type:"text"}),(0,v.jsx)(L,{control:"input",label:"Brand",name:"brand",type:"text"}),(0,v.jsx)(L,{control:"inputFile",label:"Image",name:"image",type:"file",setFiles:l}),(0,v.jsx)(L,{control:"textarea",label:"Description",name:"description",type:"text"}),(0,v.jsx)(L,{control:"select",label:"Select a category",name:"category",options:J}),(0,v.jsx)(L,{control:"select",label:"Select a subcategory",name:"subcategory",options:null===(t=J.find((function(n){return n.value===e.values.category})))||void 0===t?void 0:t.subcategory,disabled:""===e.values.category}),(0,v.jsx)(L,{control:"checkbox",label:"Product created for",name:"createdFor",options:K}),(0,v.jsx)(L,{control:"input",label:"Price",name:"price",type:"number"}),(0,v.jsx)(L,{control:"inputList",label:"List of tags",name:"tags",type:"text"}),(0,v.jsx)(O,{type:"submit",textContent:n?"Save":"Submit",size:400})]})}})}},341:function(e,n,t){t.r(n);var a=t(8279),r=t(3104),o=t(184);n.default=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.P,{children:[(0,o.jsx)("h1",{children:"AdminPage"}),(0,o.jsx)(a.R,{isEditing:!1})]})})}}}]);
//# sourceMappingURL=341.478ce3ca.chunk.js.map