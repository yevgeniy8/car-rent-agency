"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[330],{9330:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t,i,o,a,l,f,u,c,m,d,p=r(5861),s=r(9439),g=r(4687),h=r.n(g),x=r(2791),b=r(8816),Z=r(1413),v=r(168),k=r(225),j=k.Z.form(t||(t=(0,v.Z)(["\n    display: flex;\n    padding-top: 100px;\n    margin-bottom: 50px;\n    justify-content: center;\n    align-items: flex-end;\n"]))),y=k.Z.div(i||(i=(0,v.Z)(["\n    width: 224px;\n    margin-right: 18px;\n"]))),w=k.Z.label(o||(o=(0,v.Z)(["\n    color: #8a8a89;\n    font-family: Manrope;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.29;\n\n    display: block;\n    margin-bottom: 8px;\n"]))),M=k.Z.div(a||(a=(0,v.Z)(["\n    width: 125px;\n    margin-right: 18px;\n"]))),C=k.Z.input(l||(l=(0,v.Z)(["\n    width: 160px;\n    height: 48px;\n    outline: none;\n    border: none;\n\n    padding: 14px 0;\n    border-radius: 14px 0px 0px 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n\n    padding-left: 70px;\n\n    background-color: #f7f7fb;\n\n    color: #121417;\n    font-family: Manrope;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.11;\n"]))),P=k.Z.div(f||(f=(0,v.Z)(["\n    display: flex;\n"]))),F=(0,k.Z)(C)(u||(u=(0,v.Z)(["\n    border-radius: 0px 14px 14px 0px;\n    margin-right: 18px;\n\n    padding-left: 50px;\n"]))),S=k.Z.div(c||(c=(0,v.Z)(["\n    position: relative;\n"]))),B=k.Z.label(m||(m=(0,v.Z)(["\n    position: absolute;\n    left: 24px;\n    top: 14px;\n\n    color: #121417;\n    font-family: Manrope;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 1.11;\n"]))),z=k.Z.button(d||(d=(0,v.Z)(["\n    width: 136px;\n    height: 48px;\n    padding: 14px 0;\n    border-radius: 12px;\n    background: #3470ff;\n\n    outline: none;\n    border: none;\n\n    color: #fff;\n    font-family: Manrope;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 1.43;\n"]))),I=r(1062),L=function(){for(var e=[],n=30;n<=400;n+=10)e.push({value:n,label:n});return e},_=r(1634),E=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),N=r(9434),R=r(184),T=function(){var e,n=(0,N.I0)(),r=(0,x.useState)({value:"",label:"Enter the text"}),t=(0,s.Z)(r,2),i=t[0],o=t[1],a=(0,x.useState)({value:"",label:"To $"}),l=(0,s.Z)(a,2),f=l[0],u=l[1],c=(0,x.useState)({from:"",to:""}),m=(0,s.Z)(c,2),d=m[0],p=m[1],g=function(e){switch(e.target.name){case"from":p((function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{from:e.target.value})}));break;case"to":p((function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{to:e.target.value})}))}};return(0,R.jsx)("div",{children:(0,R.jsxs)(j,{action:"",children:[(0,R.jsxs)(y,{children:[(0,R.jsx)(w,{htmlFor:"brand",children:"Car brand"}),(0,R.jsx)(I.ZP,{id:"brand",options:(e=E,e.map((function(e){return{value:e,label:e}}))),value:i,onChange:function(e){o(e)},styles:{control:function(e){return(0,Z.Z)((0,Z.Z)({},e),{},{borderRadius:"14px",height:"48px",backgroundColor:"#F7F7FB",border:"none",output:"none"})}}})]}),(0,R.jsxs)(M,{children:[(0,R.jsx)(w,{htmlFor:"price",children:"Price/ 1 hour"}),(0,R.jsx)(I.ZP,{id:"price",options:L(),value:f,onChange:function(e){u({value:"$".concat(e.value),label:"To ".concat(e.label,"$")})},styles:{control:function(e){return(0,Z.Z)((0,Z.Z)({},e),{},{borderRadius:"14px",height:"48px",backgroundColor:"#F7F7FB",border:"none",output:"none"})}}})]}),(0,R.jsxs)("label",{htmlFor:"",children:[(0,R.jsx)(w,{children:" \u0421ar mileage / km"}),(0,R.jsxs)(P,{children:[(0,R.jsxs)(S,{children:[(0,R.jsx)(B,{htmlFor:"from",children:"From"}),(0,R.jsx)(C,{type:"text",name:"from",id:"from",value:d.from,onChange:g})]}),(0,R.jsxs)(S,{children:[(0,R.jsx)(B,{htmlFor:"to",children:"To"}),(0,R.jsx)(F,{type:"text",name:"to",id:"to",value:d.to,onChange:g})]})]})]}),(0,R.jsx)(z,{onClick:function(e){e.preventDefault(),n((0,_.M6)({brand:i,price:f,mileage:d}))},children:"Search"})]})})},$=r(7657),A=function(){var e=(0,x.useState)(1),n=(0,s.Z)(e,2),r=n[0],t=n[1],i=(0,x.useState)(!0),o=(0,s.Z)(i,2),a=o[0],l=o[1],f=(0,N.v9)((function(e){return e.cars.cars})),u=(0,N.v9)((function(e){return e.filter})),c=(0,N.I0)(),m=function(){var e=(0,p.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((function(e){return e+1})),e.next=3,c((0,$.cf)(r+1));case 3:e.sent.payload.data.length<8&&l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,x.useEffect)((function(){1===r&&c((0,$.cf)(1))}),[c,r]);return(0,R.jsxs)("div",{children:[(0,R.jsx)(T,{}),(0,R.jsx)(b.Z,{cars:""===u.brand&&""===u.price&&""===u.mileage.from&&""===u.mileage.to?f:u.brand&&u.price&&u.mileage.from&&u.mileage.to?f.filter((function(e){return e.make===u.brand})).filter((function(e){return e.rentalPrice===u.price})).filter((function(e){return e.mileage>u.mileage.from&&e.mileage<u.mileage.to})):u.price&&u.mileage.from&&u.mileage.to?f.filter((function(e){return e.rentalPrice===u.price})).filter((function(e){return e.mileage>u.mileage.from&&e.mileage<u.mileage.to})):u.brand&&u.price&&u.mileage.from?f.filter((function(e){return e.make===u.brand})).filter((function(e){return e.rentalPrice===u.price})).filter((function(e){return e.mileage>u.mileage.from})):u.brand&&u.price&&u.mileage.to?f.filter((function(e){return e.make===u.brand})).filter((function(e){return e.rentalPrice===u.price})).filter((function(e){return e.mileage<u.mileage.to})):u.brand&&u.price?f.filter((function(e){return e.make===u.brand})).filter((function(e){return e.rentalPrice===u.price})):u.brand&&u.mileage.from?f.filter((function(e){return e.make===u.brand})).filter((function(e){return e.mileage>u.mileage.from})):u.brand&&u.mileage.to?f.filter((function(e){return e.make===u.brand})).filter((function(e){return e.mileage<u.mileage.to})):u.price&&u.mileage.from?f.filter((function(e){return e.rentalPrice===u.price})).filter((function(e){return e.mileage>u.mileage.from})):u.price&&u.mileage.to?f.filter((function(e){return e.rentalPrice===u.price})).filter((function(e){return e.mileage<u.mileage.to})):u.brand?f.filter((function(e){return e.make===u.brand})):u.price?f.filter((function(e){return e.rentalPrice===u.price})):u.mileage.from&&u.mileage.to?f.filter((function(e){return e.mileage>u.mileage.from&&e.mileage<u.mileage.to})):u.mileage.from?f.filter((function(e){return e.mileage>u.mileage.from})):u.mileage.to?f.filter((function(e){return e.mileage<u.mileage.to})):void 0,changePage:m,showLoadMore:a})]})}}}]);
//# sourceMappingURL=330.842f1cc9.chunk.js.map