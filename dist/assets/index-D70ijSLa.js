import{r as l,j as e}from"./react-s2BnF2Jz.js";import{c as w0}from"./react-dom-C_lKlDD-.js";import{d as a,l as j0,f as b0,o as v0}from"./styled-components-DZdgDMQr.js";import{B as G,Q as y0}from"./react-toastify-YILgc6Ri.js";import{B as z0}from"./react-router-dom-BgF8fio_.js";import{R as C0}from"./react-google-recaptcha-Cr2mkvyW.js";import{o as k0,s as u}from"./zod-66aecEKW.js";import{A as z}from"./aos-9Or6Pd_Q.js";import{t as A0}from"./@hookform-Dv2vPbpw.js";import{u as S0}from"./react-hook-form-9T7XysD9.js";import{w as J,a as U,I as M0,b as E,l as I0,c as C,M as T0,R as K,L as $0,d as H0,D as w}from"./@phosphor-icons-C0cC49In.js";import{a as B0}from"./axios-CCb-kr4I.js";import{O as L0,C as V0,a as E0,P as P0,R as O0,T as D0}from"./@radix-ui-CkOuepYP.js";import{S as e0,a as t0,A as a0,P as N0}from"./swiper-Dw-zDNoi.js";import{_ as R0}from"./react-countup-C1PJg78Q.js";import{f as i0,p as r0}from"./date-fns-C2qaTfFa.js";import{s as q0,A as Z0,b as j,T as h,d as b}from"./@mui-BsToFV4h.js";import{u as G0,a as F0,b as Q0}from"./react-router-DL9Y7w9g.js";import"./scheduler-CzFDRTuY.js";import"./@emotion-DhnIiN2m.js";import"./hoist-non-react-statics-oZ3K6uYL.js";import"./react-is-8JwjhRSi.js";import"./@babel-DuB8yAtz.js";import"./stylis-YPZU7XtI.js";import"./clsx-B-dksMZM.js";import"./@remix-run-BqeRHQGj.js";import"./prop-types-CgZldsDR.js";import"./react-async-script-DOV7VFla.js";import"./react-remove-scroll-OnR-s-w_.js";import"./tslib-CDuPK5Eb.js";import"./react-remove-scroll-bar-BTUY-RR9.js";import"./react-style-singleton-CXS5o_Jm.js";import"./get-nonce-C-Z93AgS.js";import"./use-sidecar-CLmQWPy8.js";import"./use-callback-ref-Dz77Av4O.js";import"./aria-hidden-DQ5UC2Eg.js";import"./countup.js-DtgxfzyY.js";import"./react-transition-group-CYUIuLyW.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();const n=a.p`
  color: ${({theme:t,color:i})=>t.colors[`base-${i??"text"}`]};
  font-size: ${({theme:t,size:i})=>t.FontSizes[`text-regular-${i??"s"}`]};
  line-height: 150%;
  font-weight: ${({weight:t})=>t??400};

  a {
    color: ${({theme:t,color:i})=>t.colors[`base-${i??"text"}`]};
  }
`,o=a.h1`
  color: ${({theme:t,color:i})=>t.colors[`base-${i??"text"}`]};
  font-size: ${({theme:t,size:i})=>t.FontSizes[`title-regular-${i??"m"}`]};
  line-height: 108%;
  font-weight: ${({weight:t})=>t??700};
`,Y0=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,_0=a.div`
  width: 100%;
  height: 3.155625rem;

  font-style: normal;
  font-weight: 400;
  font-size: 0.8835125rem;
  line-height: 1.3125rem;

  border-radius: 7px;

  background: ${({theme:t})=>t.colors["base-white"]};

  &:focus {
    border: 2px solid ${({theme:t})=>t.colors["base-text"]};
    border-radius: 8px;
  }

  ${({hasError:t})=>t&&j0`
      border: 2px solid;
      border-color: ${({theme:i})=>i.colors["base-red"]};
    `}
`,W0=a.input`
  width: 100%;
  height: 100%;

  background: ${({theme:t})=>t.colors["base-white"]};

  border: 2px solid ${({theme:t})=>t.colors["base-white"]};
  border-radius: 8.07781px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;
  padding: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  color: ${({theme:t})=>t.colors["base-text"]};

  &::placeholder {
    color: ${({theme:t})=>t.colors["base-text"]};
  }

  &:focus {
    border: 2px solid ${({theme:t})=>t.colors["base-white"]};
    border-radius: 8px;
  }
`,k=l.forwardRef(({error:t,...i},r)=>e.jsxs(Y0,{children:[e.jsx(_0,{hasError:t!==void 0&&t!=="",children:e.jsx(W0,{ref:r,...i})}),t!==void 0&&e.jsx(n,{size:"sm",color:"red",children:t})]})),X0=a.button`
  width: ${({btnLarge:t})=>t?"15rem":"10rem"};
  height: 3.5rem;

  padding: 0.5rem;
  border: none;
  border-radius: 8px;

  font-size: ${({theme:t})=>t.FontSizes["text-regular-m"]};
  font-weight: 500;
  color: ${({theme:t,bgColor:i})=>i==="white"?t.colors["base-text"]:t.colors["base-white"]};
  background-color: ${({theme:t,bgColor:i})=>t.colors[`base-${i??"bg"}`]};
  z-index: 1;

  cursor: pointer;

  a {
    color: ${({theme:t,bgColor:i})=>i==="white"?t.colors["base-text"]:t.colors["base-white"]};
  }

  &:hover {
    opacity: 0.9;
  }
`,f=({children:t,btnLarge:i,bgColor:r})=>e.jsx(X0,{btnLarge:i,bgColor:r,children:t});a.div`
  width: ${({PositionTitle:t})=>t==="center"?"none":"100%"};
  display: flex;
  align-self: ${({PositionTitle:t})=>t};
  justify-content: center;
  position: relative;

  display: flex;
  flex-direction: column;

  h1 {
    left: ${({PositionTitle:t})=>t==="center"&&"3.3rem"};
  }
`;a.div`
  width: 6%;
  margin: 0 0 2rem 0.4rem;
  border-bottom: 4px solid
    ${({theme:t,SubTitleColor:i})=>i==="gray-200"?t.colors["base-text"]:t.colors["base-white"]};
`;a.span`
  opacity: ${({SubTitleColor:t})=>t==="text"?"0.5":"0.7"};
  font-size: 2.9rem;
  font-weight: 600;
`;a.h1`
  font-size: 1.7rem;
  font-weight: 600;
  opacity: 1;

  position: absolute;
  top: 1rem;
  left: 1.4rem;

  color: ${({theme:t,TitleColor:i})=>t.colors[`base-${i??"text"}`]};
`;const s0=B0.create({baseURL:"https://api-gaspartransportes.vercel.app/"}),J0=a.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  margin: 0 auto;
  padding: 6rem 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:t})=>t.colors["base-white-100"]};

  @media (max-width: 667px) {
    height: max-content;
    padding: 1.5rem;
    text-align: center;
  }
`,U0=a.div`
  width: 100%;
  height: 55rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3rem;

  border: none;
  border-radius: 12px;

  background-color: ${({theme:t})=>t.colors["base-secundary-bg"]};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  #Maps {
    width: 100%;
    height: 16rem;
    border: none;
    border-radius: 10px;
    margin-top: 1rem;
  }



  @media (max-width: 680px) {
    height: max-content;
    padding: 2rem;

    #Maps {
      margin-bottom: 2rem;
    }
  }
`,K0=a.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 667px) {
    height: max-content;
    flex-wrap: wrap;
  }
`,ee=a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 1rem;

  @media (max-width: 680px) {
    width: 100%;
    align-items: center;
  }
`,T=a.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  a {
    font-size: ${({theme:t})=>t.FontSizes["title-regular-sm"]};
    color: ${({theme:t})=>t.colors["base-white"]};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3rem;
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`,te=a.form`
  width: 50%;
  padding: 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: none;
  border-radius: 8px;

  button {
    align-self: flex-start;
    margin-top: 1rem;
  }

  #reCaptcha {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 680px) {
    width: 100%;

    #reCaptcha {
      transform: scale(0.7); /* Reduz o tamanho para 80% */
      transform-origin: 0 0; /* Ajusta o ponto de origem da escala */
    }
  }
`,ae=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
`,ie=a.textarea`
  width: 100%;
  height: 8rem;

  padding: 0.5rem;
  border: 2px solid
    ${({theme:t,error:i})=>i!==void 0?t.colors["base-red"]:t.colors["base-white"]};
  border-radius: 8px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  background: ${({theme:t})=>t.colors["base-white"]};

  &::placeholder {
    color: ${({theme:t})=>t.colors["base-text"]};
  }

  &:focus {
    border: 2px solid ${({theme:t})=>t.colors["base-bg"]};
    border-radius: 8px;
  }
`;a.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 99999px;
  padding: 0.7rem;
  background-color: ${({theme:t})=>t.colors["base-bg"]};

  svg {
    color: ${({theme:t})=>t.colors["base-white"]};
  }
