(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4832f487"],{"2a7d":function(e,t,n){"use strict";n("cb29");var c=n("7a23");function o(e,t,n,o,a,i){var l=Object(c["B"])("ion-label"),r=Object(c["B"])("ion-icon"),s=Object(c["B"])("ion-spinner"),u=Object(c["B"])("ion-ripple-effect"),b=Object(c["B"])("ion-button");return Object(c["t"])(),Object(c["e"])(b,{class:"d-flex align-items-center justify-content-center ion-activatable ripple-parent",color:n.color,expand:n.expand,size:n.size,disabled:n.isLoading,fill:n.fill,download:n.download,href:n.href,onClick:t[0]||(t[0]=function(e){return!!n.to&&i.redirectToRoute()})},{default:Object(c["H"])((function(){return[n.text&&!n.iconOnly?(Object(c["t"])(),Object(c["e"])(l,{key:0,class:Object(c["p"])([i.hasIcon?"ml-2":""])},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["D"])(n.text),1)]})),_:1},8,["class"])):Object(c["f"])("",!0),i.hasIcon?(Object(c["t"])(),Object(c["e"])(r,{key:1,slot:n.iconOnly?"icon-only":"start",ios:n.iosIcon||n.icon,md:n.mdIcon||n.icon},null,8,["slot","ios","md"])):Object(c["f"])("",!0),n.isLoading?(Object(c["t"])(),Object(c["e"])(s,{key:2,slot:"end",class:Object(c["p"])(n.iconOnly?"":"ion-margin-start"),name:n.spinnerName},null,8,["class","name"])):Object(c["f"])("",!0),Object(c["j"])(u,{type:"unbounded"})]})),_:1},8,["color","expand","size","disabled","fill","download","href"])}var a=n("d867"),i=n("6c02"),l={name:"Button",components:{IonButton:a["c"],IonLabel:a["l"],IonIcon:a["h"],IonSpinner:a["w"],IonRippleEffect:a["r"]},props:{color:{type:String,default:"primary"},text:{type:String,required:!1},expand:{type:String,default:"block"},size:{type:String,default:"medium"},icon:{default:null,required:!1},iosIcon:{default:null,required:!1},mdIcon:{default:null,required:!1},isLoading:{type:Boolean,default:!1},spinnerName:{type:String,default:"crescent"},iconOnly:{type:Boolean,default:!1},fill:{type:String,default:"solid"},to:{required:!1},download:{type:Boolean,default:!1},href:{type:String,required:!1}},computed:{hasIcon:function(){return this.icon||this.iosIcon||this.mdIcon}},setup:function(){var e=Object(i["i"])();return{router:e}},methods:{redirectToRoute:function(){this.to&&this.router.push(this.to)}}};l.render=o;t["a"]=l},"81d5":function(e,t,n){"use strict";var c=n("7b0b"),o=n("23cb"),a=n("50c4");e.exports=function(e){var t=c(this),n=a(t.length),i=arguments.length,l=o(i>1?arguments[1]:void 0,n),r=i>2?arguments[2]:void 0,s=void 0===r?n:o(r,n);while(s>l)t[l++]=e;return t}},c3df:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o=["href"],a=Object(c["h"])("br",null,null,-1),i=["href"],l=Object(c["h"])("iframe",{class:"mb-4",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.21722940248!2d-122.15130702796334!3d37.41331444145766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbr!4v1630859756274!5m2!1sen!2sbr",width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"",loading:"lazy"},"\n        ",-1),r=Object(c["i"])(" Social medias "),s=Object(c["h"])("br",null,null,-1),u={href:"https://www.facebook.com",target:"_blank"},b={href:"https://www.instagram.com",target:"_blank"},f={href:"https://www.youtube.com",target:"_blank"};function d(e,t,n,d,j,p){var O=Object(c["B"])("ion-icon"),h=Object(c["B"])("ion-text"),m=Object(c["B"])("ion-col"),g=Object(c["B"])("WhatsappButton"),y=Object(c["B"])("ion-row"),w=Object(c["B"])("base-layout");return Object(c["t"])(),Object(c["e"])(w,{"page-title":"Contato","page-default-back-link":"/home","show-menu-button":!1,"ignore-history":!0},{default:Object(c["H"])((function(){return[Object(c["j"])(y,null,{default:Object(c["H"])((function(){return[Object(c["j"])(m,{size:"12"},{default:Object(c["H"])((function(){return[Object(c["h"])("a",{class:"d-flex align-items-center no-text-decoration mb-4 mt-3",href:"tel:+55".concat(e.getWhatsappTelephone),target:"_blank"},[Object(c["j"])(O,{icon:d.Icon.call,class:"mr-2 fs-24"},null,8,["icon"]),Object(c["j"])(h,{color:"dark",class:"fs-20"},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["D"])(e.getWhatsappTelephone),1)]})),_:1}),a],8,o),Object(c["h"])("a",{class:"d-flex align-items-center no-text-decoration",href:"mailto:".concat(e.getContactEmail),target:"_blank"},[Object(c["j"])(O,{icon:d.Icon.mail,class:"mr-2 fs-24"},null,8,["icon"]),Object(c["j"])(h,{color:"dark",class:"fs-20"},{default:Object(c["H"])((function(){return[Object(c["i"])(Object(c["D"])(e.getContactEmail),1)]})),_:1})],8,i)]})),_:1}),Object(c["j"])(m,{size:"12"},{default:Object(c["H"])((function(){return[Object(c["j"])(g,{class:"my-4",message:"Hi, I need help with the Boilerplate App"})]})),_:1}),Object(c["j"])(m,{size:"12"},{default:Object(c["H"])((function(){return[l]})),_:1}),Object(c["j"])(m,{size:"12",class:"mt-4 ion-text-center"},{default:Object(c["H"])((function(){return[Object(c["j"])(h,{class:"fs-20"},{default:Object(c["H"])((function(){return[r]})),_:1}),s]})),_:1}),Object(c["j"])(m,{size:"12",class:"d-flex align-items-center justify-content-around"},{default:Object(c["H"])((function(){return[Object(c["h"])("a",u,[Object(c["j"])(O,{icon:d.Icon.logoFacebook,class:"fs-32"},null,8,["icon"])]),Object(c["h"])("a",b,[Object(c["j"])(O,{icon:d.Icon.logoInstagram,class:"fs-32"},null,8,["icon"])]),Object(c["h"])("a",f,[Object(c["j"])(O,{icon:d.Icon.logoYoutube,class:"fs-32"},null,8,["icon"])])]})),_:1})]})),_:1})]})),_:1})}var j=n("5530"),p=n("d867"),O=n("ff79"),h=n("5502"),m=n("cb46"),g={components:{WhatsappButton:m["a"],IonIcon:p["h"]},computed:Object(j["a"])({},Object(h["c"])("general",["getWhatsappTelephone","getContactEmail"])),setup:function(){var e=Object(c["y"])({logoInstagram:O["w"],logoFacebook:O["v"],logoYoutube:O["y"],call:O["f"],mail:O["z"]});return{Icon:e}}};g.render=d;t["default"]=g},cb29:function(e,t,n){var c=n("23e7"),o=n("81d5"),a=n("44d2");c({target:"Array",proto:!0},{fill:o}),a("fill")},cb46:function(e,t,n){"use strict";n("99af");var c=n("7a23");function o(e,t,n,o,a,i){var l=Object(c["B"])("Button");return Object(c["t"])(),Object(c["e"])(l,{color:"success",text:n.buttonText,href:"https://wa.me/".concat(e.getWhatsappTelephone,"?text=").concat(n.message),size:n.size,icon:o.Icon.logoWhatsapp,iconOnly:n.iconOnly},null,8,["text","href","size","icon","iconOnly"])}var a=n("5530"),i=n("ff79"),l=n("5502"),r=n("2a7d"),s={components:{Button:r["a"]},props:{message:{type:String,required:!0},iconOnly:{type:Boolean,default:!1},buttonText:{type:String,default:"Send message"},size:{type:String,default:"medium"}},computed:Object(a["a"])({},Object(l["c"])("general",["getWhatsappTelephone"])),setup:function(){var e=Object(c["y"])({logoWhatsapp:i["x"]});return{Icon:e}}};n("ff27");s.render=o,s.__scopeId="data-v-62bad658";t["a"]=s},d1fe:function(e,t,n){},ff27:function(e,t,n){"use strict";n("d1fe")}}]);
//# sourceMappingURL=chunk-4832f487.f42a3492.js.map