(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{wq7S:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),o=a.n(n),r=a("1dLr"),c=a("Wbzz");var l=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={},e.myFunction=function(){e.props.updateItem(e.state)},e.calculatetotal=function(t,a){var n,o=a.target.value,r=t;e.setState(((n={})[r]=o,n),(function(){var t=this.state;for(var e in t)t.hasOwnProperty(e)&&parseFloat(t[e])}))},e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){this.props.location.state.data},l.render=function(){var t=this;console.log("new stuff",this.props.location);for(var e=parseInt(this.props.location),a=[],n=function(){var e="input"+l;a.push(o.a.createElement("div",{key:l},o.a.createElement("label",{className:"labels"},"Part ",l,"% "),o.a.createElement("input",{"aria-label":"inputvalues",align:"right",className:"inputboxes",min:0,type:"number",name:e,onChange:function(a){return t.calculatetotal(e,a)}})))},l=1;l<e+1;l++)n();var s=0,i=0,p=this.state;for(var u in p)i+=1,p.hasOwnProperty(u)&&(""===p[u]&&(i-=1),s+=parseFloat(p[u]));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Page 2"),o.a.createElement("div",{className:"container"},o.a.createElement(r.a,{location:2}),o.a.createElement("div",{className:"container2"},a),o.a.createElement("div",{className:"buttongroup"},o.a.createElement(c.a,{to:"/Page1"},o.a.createElement("button",{className:"backbutton"},"Back ")),o.a.createElement(c.a,{to:"/Page3"},o.a.createElement("button",{disabled:s<100||i<e,className:"button"},"Next ")))))},n}(n.Component);l.defaultProps={location:{}},e.default=l}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b225bec1c8264b6effc5.js.map