`;const re=k0({name:u().min(3,"Por gentileza, digite o seu nome"),email:u().email("Por gentileza, digite o seu email corretamente"),phone:u().min(11,"Por gentileza, digite o numero de telefone corretamente").max(11,"Por gentileza, digite o numero sem caractere"),subject_text:u().min(3,"Digite sua dúvida"),subject_title:u().min(3,"Digite sua dúvida")}),se=()=>{var D,N,R,q,Z;const[t,i]=l.useState(""),{register:r,handleSubmit:d,formState:{errors:s},reset:c}=S0({resolver:A0(re)});l.useEffect(()=>{z.init()},[]);const m=async I=>{const{email:m0,name:h0,phone:x0,subject_text:p0,subject_title:g0}=I;if(!t){G.error("Captcha pendente!",{position:"top-right"});return}const f0={email:m0,name:h0,phone:x0,subject_text:p0,subject_title:g0,captcha:t};try{await G.promise(s0.post("sendMail",f0),{pending:"Verificando seus dados",success:"Dúvida enviada com sucesso!",error:"Verifique seus dado e faça novamente! 🤯"}),c(),i(null)}catch(u0){console.log(u0)}},O=I=>{i(I)};return e.jsx(J0,{id:"contact",children:e.jsxs(U0,{"data-aos":"zoom-in","data-aos-duration":"1000",children:[e.jsxs(ae,{children:[e.jsx(o,{size:"s",color:"white",children:"CONTATO"}),e.jsx(o,{size:"l",color:"white",children:"Entre em contato conosco."})]}),e.jsxs(K0,{children:[e.jsxs(ee,{children:[e.jsxs(T,{children:[e.jsx(J,{size:45,color:"#fff"}),e.jsxs("div",{children:[e.jsx(o,{size:"s",color:"white",children:"Contato"}),e.jsxs(n,{size:"sm",color:"white",children:[e.jsx("strong",{children:"Telefone Fixo:"})," ",e.jsx("a",{href:"tel:+55223518-0094",children:"(22) 3518-0094"})]}),e.jsxs(n,{size:"sm",color:"white",children:[e.jsx("strong",{children:"Whatsapp:"})," ",e.jsx("a",{href:"https://wa.me/5522997740161?text=",target:"_blank",children:"(22) 99774-0161"})," ","|",e.jsxs("a",{href:"https://wa.me/5522999852325?text=",target:"_blank",children:[" ","(22) 99985-2325"]})]})]})]}),e.jsxs(T,{children:[e.jsx(U,{size:45,color:"#fff"}),e.jsxs("div",{children:[e.jsx(o,{size:"s",color:"white",children:"E-mail"}),e.jsxs(n,{size:"sm",color:"white",children:[e.jsx("strong",{children:"Macaé:"})," ",e.jsx("a",{href:"mailto:comercial@gaspartransportes.com.br",children:"comercial@gaspartransportes.com.br"})]})]})]}),e.jsxs(T,{children:[e.jsx(M0,{size:45,color:"#fff"}),e.jsxs("div",{children:[e.jsx(o,{size:"s",color:"white",children:"Endereços"}),e.jsx(n,{color:"white",weight:500,children:e.jsxs("a",{href:"#",children:[" ","Avenida Lacerda Agostinho, 2000, ",e.jsx("br",{})," sala 06, Botafogo, Macaé-RJ 27.947-285"," "]})})]})]}),e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3003620028376!2d-41.782641725422316!3d-22.34228481793921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9631034350483d%3A0x70cb7e0d8599d035!2sGaspar%20Transportes!5e0!3m2!1spt-BR!2sbr!4v1726778973674!5m2!1spt-BR!2sbr",width:"400",height:"300",loading:"lazy",id:"Maps"})]}),e.jsxs(te,{onSubmit:d(m),children:[e.jsx(k,{type:"text",placeholder:"Nome",...r("name"),error:(D=s.name)==null?void 0:D.message}),e.jsx(k,{type:"text",placeholder:"Email",...r("email"),error:(N=s.email)==null?void 0:N.message}),e.jsx(k,{type:"tel",placeholder:"Telefone",...r("phone"),error:(R=s.phone)==null?void 0:R.message}),e.jsx(k,{type:"text",placeholder:"Assunto",...r("subject_title"),error:(q=s.subject_title)==null?void 0:q.message}),e.jsx(ie,{placeholder:"Digite sua dúvida....",...r("subject_text"),error:(Z=s.subject_text)==null?void 0:Z.message}),e.jsx("div",{id:"reCaptcha",children:e.jsx(C0,{sitekey:"6LeqQysqAAAAAAWO-LR2iKzuOKr4qxliapFfoFoo",onChange:O})}),e.jsx(f,{bgColor:"white",btnLarge:!1,children:"Enviar"})]})]})]})})},o0="/assets/logo-hVhBxcGv.png",oe="/assets/criard_logo-By1iQMf4.png",ne=a.footer`
  width: 100%;
  height: 24rem;
  padding: 2.5rem 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 3rem;

  background-color: ${({theme:t})=>t.colors["base-white"]};

  @media (max-width: 696px) {
    height: max-content;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }
`,M=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
  }

  a {
    font-weight: 700;
    cursor: pointer;
  }

  #company-img {
    width: 5.5rem;
  }

  a {
    &:hover {
      color: ${({theme:t})=>t.colors["base-bg"]};
    }
  }

  @media (max-width: 696px) {
    order: 1;
    margin-top: 1.5rem;
  }
`,ce=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,le=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,F=a.span`
  width: 2.3rem;
  height: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 50%;

  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${({theme:t})=>t.colors["base-gray-100"]};

  cursor: pointer;

  &:hover {
    background-color: ${({theme:t})=>t.colors["base-secundary-bg"]};

    svg {
      color: #fff;
    }
  }
`,de=a(M)`
  @media (max-width: 696px) {
    order: 3;
    margin-top: 0;
    div {
      width: 100%;
    }
  }
`,me=a(M)`
  @media (max-width: 696px) {
    margin: 0;
    order: 2;
    div {
      margin: 0;
    }
  }
`,he=a(M)`
  gap: 0.6rem;
`,$=a.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  p {
    cursor: pointer;

    &:hover {
      color: ${({theme:t})=>t.colors["base-bg"]};
    }
  }
`,xe=a.img`
  width: 10rem;
`,H=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    gap: 0.3rem;
    font-size: ${({theme:t})=>t.FontSizes["text-regular-sm"]};
    color: ${({theme:t})=>t.colors["base-text"]};
    font-weight: 500;
  }

  &:hover {
    color: ${({theme:t})=>t.colors["base-secundary-bg"]};
  }
`,pe=()=>e.jsxs(ne,{children:[e.jsxs(M,{children:[e.jsx(xe,{src:o0}),e.jsxs(ce,{children:[e.jsx(n,{color:"text",size:"s",children:"Gaspar Transportes © 2024 - Todos os direitos reservados."}),e.jsxs(n,{color:"text",size:"sm",weight:600,children:["Desenvolvido por",e.jsx("a",{href:"https://www.criard.com.br/",target:"_blank",children:e.jsx("img",{id:"company-img",src:oe,alt:""})})]})]}),e.jsxs(le,{children:[e.jsx(F,{children:e.jsx(E,{size:32,weight:"regular"})}),e.jsx(F,{children:e.jsx(I0,{size:32,weight:"regular"})})]})]}),e.jsxs(me,{children:[e.jsx(o,{color:"text",children:"Links Rápidos"}),e.jsxs(he,{children:[e.jsx(n,{color:"text",weight:600,children:e.jsx("a",{href:"#home",children:"Home"})}),e.jsx(n,{color:"text",weight:600,children:e.jsx("a",{href:"#about",children:" Sobre Nós"})}),e.jsx(n,{color:"text",weight:600,children:e.jsx("a",{href:"#services",children:"Serviços"})}),e.jsx(n,{color:"text",weight:600,children:e.jsx("a",{href:"#contact",children:"Contatos"})}),e.jsx(n,{color:"text",weight:600,children:e.jsx("a",{href:"#",children:"Política de Privacidade"})})]})]}),e.jsxs(de,{children:[e.jsx(o,{color:"text",children:"Contatos"}),e.jsx($,{children:e.jsxs(H,{children:[e.jsxs(n,{weight:600,children:[e.jsx(J,{size:28,color:"#000"}),"Whatsapp:"]}),e.jsxs("a",{href:"https://wa.me/5522997740161?text=",target:"_blank",children:[e.jsx(C,{size:20,weight:"bold"}),"(22) 99774-0161"]}),e.jsxs("a",{href:"https://wa.me/552299985-2325?text=",target:"_blank",children:[e.jsx(C,{size:20,weight:"bold"}),"(22) 99985-2325"]})]})}),e.jsx($,{children:e.jsxs(H,{children:[e.jsxs(n,{weight:600,children:[e.jsx(U,{size:28,color:"#000"}),"Email:"]}),e.jsxs(n,{size:"sm",color:"text",children:[e.jsx(C,{size:20,weight:"bold"}),e.jsx("a",{href:"mailto:comercial@gaspartransportes.com.br",children:"comercial@gaspartransportes.com.br"})]})]})}),e.jsx($,{children:e.jsxs(H,{children:[e.jsxs(n,{weight:600,children:[e.jsx(T0,{size:28,color:"#000"}),"Mapa:"]}),e.jsxs(n,{size:"sm",color:"text",children:[e.jsx(C,{size:20,weight:"bold"}),"Avenida Lacerda Agostinho, 2000, sala 06, ",e.jsx("br",{}),"Botafogo, Macaé-RJ 27.947-285"]})]})})]})]}),ge=a.header`
  width: 100%;
  height: 5.2rem;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({theme:t,stateHeader:i})=>i?t.colors["base-white"]:"transparent"};

  > svg {
    display: none;
    z-index: 9999;
  }

  @media (max-width: 970px) {
    > svg {
      display: block;
      color: ${({theme:t})=>t.colors["base-bg"]};
    }
  }
`,fe=a.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 970px) {
    display: none;
  }
`,y=a.a`
  font-size: ${({theme:t})=>t.FontSizes["text-regular-m"]};
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-decoration: none;

  color: ${({theme:t,stateHeader:i})=>i===!0?t.colors["base-secundary-bg"]:t.colors["base-white"]};
  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    color: ${({theme:t})=>t.colors["base-bg"]};
  }
