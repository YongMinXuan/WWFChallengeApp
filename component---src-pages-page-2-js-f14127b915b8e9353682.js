(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{wq7S:function(t,a,e){"use strict";e.r(a);var n=e("q1tI"),r=e.n(n),o=e("1dLr"),c=e("Wbzz");var s=function(t){var a,e;function n(){for(var a,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(a=t.call.apply(t,[this].concat(n))||this).state={},a.myFunction=function(){a.props.updateItem(a.state)},a.calculatetotal=function(t,e){var n,r=e.target.value,o=t;a.setState(((n={})[o]=r,n),(function(){var t=this.state;for(var a in t)t.hasOwnProperty(a)&&parseFloat(t[a])}))},a}e=t,(a=n).prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e;var s=n.prototype;return s.componentDidMount=function(){this.props.location.state.data},s.render=function(){for(var t=this,a=(this.props.location.state.pleasant.data,parseInt(this.props.location.state.pleasant)),e=[],n=function(){var a="input"+s;e.push(r.a.createElement("div",{key:s},r.a.createElement("label",{className:"labels"},"Part ",s,"% "),r.a.createElement("input",{"aria-label":"inputvalues",align:"right",className:"inputboxes",min:0,type:"number",name:a,onChange:function(e){return t.calculatetotal(a,e)}})))},s=1;s<a+1;s++)n();var l=0,i=0,p=this.state;for(var u in p)i+=1,p.hasOwnProperty(u)&&(""===p[u]&&(i-=1),l+=parseFloat(p[u]));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Page 2"),r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{location:2}),r.a.createElement("div",{className:"container2"},e),r.a.createElement("div",{className:"buttongroup"},r.a.createElement(c.a,{to:"/Page1"},r.a.createElement("button",{className:"backbutton"},"Back ")),r.a.createElement(c.a,{to:"/Page3"},r.a.createElement("button",{disabled:l<100||i<a,className:"button"},"Next ")))))},n}(n.Component);s.defaultProps={location:{}},a.default=s}}]);
//# sourceMappingURL=component---src-pages-page-2-js-f14127b915b8e9353682.js.map