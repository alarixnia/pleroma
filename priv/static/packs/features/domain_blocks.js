(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{710:function(n,o,e){"use strict";e.r(o);var a,i,t,r,c,s,d=e(0),l=e.n(d),u=e(6),m=e.n(u),f=e(3),p=e.n(f),b=e(7),h=e.n(b),g=e(38),k=e.n(g),v=(e(1),e(12)),y=e(4),_=e(18),j=e(2),M=e.n(j),O=e(17),w=e.n(O),D=e(194),U=e(193),C=e(197),R=e(760),q=e.n(R),N=e(51),S=e(20),T=Object(y.f)({unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),A=Object(y.g)((t=i=function(n){function o(){var e,a,i;m()(this,o);for(var t=arguments.length,r=Array(t),c=0;c<t;c++)r[c]=arguments[c];return e=a=p()(this,n.call.apply(n,[this].concat(r))),a.handleDomainUnblock=function(){a.props.onUnblockDomain(a.props.domain)},i=e,p()(a,i)}return h()(o,n),o.prototype.render=function(){var n=this.props,o=n.domain,e=n.intl;return l()("div",{className:"domain"},void 0,l()("div",{className:"domain__wrapper"},void 0,l()("span",{className:"domain__domain-name"},void 0,l()("strong",{},void 0,o)),l()("div",{className:"domain__buttons"},void 0,l()(S.a,{active:!0,icon:"unlock-alt",title:e.formatMessage(T.unblockDomain,{domain:o}),onClick:this.handleDomainUnblock}))))},o}(_.a),i.propTypes={domain:M.a.string,onUnblockDomain:M.a.func.isRequired,intl:M.a.object.isRequired},a=t))||a,I=e(21),L=Object(y.f)({blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),H=Object(y.g)(Object(v.connect)(function(){return function(n,o){return q()(o),{}}},function(n,o){var e=o.intl;return{onBlockDomain:function(o){n(Object(I.d)("CONFIRM",{message:l()(y.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:l()("strong",{},void 0,o)}}),confirm:e.formatMessage(L.blockDomainConfirm),onConfirm:function(){return n(Object(N.e)(o))}}))},onUnblockDomain:function(o){n(Object(N.h)(o))}}})(A)),J=e(195);e.d(o,"default",function(){return E});var B=Object(y.f)({heading:{id:"column.domain_blocks",defaultMessage:"Hidden domains"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"}}),E=Object(v.connect)(function(n){return{domains:n.getIn(["domain_lists","blocks","items"])}})(r=Object(y.g)((s=c=function(n){function o(){var e,a,i;m()(this,o);for(var t=arguments.length,r=Array(t),c=0;c<t;c++)r[c]=arguments[c];return e=a=p()(this,n.call.apply(n,[this].concat(r))),a.handleLoadMore=k()(function(){a.props.dispatch(Object(N.f)())},300,{leading:!0}),i=e,p()(a,i)}return h()(o,n),o.prototype.componentWillMount=function(){this.props.dispatch(Object(N.g)())},o.prototype.render=function(){var n=this.props,o=n.intl,e=n.domains,a=n.shouldUpdateScroll;if(!e)return l()(U.a,{},void 0,l()(D.a,{}));var i=l()(y.b,{id:"empty_column.domain_blocks",defaultMessage:"There are no hidden domains yet."});return l()(U.a,{icon:"minus-circle",heading:o.formatMessage(B.heading)},void 0,l()(C.a,{}),l()(J.a,{scrollKey:"domain_blocks",onLoadMore:this.handleLoadMore,shouldUpdateScroll:a,emptyMessage:i},void 0,e.map(function(n){return l()(H,{domain:n},n)})))},o}(_.a),c.propTypes={params:M.a.object.isRequired,dispatch:M.a.func.isRequired,shouldUpdateScroll:M.a.func,domains:w.a.orderedSet,intl:M.a.object.isRequired},r=s))||r)||r},760:function(n,o,e){"use strict";o.__esModule=!0,o.default=function(n){if(null==n)throw new TypeError("Cannot destructure undefined")}}}]);
//# sourceMappingURL=domain_blocks.js.map