`,ue=a.img`
  width: 9.2rem;
  z-index: 999;
`,we=a.nav`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: ${({isOpen:t})=>t?"flex":"none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99;

  background-color: ${({theme:t})=>t.colors["base-white"]};
`,A=a(y)`
  font-size: ${({theme:t})=>t.FontSizes["title-regular-m"]};
  color: ${({theme:t})=>t.colors["base-bg"]};
  font-weight: 500;
`,je=()=>{const[t,i]=l.useState(!1),[r,d]=l.useState(!1);l.useEffect(()=>{const m=()=>{window.scrollY>50?d(!0):d(!1)};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[]);const s=()=>{i(m=>!m)},c=G0();return e.jsxs(ge,{stateHeader:r,children:[e.jsx(ue,{src:o0,onClick:()=>c("/")}),t?e.jsx(K,{size:35,weight:"bold",onClick:s}):e.jsx($0,{size:35,weight:"bold",onClick:s}),e.jsxs(fe,{children:[e.jsx(y,{stateHeader:r,href:"#home",children:"Home"}),e.jsx(y,{stateHeader:r,href:"#about",children:"Sobre Nós"}),e.jsx(y,{stateHeader:r,href:"#services",children:"Serviços"}),e.jsx(y,{stateHeader:r,href:"#contact",children:"Contatos"})]}),e.jsxs(we,{isOpen:t,children:[e.jsx(A,{href:"#home",onClick:s,children:"Home"}),e.jsx(A,{href:"#about",onClick:s,children:"Sobre Nós"}),e.jsx(A,{href:"#principes",onClick:s,children:"Serviços"}),e.jsx(A,{href:"#Contatos",onClick:s,children:"Contatos"})]})]})},be=a.a`
  width: 3.5rem;

  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 2;
  border-radius: 99999px;

  --pulse: 0 0 0 0 #7fff00;
  animation: pulse 3s infinite;
  -webkit-animation: pulse 3s infinite;
  -moz-animation: pulse 3s infinite;
  -o-animation: pulse 3s infinite;

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @-o-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @-ms-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @-moz-keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-box-shadow: var(--pulse);
    }

    70% {
      -webkit-box-shadow: 0 0 0 20px rgba(0, 200, 0, 0);
    }

    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
    }
  }
`,ve=a.img`
  width: 3.5rem;
`,ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAQlBMVEVHcEwppxoppxoppxoppxkppxoqqB8ppxkppxoppxoppxr///+v3qlTuEf2/PVpwV47ry3Y79V+ynXG6MKX1ZDo9uaR2G4JAAAACnRSTlMAwKhrH9QHSO6MciZjeQAABWdJREFUeNrNW8liozAMDQQwdrwv//+rQ2bawcSLZJZSHXppwEJ6epJl+fHYIwN50r4b53lmbPkzdj19kuHxIzIQ2i3L5mTu6MVaTISODJCRkumq1fuZoWTuL9BhoMjVv3Sg5/qC9KxZOnLe8iPbJSO5dfmTVBg6dki6Y1iYKDssdLrH+if44YzPP2KEYWSnybgDCc+ZnSjzs3V9yk4W2ub+np0ufQMQpo5dIN10B/z2QPGq9bEaXLc+ToPpwvUXDaZ78NeAxJ5dLP0P808jIz3Rr9HKcmeCfEkZjONWafSj5eQ4DUj+V968EjFeIfPCcCwABA+vgkguDgERAwBrXlUxdj8MCML24QVKsDthADtAmRdKjNrFR5ADtH+hhUMxkalPhhOsH/lBNUcCQME2B/qFABZxRmb+6RsJsY5AzTNRr2NaSpnBteGwikDtPlfXOYx86OCqQOgaDKC3b3ZF/6qtokbjTTCi13dVshMGrUGHNoBrYhkbsDggyBDgaLdmAMNxgTAg48/j0l3MWDWLDRgSFBL3spLSUmByUqUMWEElFUOLWtUOFTqcYAhG1mxYf9EA5TcCFqKRAyxrEotxwhcMpxkRgSuctUXpwhGx+OWDsgfESikb9wZMBbqiRwA+oLABVjP+gxfH1I4SNgGt07BIgfT9Vt1EB0UTjHUW4kko6dBCSQHmw6EGAS2TCPivktQtkVD+NalBwCYGEI2sGMBf01oicmUDVAku8wmulpNnyAOrAeNkjyHGzCs+maCCQZVCSOJLvg+TqTIKScPDm+q3KSXwMgqfIJPpFFRYEOiUSZMdSjEIZGpr82otDr6fkOUw6CEa9NnqjKPWX9lQFBNiB7nP5nKsac3KqhiHI/SoyLgUXZ0oyGNjkQZ8isGImwRSAQ3VRXNRAZ4LN9tYHzMGYQZWQOZRrU9TgDUpoHD7vjSYi1HTqMCKAneWAk0YiIsEfjEGslGw4QJ3bRQUOYy3aCBgBcZWDovaBTASFcRcY5GKy7rrNSkGiJDAXNAVk5EuG1qsGki7tgVk4FaXyjpdTEYUqigzmTTS4Bve344xXuSiMJTT8ROsiERdg789ybiPJNc+qQBj9lkuyaq8LzadIO9DvkXowfKFlItSUS2+PluHWxGfNZyobI1mcFuhwOZVQQEF1i9zbWPiAcIpd8/DZwz42saEwptjgelKppsWAW+PabU/YSDO1Xk3eHzmJNXtuYW/QGSwyJNGlaq3CscjG/z0HIcnT5f3MCPQovGoElBwmWsmc8QehgJNKo8tgpV3RkppomSgMJs4ArTpwFSCavEqsFXaQwWdaV4/StkO7pcTiAh48/pRi1nDrdqSD9TONu0mN1pEs7oUB751I5ZJlbW6kUIHFq6lGRLxl0SeGg3Qkc0uDG7ydO24YnN2SXAYFEu4W/zn19ffntuNtVTwXlMvXCPBg7PNkRlwxtKBB5drm0zxDeEHn/0y/VGYAWc8BDy7rk0LmE8dRHJ4DOwZRvjwWtZP6Bfm91YtYj3PnJ9DuyYCHt+L1xGByLOHBxjsgeWh+YXsKA9tqHqPTnDkRjiSIRazd3kHM3d+qI7kexuRYblV7oTli9NctILB/8XOpgBLIsOj8hbFjHLZeO+3HVVT+WGuwJH90/JMYTzM9g+D0uVH1ITdxP67GkTn7PIw22Mi8bYnQC/VQryJSIm2kpH85oHG+0c67x9qvX2s9/7B5vtHu6/DAfqexXT3eP/9Fxzuv+LxTs7nXnLZcddoOBEI+y583X3R6f6rXm8jHL/uNNNj1z+HgwHZH7/6SQ6A8aRrn3tVOPHW6XDvpdfHAqPheeu1319w8fkXXP3+DZffr7j+/wdL9g66aY8iwQAAAABJRU5ErkJggg==",ze=()=>e.jsx(be,{href:"https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0",target:"_blank",children:e.jsx(ve,{src:ye,title:"Entre em Contato Conosco!",alt:""})}),n0=l.createContext({}),Ce=({children:t})=>{const[i,r]=l.useState([]),d=l.useCallback(async()=>{try{const s=await s0.get("feedInsta"),{data:c}=s;await localStorage.setItem("feedInsta:gasparTransportes1.0",JSON.stringify(c.data)),r(c.data)}catch(s){console.log("Error ao buscar o feed do instagram =>",s)}},[]);return l.useEffect(()=>{const s=localStorage.getItem("feedInsta:gasparTransportes1.0");s&&r(JSON.parse(s)),d()},[d]),e.jsx(n0.Provider,{value:{feedInstagramData:i},children:t})},c0=()=>l.useContext(n0),ke=a(L0)`
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`,Ae=a(V0)`
  z-index: 9999;
  width: 85%;
  max-height: max-content;

  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  border-radius: 18px;
  padding: 2rem;
  background: #f2f3ee;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  @media (max-width: 720px) {
    padding: 1rem;
    flex-wrap: wrap;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 1rem 4rem 1rem;
  }
`,Se=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Me=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;

  p {
    font-size: 12px;
  }
`,Ie=a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 550px) {
    width: 100%;
  }
`,Te=a(E0)`
  position: absolute;
  background: transparent;
  border: 0;
  top: -2rem;
  right: -3rem;
  cursor: pointer;
  color: ${({theme:t})=>t.colors["base-white"]};
`,Q=a.a`
  width: 50%;
  video {
    width: 85%;
    max-height: 70vh;
    border-radius: 10px;
  }

  img {
    width: 85%;
    border-radius: 10px;
    object-fit: cover;
    max-height: 37rem;
  }

  @media (max-width: 550px) {
    width: 100%;

    video,
    img {
      width: 100%;
      max-height: 25rem;
    }
  }
