(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{717:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return _});var i,o,n,r=a(0),s=a.n(r),d=a(6),l=a.n(d),c=a(3),m=a.n(c),u=a(7),f=a.n(u),h=a(1),p=a.n(h),b=a(2),v=a.n(b),w=a(18),g=a(4),y=a(9),_=Object(g.g)((n=o=function(e){function t(){var a,i,o;l()(this,t);for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=i=m()(this,e.call.apply(e,[this].concat(r))),i.state={loading:!1,oembed:null},i.setIframeRef=function(e){i.iframe=e},i.handleTextareaClick=function(e){e.target.select()},o=a,m()(i,o)}return f()(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.url;this.setState({loading:!0}),Object(y.a)().post("/api/web/embed",{url:t}).then(function(t){e.setState({loading:!1,oembed:t.data});var a=e.iframe.contentWindow.document;a.open(),a.write(t.data.html),a.close(),a.body.style.margin=0,e.iframe.width=a.body.scrollWidth,e.iframe.height=a.body.scrollHeight}).catch(function(t){e.props.onError(t)})},t.prototype.render=function(){var e=this.state.oembed;return s()("div",{className:"modal-root__modal embed-modal"},void 0,s()("h4",{},void 0,s()(g.b,{id:"status.embed",defaultMessage:"Embed"})),s()("div",{className:"embed-modal__container"},void 0,s()("p",{className:"hint"},void 0,s()(g.b,{id:"embed.instructions",defaultMessage:"Embed this status on your website by copying the code below."})),s()("input",{type:"text",className:"embed-modal__html",readOnly:!0,value:e&&e.html||"",onClick:this.handleTextareaClick}),s()("p",{className:"hint"},void 0,s()(g.b,{id:"embed.preview",defaultMessage:"Here is what it will look like:"})),p.a.createElement("iframe",{className:"embed-modal__iframe",frameBorder:"0",ref:this.setIframeRef,title:"preview"})))},t}(w.a),o.propTypes={url:v.a.string.isRequired,onClose:v.a.func.isRequired,onError:v.a.func.isRequired,intl:v.a.object.isRequired},i=n))||i}}]);
//# sourceMappingURL=embed_modal.js.map