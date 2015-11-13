var Utility={parseQueryString:function(queryString){var result={};$.each(queryString.split("&"),function(index,value){if(value==""){return""}var param=value.split("=");result[param[0]]=param[1]});return result},countriesSelectBox:function(){var selectBox='<select name="countries">'+'<option value="">Select country</option>';$.each(Utility.countriesList,function(index,value){selectBox+='<option value="'+index+'">'+value+"</option>"});selectBox+="</select>";return selectBox},countriesList:{AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle Of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"},mergeObjects:function(obj1,obj2){$.each(obj2,function(index,value){obj1[index]=value});return obj1}};var WidgetFieldFormatter={format_link:function(key){return{key:key,format:function(url){return url?'<a href="'+url+'" target="_blank">'+url+"</a>":""}}},format_array:function(key){return{key:key,format:function(array){return array.join("<br/>")}}},format_json_objects:function(key,names,seperator){if(names.constructor!==Array)names=Array(names);if(seperator===undefined)seperator=",";return{key:key,format:function(json_objects){values=$.map(json_objects,function(json_object){return $.map(names,function(name){return json_object[name]})});return values.join(seperator)}}}};(function($,window,undefined){$["fn"]["paging"]=function(number,opts){var self=this,Paging={setOptions:function(opts){var parseFormat=function(format){var gndx=0,group=0,num=1,res={fstack:[],asterisk:0,inactive:0,blockwide:5,current:3,rights:0,lefts:0},tok,pattern=/[*<>pq\[\]().-]|[nc]+!?/g;var known={"[":"first","]":"last","<":"prev",">":"next",q:"left",p:"right","-":"fill",".":"leap"},count={};while(tok=pattern["exec"](format)){tok=""+tok;if(undefined===known[tok]){if("("===tok){group=++gndx}else if(")"===tok){group=0}else if(num){if("*"===tok){res.asterisk=1;res.inactive=0}else{res.asterisk=0;res.inactive="!"===tok.charAt(tok.length-1);res.blockwide=tok["length"]-res.inactive;if(!(res.current=1+tok.indexOf("c"))){res.current=1+res.blockwide>>1}}res.fstack[res.fstack.length]={ftype:"block",fgroup:0,fpos:0};num=0}}else{res.fstack[res.fstack.length]={ftype:known[tok],fgroup:group,fpos:undefined===count[tok]?count[tok]=1:++count[tok]};if("q"===tok)++res.lefts;else if("p"===tok)++res.rights}}return res};Paging.opts=$.extend(Paging.opts||{lapping:0,perpage:10,page:1,refresh:{interval:10,url:null},format:"",lock:false,onFormat:function(type){},onSelect:function(page){return true},onRefresh:function(json){}},opts||{});Paging.opts["lapping"]|=0;Paging.opts["perpage"]|=0;if(Paging.opts["page"]!==null)Paging.opts["page"]|=0;if(Paging.opts["perpage"]<1){Paging.opts["perpage"]=10}if(Paging.interval)window.clearInterval(Paging.interval);if(Paging.opts["refresh"]["url"]){Paging.interval=window.setInterval(function(){$["ajax"]({url:Paging.opts["refresh"]["url"],success:function(data){if(typeof data==="string"){try{data=$["parseJSON"](data)}catch(o){return}}Paging.opts["onRefresh"](data)}})},1e3*Paging.opts["refresh"]["interval"])}Paging.format=parseFormat(Paging.opts["format"]);return Paging},setNumber:function(number){Paging.number=undefined===number||number<0?-1:number;return Paging},setPage:function(page){if(Paging.opts["lock"]){Paging.opts["onSelect"](0,self);return Paging}if(undefined===page){page=Paging.opts["page"];if(null===page){return Paging}}else if(Paging.opts["page"]==page){return Paging}Paging.opts["page"]=page|=0;var number=Paging.number;var opts=Paging.opts;var rStart,rStop;var pages,buffer;var groups=1,format=Paging.format;var data,tmp,node,lapping;var count=format.fstack["length"],i=count;if(opts["perpage"]<=opts["lapping"]){opts["lapping"]=opts["perpage"]-1}lapping=number<=opts["lapping"]?0:opts["lapping"]|0;if(number<0){number=-1;pages=-1;rStart=Math.max(1,page-format.current+1-lapping);rStop=rStart+format.blockwide}else{pages=1+Math.ceil((number-opts["perpage"])/(opts["perpage"]-lapping));page=Math.max(1,Math.min(page<0?1+pages+page:page,pages));if(format.asterisk){rStart=1;rStop=1+pages;format.current=page;format.blockwide=pages}else{rStart=Math.max(1,Math.min(page-format.current,pages-format.blockwide)+1);rStop=format.inactive?rStart+format.blockwide:Math.min(rStart+format.blockwide,1+pages)}}while(i--){tmp=0;node=format.fstack[i];switch(node.ftype){case"left":tmp=node.fpos<rStart;break;case"right":tmp=rStop<=pages-format.rights+node.fpos;break;case"first":tmp=format.current<page;break;case"last":tmp=format.blockwide<format.current+pages-page;break;case"prev":tmp=1<page;break;case"next":tmp=page<pages;break}groups|=tmp<<node.fgroup}data={number:number,lapping:lapping,pages:pages,perpage:opts["perpage"],page:page,slice:[(tmp=page*(opts["perpage"]-lapping)+lapping)-opts["perpage"],Math.min(tmp,number)]};buffer="";function buffer_append(opts,data,type){type=""+opts["onFormat"].call(data,type);if(data["value"])buffer+=type.replace(/<a/i,'<a data-page="'+data["value"]+'"');else buffer+=type}while(++i<count){node=format.fstack[i];tmp=groups>>node.fgroup&1;switch(node.ftype){case"block":for(;rStart<rStop;++rStart){data["value"]=rStart;data["pos"]=1+format.blockwide-rStop+rStart;data["active"]=rStart<=pages||number<0;data["first"]=1===rStart;data["last"]=rStart===pages&&0<number;buffer_append(opts,data,node.ftype)}continue;case"left":data["value"]=node.fpos;data["active"]=node.fpos<rStart;break;case"right":data["value"]=pages-format.rights+node.fpos;data["active"]=rStop<=data["value"];break;case"first":data["value"]=1;data["active"]=tmp&&1<page;break;case"prev":data["value"]=Math.max(1,page-1);data["active"]=tmp&&1<page;break;case"last":if(data["active"]=number<0){data["value"]=1+page}else{data["value"]=pages;data["active"]=tmp&&page<pages}break;case"next":if(data["active"]=number<0){data["value"]=1+page}else{data["value"]=Math.min(1+page,pages);data["active"]=tmp&&page<pages}break;case"leap":case"fill":data["pos"]=node.fpos;data["active"]=tmp;buffer_append(opts,data,node.ftype);continue}data["pos"]=node.fpos;data["last"]=data["first"]=undefined;buffer_append(opts,data,node.ftype)}if(self.length){$("a",self["html"](buffer)).click(function(ev){ev["preventDefault"]();var obj=this;do{if("a"===obj["nodeName"].toLowerCase()){break}}while(obj=obj["parentNode"]);Paging["setPage"]($(obj).data("page"));if(Paging.locate){window.location=obj["href"]}});Paging.locate=opts["onSelect"].call({number:number,lapping:lapping,pages:pages,slice:data["slice"]},page,self)}return Paging}};return Paging["setNumber"](number)["setOptions"](opts)["setPage"]()}})(jQuery,this);(function(){jQuery(document).ready(function($){$.fn.searchWidget=function(options){var endpointInfo=getEndpointInfo(options["endpoint"]);var resultsDiv;var currentPage;var widgetContainer=$(this);widgetContainer.addClass("ita-search-widget-container");widgetContainer.empty().append(buildSearchForm());function loadData(search,offset,newSearch){offset=typeof offset!=="undefined"?offset:0;newSearch=typeof newSearch!=="undefined"?newSearch:true;if(!resultsDiv){resultsDiv=buildResultsDiv();widgetContainer.append(resultsDiv)}resultsDiv.empty().append(buildSpinner());$.getJSON(searchUrl(search,offset),function(data){if(newSearch){widgetContainer.find(".ita-search-widget-footer").remove();widgetContainer.append(buildFooter(search,data["total"]))}resultsDiv.empty().append(styleResults(data))})}function buildFooter(search,total){var footer=$('<div class="ita-search-widget-footer"></div>');if(total>0){footer.append(buildPaginationDiv(search,total))}footer.append(buildClearLink());return footer}function getResultTitle(record){if(typeof endpointInfo.resultTitleField=="string"){return record[endpointInfo.resultTitleField]}else{return endpointInfo.resultTitleField(record)}}function styleResults(payload){var elements=[buildTotalDiv(payload["total"])],results;if(payload["total"]>0){results=$("<ul>");$.each(payload["results"],function(index,value){var resultText=getResultTitle(value);var collapsible=$("<a>").text(resultText).attr("href","#");var innerTable=$("<table>").hide();collapsible.on("click",function(e){e.preventDefault();var table=$(this).siblings("table");resultsDiv.find("table").not(table).hide();table.toggle()});results.append($("<li>").append(collapsible).append(innerTable));$.each(endpointInfo.displayFields,function(i,formatter){var key,val;if(typeof formatter=="string"){key=formatter;val=value[key]}else{key=formatter.key;val=formatter.format(value[key])}if(val){innerTable.append($("<tr>").append($("<td>").text(key.replace("_"," "))).append($("<td>").html(val)))}})});elements.push(results)}return elements}function searchUrl(search,offset){offset=offset||0;var apiKey=options["apiKey"];var host=options["host"]||"https://api.govwizely.com";var url=host+endpointInfo["path"]+"?api_key="+apiKey+"&offset="+offset;$.each(search,function(index,value){if(value!=""){url+="&"+index+"="+value}});return url}function getEndpointInfo(endpoint){var info={consolidated_screening_list:{title:"the Consolidated Screening List",resultTitleField:"name",displayFields:["name","remarks","source","alt_names"],moreInfoUrl:"http://export.gov/ecr/eg_main_023148.asp",extraParams:{fuzzy_name:"true"},path:"/consolidated_screening_list/search",searchFieldName:"name"},envirotech:{title:"Envirotech Solutions",resultTitleField:"name_english",displayFields:["source_id","name_chinese","name_english","name_french","name_portuguese","name_spanish"],extraParams:{},path:"/envirotech/solutions/search"},trade_leads:{title:"Trade Leads",resultTitleField:function(val){return val["title"]||val["description"]||val["agency"]},displayFields:["agency","topic","description",WidgetFieldFormatter.format_link("url"),"contact"],extraParams:{},path:"/trade_leads/search",includeCountries:true},trade_events:{title:"Trade Events",resultTitleField:"event_name",displayFields:["event_name","event_type","description","start_date","end_date","time_zone",WidgetFieldFormatter.format_json_objects("venues","country"),"cost",WidgetFieldFormatter.format_link("registration_link"),WidgetFieldFormatter.format_link("url"),"contact","source"],extraParams:{},path:"/trade_events/search",includeCountries:true},useac_locations:{title:"Export Assistance Centers",resultTitleField:function(val){return val["zip_code"]+" - "+val["office_name"]},displayFields:["zip_code","office_name",WidgetFieldFormatter.format_array("address"),"email","phone"],extraParams:{},path:"/ita_zipcode_to_post/search",searchFieldName:"zip_codes",placeholder:"Enter ZIP code"}};return info[endpoint]}function buildResultsDiv(){return $('<div class="ita-search-widget-results"></div>')}function buildTotalDiv(total){var totalDiv=$('<div class="ita-search-widget-total">');var innerHtml=total+" results";if(options["endpoint"]=="consolidated_screening_list"&&total>0){innerHtml=innerHtml+' - <a target="_blank" href="'+endpointInfo.moreInfoUrl+'">More Information About the Results</a>'}totalDiv.html(innerHtml);return totalDiv}function buildPaginationDiv(search,total){var paginationDiv=$('<div class="ita-search-widget-pagination"></div>');paginationDiv.paging(total,{format:"[< nncnn >]",perpage:10,lapping:0,page:1,onSelect:function(page){if(currentPage!=page){loadData(search,(page-1)*10,false);currentPage=page}},onFormat:function(type){switch(type){case"block":if(this.value==this.page){return'<span class="current">'+this.value+"</span>"}else{return'<a href="#">'+this.value+"</a>"}case"next":return'<a href="#">&gt;</a>';case"prev":return'<a href="#">&lt;</a>';case"first":return'<a href="#">First</a>';case"last":return'<a href="#">Last</a>'}}});return paginationDiv}function buildSearchForm(){var inputsHtml='<input type="text" placeholder="'+(endpointInfo.placeholder||"Enter search query")+'" name="'+(endpointInfo.searchFieldName||"q")+'">';if(endpointInfo.includeCountries){inputsHtml='<div class="ita-search-widget-input-wrapper">'+inputsHtml+Utility.countriesSelectBox()+"</div>"}var searchForm=$("<form>"+"<p>Search <strong>"+endpointInfo.title+"</strong>:</p>"+inputsHtml+'<input type="submit" id="widget-search" value="Search">'+"</form>");searchForm.on("submit",function(e){e.preventDefault();currentPage=1;loadData(Utility.mergeObjects(Utility.parseQueryString($(this).serialize()),endpointInfo.extraParams))});return searchForm}function buildClearLink(){var clearLink=$('<div class="ita-search-widget-clear"><a href="#">Clear</a></div>');clearLink.on("click",function(e){e.preventDefault();resultsDiv=false;widgetContainer.find("input[name=q]").val("");widgetContainer.find("select[name=countries]").val("");widgetContainer.find(".ita-search-widget-results, .ita-search-widget-footer").remove()});return clearLink}function buildSpinner(){return $('<div class="spinner">'+'<div class="rect1"></div>'+'<div class="rect2"></div>'+'<div class="rect3"></div>'+'<div class="rect4"></div>'+'<div class="rect5"></div>'+"</div>")}return this}})})();