`,$e=({idPostInstagram:t})=>{const{feedInstagramData:i}=c0(),r=i.find(d=>d.id===t);return e.jsxs(P0,{children:[e.jsx(ke,{}),e.jsxs(Ae,{children:[e.jsx(Te,{children:e.jsx(K,{size:24,weight:"bold"})}),(r==null?void 0:r.media_type)!=="IMAGE"?e.jsx(Q,{href:r==null?void 0:r.permalink,target:"_blank",children:e.jsx("video",{controls:!0,controlsList:"nodownload",children:e.jsx("source",{src:r==null?void 0:r.media_url,type:"video/mp4"})})}):e.jsx(Q,{href:r==null?void 0:r.permalink,target:"_blank",children:e.jsx("img",{src:r.media_url,alt:""})}),e.jsxs(Ie,{children:[e.jsxs(Se,{children:[e.jsxs(Me,{children:[e.jsx(o,{size:"s",color:"text",children:r==null?void 0:r.username}),e.jsx(n,{size:"sm",children:r!=null&&r.timestamp?i0(new Date(r.timestamp),"dd MMMM yyyy",{locale:r0}):"Data indisponível"})]}),e.jsx(E,{size:30,color:"#000",id:"logoInstagram"})]}),e.jsx(n,{size:"sm",weight:500,children:r==null?void 0:r.caption})]})]})]})},P="/assets/ImgAbout1-DTUjLtmO.jpg",He="/assets/ImgBannerTwo-C6n5YPXy.jpg",Be="/assets/ImgBannerThree-BVu13aAj.jpg",Le=a.section`
  width: 100%;
  height: 100vh;

  .mySwiper {
    width: 100%;
    height: 100vh;
  }
`,B=a(e0)`
  width: 100%;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contentTextCenter {
    width: 60%;
    align-items: center;
    left: 20%;
    text-align: center;
  }

  @media (max-width: 768px) {
    .contentTextCenter {
      width: 100%;
      left: 0;
    }
  }
`,L=a.img`
  width: 100%;
  height: 100vh;

  object-fit: cover;
  z-index: 1;
  filter: brightness(0.5);
