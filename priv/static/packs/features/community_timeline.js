(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{704:function(n,e,t){"use strict";t.r(e);var o,i,c,a=t(0),l=t.n(a),d=t(6),s=t.n(d),r=t(3),u=t.n(r),m=t(7),p=t.n(m),h=t(1),y=t.n(h),f=t(12),M=t(4),g=t(2),b=t.n(g),v=t(88),I=t(62),j=t(60),O=t(19),C=t(113),U=t(701),k=t(33),w=Object(f.connect)(function(n,e){var t=e.columnId,o=n.getIn(["settings","columns"]),i=o.findIndex(function(n){return n.get("uuid")===t});return{settings:t&&i>=0?o.get(i).get("params"):n.getIn(["settings","community"])}},function(n,e){var t=e.columnId;return{onChange:function(e,o){n(t?Object(C.f)(t,e,o):Object(k.c)(["community"].concat(e),o))}}})(U.a),P=t(63);t.d(e,"default",function(){return L});var x=Object(M.f)({title:{id:"column.community",defaultMessage:"Local timeline"}}),L=Object(f.connect)(function(n,e){var t=e.onlyMedia,o=e.columnId,i=o,c=n.getIn(["settings","columns"]),a=c.findIndex(function(n){return n.get("uuid")===i});return{hasUnread:n.getIn(["timelines","community"+(t?":media":""),"unread"])>0,onlyMedia:o&&a>=0?c.get(a).getIn(["params","other","onlyMedia"]):n.getIn(["settings","community","other","onlyMedia"])}})(o=Object(M.g)((c=i=function(n){function e(){var t,o,i;s()(this,e);for(var c=arguments.length,a=Array(c),l=0;l<c;l++)a[l]=arguments[l];return t=o=u()(this,n.call.apply(n,[this].concat(a))),o.handlePin=function(){var n=o.props,e=n.columnId,t=n.dispatch,i=n.onlyMedia;t(e?Object(C.h)(e):Object(C.e)("COMMUNITY",{other:{onlyMedia:i}}))},o.handleMove=function(n){var e=o.props,t=e.columnId;(0,e.dispatch)(Object(C.g)(t,n))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(n){o.column=n},o.handleLoadMore=function(n){var e=o.props,t=e.dispatch,i=e.onlyMedia;t(Object(O.m)({maxId:n,onlyMedia:i}))},i=t,u()(o,i)}return p()(e,n),e.prototype.componentDidMount=function(){var n=this.props,e=n.dispatch,t=n.onlyMedia;e(Object(O.m)({onlyMedia:t})),this.disconnect=e(Object(P.a)({onlyMedia:t}))},e.prototype.componentDidUpdate=function(n){if(n.onlyMedia!==this.props.onlyMedia){var e=this.props,t=e.dispatch,o=e.onlyMedia;this.disconnect(),t(Object(O.m)({onlyMedia:o})),this.disconnect=t(Object(P.a)({onlyMedia:o}))}},e.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},e.prototype.render=function(){var n=this.props,e=n.intl,t=n.shouldUpdateScroll,o=n.hasUnread,i=n.columnId,c=n.multiColumn,a=n.onlyMedia,d=!!i;return y.a.createElement(I.a,{ref:this.setRef,label:e.formatMessage(x.title)},l()(j.a,{icon:"users",active:o,title:e.formatMessage(x.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:d,multiColumn:c},void 0,l()(w,{columnId:i})),l()(v.a,{trackScroll:!d,scrollKey:"community_timeline-"+i,timelineId:"community"+(a?":media":""),onLoadMore:this.handleLoadMore,emptyMessage:l()(M.b,{id:"empty_column.community",defaultMessage:"The local timeline is empty. Write something publicly to get the ball rolling!"}),shouldUpdateScroll:t}))},e}(y.a.PureComponent),i.contextTypes={router:b.a.object},i.defaultProps={onlyMedia:!1},o=c))||o)||o}}]);
//# sourceMappingURL=community_timeline.js.map