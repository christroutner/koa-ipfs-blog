if(typeof __GATSBY_IPFS_PATH_PREFIX__ === 'undefined'){__GATSBY_IPFS_PATH_PREFIX__=''}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(37),l=n.n(s);n.d(t,"a",function(){return l.a});n(218);var c=o.a.createContext({}),d=function(e){return o.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},179:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return l});var r=n(21),o=function(e){return{type:r.e,payload:{headerHeight:e}}},a=function(e){return{type:r.b,payload:{anchorOpen:e}}},i=function(e){return{type:r.d,payload:{sidebarOpen:e}}},s=function(e){return{type:r.c,payload:{sidebarDocked:e}}},l=function(e){return{type:r.a,payload:{expandedKey:e,autoExpandParent:!1}}}},180:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i});n(84);var r=function(e){return e.layout.sidebar},o=function(e){return e.layout.header.height},a=function(e){return e.layout.anchor},i=function(e){return e.layout.sidebar.expandedKey}},200:function(e,t,n){"use strict";n(38),n(258);var r=n(259),o=n(0),a=n.n(o),i=n(1),s=n.n(i),l=n(260),c=n.n(l),d=n(178),u=n(8),p=n.n(u),f=n(268),h=n.n(f),m=n(59),g=n(179),b=(n(282),n(283),n(284)),y=function(){return a.a.createElement(d.b,{query:"2236891844",render:function(e){var t=e.allMenuItems.edges.map(function(e){return e.node}).reverse();return a.a.createElement("div",null,t.map(function(e){return a.a.createElement("div",{style:{marginLeft:"2em",float:"right"},key:t.indexOf(e)},a.a.createElement("p",{style:{margin:0,fontSize:"1rem"}},a.a.createElement(d.a,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name)))}))},data:b})},v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).componentDidUpdate=function(){t.props.updateHeaderHeight(t.props.size.height)},t}return p()(t,e),t.prototype.render=function(){var e=this.props.siteTitle;return a.a.createElement("div",{style:{position:"fixed",top:0,width:"100%",zIndex:1e3,background:"cornflowerblue",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:1360,padding:"0.8rem 1.0875rem"}},a.a.createElement("div",{style:{float:"left",marginBottom:"0.8em"}},a.a.createElement("h1",{style:{margin:0,fontSize:"1.25rem"}},a.a.createElement(d.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))),a.a.createElement(y,null)))},t}(o.Component),E={updateHeaderHeight:g.e},k=Object(m.b)(function(){return{}},E)(h()({monitorHeight:!0})(v)),S=(n(285),n(180)),O=(n(286),n(221),n(86),n(288)),x=n(223),w=n.n(x),C=(n(289),n(293),n(222)),j=w.a.SubMenu,A=function(e){var t=[],n=[];return e.forEach(function(e){if(e.parents===[]||null===e.parents)t.push(e);else{for(var r=t,o=function(t){if(0===r.filter(function(n){return n.title===e.parents[t]&&n.children}).length){var o={key:"tree/"+e.parents[t],title:e.parents[t],children:[]};r.push(o),n.push(o)}r=r.find(function(n){return n.title===e.parents[t]&&n.children}).children},a=0;a<e.parents.length;a++)o(a);r.push(e)}}),[t,n]},M=function(e){e.sort(function(e,t){return(e.children&&t.children||!e.children&&!t.children)&&e.title>t.title?1:e.children?1:-1})},I=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props.sidebar.expandedKey,n=this.props.root;return a.a.createElement(d.b,{query:"1176653062",render:function(r){var o=function(e){var t=e.map(function(e){return{path:e.node.fields.slug,key:e.node.id,title:e.node.frontmatter.title,parents:e.node.frontmatter.parents}});return A(t)}(r.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith(n)})),i=o[0],s=o[1];M(i);var l=window.location.pathname.replace(C.pathPrefix.slice(0,-1),""),c=r.allMarkdownRemark.edges.filter(function(e){return l===e.node.fields.slug||l.slice(0,-1)===e.node.fields.slug&&"/"===l.slice(-1)}).length>0?[t]:[],u=s.map(function(e){return e.key});return a.a.createElement(w.a,{mode:"inline",defaultOpenKeys:u,selectedKeys:c,inlineIndent:12},function t(n){return n.map(function(n){return n.children?(M(n.children),a.a.createElement(j,{key:n.key,title:a.a.createElement("span",{style:{fontWeight:900}},n.title)},t(n.children))):a.a.createElement(w.a.Item,{key:n.key},a.a.createElement(d.a,{to:n.path,onClick:e.onSetSidebarOpen},n.title))})}(i))},data:O})},t}(o.Component),H={onSetSidebarOpen:g.c},_=Object(m.b)(function(e){return{sidebar:Object(S.d)(e)}},H)(I),P=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.root;return a.a.createElement("div",{style:{position:"fixed",top:t+30,left:10,right:"80%",bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:0,right:10,top:0,bottom:0}},a.a.createElement(_,{root:n})))},t}(o.Component),q=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e)}})(P),R=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.sidebarDocked,n=e.headerHeight,r=e.onPostPage;return a.a.createElement("div",{style:{position:"absolute",top:!t&&r?n+70:n+30,left:!t&&r||!r?0:"20%",right:!t&&r||!r?0:"15%",bottom:0,overflow:t?"visible":"auto"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},this.props.children))},t}(o.Component),T=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e)}})(R),D=n(375),G=n.n(D),W=(n(370),n(374),G.a.Link),B=function(e){var t=0;return e=[].slice.call(e).map(function(e){var n=parseInt(e.parentElement.nodeName[1]);return 0!==t&&n>t&&(n=t+1),t=n,{href:"#"+e.parentElement.id,title:e.parentElement.innerText,depth:n,children:[]}}),z(e),e},z=function(e){for(var t=[],n=0;n<e.length;n++)for(var r=n+1;r<e.length;r++)if(e[n].depth+1===e[r].depth)e[n].children.push(e[r]),t.push(r);else if(e[n].depth>=e[r].depth)break;t.sort(function(e,t){return t-e}).forEach(function(t){return e.splice(t,1)})},F=function(e){function t(t){var n;return(n=e.call(this,t)||this).onSetAnchorOpen=function(){n.props.onSetAnchorOpen(!1)},n.state={anchors:[]},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementsByClassName("post-toc-anchor");this.setState({anchors:B(e)})},n.render=function(){var e=this.state.anchors,t=this.props,n=t.offsetTop,r=t.affix;return a.a.createElement(G.a,{offsetTop:n,onClick:this.onSetAnchorOpen,affix:r},function e(t){return t.map(function(t){return t.children.length>0?a.a.createElement(W,{href:t.href,title:t.title,key:t.href},e(t.children)):a.a.createElement(W,{href:t.href,title:t.title,key:t.href})})}(e))},t}(o.Component),K={onSetAnchorOpen:g.a},N=Object(m.b)(function(){return{}},K)(F),L=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.headerHeight;return a.a.createElement("div",{style:{position:"fixed",top:e+30,left:"85%",right:10,bottom:0,overflow:"hidden"}},a.a.createElement("div",{style:{position:"absolute",left:10,right:0,top:0,bottom:0}},a.a.createElement(N,{offsetTop:e+30,affix:!0})))},t}(o.Component),Y=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e)}})(L),J=n(245),Q=n.n(J),U=(n(244),function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onSetSidebarOpen=function(){t.props.onSetSidebarOpen(!0)},t.onSetSidebarClose=function(){t.props.onSetSidebarOpen(!1)},t.onSetAnchorOpen=function(){t.props.onSetAnchorOpen(!0)},t.onSetAnchorClose=function(){t.props.onSetAnchorOpen(!1)},t}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.headerHeight,n=e.sidebarOpen,r=e.anchorOpen,o=e.root;return a.a.createElement("div",{style:{position:"fixed",top:t,width:"100%",height:40,zIndex:1001,background:"aliceblue",marginBottom:"1.45rem"}},!r&&a.a.createElement("div",{style:{position:"absolute",left:8,top:4}},n?a.a.createElement(Q.a,{icon:"close",onClick:this.onSetSidebarClose}):a.a.createElement(Q.a,{icon:"bars",onClick:this.onSetSidebarOpen}),n&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:0,bottom:0,backgroundColor:"white"}},a.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:1e3,overflowY:"auto",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(_,{root:o})))),!n&&a.a.createElement("div",{style:{position:"absolute",right:8,top:4}},r?a.a.createElement(Q.a,{icon:"close",onClick:this.onSetAnchorClose}):a.a.createElement(Q.a,{icon:"ellipsis",onClick:this.onSetAnchorOpen}),r&&a.a.createElement("div",{style:{position:"fixed",top:t+40,left:0,right:10,bottom:0,zIndex:1e3,overflowY:"auto",backgroundColor:"white",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"}},a.a.createElement(N,{offsetTop:t+70,affix:!1}))))},t}(o.Component)),X={onSetSidebarOpen:g.c,onSetAnchorOpen:g.a},V=Object(m.b)(function(e){return{headerHeight:Object(S.b)(e),sidebarOpen:Object(S.d)(e).open,anchorOpen:Object(S.a)(e).open}},X)(U),Z=n(389),$=n.n(Z),ee=function(e){var t=e.children,n=e.sidebarRoot;e.onSetSidebarDocked;return a.a.createElement(d.b,{query:"3168754476",render:function(e){var r,o,i=e.allMarkdownRemark.edges.map(function(e){return e.node.fields.slug});"undefined"!=typeof window&&(o=C.pathPrefix.endsWith("/")?window.location.pathname.replace(C.pathPrefix.slice(0,-1),""):window.location.pathname.replace(C.pathPrefix,""),r=i.indexOf(o)>=0||i.indexOf(o.slice(0,-1))>=0);return a.a.createElement($.a,{maxWidth:1e3},function(o){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement(k,{siteTitle:e.site.siteMetadata.title}),o&&r?a.a.createElement(V,{root:n}):null,!o&&r?a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{root:n})," ",a.a.createElement(Y,null)," "):null,a.a.createElement(T,{sidebarDocked:!o,onPostPage:r},t))})},data:r})};ee.propTypes={children:s.a.node.isRequired};var te={onSetSidebarDocked:g.b},ne=Object(m.b)(function(){return{}},te)(ee);t.a=ne},218:function(e,t,n){var r;e.exports=(r=n(267))&&r.default||r},222:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatsby Markdown Starter"},plugins:["gatsby-plugin-ipfs","gatsby-plugin-react-helmet",{resolve:"gatsby-source-filesystem",options:{name:"images",path:t+"/src/images"}},{resolve:"gatsby-transformer-json",options:{typeName:"MenuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"menuItems",path:t+"/src/menuItems"}},{resolve:"gatsby-source-filesystem",options:{name:"contents",path:t+"/contents"}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-markdown",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/gatsby-icon.png"}},{resolve:"gatsby-transformer-remark",options:{plugins:["gatsby-remark-katex",{resolve:"gatsby-remark-autolink-headers",options:{className:"post-toc-anchor"}},{resolve:"gatsby-remark-images",options:{maxWidth:590}}]}},"gatsby-plugin-remove-trailing-slashes"],pathPrefix:"__GATSBY_IPFS_PATH_PREFIX__"}}).call(this,"/")},259:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Markdown Starter"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/first-blog"}}},{node:{fields:{slug:"/blog/second-blog"}}},{node:{fields:{slug:"/docs/get-started/introduction"}}},{node:{fields:{slug:"/docs/get-started/quick_start"}}},{node:{fields:{slug:"/docs/guide/anchor"}}},{node:{fields:{slug:"/docs/guide/contents"}}},{node:{fields:{slug:"/docs/guide/menu_items"}}},{node:{fields:{slug:"/docs/guide/sidebar"}}}]}}}},267:function(e,t,n){"use strict";n.r(t);n(29);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(76),l=n(3),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},284:function(e){e.exports={data:{allMenuItems:{edges:[{node:{name:"Docs",link:"/docs/get-started/introduction"}},{node:{name:"Blog",link:"/blog"}}]}}}},288:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/blog/first-blog"},id:"d2faf305-3d82-50cd-a8e0-e618980ba66c",frontmatter:{title:"First Blog",parents:null}}},{node:{fields:{slug:"/blog/second-blog"},id:"71b071df-ad8a-5bbd-b787-c2e57b49362c",frontmatter:{title:"Second Blog",parents:null}}},{node:{fields:{slug:"/docs/get-started/introduction"},id:"53eced3d-db95-545a-9de1-4452e732cb1c",frontmatter:{title:"Introduction",parents:["Get Started"]}}},{node:{fields:{slug:"/docs/get-started/quick_start"},id:"52cf700b-7151-5b63-a598-4a11311069a0",frontmatter:{title:"Quick Start",parents:["Get Started"]}}},{node:{fields:{slug:"/docs/guide/anchor"},id:"13db7d44-f46b-5774-bb1b-da494e1e6f02",frontmatter:{title:"Anchor",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/contents"},id:"9fc0fab3-4d4c-59f5-a106-dcb9d6a86c3c",frontmatter:{title:"Contents",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/menu_items"},id:"3a8ac275-0209-5eba-9bfd-bc4ca67618be",frontmatter:{title:"Menu Items",parents:["Guide"]}}},{node:{fields:{slug:"/docs/guide/sidebar"},id:"8b63401a-2652-5a55-b125-e04abc19e2ab",frontmatter:{title:"Sidebar",parents:["Guide"]}}}]}}}}}]);
//# sourceMappingURL=2-f6f9141196a5d7d0001b.js.map