`,V=a.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 35%;
  left: 6%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 2rem;
  }
`,Ve=()=>e.jsx(Le,{id:"home",children:e.jsxs(t0,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:[a0],className:"mySwiper",children:[e.jsxs(B,{children:[e.jsx(L,{src:P,alt:""}),e.jsxs(V,{"data-aos":"fade-right","data-aos-duration":"1000",children:[e.jsx(o,{color:"white",size:"hero",children:"Transporte Rápido, Seguro e com Total Confiabilidade!"}),e.jsx(n,{color:"white",children:"Oferecemos soluções logísticas completas para conectar seu negócio ao destino certo, com confiança e eficiência."}),e.jsx(f,{bgColor:"bg",btnLarge:!1,children:e.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0",target:"_blank",children:"Fazer Pedido"})})]})]}),e.jsxs(B,{children:[e.jsx(L,{src:He,alt:""}),e.jsxs(V,{className:"contentTextCenter","data-aos":"fade-right","data-aos-duration":"1000",children:[e.jsx(o,{color:"white",size:"hero",children:"Entregamos Soluções de Logística Que Vão Além da Distância!"}),e.jsx(n,{color:"white",children:"Oferecemos soluções logísticas completas para conectar seu negócio ao destino certo, com confiança e eficiência."}),e.jsx(f,{bgColor:"bg",btnLarge:!1,children:e.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0",target:"_blank",children:"Fazer Pedido"})})]})]}),e.jsxs(B,{children:[e.jsx(L,{src:Be,alt:""}),e.jsxs(V,{"data-aos":"fade-right","data-aos-duration":"1000",children:[e.jsx(o,{color:"white",size:"hero",children:"Sua Carga, Nosso Compromisso: Chegamos Onde Você Precisa!"}),e.jsx(n,{color:"white",children:"Oferecemos soluções logísticas completas para conectar seu negócio ao destino certo, com confiança e eficiência."}),e.jsx(f,{bgColor:"bg",btnLarge:!1,children:e.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0",target:"_blank",children:"Fazer Pedido"})})]})]})]})});a.div`
  width: 100%;
  height: 2.5rem;
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({theme:t})=>t.colors["base-bg"]};
`;a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({theme:t})=>t.colors["base-white"]};
`;a.a`
  font-size: ${({theme:t})=>t.FontSizes["text-regular-sm"]};
  color: ${({theme:t})=>t.colors["base-white"]};
`;a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;const Ee="/assets/ImgAbout-CsoVS0Ld.jpeg",Pe=a.section`
  width: 100%;
  max-width: 112.5rem;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 2rem 4rem;

  margin: 0 auto;

  @media (max-width: 767px) {
    height: max-content;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    padding: 1.5rem;
    margin-top: 3rem;
  }
`,Oe=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;

  @media (max-width: 767px) {
    margin-top: -5rem;
  }
`,De=a.div`
  width: 14rem;
  position: relative;

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`,l0=a.span`
  width: 8rem;
  height: 10rem;

  position: absolute;
  top: 9.8rem;
  left: -1.1rem;

  border-top: 5px solid ${({theme:t})=>t.colors["base-secundary-bg"]};
  border-left: 5px solid ${({theme:t})=>t.colors["base-secundary-bg"]};
`,Ne=a.img`
  width: 14rem;
  height: 23rem;
  object-fit: cover;
  border: none;

  margin-top: 11rem;

  @media (max-width: 768px) {
    height: 19rem;
  }

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`,Re=a.div`
  width: 14rem;
  position: relative;

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`,qe=a(l0)`
  width: 6rem;
  border-top: 0;
  border-left: 0;

  border-right: 5px solid ${({theme:t})=>t.colors["base-secundary-bg"]};
  border-bottom: 5px solid ${({theme:t})=>t.colors["base-secundary-bg"]};

  position: absolute;
  top: 14rem;
  left: 9.1rem;

  @media (max-width: 768px) {
    top: 10.2rem;
  }

  @media (max-width: 600px) {
    left: 8rem;
  }

  @media (max-width: 600px) {
    left: 8rem;
  }

  @media (max-width: 374px) {
    left: 6rem;
  }
`,Ze=a.img`
  width: 14rem;
  height: 23rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 19rem;
  }

  @media (max-width: 600px) {
    width: 13rem;
  }

  @media (max-width: 374px) {
    width: 11rem;
  }
`,Ge=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  p,
  h1 {
    max-width: 75%;
  }

  .TextAbout {
    margin-top: 1.2rem;
  }

  button {
    margin-top: 1rem;
  }

  #title {
    font-size: min(2.6rem, 6.5vw);
  }

  @media (max-width: 768px) {
    width: 100%;

    p,
    h1 {
      max-width: 100%;
    }
  }
`,Fe=()=>(l.useEffect(()=>{z.init()},[]),e.jsxs(Pe,{id:"about",children:[e.jsxs(Ge,{"data-aos":"fade-right","data-aos-duration":"1000",children:[e.jsx(o,{size:"s",children:"Sobre Nós"}),e.jsx(o,{color:"text",id:"title",children:"A força e a experiência que movem suas entregas"}),e.jsxs(n,{size:"s",className:"TextAbout",children:["Nossa história é marcada por comprometimento e excelência.",e.jsx("strong",{children:"Com anos de experiência, somos especialistas em oferecer as soluções logísticas ideais"}),"para que suas entregas sejam ágeis e seguras.",e.jsx("strong",{children:"Confiança, qualidade e dedicação estão no centro de tudo o que fazemos."})]}),e.jsxs(n,{children:["Cuidamos de cada detalhe.",e.jsx("strong",{children:"Desde o atendimento personalizado até a entrega pontual"}),"estamos sempre ao seu lado, garantindo que",e.jsx("strong",{children:"suas expectativas sejam superadas em cada etapa do transporte."})]}),e.jsx(f,{bgColor:"bg",btnLarge:!1,children:e.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5522997740161&text&type=phone_number&app_absent=0",target:"_blank",children:"Fazer Pedido!"})})]}),e.jsxs(Oe,{"data-aos":"zoom-in","data-aos-duration":"1000",children:[e.jsxs(De,{children:[e.jsx(l0,{}),e.jsx(Ne,{src:P})]}),e.jsxs(Re,{children:[e.jsx(qe,{}),e.jsx(Ze,{src:Ee})]})]})]})),Qe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3cg%3e%3cpath%20d='M488%200h-18.527c-6.809%200-12.368%205.547-12.368%2012.367v94.656H227.801V10.801c0-5.508-4.473-9.977-9.965-9.977H73.57c-5.496%200-9.976%204.469-9.976%209.977v96.222H43.258V68.055a7.536%207.536%200%200%200-7.531-7.535%207.53%207.53%200%200%200-7.536%207.535V496.93h-13.12V15.07h13.12v22.844a7.524%207.524%200%200%200%207.536%207.535%207.531%207.531%200%200%200%207.53-7.535V12.367C43.258%205.547%2037.704%200%2030.892%200H12.367C5.555%200%200%205.547%200%2012.367v487.266C0%20506.453%205.555%20512%2012.367%20512H488c6.813%200%2012.367-5.547%2012.367-12.367V12.367C500.367%205.547%20494.812%200%20488%200zM132.328%2015.895h26.746v24.351l-7.715-6.039a9.19%209.19%200%200%200-11.312%200l-7.719%206.04zm-53.664%200h38.598V52.34c0%205.055%204.117%209.172%209.18%209.172%204.097%200%204.87-1.34%2019.261-12.598l13.61%2010.652c6.007%204.692%2014.832.395%2014.832-7.226V15.895h38.585v91.128H78.664zM43.258%20122.094h413.847v13.12H43.258zm0%2028.187h413.847v137.606h-63.55V172.195c0-6.14-5.004-11.133-11.14-11.133H117.952c-6.137%200-11.14%204.993-11.14%2011.133v115.692H43.258zm189.765%2078.313%2017.16-13.422%2017.16%2013.422c6.192%204.847%2015.34.433%2015.34-7.473v-44.988h95.801v111.754H121.883V176.133h95.8v44.988c0%207.848%209.067%2012.348%2015.34%207.473zm-.27-18.918v-33.543h34.86v33.543c-12.218-9.559-13.254-11.082-17.43-11.082-4.218%200-5.296%201.59-17.43%2011.082zM43.259%20302.957h413.847v13.11H43.258zm291.726%2074.793c4.106%200%204.805-1.277%2019.68-12.918l14.016%2010.961v.008c6.07%204.715%2014.879.375%2014.879-7.262v-37.402h32.609V468.75H293.16V331.137h32.613v37.402c0%205.082%204.13%209.211%209.211%209.211zm5.856-21.238v-25.375h27.648v25.375c-8.36-6.535-9.797-8.328-13.824-8.328-3.988%200-5.25%201.628-13.824%208.328zm-126.102%2077.347a7.537%207.537%200%200%200-7.535%207.536v27.355H84.195V331.14h32.614v37.4c0%205.081%204.129%209.21%209.21%209.21%204.094%200%204.758-1.246%2019.684-12.918l14.004%2010.961c.008%200%20.008.008.008.008%206.066%204.71%2014.879.375%2014.879-7.262v-37.398h32.61v80.117a7.537%207.537%200%200%200%207.534%207.535%207.534%207.534%200%200%200%207.535-7.535v-80.121h55.82V468.75h-55.82v-27.355a7.537%207.537%200%200%200-7.535-7.536zm-82.86-77.347V331.14h27.645v25.37c-8.214-6.421-9.734-8.327-13.82-8.327-4.055%200-5.496%201.816-13.824%208.328zm-88.62-25.375h25.867V468.75H43.258zM457.105%20496.93H43.258v-13.11h413.847zm28.192%200h-13.121v-63.032a7.521%207.521%200%200%200-7.535-7.53%207.531%207.531%200%200%200-7.536%207.53v34.852h-25.867V331.137h25.867v72.625a7.54%207.54%200%200%200%207.536%207.535%207.53%207.53%200%200%200%207.535-7.535V15.07h13.12zm0%200'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%20class=''%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Y="/assets/CardCargasIcon-BYqyt1jK.svg",d0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%20450%20450'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M155.25%20117.67c-.79%200-1.59-.19-2.31-.57a5.002%205.002%200%200%201-2.69-4.43V13.56c0-2.76%202.24-5%205-5s5%202.24%205%205v89.54l17.56-12.23c3.83-2.67%208.99-2.67%2012.82%200l17.57%2012.23V13.56c0-2.76%202.24-5%205-5s5%202.24%205%205v99.11c0%201.86-1.03%203.57-2.69%204.43-1.65.86-3.64.74-5.17-.33l-25.43-17.7a1.22%201.22%200%200%200-1.39%200l-25.42%2017.7c-.85.6-1.85.9-2.85.9z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M226.77%20367.01H30.65C16.51%20367.01%205%20355.5%205%20341.36V34.21C5%2020.07%2016.51%208.56%2030.65%208.56H337.8c14.14%200%2025.65%2011.51%2025.65%2025.65v186.88c0%202.76-2.24%205-5%205s-5-2.24-5-5V34.21c0-8.63-7.02-15.65-15.65-15.65H30.65C22.02%2018.56%2015%2025.58%2015%2034.21v307.15c0%208.63%207.02%2015.65%2015.65%2015.65h196.12c2.76%200%205%202.24%205%205s-2.24%205-5%205z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M81.43%20284.73H48.82c-2.76%200-5-2.24-5-5s2.24-5%205-5h32.61c2.76%200%205%202.24%205%205s-2.24%205-5%205zM81.43%20313.22H48.82c-2.76%200-5-2.24-5-5s2.24-5%205-5h32.61c2.76%200%205%202.24%205%205s-2.24%205-5%205zM330.52%20413.36c-47.64%200-86.39-38.76-86.39-86.39s38.76-86.39%2086.39-86.39%2086.39%2038.75%2086.39%2086.39-38.75%2086.39-86.39%2086.39zm0-162.79c-42.12%200-76.39%2034.27-76.39%2076.39s34.27%2076.39%2076.39%2076.39%2076.39-34.27%2076.39-76.39c.01-42.12-34.26-76.39-76.39-76.39z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M330.52%20441.44c-63.12%200-114.48-51.35-114.48-114.48%200-63.12%2051.35-114.48%20114.48-114.48S445%20263.84%20445%20326.96c0%2063.13-51.36%20114.48-114.48%20114.48zm0-218.95c-57.61%200-104.48%2046.87-104.48%20104.48s46.87%20104.48%20104.48%20104.48S435%20384.57%20435%20326.96s-46.87-104.47-104.48-104.47z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M313.5%20369.33c-3.47%200-6.74-1.35-9.2-3.81l-19.73-19.73c-6.2-6.2-6.2-16.29%200-22.49s16.29-6.2%2022.49%200l6.44%206.44%2040.48-40.48c3-3%207-4.66%2011.25-4.66s8.24%201.65%2011.25%204.66c6.2%206.2%206.2%2016.29%200%2022.49l-53.78%2053.78c-2.46%202.45-5.72%203.8-9.2%203.8zm-17.68-40.69c-1.51%200-3.03.58-4.18%201.73-2.3%202.3-2.3%206.05%200%208.35l19.73%2019.73c1.14%201.13%203.12%201.13%204.25%200l53.78-53.78c2.3-2.3%202.3-6.05%200-8.35-1.12-1.12-2.6-1.73-4.18-1.73s-3.06.61-4.18%201.73l-44.01%2044.01a5.003%205.003%200%200%201-7.07%200l-9.97-9.97a5.874%205.874%200%200%200-4.17-1.72z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Ye="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%2064%2064'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%3e%3cg%3e%3cg%20data-name='Layer%2023'%3e%3cpath%20d='M57.71%2032.07H54L36%2020.33a4.16%204.16%200%200%200%20.25-1.39A4.21%204.21%200%200%200%2033%2014.86v-2.4a3%203%200%200%200%202.21-2.91V6a3%203%200%200%200-3-3h-.24a3%203%200%200%200-3%203v3.55A3%203%200%200%200%2031%2012.44v3.29a1%201%200%200%200%201%201%202.22%202.22%200%200%201%202.21%202.21%202.16%202.16%200%200%201%200%20.23l-1.66-1.07a1%201%200%200%200-1.09%200l-1.64%201.07a2.16%202.16%200%200%201%200-.23%201%201%200%200%200-2%200%204.16%204.16%200%200%200%20.18%201.39L10%2032.07H6.29a1%201%200%200%200-1%201V60a1%201%200%200%200%201%201h51.42a1%201%200%200%200%201-1V33.07a1%201%200%200%200-1-1ZM30.88%206a1%201%200%200%201%201-1h.24a1%201%200%200%201%201%201v3.55a1%201%200%200%201-1%201h-.24a1%201%200%200%201-1-1ZM32%2020.14l1.1.72a2.14%202.14%200%200%201-2.2%200ZM29.13%2022a4.17%204.17%200%200%200%205.74%200l15.42%2010.07H13.71Zm27.58%2037H7.29V34.07h49.42Z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M49.72%2035.17a1%201%200%200%200-1%201v19.54h-1.94V36.17a1%201%200%200%200-1-1h-3.94a1%201%200%200%200-1%201v19.54h-1.93V36.17a1%201%200%200%200-1-1H34a1%201%200%200%200-1%201v19.54h-2V36.17a1%201%200%200%200-1-1h-3.91a1%201%200%200%200-1%201v19.54h-1.93V36.17a1%201%200%200%200-1-1h-3.94a1%201%200%200%200-1%201v19.54h-1.94V36.17a1%201%200%200%200-1-1h-3.93a1%201%200%200%200-1%201v20.54a1%201%200%200%200%202%200V37.17h1.94v19.54a1%201%200%200%200%201%201h3.94a1%201%200%200%200%201-1V37.17h1.94v19.54a1%201%200%200%200%201%201h3.94a1%201%200%200%200%201-1V37.17H29v19.54a1%201%200%200%200%201%201h4a1%201%200%200%200%201-1V37.17h1.94v19.54a1%201%200%200%200%201%201h3.94a1%201%200%200%200%201-1V37.17h1.94v19.54a1%201%200%200%200%201%201h3.94a1%201%200%200%200%201-1V37.17h2.94a1%201%200%200%200%200-2Z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M53.65%2038.61a1%201%200%200%200-1%201v17.1a1%201%200%200%200%202%200v-17.1a1%201%200%200%200-1-1Z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",_e="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M248%20240a7.976%207.976%200%200%200%205.657-2.343l72-72a8%208%200%200%200%200-11.314l-24-24a8%208%200%200%200-11.314%200L248%20172.686l-10.343-10.343a8%208%200%200%200-11.314%200l-24%2024a8%208%200%200%200%200%2011.314l40%2040A7.976%207.976%200%200%200%20248%20240Zm-16-60.686%2010.343%2010.343a8%208%200%200%200%2011.314%200L296%20147.314%20308.686%20160%20248%20220.686%20219.314%20192Z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M488%20400V264a8%208%200%200%200-8-8H369.99c25.127-40.981%2037.91-92.009%2038.01-151.987a8%208%200%200%200-4.115-7.006l-144-80a8%208%200%200%200-7.77%200l-144%2080a8%208%200%200%200-4.115%206.98c0%201.3.048%2032.223%208.855%2072.067%207.214%2032.638%2021.79%2076.777%2050.9%20111.946H136a56.064%2056.064%200%200%200-56%2056%2024.028%2024.028%200%200%201-24%2024%2040.045%2040.045%200%200%200-40%2040v40a8%208%200%200%200%208%208h48.679a47.991%2047.991%200%200%200%2094.642%200h161.358a47.991%2047.991%200%200%200%2094.642%200H488a8%208%200%200%200%208-8v-40a8%208%200%200%200-8-8ZM48%20385.376V400H33.376A24.119%2024.119%200%200%201%2048%20385.376ZM120%20480a32%2032%200%201%201%2032-32%2032.036%2032.036%200%200%201-32%2032Zm72-40h-24.679a47.991%2047.991%200%200%200-94.642%200H32v-24h24a8%208%200%200%200%208-8v-24.8A40.067%2040.067%200%200%200%2096%20344a40.045%2040.045%200%200%201%2040-40h56Zm0-176v24h-6.739c-57.27-58.265-64.29-156.913-65.143-179.358L256%2033.152l135.965%2075.536c-.786%2059.1-14.58%20108.607-41.027%20147.312H320.88c27.195-32.228%2042.763-75.289%2046.326-128.36a8%208%200%200%200-4.1-7.529L259.885%2062.765a8%208%200%200%200-7.77%200l-102.524%2056.958a8%208%200%200%200-4.072%207.811c1.815%2017.67%205.949%2044.513%2015.329%2072.048%208.219%2024.128%2018.976%2044.546%2032.008%2060.833A7.949%207.949%200%200%200%20192%20264Zm-16.006-69.578a315.127%20315.127%200%200%201-13.981-63.3L256%2078.91l94.862%2052.7c-4.43%2053.152-21.831%2094.945-51.762%20124.39h-90.638l.893-.789c-13.672-15.487-24.897-35.939-33.361-60.789ZM328.679%20440H208v-24h132.261a47.866%2047.866%200%200%200-11.582%2024ZM376%20480a32%2032%200%201%201%2032-32%2032.036%2032.036%200%200%201-32%2032Zm-168-80V272h264v128Zm272%2040h-56.679a47.866%2047.866%200%200%200-11.582-24H480Z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M112%20328v48a8%208%200%200%200%208%208h48a8%208%200%200%200%208-8v-48a8%208%200%200%200-8-8h-48a8%208%200%200%200-8%208Zm16%208h32v32h-32Z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3ccircle%20cx='120'%20cy='448'%20r='16'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/circle%3e%3ccircle%20cx='376'%20cy='448'%20r='16'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/circle%3e%3c/g%3e%3c/svg%3e",_="/assets/TruckIcon-D3T8-wlC.svg",We="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%206.827%206.827'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20fill-rule='evenodd'%3e%3cg%3e%3cpath%20d='M4.066%202.468a.07.07%200%200%201-.05-.12l.65-.65a.07.07%200%200%201%20.099.1l-.65.65a.07.07%200%200%201-.05.02zM3.223%201.78a.07.07%200%200%201-.05-.12l.35-.35a.112.112%200%200%200-.157-.159l-.499.499a.07.07%200%200%201-.1-.1l.5-.498a.252.252%200%200%201%20.356.356l-.35.35a.07.07%200%200%201-.05.021zM2.356%201.547a.07.07%200%200%201-.05-.12l.385-.384a.112.112%200%200%200-.158-.157L2%201.418a.07.07%200%200%201-.1-.1l.533-.531a.25.25%200%200%201%20.178-.074.252.252%200%200%201%20.178.43l-.384.383a.07.07%200%200%201-.05.021zM4.323%205.738h2.014V3.737H4.323zm2.084.14H4.253a.07.07%200%200%201-.07-.07V3.667a.07.07%200%200%201%20.07-.07h2.154a.07.07%200%200%201%20.07.07v2.14a.07.07%200%200%201-.07.071z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M5.33%203.994a.07.07%200%200%201%20.047.019l.23.21v-.486h-.554v.485l.23-.21a.07.07%200%200%201%20.047-.018zm-.347.457a.07.07%200%200%201-.07-.07v-.714a.07.07%200%200%201%20.07-.07h.694a.07.07%200%200%201%20.07.07v.714a.07.07%200%200%201-.117.052l-.3-.274-.3.274a.07.07%200%200%201-.047.018zM3.017%202.742a.07.07%200%200%201-.035-.01L1.084%201.636a.07.07%200%200%201-.014-.11l.339-.34a.07.07%200%200%201%20.068-.018l2.397.643a.07.07%200%200%201-.036.135L1.48%201.314l-.247.247%201.82%201.05a.07.07%200%200%201-.036.13z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M4.868%203.737a.07.07%200%200%201-.067-.052l-.284-1.06a.07.07%200%200%201%20.135-.036l.284%201.06a.07.07%200%200%201-.068.088zm-.615.579a.07.07%200%200%201-.06-.035l-.462-.8a.07.07%200%200%201%20.121-.07l.462.8a.07.07%200%200%201-.06.105z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M5.095%201.143a.929.929%200%200%200-.396.118c-.174.088-.281.19-.417.318l-.073.068-.327.303c-.999.92-1.796%201.655-2.393%203.024a7.199%207.199%200%200%200%20.72-.364c.938-.547%201.571-1.233%202.304-2.029l.303-.327.069-.073c.128-.136.23-.243.318-.418.131-.259.153-.47.06-.563-.038-.038-.096-.057-.169-.057zM1.357%205.176a.07.07%200%200%201-.065-.097c.616-1.5%201.445-2.265%202.495-3.232l.327-.303.072-.067c.138-.131.257-.244.45-.342.32-.162.585-.175.726-.034.14.14.128.405-.034.726-.097.193-.21.312-.341.45l-.068.072-.302.327c-.741.804-1.38%201.498-2.337%202.055a6.95%206.95%200%200%201-.896.44.07.07%200%200%201-.027.005z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M1.52%204.806a.07.07%200%200%201-.034-.01L.385%204.16a.07.07%200%200%201-.015-.11l.197-.196a.07.07%200%200%201%20.067-.018l1.177.315a.07.07%200%200%201-.036.135L.637%203.982l-.103.103%201.022.59a.07.07%200%200%201-.035.13zM2.364%206.114h-.01a.07.07%200%200%201-.051-.035l-.636-1.101a.07.07%200%200%201%20.122-.07l.59%201.021.103-.103-.305-1.137a.07.07%200%201%201%20.135-.037l.316%201.177a.07.07%200%200%201-.019.068l-.196.196a.07.07%200%200%201-.05.02z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Xe=a.section`
  width: 100%;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;

  margin: 0 auto;

  background-color: ${({theme:t})=>t.colors["base-white-100"]};

  .mySwiper {
    width: 70%;
    height: 19rem;
    margin: 4.125rem;
  }

  .swiper-wrapper {
    height: 90%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .mySwiper {
      width: 100%;
    }
  }
`,Je=a.div`
  width: 30%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  button {
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-self: flex-start;
  }

  @media (max-width: 726px) {
    width: 100%;
  }
`,x=a(e0)`
  text-align: center;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem;
  border: none;
  border-radius: 6px;

  position: relative;
  cursor: pointer;

  transition: 0.2s ease-in;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background: ${({theme:t})=>t.colors["base-white"]};

  &:hover {
    background-color: ${({theme:t})=>t.colors["base-secundary-bg"]};

    p,
    h1 {
      color: ${({theme:t})=>t.colors["base-white"]};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,p=a.img`
  width: 6rem;
  color: red;
`,g=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;

  margin-top: 1.1rem;

  a {
    font-weight: 500;
    color: ${({theme:t})=>t.colors["base-bg"]};
    margin-top: -0.2rem;
  }
`,Ue=()=>e.jsxs(Xe,{id:"services",children:[e.jsxs(Je,{children:[e.jsx(o,{size:"l",children:"Nossos Serviços"}),e.jsx(n,{weight:500,color:"text",children:"Mais do que transportar mercadorias, entregamos confiança e soluções personalizadas que atendem às suas necessidades. Precisão e compromisso em cada entrega."}),e.jsx(f,{bgColor:"bg",btnLarge:!0,children:e.jsx("a",{href:"https://wa.me/5522999515222?text=",target:"_blank",children:"Saiba Mais!"})})]}),e.jsxs(t0,{spaceBetween:30,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},980:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:2,spaceBetween:50},2e3:{slidesPerView:3,spaceBetween:50}},modules:[N0,a0],className:"mySwiper",children:[e.jsxs(x,{children:[e.jsx(p,{src:Ye}),e.jsx(g,{children:e.jsx(o,{children:"Transporte de cargas offshore"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:_}),e.jsx(g,{children:e.jsx(o,{children:"Transporte estadual e interestadual"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:Y}),e.jsx(g,{children:e.jsx(o,{children:"Movimentação de carga"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:Y}),e.jsx(g,{children:e.jsx(o,{children:"Locação de Equipamentos, Guindastes e Caminhão Munck"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:_e}),e.jsx(g,{children:e.jsx(o,{children:"Transporte de Cargas Especiais"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:_}),e.jsx(g,{children:e.jsx(o,{children:"Transporte de Cargas de Pequeno Porte"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:We}),e.jsx(g,{children:e.jsx(o,{children:" Embarque em Aeroportos"})})]}),e.jsxs(x,{children:[e.jsx(p,{src:Qe}),e.jsx(g,{children:e.jsx(o,{children:" Armazém Geral "})})]}),e.jsxs(x,{children:[e.jsx(p,{src:d0}),e.jsx(g,{children:e.jsx(o,{children:"Logística de materiais com Rastreamento "})})]})]})]}),Ke="/assets/ImgAbout2-DNi1a9mw.jpg",e2="/assets/MoneyIcon-D4dreGz6.svg",t2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='512'%20height='512'%20x='0'%20y='0'%20viewBox='0%200%2090%2090'%20style='enable-background:new%200%200%20512%20512'%20xml:space='preserve'%20class=''%3e%3cg%3e%3cpath%20d='M44.643%2041.38%2026.59%2047.661a1.136%201.136%200%200%200-.771%201.067v6.818c-.016%201.536%202.297%201.536%202.277%200v-6.011l16.916-5.885%2016.928%205.885v6.011c-.068%201.578%202.338%201.578%202.266%200v-6.818c0-.479-.303-.912-.762-1.067L45.393%2041.38c-.313-.109-.444-.105-.75%200z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20d='M42.396%207.926c6.068-1.437%2012.131%202.261%2013.584%208.261%201.447%206-2.275%2012.005-8.344%2013.437-6.072%201.432-12.135-2.261-13.584-8.261-1.452-6%202.272-12.003%208.344-13.437zm-.531-2.202c-7.254%201.713-11.76%208.958-10.02%2016.161%201.738%207.203%209.066%2011.656%2016.322%209.943s11.756-8.959%2010.016-16.162c-1.74-7.202-9.068-11.656-16.318-9.942z'%20clip-rule='evenodd'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20d='M33.58%2037.374h22.869c3.041%200%205.006.532%206.619%201.708%201.615%201.177%202.965%203.12%204.443%206.172l6.896%2014.24c.957%201.975%201.176%203.479.863%204.536-.313%201.063-1.15%201.934-3.01%202.651l-7.28%202.829c-1.197.468-2.094.345-2.844-.057-.744-.401-1.338-1.146-1.65-2.037-.625-1.785-.234-3.916%202.207-4.963%202.168-.932%205.943-2.463%205.943-2.463%201.553-.495.609-2.823-.85-2.099%200%200-3.77%201.531-5.988%202.484-3.459%201.485-4.412%205.063-3.453%207.792.125.364.291.714.479%201.047-2.896%205.536-7.74%209.65-13.813%2012.963-6.072-3.313-10.912-7.427-13.813-12.963.193-.333.354-.683.484-1.047.959-2.729.006-6.307-3.459-7.792-2.213-.953-5.984-2.484-5.984-2.484-1.463-.724-2.406%201.604-.848%202.099%200%200%203.77%201.532%205.941%202.463%202.438%201.047%202.834%203.178%202.209%204.963-.313.891-.912%201.636-1.656%202.037-.744.402-1.646.525-2.844.057l-7.275-2.828c-1.859-.718-2.699-1.589-3.012-2.651-.316-1.058-.094-2.562.859-4.536l6.906-14.24c1.475-3.052%202.824-4.995%204.438-6.172%201.617-1.177%203.58-1.709%206.623-1.709zm0-2.26c-3.313%200-5.875.609-7.959%202.131-2.084%201.52-3.6%203.827-5.146%207.02l-6.895%2014.24c-1.09%202.249-1.553%204.317-1.006%206.172.553%201.854%202.119%203.249%204.375%204.125l7.275%202.828c1.73.672%203.418.531%204.734-.178.225-.12.438-.265.641-.417%203.297%205.833%208.531%2010.152%2014.881%2013.511a1.13%201.13%200%200%200%201.063%200c6.35-3.359%2011.588-7.678%2014.881-13.511.207.152.416.298.645.417%201.313.708%203.006.85%204.734.178l7.281-2.828c2.256-.876%203.818-2.272%204.365-4.125.547-1.854.094-3.923-1-6.172l-6.896-14.24c-1.547-3.192-3.066-5.5-5.15-7.02-2.078-1.521-4.641-2.131-7.953-2.131z'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3cpath%20fill-rule='evenodd'%20d='M54.549%2058.114%2042.814%2069.953c-.078.078-.172.078-.25%200l-7.078-7.079%202.197-2.25%204.213%204.224a1.144%201.144%200%200%200%201.605%200l8.707-8.713zm-2.25-4.369a2.801%202.801%200%200%200-1.684.781l-7.91%207.911-3.412-3.407c-.932-.943-2.51-.943-3.443%200l-1.973%202.005a2.447%202.447%200%200%200%200%203.434l7.094%207.093c1.082%201.083%202.359%201.094%203.438.01l11.75-11.859c.969-.979.77-2.594-.012-3.422l-1.941-1.922c-.554-.541-1.282-.692-1.907-.624z'%20clip-rule='evenodd'%20fill='%23023345'%20opacity='1'%20data-original='%23000000'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",a2="/assets/IconServices-Eslho9q-.svg",i2=a.section`
  width: 100%;
  max-width: 112.5rem;
  height: 45rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

  margin: 0 auto;
  padding: 2rem 4rem;

  @media (max-width: 696px) {
    height: max-content;
    flex-wrap: wrap;
    gap: 9rem;
    margin-bottom: 7rem 0;

    padding: 2rem;
  }
`,r2=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  p {
    margin-top: 0.4rem;
  }

  p,
  h1 {
    max-width: 75%;
  }

  // estilização do title
  span {
    font-size: 2.5rem;
    opacity: 0.4;
  }

  .title {
    font-size: 1.8rem;
    top: 0.65rem;
  }

  @media (max-width: 696px) {
    width: 100%;

    p,
    h1 {
      max-width: 100%;
    }

    p {
      margin-bottom: 0.5rem;
    }
  }
`,s2=a.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 696px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`,S=a.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.3rem;
  }

  img {
    width: 4rem;
  }

  #securityIcon {
    width: 4.6rem;
  }

  @keyframes moveY {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    25% {
      transform: translateY(-5px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(-10px);
      animation-timing-function: ease-out;
    }
    75% {
      transform: translateY(-5px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`,o2=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;

  position: relative;

  @media (max-width: 696px) {
    width: 100%;
    gap: 1rem;
  }
`,W=a.div`
  width: ${({widthImage:t})=>t==="imgOne"?"16rem":"14rem"};
  height: ${({widthImage:t})=>t==="imgOne"?"14rem":"24rem"};
  margin-top: ${({widthImage:t})=>t==="imgOne"?"-11rem":"0"};
  border: 3px solid ${({theme:t})=>t.colors["base-secundary-bg"]};

  @media (max-width: 768px) {
    width: ${({widthImage:t})=>t==="imgOne"?"min(11rem, 40vw)":"min(11rem, 35vw)"};
    height: ${({widthImage:t})=>t==="imgOne"?"9rem":"18rem"};
  }
`,n2=a.img`
  width: 100%;
  height: 100%;

  margin: -1.4rem -1.4rem -1.4rem -1.4rem;
  object-fit: cover;

  border: none;
  border-radius: 6px;

  @media (max-width: 768px) {
    margin: -3rem -1.6rem -1.6rem -1.6rem;
  }

  @media (max-width: 405px) {
    margin: -2.2rem -1.6rem -1.6rem -1.6rem;
  }
`,c2=a.img`
  width: 100%;
  height: 24rem;

  object-fit: cover;

  margin: 1.4rem;
  border: none;
  border-radius: 6px;

  @media (max-width: 768px) {
    height: 20rem;
  }
`,l2=a.div`
  width: 13.5rem;
  height: 9rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  text-align: center;
  border: 0;
  border-radius: 6px;

  position: absolute;
  top: 14.5rem;
  right: 10.1rem;

  animation: moveY 4s ease-in-out infinite;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${({theme:t})=>t.colors["base-white"]};

  @media (max-width: 768px) {
    width: 11.5rem;
    height: 8rem;

    top: 12.2rem;
    right: 6.1rem;
  }

  @media (max-width: 696px) {
    right: 31%;
  }
`,d2=()=>(l.useEffect(()=>{z.init()},[]),e.jsxs(i2,{children:[e.jsxs(r2,{"data-aos":"fade-right","data-aos-duration":"1000",children:[e.jsx(o,{size:"l",children:"Nossas Vantagens"}),e.jsxs(n,{weight:500,children:["Descubra as vantagens que fazem a diferença:"," ",e.jsxs("strong",{children:[" ","Segurança, Atendimento Personalizado e Logística Eficiente"," "]})," ","para tornar suas entregas um sucesso garantido."]}),e.jsxs(s2,{children:[e.jsxs(S,{children:[e.jsx("img",{src:e2,alt:""}),e.jsxs("div",{children:[e.jsx(o,{size:"s",children:"Preços Competitivos:"}),e.jsx(n,{size:"sm",weight:500,children:"Trabalhamos para oferecer os melhores preços do mercado."})]})]}),e.jsxs(S,{children:[e.jsx("img",{src:d0,alt:""}),e.jsxs("div",{children:[e.jsx(o,{size:"s",children:"Variedade de Serviços:"}),e.jsx(n,{size:"sm",weight:500,children:"Oferecemos uma extensa gama de soluções logísticas, adaptadas às suas necessidades de transporte."})]})]}),e.jsxs(S,{children:[e.jsx("img",{src:t2,alt:"",id:"securityIcon"}),e.jsxs("div",{children:[e.jsx(o,{size:"s",children:"Alta Qualidade e Segurança:"}),e.jsx(n,{size:"sm",weight:500,children:"Nossos serviços de transporte são realizados com os mais altos padrões de segurança e eficiência,"})]})]}),e.jsxs(S,{children:[e.jsx("img",{src:a2,alt:""}),e.jsxs("div",{children:[e.jsx(o,{size:"s",children:"Atendimento Personalizado:"}),e.jsx(n,{size:"sm",weight:500,children:"Nossa equipe especializada está sempre disponível para ajudar você a encontrar as melhores soluções logísticas."})]})]})]})]}),e.jsxs(o2,{"data-aos":"zoom-in","data-aos-duration":"1000",children:[e.jsx(W,{widthImage:"imgOne",children:e.jsx(n2,{src:Ke,className:"imgTwo"})}),e.jsx(W,{widthImage:"imgTwo",children:e.jsx(c2,{src:P,className:"imgThree"})}),e.jsxs(l2,{children:[e.jsxs(o,{size:"xl",children:["+",e.jsx(R0,{end:1e3,duration:10})]}),e.jsxs(o,{children:["Entregas ",e.jsx("br",{})," Feitas"]})]})]})]})),m2=a.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-bottom: 7.5rem;
  padding: 0 3rem;

  @media (max-width: 768px) {
    height: max-content;
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    height: max-content;
    margin-top: 9rem;
  }
`,h2=a.div`
  height: 28rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({theme:t})=>t.colors["base-secundary-bg"]};
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8rem;
    padding: 2rem;

    h1 {
      margin-top: 0;
    }
  }
`,x2=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  text-align: center;

  button {
    margin-top: 1rem;
  }
`;a.img`
  width: min(45rem, 43vw);
  margin-top: -6.3rem;

  @media (max-width: 768px) {
    width: min(45rem, 80vw);
  }
`;const p2=()=>(l.useEffect(()=>{z.init()},[]),e.jsx(m2,{children:e.jsx(h2,{"data-aos":"zoom-in","data-aos-duration":"1000",children:e.jsxs(x2,{children:[e.jsx(o,{size:"l",color:"white",children:"Não perca a chance de otimizar suas entregas com nossa excelência!"}),e.jsx(n,{color:"white",children:"Entre em contato conosco hoje e descubra como nossa transportadora, com serviços de alta qualidade e atendimento excepcional, pode transformar suas operações logísticas. O momento de aprimorar suas entregas é agora!"}),e.jsx(f,{btnLarge:!0,bgColor:"white",children:e.jsx("a",{href:"https://wa.me/5522999515222?text=",target:"_blank",children:"Faça o seu Pedido!"})})]})})})),g2=a.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 2rem 1rem;
  margin: 0 auto;

  background-color: ${({theme:t})=>t.colors["base-white-100"]};
`,f2=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  // Estilização Title
  span {
    font-size: 1.5rem;
  }

  .title {
    display: none;
  }
`,u2=a.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14.625rem, 1fr));
  gap: 1.5rem;

  margin: 0 auto;
  padding: 3rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    max-width: 70rem;
  }

  @media (max-width: 720px) {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(10.625rem, 1fr));
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(8.625rem, 1fr));
  }
`,w2=a.div`
  position: relative;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 15rem;
    height: 15rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;

    filter: brightness(0.8);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }

  #videoIcon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2;
  }

  #logoInstagram {
    position: absolute;
    bottom: 0.7rem;
    left: 0.6rem;
    z-index: 2;
  }

  &:hover {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      z-index: 2;
    }

    img,
    video {
      filter: brightness(0.3);
    }
  }

  @media (max-width: 375px) {
    img,
    video {
      height: 12.5rem;
    }
  }

  @media (max-width: 320px) {
    img,
    video {
      height: 10rem;
    }
  }
`,j2=a.div`
  width: 100%;
  display: none;
  position: fixed;
  padding: 1rem;
`,X=a.p`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  line-height: 1.2rem;
  color: ${({theme:t})=>t.colors["base-white"]};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,b2=()=>{const{feedInstagramData:t}=c0();return l.useEffect(()=>{z.init()},[]),e.jsxs(g2,{children:[e.jsxs(f2,{children:[e.jsx(o,{size:"s",color:"bg",children:"Instagram"}),e.jsx(o,{size:"l",children:"Siga as Nossas Redes"})]}),e.jsx(u2,{children:t.slice(0,8).map(i=>e.jsxs(O0,{children:[e.jsx(D0,{asChild:!0,children:e.jsxs(w2,{"data-aos":"zoom-in","data-aos-duration":"1000",children:[e.jsxs(j2,{children:[e.jsx(X,{children:i0(new Date(i.timestamp),"dd MMMM yyyy",{locale:r0})}),e.jsx(X,{children:i.caption})]}),i.media_type!=="IMAGE"?e.jsx("img",{src:i.thumbnail_url,alt:""}):e.jsx("img",{src:i.media_url,alt:""}),e.jsx(E,{size:22,color:"#fff",weight:"bold",id:"logoInstagram"}),i.media_type==="VIDEO"&&e.jsx(H0,{size:20,weight:"bold",id:"videoIcon",color:"#fff"})]},i.id)}),e.jsx($e,{idPostInstagram:i.id})]}))})]})},v2="/assets/ImageFaq-CGDi4Z5D.svg",y2=a.section`
  width: 100%;
  max-width: 112.5rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  margin: 0 auto;
  padding: 3rem 4rem;

  @media (max-width: 726px) {
    height: max-content;
    padding: 4rem 1.5rem;
    gap: 3rem;
  }
`,z2=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`,C2=a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 5rem;
  }
`,k2=a.img`
  width: min(35rem, 45vw);

  @media (max-width: 726px) {
    width: min(35rem, 75vw);
    order: 2;
  }
`,A2=a.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`,v=q0(Z0)({borderRadius:"8px","&:focus":{backgroundColor:"#7888A8",color:"#fff",border:"none",borderRadius:"8px"}}),S2=()=>e.jsxs(y2,{children:[e.jsxs(z2,{children:[e.jsx(o,{size:"s",color:"bg",children:"Faq"}),e.jsx(o,{size:"l",children:"Principais Dúvidas"})]}),e.jsxs(C2,{children:[e.jsxs(A2,{children:[e.jsxs(j,{children:[e.jsx(v,{expandIcon:e.jsx(w,{size:25}),"aria-controls":"panel1-content",id:"panel1-header",children:e.jsx(h,{children:"Como posso acompanhar o status da minha entrega?"})}),e.jsx(b,{children:e.jsx(h,{children:"Você pode acompanhar o status da sua entrega através do nosso sistema de rastreamento online, utilizando o código fornecido no momento da confirmação do pedido."})})]}),e.jsxs(j,{children:[e.jsx(v,{expandIcon:e.jsx(w,{size:25}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(h,{children:"Quais tipos de carga vocês transportam?"})}),e.jsx(b,{children:e.jsx(h,{children:"Transportamos uma ampla variedade de cargas, incluindo cargas secas, perecíveis, e cargas especiais sob consulta. Entre em contato para detalhes sobre transporte especializado."})})]}),e.jsxs(j,{children:[e.jsx(v,{expandIcon:e.jsx(w,{size:25}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(h,{children:"Vocês oferecem serviço de transporte internacional?"})}),e.jsx(b,{children:e.jsx(h,{children:"Sim, oferecemos serviços de transporte internacional, tanto para importação quanto exportação, com soluções de logística completas."})})]}),e.jsxs(j,{children:[e.jsx(v,{expandIcon:e.jsx(w,{size:25}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(h,{children:"Qual é o prazo de entrega para o transporte de cargas?"})}),e.jsx(b,{children:e.jsx(h,{children:"O prazo de entrega depende da rota e do tipo de carga. Durante a solicitação do serviço, informamos o prazo estimado de acordo com sua necessidade."})})]}),e.jsxs(j,{children:[e.jsx(v,{expandIcon:e.jsx(w,{size:25}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(h,{children:"Como funciona o seguro de cargas?"})}),e.jsx(b,{children:e.jsx(h,{children:"Oferecemos seguro de cargas para garantir a proteção da sua mercadoria durante todo o processo de transporte. O valor do seguro varia conforme o tipo e valor da carga."})})]})]}),e.jsx(k2,{src:v2,alt:""})]})]}),M2=a.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
`,I2=()=>e.jsxs(M2,{children:[e.jsx(Ve,{}),e.jsx(Fe,{}),e.jsx(Ue,{}),e.jsx(d2,{}),e.jsx(p2,{}),e.jsx(b2,{}),e.jsx(S2,{}),e.jsx(se,{})]}),T2=()=>e.jsx(F0,{children:e.jsx(Q0,{path:"/",element:e.jsx(I2,{})})}),$2=b0`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Inter", sans-serif;

    scroll-behavior: smooth;
    scroll-margin: 3rem;
    text-decoration: none;

  }

 html {
  @media (max-width: 1260px){
      font-size: 87.5%;
    }

    @media (max-width: 900px){
      font-size: 75%;
    }
 }

 body {
   background: ${({theme:t})=>t.colors["base-white"]};
 }
`,H2={colors:{"base-bg":" #0033A0","base-secundary-bg":"#7888A8","base-white":"#fff","base-white-100":"#fafafa","base-text":"#000","base-red":"red","base-gray":"#3B3E46","base-gray-100":"#f3f3f3","base-gray-200":"#868686"},FontSizes:{"text-regular-sm":"0.875rem","text-regular-s":"min(1.0625rem, 3vw)","text-regular-m":"1.125rem","text-regular-l":"1.5rem","title-regular-sm":"0.875rem","title-regular-s":"1.2rem","title-regular-m":"1.5rem","title-regular-l":"2.1rem","title-regular-xl":"2.6rem","title-regular-xll":"4.5rem","title-regular-hero":"min(3.5rem, 9vw)"}},B2=({children:t})=>e.jsx(Ce,{children:t});function L2(){return e.jsx(B2,{children:e.jsx(z0,{children:e.jsxs(v0,{theme:H2,children:[e.jsx(ze,{}),e.jsx(je,{}),e.jsx(T2,{}),e.jsx(pe,{}),e.jsx(y0,{}),e.jsx($2,{})]})})})}w0(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(L2,{})}));
