(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},52:function(e,t,a){e.exports=a(94)},57:function(e,t,a){},58:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),o=a.n(s),c=(a(57),a(9)),u=a(10),l=a(13),i=a(11),d=a(14),h=(a(58),a(12)),g=a(23),p=a(8),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Home Page Content")}}]),t}(n.Component),m=Object(h.b)(function(e){return e})(w),b=a(3),O=(a(22),a(111)),P=a(95),j=a(96),f=a(97),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.state={dropdownOpen:!1,username:"Loading.."},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"componentWillMount",value:function(){this.props.userDataReducer.data&&this.setState({username:this.props.userDataReducer.data.username})}},{key:"render",value:function(){return r.a.createElement(O.a,{nav:!0,inNavbar:!0},r.a.createElement(P.a,{nav:!0,caret:!0},this.state.username),r.a.createElement(j.a,{id:"dropdown-menu",right:!0},r.a.createElement(f.a,{divider:!0})))}}]),t}(r.a.Component),v=Object(h.b)(function(e){return e})(C),E=a(100),y=a(50),I=a(110),k=a(98),U=a(99),S=a(101),R=a(25),L=a.n(R),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).signUpUser=a.signUpUser.bind(Object(b.a)(Object(b.a)(a))),a.toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.onCreatePassword1Change=a.onCreatePassword1Change.bind(Object(b.a)(Object(b.a)(a))),a.onCreatePassword2Change=a.onCreatePassword2Change.bind(Object(b.a)(Object(b.a)(a))),a.onCreateUsernameChange=a.onCreateUsernameChange.bind(Object(b.a)(Object(b.a)(a))),a.onShowPasswordChange=a.onShowPasswordChange.bind(Object(b.a)(Object(b.a)(a))),a.state={modal:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){if(this.props.userDataReducer.data)return alert("Please log out before creating a new account");!1===this.state.modal&&this.props.dispatch({type:"resetCreateAccount"}),this.setState(function(e){return{modal:!e.modal}})}},{key:"signUpUser",value:function(){var e=this,t=this.props.createAccountReducer;return t.createPassword1!==t.createPassword2?alert("Passwords must match"):t.createPassword1?t.createPassword1.length<6?alert("Password must be at least 6 characters long"):t.createUsername?void L.a.post("/signUpData",{username:t.createUsername,password:t.createPassword1,dateCreated:(new Date).toLocaleString()}).then(function(t){"Sign Up Successful!"===t.data.message?(alert("".concat(t.data.message,"\nPlease log in.")),e.toggle()):alert(t.data.message)}):alert("Username can't be blank"):alert("Password can't be blank")}},{key:"onCreatePassword1Change",value:function(e){this.props.dispatch({type:"changeCreatePassword1",createPassword1:e.target.value})}},{key:"onCreatePassword2Change",value:function(e){this.props.dispatch({type:"changeCreatePassword2",createPassword2:e.target.value})}},{key:"onCreateUsernameChange",value:function(e){this.props.dispatch({type:"changeCreateUsername",createUsername:e.target.value})}},{key:"onShowPasswordChange",value:function(){"password"===this.props.createAccountReducer.showPassword?this.props.dispatch({type:"changeShowPassword",showPassword:"text"}):"text"===this.props.createAccountReducer.showPassword&&this.props.dispatch({type:"changeShowPassword",showPassword:"password"})}},{key:"render",value:function(){var e="Red";return this.props.createAccountReducer.createPassword1===this.props.createAccountReducer.createPassword2&&(e="Black"),r.a.createElement("div",null,r.a.createElement(y.a,{onClick:this.toggle},"Create Account"),r.a.createElement(I.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(k.a,{toggle:this.toggle},"Create Account"),r.a.createElement(U.a,null,r.a.createElement("div",null,r.a.createElement("p",null,"Username"),r.a.createElement(E.a,{type:"text",value:this.props.createAccountReducer.createUsername,onChange:this.onCreateUsernameChange}),r.a.createElement("p",null,"Password"),r.a.createElement(E.a,{type:this.props.createAccountReducer.showPassword,value:this.props.createAccountReducer.createPassword1,onChange:this.onCreatePassword1Change}),r.a.createElement("small",{id:"password-requirements"},r.a.createElement("ul",null,r.a.createElement("li",null,"At least 6 characters"),r.a.createElement("li",null,"At least one capital letter"))),r.a.createElement("span",null,"Re-Type Password"),r.a.createElement(E.a,{style:{color:"".concat(e)},type:this.props.createAccountReducer.showPassword,value:this.props.createAccountReducer.createPassword2,onChange:this.onCreatePassword2Change}),r.a.createElement("small",null,r.a.createElement("input",{type:"checkbox",onChange:this.onShowPasswordChange}),"Show Password"))),r.a.createElement(S.a,null,r.a.createElement(y.a,{color:"primary",onClick:this.signUpUser},"Create Account")," ",r.a.createElement(y.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(r.a.Component),D=Object(h.b)(function(e){return e})(A),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(i.a)(t).call(this))).logInUser=e.logInUser.bind(Object(b.a)(Object(b.a)(e))),e.onLogInPasswordChange=e.onLogInPasswordChange.bind(Object(b.a)(Object(b.a)(e))),e.onLogInUsernameChange=e.onLogInUsernameChange.bind(Object(b.a)(Object(b.a)(e))),e.onShowPasswordChange=e.onShowPasswordChange.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"logInUser",value:function(){var e=this;if(this.props.userDataReducer.username)return alert("You are already logged in. If you would like to use a different account, please log out and then back in.");L.a.post("/userLogIn",{username:this.props.logInReducer.logInUsername,password:this.props.logInReducer.logInPassword}).then(function(t){if(console.log(t),"Login successful!"!==t.data.message)return alert(t.data.message);sessionStorage.setItem("token",t.data.token),sessionStorage.setItem("username",t.data.username),e.props.dispatch({type:"loadingData"}),e.props.dispatch({type:"userLogIn",data:t.data}),setTimeout(function(){e.props.dispatch({type:"changeLogInStatus"}),e.props.dispatch({type:"showHomepage"})},2e3)})}},{key:"onLogInPasswordChange",value:function(e){this.props.dispatch({type:"changeLogInPassword",logInPassword:e.target.value})}},{key:"onLogInUsernameChange",value:function(e){this.props.dispatch({type:"changeLogInUsername",logInUsername:e.target.value})}},{key:"onShowPasswordChange",value:function(){"password"===this.props.logInReducer.showPassword?this.props.dispatch({type:"changeLogInShowPassword",showPassword:"text"}):"text"===this.props.logInReducer.showPassword&&this.props.dispatch({type:"changeLogInShowPassword",showPassword:"password"})}},{key:"render",value:function(){return r.a.createElement(O.a,{nav:!0,inNavbar:!0},r.a.createElement(P.a,{nav:!0,caret:!0},"Log In"),r.a.createElement(j.a,{id:"dropdown-menu",right:!0},r.a.createElement(E.a,{className:"dropdown-content",value:this.props.logInReducer.logInUsername,onChange:this.onLogInUsernameChange,placeholder:"Username"}),r.a.createElement(E.a,{className:"dropdown-content",type:"password",value:this.props.logInReducer.logInPassword,onChange:this.onLogInPasswordChange,placeholder:"Password"}),r.a.createElement(y.a,{className:"dropdown-content",color:"success",onClick:this.logInUser},"Log In"),r.a.createElement(f.a,{divider:!0}),r.a.createElement(D,null)))}}]),t}(n.Component),N=Object(h.b)(function(e){return e})(x),H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(i.a)(t).call(this))).logOut=e.logOut.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"logOut",value:function(){sessionStorage.clear(),window.location.reload()}},{key:"render",value:function(){return r.a.createElement(y.a,{color:"danger",id:"log-out-button",onClick:this.logOut},"Log Out")}}]),t}(n.Component),W=Object(h.b)(function(e){return e})(H),B=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading-spinner"})}}]),t}(n.Component),T=Object(h.b)(function(e){return e})(B),J=Object(g.b)({currentPageReducer:function(e,t){switch(e||(e={currentPage:r.a.createElement(m,null)}),t.type){case"loadingData":return Object(p.a)({},e,{currentPage:r.a.createElement(T,null)});case"showHomepage":return Object(p.a)({},e,{currentPage:r.a.createElement(m,null)});case"changePage":return Object(p.a)({},e,{currentPage:t.currentPage});default:return Object(p.a)({},e)}},logInReducer:function(e,t){switch(e||(e={logInUsername:"",logInPassword:"",showPassword:"password",userAccount:null,statusDropdown:r.a.createElement(N,null)}),t.type){case"changeLogInStatus":return Object(p.a)({},e,{userAccount:r.a.createElement(v,null),statusDropdown:r.a.createElement(W,null)});case"changeLogInUsername":return Object(p.a)({},e,{logInUsername:t.logInUsername});case"changeLogInPassword":return Object(p.a)({},e,{logInPassword:t.logInPassword});case"changeLogInShowPassword":return Object(p.a)({},e,{showPassword:t.showPassword});case"resetLogInData":return{logInUsername:"",logInPassword:"",showPassword:"password"};default:return Object(p.a)({},e)}},changePasswordReducer:function(e,t){switch(e||(e={oldPassword:"",newPassword1:"",newPassword2:"",showPassword:"password"}),t.type){case"changeOldPassword":return Object(p.a)({},e,{oldPassword:t.oldPassword});case"changeNewPassword1":return Object(p.a)({},e,{newPassword1:t.newPassword1});case"changeNewPassword2":return Object(p.a)({},e,{newPassword2:t.newPassword2});case"changeShowPassword":return Object(p.a)({},e,{showPassword:t.showPassword});case"resetChangePassword":return{oldPassword:"",newPassword1:"",newPassword2:"",showPassword:"password"};default:return Object(p.a)({},e)}},createAccountReducer:function(e,t){switch(e||(e={createUsername:"",createPassword1:"",createPassword2:"",showPassword:"password"}),t.type){case"changeCreateUsername":return Object(p.a)({},e,{createUsername:t.createUsername});case"changeCreatePassword1":return Object(p.a)({},e,{createPassword1:t.createPassword1});case"changeCreatePassword2":return Object(p.a)({},e,{createPassword2:t.createPassword2});case"changeShowPassword":return Object(p.a)({},e,{showPassword:t.showPassword});case"resetCreateAccount":return{createUsername:"",createPassword1:"",createPassword2:"",showPassword:"password"};default:return Object(p.a)({},e)}},userDataReducer:function(e,t){switch(e||(e={data:null}),t.type){case"userLogIn":return Object(p.a)({},e,{data:t.data});case"logOutUser":return{data:null};default:return Object(p.a)({},e)}}}),M=a(102),Y=a(103),q=a(104),$=a(105),z=a(106),F=a(107),G=a(108),K=a(109),Q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Calculators Page Content")}}]),t}(n.Component),V=Object(h.b)(function(e){return e})(Q),X=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"About Page Content")}}]),t}(n.Component),Z=Object(h.b)(function(e){return e})(X),_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Support Page Content")}}]),t}(n.Component),ee=Object(h.b)(function(e){return e})(_),te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.changePage=a.changePage.bind(Object(b.a)(Object(b.a)(a))),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"changePage",value:function(e){this.props.dispatch({type:"changePage",currentPage:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(Y.a,{href:"/"},"YoDo"),r.a.createElement("div",{id:"navbar-brand-container"},r.a.createElement(q.a,null,r.a.createElement($.a,null,r.a.createElement(z.a,{xs:"3"},r.a.createElement(y.a,{onClick:function(){return e.changePage(r.a.createElement(m,null))}},"Home")),r.a.createElement(z.a,{xs:"3"},r.a.createElement(y.a,{onClick:function(){return e.changePage(r.a.createElement(V,null))}},"Calculators")),r.a.createElement(z.a,{xs:"3"},r.a.createElement(y.a,{onClick:function(){return e.changePage(r.a.createElement(Z,null))}},"About")),r.a.createElement(z.a,{xs:"3"},r.a.createElement(y.a,{onClick:function(){return e.changePage(r.a.createElement(ee,null))}},"Support"))))),r.a.createElement(F.a,{onClick:this.toggle}),r.a.createElement(G.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(K.a,{className:"ml-auto",navbar:!0},this.props.logInReducer.userAccount,this.props.logInReducer.statusDropdown))))}}]),t}(r.a.Component),ae=Object(h.b)(function(e){return e})(te),ne=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=sessionStorage.getItem("token"),a=sessionStorage.getItem("username");t&&L.a.post("/checkReAuth",{token:t,username:a}).then(function(t){"Login successful!"===t.data.message?(e.props.dispatch({type:"loadingData"}),e.props.dispatch({type:"userLogIn",data:t.data}),setTimeout(function(){e.props.dispatch({type:"changeLogInStatus"}),e.props.dispatch({type:"showHomepage"})},2e3)):(sessionStorage.removeItem("token"),sessionStorage.removeItem("username"))})}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.currentPageReducer.currentPage)}}]),t}(n.Component),re=Object(h.b)(function(e){return e})(ne),se=Object(g.c)(J),oe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:se},r.a.createElement("div",{className:"App"},r.a.createElement(ae,null),r.a.createElement(re,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(93);o.a.render(r.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.996d46fc.chunk.js.map