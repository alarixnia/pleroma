(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{388:function(t,e,n){"use strict";n.r(e);var o,i,c,a,r,l=n(0),s=n.n(l),d=n(6),u=n.n(d),p=n(3),h=n.n(p),f=n(7),m=n.n(f),b=n(1),g=n.n(b),v=n(28),y=n.n(v),O=n(12),j=n(101),M=n(29),k=n(4),C=n(8),L=n(88),w=n(19),P=n(62),_=n(60),I=n(63),A=Object(k.f)({title:{id:"standalone.public_title",defaultMessage:"A look inside..."}}),E=Object(O.connect)()(o=Object(k.g)(o=function(t){function e(){var n,o,i;u()(this,e);for(var c=arguments.length,a=Array(c),r=0;r<c;r++)a[r]=arguments[r];return n=o=h()(this,t.call.apply(t,[this].concat(a))),o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(t){o.column=t},o.handleLoadMore=function(t){o.props.dispatch(Object(w.r)({maxId:t}))},i=n,h()(o,i)}return m()(e,t),e.prototype.componentDidMount=function(){var t=this.props.dispatch;t(Object(w.r)()),this.disconnect=t(Object(I.e)())},e.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},e.prototype.render=function(){var t=this.props.intl;return g.a.createElement(P.a,{ref:this.setRef,label:t.formatMessage(A.title)},s()(_.a,{icon:"globe",title:t.formatMessage(A.title),onClick:this.handleHeaderClick}),s()(L.a,{timelineId:"public",onLoadMore:this.handleLoadMore,scrollKey:"standalone_public_timeline",trackScroll:!1}))},e}(g.a.PureComponent))||o)||o,H=Object(k.f)({title:{id:"standalone.public_title",defaultMessage:"A look inside..."}}),R=Object(O.connect)()(i=Object(k.g)(i=function(t){function e(){var n,o,i;u()(this,e);for(var c=arguments.length,a=Array(c),r=0;r<c;r++)a[r]=arguments[r];return n=o=h()(this,t.call.apply(t,[this].concat(a))),o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(t){o.column=t},o.handleLoadMore=function(t){o.props.dispatch(Object(w.m)({maxId:t}))},i=n,h()(o,i)}return m()(e,t),e.prototype.componentDidMount=function(){var t=this.props.dispatch;t(Object(w.m)()),this.disconnect=t(Object(I.a)())},e.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},e.prototype.render=function(){var t=this.props.intl;return g.a.createElement(P.a,{ref:this.setRef,label:t.formatMessage(H.title)},s()(_.a,{icon:"users",title:t.formatMessage(H.title),onClick:this.handleHeaderClick}),s()(L.a,{timelineId:"community",onLoadMore:this.handleLoadMore,scrollKey:"standalone_public_timeline",trackScroll:!1}))},e}(g.a.PureComponent))||i)||i,T=Object(O.connect)()(c=function(t){function e(){var n,o,i;u()(this,e);for(var c=arguments.length,a=Array(c),r=0;r<c;r++)a[r]=arguments[r];return n=o=h()(this,t.call.apply(t,[this].concat(a))),o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(t){o.column=t},o.handleLoadMore=function(t){o.props.dispatch(Object(w.o)(o.props.hashtag,{maxId:t}))},i=n,h()(o,i)}return m()(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.dispatch,n=t.hashtag;e(Object(w.o)(n)),this.disconnect=e(Object(I.c)(n))},e.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},e.prototype.render=function(){var t=this.props.hashtag;return g.a.createElement(P.a,{ref:this.setRef},s()(_.a,{icon:"hashtag",title:t,onClick:this.handleHeaderClick}),s()(L.a,{trackScroll:!1,scrollKey:"standalone_hashtag_timeline",timelineId:"hashtag:"+t,onLoadMore:this.handleLoadMore}))},e}(g.a.PureComponent))||c,D=n(99),S=n(10);n.d(e,"default",function(){return W});var x=Object(C.getLocale)(),J=x.localeData,K=x.messages;Object(k.e)(J);var U=Object(j.a)();S.c&&U.dispatch(Object(M.b)(S.c));var W=(r=a=function(t){function e(){return u()(this,e),h()(this,t.apply(this,arguments))}return m()(e,t),e.prototype.render=function(){var t=this.props,e=t.locale,n=t.hashtag,o=t.showPublicTimeline,i=void 0;return i=n?s()(T,{hashtag:n}):o?s()(E,{}):s()(R,{}),s()(k.d,{locale:e,messages:K},void 0,s()(O.Provider,{store:U},void 0,s()(b.Fragment,{},void 0,i,y.a.createPortal(s()(D.a,{}),document.getElementById("modal-container")))))},e}(g.a.PureComponent),a.defaultProps={showPublicTimeline:S.c.settings.known_fediverse},r)},694:function(t,e,n){"use strict";n.r(e);var o=n(67),i=n(66);function c(){var t=n(388).default,e=n(1),o=n(28),i=document.getElementById("mastodon-timeline");if(null!==i){var c=JSON.parse(i.getAttribute("data-props"));o.render(e.createElement(t,c),i)}}Object(i.a)(),Object(o.a)().then(function(){(0,n(80).default)(c)}).catch(function(t){console.error(t)})}},[[694,0]]]);
//# sourceMappingURL=about.js.map