(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{708:function(e,t,n){"use strict";n.r(t);var o,a,i,r=n(0),s=n.n(r),d=n(6),c=n.n(d),l=n(3),u=n.n(l),p=n(7),h=n.n(p),g=n(1),m=n.n(g),f=n(12),v=n(42),b=n(19),w=n(2),_=n.n(w),y=n(17),C=n.n(y),O=n(32),j=n(4),k=n(199),I=n.n(k),M=n(759),N=n.n(M),S=n(96),x=n(16),R=n(119),K=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.status,n=e.checked,o=e.onToggle,a=e.disabled,i=null;if(t.get("reblog"))return null;if(t.get("media_attachments").size>0)if(t.get("media_attachments").some(function(e){return"unknown"===e.get("type")}));else if("video"===t.getIn(["media_attachments",0,"type"])){var r=t.getIn(["media_attachments",0]);i=s()(R.a,{fetchComponent:x.G,loading:this.renderLoadingVideoPlayer},void 0,function(e){return s()(e,{preview:r.get("preview_url"),src:r.get("url"),alt:r.get("description"),width:239,height:110,inline:!0,sensitive:t.get("sensitive"),onOpenVideo:N.a})})}else i=s()(R.a,{fetchComponent:x.w,loading:this.renderLoadingMediaGallery},void 0,function(e){return s()(e,{media:t.get("media_attachments"),sensitive:t.get("sensitive"),height:110,onOpenMedia:N.a})});return s()("div",{className:"status-check-box"},void 0,s()("div",{className:"status-check-box__status"},void 0,s()(S.a,{status:t}),i),s()("div",{className:"status-check-box-toggle"},void 0,s()(I.a,{checked:n,onChange:o,disabled:a})))},t}(m.a.PureComponent),T=n(5),q=Object(f.connect)(function(e,t){var n=t.id;return{status:e.getIn(["statuses",n]),checked:e.getIn(["reports","new","status_ids"],Object(T.Set)()).includes(n)}},function(e,t){var n=t.id;return{onToggle:function(t){e(Object(v.m)(n,t.target.checked))}}})(K),D=n(18),F=n(79),z=n(20);n.d(t,"default",function(){return A});var P=Object(j.f)({close:{id:"lightbox.close",defaultMessage:"Close"},placeholder:{id:"report.placeholder",defaultMessage:"Additional comments"},submit:{id:"report.submit",defaultMessage:"Submit"}}),A=Object(f.connect)(function(){var e=Object(O.d)();return function(t){var n=t.getIn(["reports","new","account_id"]);return{isSubmitting:t.getIn(["reports","new","isSubmitting"]),account:e(t,n),comment:t.getIn(["reports","new","comment"]),forward:t.getIn(["reports","new","forward"]),statusIds:Object(T.OrderedSet)(t.getIn(["timelines","account:"+n+":with_replies","items"])).union(t.getIn(["reports","new","status_ids"]))}}})(o=Object(j.g)((i=a=function(e){function t(){var n,o,a;c()(this,t);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return n=o=u()(this,e.call.apply(e,[this].concat(r))),o.handleCommentChange=function(e){o.props.dispatch(Object(v.i)(e.target.value))},o.handleForwardChange=function(e){o.props.dispatch(Object(v.j)(e.target.checked))},o.handleSubmit=function(){o.props.dispatch(Object(v.l)())},o.handleKeyDown=function(e){13===e.keyCode&&(e.ctrlKey||e.metaKey)&&o.handleSubmit()},a=n,u()(o,a)}return h()(t,e),t.prototype.componentDidMount=function(){this.props.dispatch(Object(b.l)(this.props.account.get("id"),{withReplies:!0}))},t.prototype.componentWillReceiveProps=function(e){this.props.account!==e.account&&e.account&&this.props.dispatch(Object(b.l)(e.account.get("id"),{withReplies:!0}))},t.prototype.render=function(){var e=this.props,t=e.account,n=e.comment,o=e.intl,a=e.statusIds,i=e.isSubmitting,r=e.forward,d=e.onClose;if(!t)return null;var c=t.get("acct").split("@")[1];return s()("div",{className:"modal-root__modal report-modal"},void 0,s()("div",{className:"report-modal__target"},void 0,s()(z.a,{className:"media-modal__close",title:o.formatMessage(P.close),icon:"times",onClick:d,size:16}),s()(j.b,{id:"report.target",defaultMessage:"Report {target}",values:{target:s()("strong",{},void 0,t.get("acct"))}})),s()("div",{className:"report-modal__container"},void 0,s()("div",{className:"report-modal__comment"},void 0,s()("p",{},void 0,s()(j.b,{id:"report.hint",defaultMessage:"The report will be sent to your instance moderators. You can provide an explanation of why you are reporting this account below:"})),s()("textarea",{className:"setting-text light",placeholder:o.formatMessage(P.placeholder),value:n,onChange:this.handleCommentChange,onKeyDown:this.handleKeyDown,disabled:i}),c&&s()("div",{},void 0,s()("p",{},void 0,s()(j.b,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send an anonymized copy of the report there as well?"})),s()("div",{className:"setting-toggle"},void 0,s()(I.a,{id:"report-forward",checked:r,disabled:i,onChange:this.handleForwardChange}),s()("label",{htmlFor:"report-forward",className:"setting-toggle__label"},void 0,s()(j.b,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:c}})))),s()(F.a,{disabled:i,text:o.formatMessage(P.submit),onClick:this.handleSubmit})),s()("div",{className:"report-modal__statuses"},void 0,s()("div",{},void 0,a.map(function(e){return s()(q,{id:e,disabled:i},e)})))))},t}(D.a),a.propTypes={isSubmitting:_.a.bool,account:C.a.map,statusIds:C.a.orderedSet.isRequired,comment:_.a.string.isRequired,forward:_.a.bool,dispatch:_.a.func.isRequired,intl:_.a.object.isRequired},o=i))||o)||o},759:function(e,t){e.exports=function(){}}}]);
//# sourceMappingURL=report_modal.js.map