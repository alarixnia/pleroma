(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{721:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return U});var o,a,c,s=t(0),r=t.n(s),i=t(6),d=t.n(i),u=t(3),l=t.n(u),p=t(7),h=t.n(p),f=t(38),b=t.n(f),g=(t(1),t(12)),y=t(4),m=t(18),v=t(17),k=t.n(v),M=t(2),j=t.n(M),w=t(194),O=t(193),I=t(197),q=t(695),L=t(190),R=t(195),S=Object(y.f)({heading:{id:"column.blocks",defaultMessage:"Blocked users"}}),U=Object(g.connect)(function(e){return{accountIds:e.getIn(["user_lists","blocks","items"])}})(o=Object(y.g)((c=a=function(e){function n(){var t,o,a;d()(this,n);for(var c=arguments.length,s=Array(c),r=0;r<c;r++)s[r]=arguments[r];return t=o=l()(this,e.call.apply(e,[this].concat(s))),o.handleLoadMore=b()(function(){o.props.dispatch(Object(L.c)())},300,{leading:!0}),a=t,l()(o,a)}return h()(n,e),n.prototype.componentWillMount=function(){this.props.dispatch(Object(L.d)())},n.prototype.render=function(){var e=this.props,n=e.intl,t=e.accountIds,o=e.shouldUpdateScroll;if(!t)return r()(O.a,{},void 0,r()(w.a,{}));var a=r()(y.b,{id:"empty_column.blocks",defaultMessage:"You haven't blocked any users yet."});return r()(O.a,{icon:"ban",heading:n.formatMessage(S.heading)},void 0,r()(I.a,{}),r()(R.a,{scrollKey:"blocks",onLoadMore:this.handleLoadMore,shouldUpdateScroll:o,emptyMessage:a},void 0,t.map(function(e){return r()(q.a,{id:e},e)})))},n}(m.a),a.propTypes={params:j.a.object.isRequired,dispatch:j.a.func.isRequired,shouldUpdateScroll:j.a.func,accountIds:k.a.list,intl:j.a.object.isRequired},o=c))||o)||o}}]);
//# sourceMappingURL=blocks.js.map