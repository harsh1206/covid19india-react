(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[26],{118:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(78),a=r(119),i=r(0),c=function(t){var e=Object(i.useState)(null),r=Object(n.a)(e,2),c=r[0],o=r[1];return Object(i.useEffect)((function(){var e=t.current,r=new a.a((function(t,e){t.forEach((function(t,e){o(t.contentRect)}))}));return r.observe(e),function(){r.unobserve(e)}}),[t]),c}},252:function(t,e,r){"use strict";r.r(e);var n=r(109),a=r(137),i=r.n(a),c=r(176),o=r(23),s=r(118),l=r(31),u=r(166),f=r(248),d=r(102),p=r(234),m=r(222),b=r(240),v=r(217),h=r(120),j=r(165),O=r(114),g=r(215),k=r(0),E=r.n(k),x=r(250);var y=function(t){t.data;var e=t.mapViz,r=t.mapScale,n=t.statistic,a=Object(x.a)().t,i=Object(k.useRef)(null),c=Object(k.useRef)(),y=Object(s.a)(c);return Object(k.useEffect)((function(){var t=Object(g.a)(i.current),s=y||c.current.getBoundingClientRect(),k=s.width,E=s.height;if(!k||!E){var x=c.current.getBoundingClientRect();k=x.width,E=x.height}if(e===o.k.BUBBLES){var A=t.transition().duration(o.c);t.select(".ramp").transition(A).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(A).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var w=r.domain()[1];t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle").selectAll("circle").data([w/10,2*w/5,w]).join("circle").attr("fill","none").attr("stroke","#ccc").transition(A).attr("cy",(function(t){return-r(t)})).attr("r",r);var S=r.copy().range([0,-2*r(w)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(A).call(Object(d.b)(S).tickSize(0).tickPadding(0).tickValues([w/10,2*w/5,w]).tickFormat(Object(p.a)("0~s"))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,n=t.title,a=t.tickSize,i=void 0===a?6:a,c=t.width,s=void 0===c?320:c,l=t.height,g=void 0===l?44+i:l,k=t.marginTop,E=void 0===k?18:k,x=t.marginRight,y=void 0===x?0:x,A=t.marginBottom,w=void 0===A?16+i:A,S=t.marginLeft,R=void 0===S?0:S,C=t.ticks,B=void 0===C?s/64:C,N=t.tickFormat,M=t.tickValues,L=t.ordinalWeights;e.selectAll(".circles > *").remove(),e.selectAll(".circleAxis > *").remove();var U,_=e.transition().duration(o.c),F=function(t){t.selectAll(".tick line").attr("y1",E+w-g)};if(r.interpolate){var H=Math.min(r.domain().length,r.range().length);U=r.copy().rangeRound(Object(m.a)(Object(b.a)(R,s-y),H)),e.select(".ramp").attr("class","ramp").attr("x",R).attr("y",E).attr("width",s-R-y).attr("height",g-E-w).attr("preserveAspectRatio","none").attr("xlink:href",T(r.copy().domain(Object(m.a)(Object(b.a)(0,1),H))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(_).attr("opacity",0).remove(),U=Object.assign(r.copy().interpolator(Object(v.a)(R,s-y)),{range:function(){return[R,s-y]}}),e.select(".ramp").attr("class","ramp").attr("x",R).attr("y",E).attr("width",s-R-y).attr("height",g-E-w).attr("preserveAspectRatio","none").attr("xlink:href",T(r.interpolator()).toDataURL()).transition(_).attr("opacity",1),!U.ticks){if(void 0===M){var I=Math.round(B+1);M=Object(u.a)(I).map((function(t){return Object(f.a)(r.domain(),t/(I-1))}))}"function"!==typeof N&&(N=Object(p.a)(void 0===N?",f":N))}}else if(r.invertExtent){var V=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),z=void 0===N?function(t){return t}:"string"===typeof N?Object(p.a)(N):N;U=Object(h.a)().domain([-1,r.range().length-1]).rangeRound([R,s-y]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return U(e-1)})).attr("y",E).attr("width",(function(t,e){return U(e)-U(e-1)})).attr("height",g-E-w).attr("fill",(function(t){return t})),M=Object(u.a)(-1,V.length),N=function(t){return-1===t?z(1):t!==V.length-1?t===V.length-2?z(V[t]+"+",t):z(V[t],t):void 0}}else{if(e.select(".ramp").transition(_).attr("opacity",0).attr("xlink:href",null),L){var D=Object(h.a)().domain([0,L.reduce((function(t,e){return t+e}))]).rangeRound([0,s-R-y]),P=L.map((function(t,e){return L.slice(0,e).reduce((function(t,e){return t+D(e)}),R)}));U=Object(O.a)().domain(r.domain()).range(P),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",U).attr("width",(function(t,e){return D(L[e])}))})).attr("y",E).attr("height",g-E-w).attr("fill",r).transition(_).attr("x",U).attr("width",(function(t,e){return D(L[e])})).attr("opacity",1)}else U=Object(j.a)().domain(r.domain()).rangeRound([R,s-y]),e.selectAll("rect").data(r.domain()).join("rect").attr("x",U).attr("y",E).attr("width",Math.max(0,U.bandwidth()-1)).attr("height",g-E-w).attr("fill",r);F=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(g-w,")")).transition(_).attr("class","axis").call(Object(d.a)(U).ticks(B,"string"===typeof N?N:void 0).tickFormat("function"===typeof N?N:void 0).tickSize(i).tickValues(M)).on("start",(function(){e.call(F).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",R).attr("y",E+w-g-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(n)})),e.node()}({svg:t,color:r,title:"".concat(a(Object(l.a)(n))," ").concat(a("cases")),width:k,height:E,ticks:5,tickFormat:function(t,r,n){if(e!==o.k.CHOROPLETH||Number.isInteger(t))return r===n.length-1?Object(l.f)(t)+"+":Object(l.f)(t)},marginLeft:2,marginRight:0})}))}),[a,y,r,e,n]),E.a.createElement("div",{className:"svg-parent maplegend",style:{height:o.g},ref:c},E.a.createElement("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:i},E.a.createElement("image",{className:"ramp"}),E.a.createElement("g",{className:"bars"}),E.a.createElement("g",{className:"circles"}),E.a.createElement("g",{className:"circleAxis"}),E.a.createElement("g",{className:"axis"},E.a.createElement("text",{className:"axistext"}))),E.a.createElement("canvas",{className:"color-scale",style:{position:"absolute",height:0}}))};function T(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),a=0;a<e;++a)n.fillStyle=t(a/(e-1)),n.fillRect(a,0,1,1);return r}var A=r(88),w=r(79),S=r.n(w),R=r(170),C=r(228),B=r(235),N=r(232),M=r(177),L=r(253),U=r(223),_=r(224),F=r(225),H=r(226),I=r(227),V=r(131),z=r(101),D=r(5),P=r(107),q=r(193),Y={confirmed:function(t){return Object(U.a)(.85*t)},active:function(t){return Object(_.a)(.85*t)},recovered:function(t){return Object(F.a)(.85*t)},deceased:function(t){return Object(H.a)(.85*t)},tested:function(t){return Object(I.a)(.85*t)}},W=function(t,e){return Object(l.j)(t,"total",e)};e.default=function(t){var e,r,a=this,s=t.mapCode,u=t.mapView,f=t.mapViz,d=t.data,p=(t.changeMap,t.regionHighlighted),m=t.setRegionHighlighted,b=t.statistic,v=(t.isCountryLoaded,Object(x.a)().t),h=Object(k.useRef)(null),j=o.h[s],O=Object(D.g)(),T=Object(P.a)(j.geoDataFile,function(){var t=Object(c.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,w=Object(k.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t&&Object.keys(o.h).includes(t)}));return u===o.j.STATES?Object(R.a)(t,(function(t){return W(d[t],b)})):Object(R.a)(t,(function(t){var e;return(null===(e=d[t])||void 0===e?void 0:e.districts)?Object(R.a)(Object.values(d[t].districts),(function(t){return W(t,b)})):0}))}),[d,u,b]),U=Object(k.useMemo)((function(){return W(d[s],b)}),[d,s,b]),_=Object(k.useMemo)((function(){return f===o.k.BUBBLES?Object(M.b)([0,Math.max(w,1)],[0,40]).clamp(!0).nice(3):Object(L.a)([0,Math.max(1,w)],Y[b]).clamp(!0)}),[f,b,w]),F=Object(k.useMemo)((function(){return T?Object(B.a)(Object(N.a)()):null}),[T]),H=Object(k.useCallback)((function(t){var e,r,n=o.o[t.properties.st_nm],a=t.properties.district,i=d[n],c=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[a];return 0===(r=W(a?c:i,b))?"#ffffff00":_(r)}),[d,_,b]),I=Object(k.useCallback)((function(){return o.b[b]}),[b]),J=Object(k.useMemo)((function(){return T?(u===o.j.STATES?q.a(T,T.objects.states).features:j.mapType===o.i.COUNTRY&&f===o.k.BUBBLES?[].concat(Object(n.a)(q.a(T,T.objects.states).features),Object(n.a)(q.a(T,T.objects.districts).features)):q.a(T,T.objects.districts).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(s,"-").concat(r).concat(e?"-"+e:""),n})):null}),[T,s,u,f,j]),G=Object(k.useCallback)((function(t){t.select("title").text((function(t){if(f===o.k.CHOROPLETH){var e,r,n=t.properties.st_nm,a=o.o[n],i=t.properties.district,c=d[a],s=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[i];return r=W(i?s:c,b),Object(l.f)(r/(U||.001)*100)+"% from "+Object(l.b)(i||n)}}))}),[f,d,b,U]);Object(k.useEffect)((function(){Object(g.a)(h.current).attr("pointer-events","auto").on("click",m.bind(a,{stateCode:s,districtName:null}))}),[s,m]),Object(k.useEffect)((function(){if(T){var t=Object(g.a)(h.current),e=Object(z.a)().duration(o.c),r=null,n=t.select(".regions").selectAll("path").data(f!==o.k.BUBBLES?J:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",F).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t){m({stateCode:o.o[t.properties.st_nm],districtName:t.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("touchstart",(function(t){r=r===t?null:t})).on("click",(function(e){var n;V.b.stopPropagation();var a=o.o[e.properties.st_nm];!r&&j.mapType!==o.i.STATE&&(null===(n=d[a])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),O.push("/state/".concat(a).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",H).attr("stroke",I)}));window.requestIdleCallback((function(){G(n)}))}}),[f,d,J,H,T,O,j.mapType,F,G,m,I]),Object(k.useEffect)((function(){if(J){var t=Object(g.a)(h.current),e=Object(z.a)().duration(o.c),r=[];f===o.k.BUBBLES&&(r=J.map((function(t){var e=o.o[t.properties.st_nm],r=t.properties.district,n=d[e];if(u===o.j.STATES)t.value=W(n,b);else if(u===o.j.DISTRICTS){var a,i,c=null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[r];t.value=W(r?c:null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[o.w],b)}return t})).sort((function(t,e){return e.value-e.value})));var n=null;t.select(".circles").selectAll("circle").data(r,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(F.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all")}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t){m({stateCode:o.o[t.properties.st_nm],districtName:u===o.j.STATES?null:t.properties.district||o.w})})).on("touchstart",(function(t){n=n===t?null:t})).on("click",(function(t){V.b.stopPropagation(),n||j.mapType===o.i.STATE||O.push("/state/".concat(o.o[t.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).transition(e).attr("fill",o.b[b]+"70").attr("stroke",o.b[b]+"70").attr("r",(function(t){return _(t.value)}))}}),[j.mapType,f,u,d,J,O,_,F,m,b]);var K=Object(k.useCallback)((function(t){return o.b[t]+"40"}),[s]);return Object(k.useEffect)((function(){if(T){var t=Object(g.a)(h.current),e=Object(z.a)().duration(o.c),r=[],n=[];j.mapType===o.i.COUNTRY&&((r=[q.b(T,T.objects.states)])[0].id="".concat(s,"-states")),(j.mapType===o.i.STATE||u===o.j.DISTRICTS&&f===o.k.CHOROPLETH)&&((n=[q.b(T,T.objects.districts)])[0].id="".concat(s,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(r,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",F).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",K.bind(a,b)),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",F).attr("d",F).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",K.bind(a,b))}}),[T,j,s,f,u,b,F,K]),Object(k.useEffect)((function(){var t=p.stateCode,e=o.q[t],r=p.districtName,n=Object(g.a)(h.current);f===o.k.BUBBLES?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==s||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||u===o.j.STATES||r===o.w&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var a,i=e===n.properties.st_nm&&(!r&&t!==s||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||u===o.j.STATES);i&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",i?1:0)}))}),[T,d,s,u,f,p.stateCode,p.districtName,b]),E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"svg-parent"},E.a.createElement("svg",{id:"chart",viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:h},E.a.createElement("g",{className:"regions"}),E.a.createElement("g",{className:"state-borders"}),E.a.createElement("g",{className:"district-borders"}),E.a.createElement("g",{className:"circles"})),j.mapType===o.i.STATE&&!!W(null===(e=d[s])||void 0===e||null===(r=e.districts)||void 0===r?void 0:r[o.w],b)&&E.a.createElement("div",{className:S()("disclaimer","is-".concat(b))},E.a.createElement(A.a,null),E.a.createElement("span",null,v("District-wise {{statistic}} numbers need reconciliation",{statistic:v(b)})))),_&&E.a.createElement(y,{data:d,mapViz:f,mapScale:_,statistic:b}),E.a.createElement("svg",{style:{position:"absolute",height:0}},E.a.createElement("defs",null,E.a.createElement("filter",{id:"balance-color",colorInterpolationFilters:"sRGB"},E.a.createElement("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})))))}}}]);
//# sourceMappingURL=26.fa2362dc.chunk.js.map