(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){},49:function(e,t,a){e.exports=a(85)},54:function(e,t,a){},55:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),s=(a(54),a(55),a(3)),u=a(28),i=a.n(u),l=a(43),d=a(20),m=a(61);a(41).config({path:"../../../../.env"});var h=function(e){return{type:"UPDATESEARCHRESULTS",payload:e}},E=a(44),p=a(26),f=a(46),v=a.n(f);function g(){var e=Object(E.a)(["\n    display: block;\n    margin: auto;\n    position: absolute;\n    top: 50%;\n"]);return g=function(){return e},e}var O=Object(p.css)(g());var b=function(e){var t=Object(s.c)((function(e){return!e.receive_products}));return c.a.createElement("div",null,c.a.createElement(v.a,{css:O,size:35,color:"#227766",loading:t}))},N=(a(10),a(12));var S=function(){return c.a.createElement("div",{className:"title-bar"},c.a.createElement(N.b,{className:"header-title",to:"/"},"Skincare-Finder"),c.a.createElement("div",{className:"header-links-right"},c.a.createElement(N.b,{className:"header-link",to:"/contact"},"Contact")))},A=a(2),_=a(14),I=a(15),P=a(17),D=a(16),R=a(31),T=a(5),y=a(11),C=Object(y.c)({hasFetchedProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH":return!1;case"FETCHED":return!0;default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED":return t.payload;default:return e}},normalSearch:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return!e;default:return e}},careSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return!e;default:return e}},searchValues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATESEARCH":return t.payload;default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATESEARCHRESULTS":return t.payload;default:return e}},loadedSearchResults:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCHLOADED":return!0;case"SEARCHNOTLOADED":return!1;default:return e}},productsIngredients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHEDINGREDIENTS":return t.payload;default:return e}},fetchingIngredients:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHINGREDIENTS":return!0;case"FETCHEDINGREDIENTS":return!1;default:return e}}}),w=a(47),F=a(48),j=Object(F.createLogger)(),H=Object(y.a)(w.a,j),M=Object(y.d)(C,H),k=function(e){var t=e.name,a=e.email,n=e.message;return function(e){e(function(e){var t=e.name,a=e.email,n=e.message,c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_SEPHORA_DOMAIN:"https://www.sephora.com/ca/en",REACT_APP_DOMAIN_NAME:"http://localhost:5000/",REACT_APP_MODE:"develop",REACT_APP_SEPHORA_DOMAIN:"https://www.sephora.com/"}).DOMAIN_NAME;return m.defaults.baseURL=String(c),console.log("entered email"),function(){var e=Object(l.a)(i.a.mark((function e(c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post(d.join("contact","send"),{name:t,email:a,message:n}).then((function(e){console.log("entered req")})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({name:t,email:a,message:n}))}},L=function(e){Object(P.a)(a,e);var t=Object(D.a)(a);function a(e){var c;return Object(_.a)(this,a),(c=t.call(this,e)).state=Object(R.a)(Object(R.a)({},c.props.state),{},{searchFocused:!1,inputRef:Object(n.createRef)()}),c.searchInFocus=c.searchInFocus.bind(Object(T.a)(c)),c.searchNotInFocus=c.searchNotInFocus.bind(Object(T.a)(c)),c._handleKeyDownOrButtonPress=c._handleKeyDownOrButtonPress.bind(Object(T.a)(c)),c}return Object(I.a)(a,[{key:"searchInFocus",value:function(){this.setState({searchFocused:!0})}},{key:"searchNotInFocus",value:function(){this.setState({searchFocused:!1})}},{key:"_handleKeyDownOrButtonPress",value:function(e){"Enter"===e.key&&(this.props.updateSearch([e.target.value]),this.state.inputRef.current.blur(),this.props.state.careSearch?this.props.matchWithProductIngredients():this.props.matchWithProductName())}},{key:"render",value:function(){return console.log(this.props.state),c.a.createElement("div",{className:this.state.searchFocused?"search-bar-focused":"search-bar"},c.a.createElement("input",{className:"search-bar-input",ref:this.state.inputRef,type:"text",placeholder:this.props.state.careSearch?"Search Ingredient":"Search Item",onFocus:this.searchInFocus,onBlur:this.searchNotInFocus,onKeyDown:this._handleKeyDownOrButtonPress}))}}]),a}(c.a.Component);var U=Object(s.b)((function(e){return{state:e}}),(function(e){return{updateSearch:function(t){e({type:"UPDATESEARCH",payload:t})},matchWithProductName:function(){e((function(e){e({type:"SEARCHNOTLOADED"});var t=M.getState().searchValues[0],a=[],n=M.getState().products;console.log(n),n.data.forEach((function(e){var n={productName:e.productName,brandName:e.brandName,starRatings:e.starRatings,image:e.image,skuId:e.skuId,targetUrl:e.targetUrl},c=new RegExp(t,"i");e.productName.match(c)&&a.push(n)})),e(h(a)),e({type:"SEARCHLOADED"})}))},matchWithProductIngredients:function(){e(function(){var e=M.getState().searchValues;return function(t){t({type:"SEARCHNOTLOADED"});var a=[];M.getState().productsIngredients.data.forEach((function(t){var n={productName:t.productName,brandName:t.brandName,starRatings:t.starRatings,image:t.image,skuId:t.skuId,targetUrl:t.targetUrl,matches:[]};t.ingredients.forEach((function(t){e.forEach((function(e){var a=new RegExp(e,"i");t.match(a)&&n.matches.push(t)}))})),0!=n.matches.length&&a.push(n)})),t(h(a)),t({type:"SEARCHLOADED"})}}())}}}))(L),x=a(18),B=a.n(x),W=a(20);a(41).config({path:"../.env"});var K=function(e){var t=e.productInfo,a="https://www.sephora.com/";"undefined"===typeof a&&(a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_SEPHORA_DOMAIN:"https://www.sephora.com/ca/en",REACT_APP_DOMAIN_NAME:"http://localhost:5000/",REACT_APP_MODE:"develop",REACT_APP_SEPHORA_DOMAIN:"https://www.sephora.com/"}).BASE_SEPHORA_DOMAIN);var n=W.join(String(a),String(t.image));return c.a.createElement(B.a,null,c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product-image"},c.a.createElement("img",{src:n,alt:t.productName+" image"})),c.a.createElement("div",{className:"product-descr"},t.productName),c.a.createElement("div",{className:"product-brand"},t.brandName),c.a.createElement("div",{className:"product-ratings"},"Ratings + Amount of Ratings")))};var G=Object(s.b)(null,(function(e){return{toggleSearch:function(){e({type:"TOGGLE"})}}}))((function(e){return Object(s.c)((function(e){return e.normalSearch})),Object(s.c)((function(e){return e.careSearch})),c.a.createElement("div",{className:"center"},c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",onClick:function(t){e.toggleSearch()}}),c.a.createElement("span",{className:"slider round"})),c.a.createElement("div",null,"Ingredient Search"))})),V=(a(20),function(e){Object(P.a)(a,e);var t=Object(D.a)(a);function a(e){return Object(_.a)(this,a),t.call(this,e)}return Object(I.a)(a,[{key:"componentDidUpdate",value:function(){this.setState()}},{key:"render",value:function(){return c.a.createElement("div",{className:"body"},c.a.createElement("h1",null,"Find the right Skincare Product for you"),c.a.createElement(G,null),c.a.createElement(U,null),this.props.state.loadedSearchResults?c.a.createElement("div",{className:"products-body"},this.props.state.searchResults.map((function(e){return c.a.createElement("div",{className:"space-inbetween"},c.a.createElement(N.b,{to:"/product/"+e.skuId,className:"no-text-dec"},c.a.createElement(K,{productInfo:e})))}))):c.a.createElement(b,null))}}]),a}(c.a.Component));var J=Object(s.b)((function(e){return{state:e}}))(V);var q=function(){return c.a.createElement("div",{className:"body"})},z=function(e){Object(P.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={focusedName:!1,focusedEmail:!1,focusedMessage:!1,name:"",email:"",message:""},n.nameNotInFocus=n.nameNotInFocus.bind(Object(T.a)(n)),n.nameInFocus=n.nameInFocus.bind(Object(T.a)(n)),n.emailNotInFocus=n.emailNotInFocus.bind(Object(T.a)(n)),n.emailInFocus=n.emailInFocus.bind(Object(T.a)(n)),n.messageNotInFocus=n.messageNotInFocus.bind(Object(T.a)(n)),n.messageInFocus=n.messageInFocus.bind(Object(T.a)(n)),n.submitEmail=n.submitEmail.bind(Object(T.a)(n)),n}return Object(I.a)(a,[{key:"nameNotInFocus",value:function(){this.setState({focusedName:!1})}},{key:"nameInFocus",value:function(){this.setState({focusedName:!0})}},{key:"emailNotInFocus",value:function(){this.setState({focusedEmail:!1})}},{key:"emailInFocus",value:function(){this.setState({focusedEmail:!0})}},{key:"messageNotInFocus",value:function(){this.setState({focusedMessage:!1})}},{key:"messageInFocus",value:function(){this.setState({focusedMessage:!0})}},{key:"submitEmail",value:function(){var e=this.state.name,t=this.state.email,a=this.state.message;this.props.dispatchSendEmail({name:e,email:t,message:a}),this.setState({focusedName:!1,focusedEmail:!1,focusedMessage:!1,name:"",email:"",message:""})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"body"},c.a.createElement(B.a,null,c.a.createElement("h1",null,"Contact"),c.a.createElement("p",null,c.a.createElement("em",null,"If there are any problems with the website or design flaws, please contact me by filling out the contact information below.")),c.a.createElement("div",{className:this.state.focusedName?"focused-box":"not-focused-box"},c.a.createElement("input",{className:"box-input",type:"text",placeholder:"Name",value:this.state.name,onFocus:this.nameInFocus,onBlur:this.nameNotInFocus,onChange:function(t){return e.setState({name:t.target.value})}})),c.a.createElement("div",{className:this.state.focusedEmail?"focused-box":"not-focused-box"},c.a.createElement("input",{className:"box-input",type:"text",placeholder:"Email",value:this.state.email,onFocus:this.emailInFocus,onBlur:this.emailNotInFocus,onChange:function(t){return e.setState({email:t.target.value})}})),c.a.createElement("div",{className:this.state.focusedMessage?"focused-box":"not-focused-box"},c.a.createElement("textarea",{className:"message-box-input",placeholder:"Message",value:this.state.message,onFocus:this.messageInFocus,onBlur:this.messageNotInFocus,onChange:function(t){return e.setState({message:t.target.value})}})),c.a.createElement("button",{onClick:this.submitEmail},"Submit")))}}]),a}(c.a.Component),$=Object(s.b)(null,(function(e){return{dispatchSendEmail:function(t){e(k(t))}}}))(z);var Q=Object(s.b)(null,(function(e){return{fetchProdsInitial:function(){e(function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_SEPHORA_DOMAIN:"https://www.sephora.com/ca/en",REACT_APP_DOMAIN_NAME:"http://localhost:5000/",REACT_APP_MODE:"develop",REACT_APP_SEPHORA_DOMAIN:"https://www.sephora.com/"}).DOMAIN_NAME;return m.defaults.baseURL=String(e),function(e){return e({type:"FETCH"}),m.get(d.join("products","sephora")).then((function(t){e(function(e){return{type:"FETCHED",payload:e}}(t)),e(h(t.data))})).catch((function(e){console.log(e)}))}}())},fetchIngredients:function(){e(function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_SEPHORA_DOMAIN:"https://www.sephora.com/ca/en",REACT_APP_DOMAIN_NAME:"http://localhost:5000/",REACT_APP_MODE:"develop",REACT_APP_SEPHORA_DOMAIN:"https://www.sephora.com/"}).DOMAIN_NAME;return m.defaults.baseURL=String(e),function(e){return e({type:"FETCHINGREDIENTS"}),m.get(d.join("products","sephora","ingredients","all")).then((function(t){e(function(e){return{type:"FETCHEDINGREDIENTS",payload:e}}(t))})).catch((function(e){console.log(e)}))}}())}}}))((function(e){Object(n.useEffect)((function(){e.fetchProdsInitial(),e.fetchIngredients()}),[]);var t=Object(s.c)((function(e){return e.hasFetchedProducts})),a=Object(s.c)((function(e){return e.fetchingIngredients}));return!t||a?c.a.createElement(b,null):c.a.createElement("div",null,c.a.createElement(N.a,null,c.a.createElement(S,null),c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/",exact:!0,component:J}),c.a.createElement(A.a,{path:"/product/:id",component:q}),c.a.createElement(A.a,{path:"/contact",component:$}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(s.a,{store:M},c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.08d3c1da.chunk.js.map