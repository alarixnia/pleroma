(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{718:function(n,o,t){"use strict";t.r(o),t.d(o,"default",function(){return k});var i,e=t(0),a=t.n(e),c=t(6),s=t.n(c),u=t(3),r=t.n(u),l=t(7),d=t.n(l),f=t(1),m=t.n(f),p=t(12),h=t(4),g=t(199),b=t.n(g),v=t(79),C=t(21),_=t(13),w=t(45),k=Object(p.connect)(function(n){return{isSubmitting:n.getIn(["reports","new","isSubmitting"]),account:n.getIn(["mutes","new","account"]),notifications:n.getIn(["mutes","new","notifications"])}},function(n){return{onConfirm:function(o,t){n(Object(_.C)(o.get("id"),t))},onClose:function(){n(Object(C.c)())},onToggleNotifications:function(){n(Object(w.h)())}}})(i=Object(h.g)(i=function(n){function o(){var t,i,e;s()(this,o);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return t=i=r()(this,n.call.apply(n,[this].concat(c))),i.handleClick=function(){i.props.onClose(),i.props.onConfirm(i.props.account,i.props.notifications)},i.handleCancel=function(){i.props.onClose()},i.setRef=function(n){i.button=n},i.toggleNotifications=function(){i.props.onToggleNotifications()},e=t,r()(i,e)}return d()(o,n),o.prototype.componentDidMount=function(){this.button.focus()},o.prototype.render=function(){var n=this.props,o=n.account,t=n.notifications;return a()("div",{className:"modal-root__modal mute-modal"},void 0,a()("div",{className:"mute-modal__container"},void 0,a()("p",{},void 0,a()(h.b,{id:"confirmations.mute.message",defaultMessage:"Are you sure you want to mute {name}?",values:{name:a()("strong",{},void 0,"@",o.get("acct"))}})),a()("div",{},void 0,a()("label",{htmlFor:"mute-modal__hide-notifications-checkbox"},void 0,a()(h.b,{id:"mute_modal.hide_notifications",defaultMessage:"Hide notifications from this user?"})," ",a()(b.a,{id:"mute-modal__hide-notifications-checkbox",checked:t,onChange:this.toggleNotifications})))),a()("div",{className:"mute-modal__action-bar"},void 0,a()(v.a,{onClick:this.handleCancel,className:"mute-modal__cancel-button"},void 0,a()(h.b,{id:"confirmation_modal.cancel",defaultMessage:"Cancel"})),m.a.createElement(v.a,{onClick:this.handleClick,ref:this.setRef},a()(h.b,{id:"confirmations.mute.confirm",defaultMessage:"Mute"}))))},o}(m.a.PureComponent))||i)||i}}]);
//# sourceMappingURL=mute_modal.js.map