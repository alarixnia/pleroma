(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{733:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return w});var o,i=t(0),c=t.n(i),a=t(6),r=t.n(a),l=t(3),s=t.n(l),d=t(7),u=t.n(d),p=t(1),h=t.n(p),m=t(12),f=t(88),b=t(62),v=t(60),M=t(19),g=t(113),y=t(4),j=t(63),O=Object(y.f)({title:{id:"column.direct",defaultMessage:"Direct messages"}}),w=Object(m.connect)(function(e){return{hasUnread:e.getIn(["timelines","direct","unread"])>0}})(o=Object(y.g)(o=function(e){function n(){var t,o,i;r()(this,n);for(var c=arguments.length,a=Array(c),l=0;l<c;l++)a[l]=arguments[l];return t=o=s()(this,e.call.apply(e,[this].concat(a))),o.handlePin=function(){var e=o.props,n=e.columnId,t=e.dispatch;t(n?Object(g.h)(n):Object(g.e)("DIRECT",{}))},o.handleMove=function(e){var n=o.props,t=n.columnId;(0,n.dispatch)(Object(g.g)(t,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleLoadMore=function(e){o.props.dispatch(Object(M.n)({maxId:e}))},i=t,s()(o,i)}return u()(n,e),n.prototype.componentDidMount=function(){var e=this.props.dispatch;e(Object(M.n)()),this.disconnect=e(Object(j.b)())},n.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},n.prototype.render=function(){var e=this.props,n=e.intl,t=e.shouldUpdateScroll,o=e.hasUnread,i=e.columnId,a=e.multiColumn,r=!!i;return h.a.createElement(b.a,{ref:this.setRef,label:n.formatMessage(O.title)},c()(v.a,{icon:"envelope",active:o,title:n.formatMessage(O.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:r,multiColumn:a}),c()(f.a,{trackScroll:!r,scrollKey:"direct_timeline-"+i,timelineId:"direct",onLoadMore:this.handleLoadMore,emptyMessage:c()(y.b,{id:"empty_column.direct",defaultMessage:"You don't have any direct messages yet. When you send or receive one, it will show up here."}),shouldUpdateScroll:t}))},n}(h.a.PureComponent))||o)||o}}]);
//# sourceMappingURL=direct_timeline.js.map