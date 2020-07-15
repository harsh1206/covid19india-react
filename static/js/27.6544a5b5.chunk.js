(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[27],{105:function(e,t,a){"use strict";var i=a(78),l=a(96),n=a(0),s=a.n(n),c=a(81);t.a=function(e){var t=e.data,a=e.children,o=Object(n.useState)(!1),d=Object(i.a)(o,2),r=d[0],m=d[1],u=Object(c.f)(r,null,{from:l.j,enter:l.i,leave:l.j,config:{mass:1,tension:210,friction:20}});return s.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:m.bind(void 0,!0),onMouseLeave:m.bind(void 0,!1)},a,u.map((function(e){var a=e.item,i=e.key,l=e.props;return a?s.a.createElement(c.a.div,{key:i,style:l},s.a.createElement("div",{className:"message"},s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):s.a.createElement(c.a.div,{key:i})})))}},246:function(e,t,a){"use strict";a.r(t);var i=a(78),l=a(23),n=a(31),s=a(79),c=a.n(s),o=a(82),d=a.n(o),r=a(0),m=a.n(r),u=a(81),v=m.a.memo((function(e){var t=e.statistic,a=e.data,i=e.isPerMillion,s=Object(n.j)(a,"total",t,i);s||"tested"!==t||(s=NaN);var o=Object(n.j)(a,"delta",t,i),d=Object(u.c)({total:s,delta:o,config:l.n});return m.a.createElement("div",{className:"cell statistic"},"active"!==t&&m.a.createElement(u.a.div,{className:c()("delta","is-".concat(t))},d.delta.interpolate((function(e){return e>0?"\u2191"+Object(n.f)(Math.floor(e),"tested"===t?"short":null):e<0?"\u2193"+Object(n.f)(Math.floor(Math.abs(e)),"tested"===t?"short":null):""}))),m.a.createElement(u.a.div,{className:"total"},d.total.interpolate((function(e){return Object(n.f)(Math.floor(e),"tested"===t?"short":null)}))))}),(function(e,t){var a,i,l,n;return!!d()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!d()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&!!d()(e.isPerMillion,t.isPerMillion))})),g=a(105),h=a(89),b=a(171),N=a(250);var f=m.a.memo((function(e){var t,a=e.stateCode,i=e.districtName,n=e.data,s=e.isPerMillion,o=e.regionHighlighted,d=e.setRegionHighlighted,u=Object(N.a)().t,f=Object(r.useCallback)((function(){o.districtName!==i&&d(Object(h.a)(o,(function(e){e.stateCode=a,e.districtName=i})))}),[o,i,d,a]);return m.a.createElement("div",{className:c()("row","district",{"is-highlighted":(null===o||void 0===o?void 0:o.districtName)===i}),onMouseEnter:f},m.a.createElement("div",{className:"cell"},m.a.createElement("div",{className:"state-name"},u(i)),(null===n||void 0===n||null===(t=n.meta)||void 0===t?void 0:t.notes)&&m.a.createElement(g.a,{data:n.meta.notes},m.a.createElement(b.a,{size:16}))),l.r.map((function(e){return m.a.createElement(v,Object.assign({key:e},{statistic:e,data:n,isPerMillion:s}))})))}),(function(e,t){var a,i,l,n,s,c;return!!d()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!d()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!d()(null===(s=e.data)||void 0===s?void 0:s.last_updated,null===(c=t.data)||void 0===c?void 0:c.last_updated)&&(!!d()(e.isPerMillion,t.isPerMillion)&&!(!d()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(d()(e.regionHighlighted.districtName,e.districtName)||d()(t.regionHighlighted.districtName,t.districtName))))))})),E=a(143),j=a(88),C=a(5),O=a(213);t.default=m.a.memo((function(e){var t,a,s=this,o=e.data,d=e.stateCode,u=e.districtName,p=e.isPerMillion,k=e.regionHighlighted,M=e.setRegionHighlighted,H=Object(r.useState)(!1),P=Object(i.a)(H,2),y=P[0],w=P[1],S=Object(O.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),A=Object(i.a)(S,2),_=A[0],D=A[1],R=Object(C.g)(),T=Object(N.a)().t,q=Object(r.useRef)(),z=Object(r.useCallback)((function(e){D(Object(h.a)(_,(function(t){t.isAscending=!_.isAscending,t.sortColumn=e})))}),[_,D]),I=Object(r.useCallback)((function(e,t){if("districtName"!==_.sortColumn){var a=Object(n.j)(o.districts[e],_.delta?"delta":"total",_.sortColumn,p),i=Object(n.j)(o.districts[t],_.delta?"delta":"total",_.sortColumn,p);return _.isAscending?a-i:i-a}return _.isAscending?e.localeCompare(t):t.localeCompare(e)}),[_,o,p]),F=Object(r.useCallback)((function(){d?k.stateCode!==d&&M(Object(h.a)(k,(function(e){e.stateCode=d,e.districtName=null}))):u&&(k.districtName===u&&k.stateCode===o.stateCode||M(Object(h.a)(k,(function(e){e.stateCode=o.stateCode,e.districtName=u}))))}),[o.stateCode,u,k,M,d]),J=Object(r.useCallback)((function(){o.districts&&w(!y)}),[y,o]),L=u;u===l.w&&(L="".concat(T(l.w)," [").concat(T(l.q[o.stateCode]),"]"));var U=Object(r.useCallback)((function(e){R.push("state/".concat(e))}),[R]),V=Object(r.useCallback)((function(){w(!1),q.current.scrollIntoView({block:"start"})}),[d]);return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:c()("row",{"is-total":"TT"===d},{"is-highlighted":d&&(null===k||void 0===k?void 0:k.stateCode)===d||u&&(null===k||void 0===k?void 0:k.districtName)===u&&(null===k||void 0===k?void 0:k.stateCode)===o.stateCode}),onMouseEnter:F,onClick:J,ref:q},m.a.createElement("div",{className:"cell"},m.a.createElement("div",{className:"state-name fadeInUp"},T(l.q[d])||L),(null===o||void 0===o||null===(t=o.meta)||void 0===t?void 0:t.notes)&&m.a.createElement(g.a,{data:o.meta.notes},m.a.createElement(b.a,{size:16}))),l.r.map((function(e){return m.a.createElement(v,Object.assign({key:e},{data:o,statistic:e,isPerMillion:p}))}))),y&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"state-meta"},m.a.createElement("div",{className:"state-meta-top"},(null===o||void 0===o||null===(a=o.meta)||void 0===a?void 0:a.last_updated)&&m.a.createElement("p",{className:"last-updated"},m.a.createElement(j.c,null),Object(n.a)("".concat(Object(n.e)(o.meta.last_updated)," ").concat(T("ago")))),m.a.createElement("div",{className:"state-page",onClick:U.bind(this,d)},m.a.createElement(j.g,null),m.a.createElement("span",null,T("See more details on {{state}}",{state:d})))),l.w in o.districts&&m.a.createElement("div",{className:"state-meta-bottom"},m.a.createElement("div",{className:c()("disclaimer")},m.a.createElement(j.a,null),m.a.createElement("span",null,"District-wise data not available in state bulletin")))),m.a.createElement("div",{className:c()("row","heading")},m.a.createElement("div",{className:"cell heading",onClick:z.bind(this,"districtName")},m.a.createElement("div",{className:"district-name"},T("District")),"districtName"===_.sortColumn&&m.a.createElement("div",{className:c()("sort-icon",{invert:!_.isAscending})},m.a.createElement(j.e,{size:10}))),l.r.map((function(e){return m.a.createElement(E.a,Object.assign({key:e},{statistic:e,sortData:_,setSortData:D},{handleSort:z.bind(s,e)}))})))),y&&Object.keys(o.districts).sort((function(e,t){return I(e,t)})).map((function(e){return m.a.createElement(f,Object.assign({key:e},{districtName:e,regionHighlighted:k,setRegionHighlighted:M,stateCode:d,isPerMillion:p},{data:o.districts[e]}))})),y&&m.a.createElement("div",{className:"spacer"},m.a.createElement("p",null,"End of ".concat(T(l.q[d]),"'s districts")),m.a.createElement("div",{className:"fold",onClick:V},m.a.createElement(j.f,null))))}),(function(e,t){var a,i,l,n;return!!d()(null===(a=e.data)||void 0===a?void 0:a.total,null===(i=t.data)||void 0===i?void 0:i.total)&&(!!d()(null===(l=e.data)||void 0===l?void 0:l.delta,null===(n=t.data)||void 0===n?void 0:n.delta)&&(!!d()(e.isPerMillion,t.isPerMillion)&&(!(!d()(e.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&d()(e.regionHighlighted.stateCode,e.stateCode)||d()(t.regionHighlighted.stateCode,t.stateCode))&&!(!d()(e.regionHighlighted.districtName,t.regionHighlighted.districtName)&&d()(e.regionHighlighted.districtName,e.districtName)||d()(t.regionHighlighted.districtName,t.districtName)))))}))}}]);
//# sourceMappingURL=27.6544a5b5.chunk.js.map