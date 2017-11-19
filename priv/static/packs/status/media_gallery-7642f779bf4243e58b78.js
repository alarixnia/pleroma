webpackJsonp([26],{159:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"default",function(){return S});var a,n,s,l,o,r=i(2),d=i.n(r),p=i(1),c=i.n(p),u=i(3),h=i.n(u),g=i(4),v=i.n(g),m=i(0),f=i.n(m),b=i(5),y=i.n(b),_=i(8),k=(i.n(_),i(19)),x=i(6),C=i(33),w=i(10),M=i.n(w),P=i(18),N=Object(x.f)({toggle_visible:{id:"media_gallery.toggle_visible",defaultMessage:"Toggle visibility"}}),O=(n=a=function(e){function t(){var i,a,n;c()(this,t);for(var s=arguments.length,l=Array(s),o=0;o<s;o++)l[o]=arguments[o];return i=a=h()(this,e.call.apply(e,[this].concat(l))),a.handleMouseEnter=function(e){a.hoverToPlay()&&e.target.play()},a.handleMouseLeave=function(e){a.hoverToPlay()&&(e.target.pause(),e.target.currentTime=0)},a.handleClick=function(e){var t=a.props,i=t.index,n=t.onClick;a.context.router&&0===e.button&&(e.preventDefault(),n(i)),e.stopPropagation()},n=i,h()(a,n)}return v()(t,e),t.prototype.hoverToPlay=function(){var e=this.props.attachment;return!P.a&&"gifv"===e.get("type")},t.prototype.render=function(){var e=this.props,t=e.attachment,i=e.index,a=e.size,n=e.standalone,s=50,l=100,o="auto",r="auto",p="auto",c="auto";1===a&&(s=100),(4===a||3===a&&i>0)&&(l=50),2===a?0===i?c="2px":r="2px":3===a?(0===i?c="2px":i>0&&(r="2px"),1===i?p="2px":i>1&&(o="2px")):4===a&&(0!==i&&2!==i||(c="2px"),1!==i&&3!==i||(r="2px"),i<2?p="2px":o="2px");var u="";if("image"===t.get("type")){var h=t.get("preview_url"),g=t.getIn(["meta","small","width"]),v=t.get("url"),m=t.getIn(["meta","original","width"]),f="number"==typeof m&&"number"==typeof g,b=f?v+" "+m+"w, "+h+" "+g+"w":null,y=f?"(min-width: 1025px) "+s/100*320+"px, "+s+"vw":null;u=d()("a",{className:"media-gallery__item-thumbnail",href:t.get("remote_url")||v,onClick:this.handleClick,target:"_blank"},void 0,d()("img",{src:h,srcSet:b,sizes:y,alt:t.get("description"),title:t.get("description")}))}else if("gifv"===t.get("type")){var _=!Object(C.a)()&&P.a;u=d()("div",{className:M()("media-gallery__gifv",{autoplay:_})},void 0,d()("video",{className:"media-gallery__item-gifv-thumbnail","aria-label":t.get("description"),role:"application",src:t.get("url"),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,autoPlay:_,loop:!0,muted:!0}),d()("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}return d()("div",{className:M()("media-gallery__item",{standalone:n}),style:{left:r,top:o,right:c,bottom:p,width:s+"%",height:l+"%"}},t.get("id"),u)},t}(f.a.PureComponent),a.contextTypes={router:y.a.object},a.defaultProps={standalone:!1,index:0,size:1},n),S=Object(x.g)((o=l=function(e){function t(){var i,a,n;c()(this,t);for(var s=arguments.length,l=Array(s),o=0;o<s;o++)l[o]=arguments[o];return i=a=h()(this,e.call.apply(e,[this].concat(l))),a.state={visible:!a.props.sensitive},a.handleOpen=function(){a.setState({visible:!a.state.visible})},a.handleClick=function(e){a.props.onOpenMedia(a.props.media,e)},a.handleRef=function(e){e&&a.isStandaloneEligible()&&a.setState({width:e.offsetWidth})},n=i,h()(a,n)}return v()(t,e),t.prototype.componentWillReceiveProps=function(e){Object(_.is)(e.media,this.props.media)||this.setState({visible:!e.sensitive})},t.prototype.isStandaloneEligible=function(){var e=this.props,t=e.media;return e.standalone&&1===t.size&&t.getIn([0,"meta","small","aspect"])},t.prototype.render=function(){var e=this,t=this.props,i=t.media,a=t.intl,n=t.sensitive,s=t.height,l=this.state,o=l.width,r=l.visible,p=void 0,c={};if(this.isStandaloneEligible()?c.height=!r&&o?o/this.props.media.getIn([0,"meta","small","aspect"]):"":c.height=s,r){var u=i.take(4).size;p=this.isStandaloneEligible()?d()(O,{standalone:!0,onClick:this.handleClick,attachment:i.get(0)}):i.take(4).map(function(t,i){return d()(O,{onClick:e.handleClick,attachment:t,index:i,size:u},t.get("id"))})}else{var h=void 0;h=n?d()(x.b,{id:"status.sensitive_warning",defaultMessage:"Sensitive content"}):d()(x.b,{id:"status.media_hidden",defaultMessage:"Media hidden"}),p=f.a.createElement("button",{className:"media-spoiler",onClick:this.handleOpen,style:c,ref:this.handleRef},d()("span",{className:"media-spoiler__warning"},void 0,h),d()("span",{className:"media-spoiler__trigger"},void 0,d()(x.b,{id:"status.sensitive_toggle",defaultMessage:"Click to view"})))}return d()("div",{className:"media-gallery",style:c},void 0,d()("div",{className:M()("spoiler-button",{"spoiler-button--visible":r})},void 0,d()(k.a,{title:a.formatMessage(N.toggle_visible),icon:r?"eye":"eye-slash",overlay:!0,onClick:this.handleOpen})),p)},t}(f.a.PureComponent),l.defaultProps={standalone:!1},s=o))||s}});
//# sourceMappingURL=media_gallery-7642f779bf4243e58b78.js.map