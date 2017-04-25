var where = new Array(35);
function comefrom(loca,locacity)
 { 
 	this.loca = loca; 
 	this.locacity = locacity; 
 }
 var country= [
 ["void","请选择国家"],
 ["CN", "中国"], 
["AO", "安哥拉"],   
["AF", "阿富汗"],   
["AL", "阿尔巴尼亚"],   
["DZ", "阿尔及利亚"],   
["AD", "安道尔共和国"],   
["AI", "安圭拉岛"],   
["AG", "安提瓜和巴布达"],   
["AR", "阿根廷"],   
["AM", "亚美尼亚"],   
["AU", "澳大利亚"],   
["AT", "奥地利"],   
["AZ", "阿塞拜疆"],   
["BS", "巴哈马"],   
["BH", "巴林"],   
["BD", "孟加拉国"],   
["BB", "巴巴多斯"],   
["BY", "白俄罗斯"],   
["BE", "比利时"],   
["BZ", "伯利兹"],   
["BJ", "贝宁"],   
["BM", "百慕大群岛"],   
["BO", "玻利维亚"],   
["BW", "博茨瓦纳"],   
["BR", "巴西"],   
["BN", "文莱"],   
["BG", "保加利亚"],   
["BF", "布基纳法索"],   
["MM", "缅甸"],   
["BI", "布隆迪"],   
["CM", "喀麦隆"],   
["CA", "加拿大"],   
["CF", "中非共和国"],   
["TD", "乍得"],   
["CL", "智利"],   
["CO", "哥伦比亚"],   
["CG", "刚果"],   
["CK", "库克群岛"],   
["CR", "哥斯达黎加"],   
["CU", "古巴"],   
["CY", "塞浦路斯"],   
["CZ", "捷克"],   
["DK", "丹麦"],   
["DJ", "吉布提"],   
["DO", "多米尼加共和国"],   
["EC", "厄瓜多尔"],   
["EG", "埃及"],   
["SV", "萨尔瓦多"],   
["EE", "爱沙尼亚"],   
["ET", "埃塞俄比亚"],   
["FJ", "斐济"],   
["FI", "芬兰"],   
["FR", "法国"],   
["GF", "法属圭亚那"],   
["GA", "加蓬"],   
["GM", "冈比亚"],   
["GE", "格鲁吉亚"],   
["DE", "德国"],   
["GH", "加纳"],   
["GI", "直布罗陀"],   
["GR", "希腊"],   
["GD", "格林纳达"],   
["GU", "关岛"],   
["GT", "危地马拉"],   
["GN", "几内亚"],   
["GY", "圭亚那"],   
["HT", "海地"],   
["HN", "洪都拉斯"],   
["HK", "香港"],   
["HU", "匈牙利"],   
["IS", "冰岛"],   
["IN", "印度"],   
["ID", "印度尼西亚"],   
["IR", "伊朗"],   
["IQ", "伊拉克"],   
["IE", "爱尔兰"],   
["IL", "以色列"],   
["IT", "意大利"],   
["JM", "牙买加"],   
["JP", "日本"],   
["JO", "约旦"],   
["KH", "柬埔寨"],   
["KZ", "哈萨克斯坦"],   
["KE", "肯尼亚"],   
["KR", "韩国"],   
["KW", "科威特"],   
["KG", "吉尔吉斯坦"],   
["LA", "老挝"],   
["LV", "拉脱维亚"],   
["LB", "黎巴嫩"],   
["LS", "莱索托"],   
["LR", "利比里亚"],   
["LY", "利比亚"],   
["LI", "列支敦士登"],   
["LT", "立陶宛"],   
["LU", "卢森堡"],   
["MO", "澳门"],   
["MG", "马达加斯加"],   
["MW", "马拉维"],   
["MY", "马来西亚"],   
["MV", "马尔代夫"],   
["ML", "马里"],   
["MT", "马耳他"],   
["MU", "毛里求斯"],   
["MX", "墨西哥"],   
["MD", "摩尔多瓦"],   
["MC", "摩纳哥"],   
["MN", "蒙古"],   
["MS", "蒙特塞拉特岛"],   
["MA", "摩洛哥"],   
["MZ", "莫桑比克"],   
["NA", "纳米比亚"],   
["NR", "瑙鲁"],   
["NP", "尼泊尔"],   
["NL", "荷兰"],   
["NZ", "新西兰"],   
["NI", "尼加拉瓜"],   
["NE", "尼日尔"],   
["NG", "尼日利亚"],   
["KP", "朝鲜"],   
["NO", "挪威"],   
["OM", "阿曼"],   
["PK", "巴基斯坦"],   
["PA", "巴拿马"],   
["PG", "巴布亚新几内亚"],   
["PY", "巴拉圭"],   
["PE", "秘鲁"],   
["PH", "菲律宾"],   
["PL", "波兰"],   
["PF", "法属玻利尼西亚"],   
["PT", "葡萄牙"],   
["PR", "波多黎各"],   
["QA", "卡塔尔"],   
["RO", "罗马尼亚"],   
["RU", "俄罗斯"],   
["LC", "圣卢西亚"],   
["VC", "圣文森特岛"],   
["SM", "圣马力诺"],   
["ST", "圣多美和普林西比"],   
["SA", "沙特阿拉伯"],   
["SN", "塞内加尔"],   
["SC", "塞舌尔"],   
["SL", "塞拉利昂"],   
["SG", "新加坡"],   
["SK", "斯洛伐克"],   
["SI", "斯洛文尼亚"],   
["SB", "所罗门群岛"],   
["SO", "索马里"],   
["ZA", "南非"],   
["ES", "西班牙"],   
["LK", "斯里兰卡"],   
["SD", "苏丹"],   
["SR", "苏里南"],   
["SZ", "斯威士兰"],   
["SE", "瑞典"],   
["CH", "瑞士"],   
["SY", "叙利亚"],   
["TW", "台湾省"],   
["TJ", "塔吉克斯坦"],   
["TZ", "坦桑尼亚"],   
["TH", "泰国"],   
["TG", "多哥"],   
["TO", "汤加"],   
["TT", "特立尼达和多巴哥"],   
["TN", "突尼斯"],   
["TR", "土耳其"],   
["TM", "土库曼斯坦"],   
["UG", "乌干达"],   
["UA", "乌克兰"],   
["AE", "阿拉伯联合酋长国"],   
["GB", "英国"],   
["US", "美国"],   
["UY", "乌拉圭"],   
["UZ", "乌兹别克斯坦"],   
["VE", "委内瑞拉"],   
["VN", "越南"],   
["YE", "也门"],   
["YU", "南斯拉夫"],   
["ZW", "津巴布韦"],   
["ZR", "扎伊尔"],   
["ZM", "赞比亚"]];
// console.log(country);
// console.log(country.length);
// console.log(country[34]);
// console.log(country[34][1]);

where[0]= new comefrom("请选择省份名","请选择城市名");
where[1] = new comefrom("北京","|东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");  
where[2] = new comefrom("上海","|黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
where[3] = new comefrom("天津","|和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
where[4] = new comefrom("重庆","|万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
where[5] = new comefrom("河北","|石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
where[6] = new comefrom("山西","|太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
where[7] = new comefrom("内蒙古","|呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
where[8] = new comefrom("辽宁","|沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
where[9] = new comefrom("吉林","|长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
where[10] = new comefrom("黑龙江","|哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
where[11] = new comefrom("江苏","|南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
where[12] = new comefrom("浙江","|杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
where[13] = new comefrom("安徽","|合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
where[14] = new comefrom("福建","|福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
where[15] = new comefrom("江西","|南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
where[16] = new comefrom("山东","|济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
where[17] = new comefrom("河南","|郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
where[18] = new comefrom("湖北","|武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
where[19] = new comefrom("湖南","|长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
where[20] = new comefrom("广东","|广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
where[21] = new comefrom("广西","|南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
where[22] = new comefrom("海南","|海口|三亚");
where[23] = new comefrom("四川","|成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
where[24] = new comefrom("贵州","|贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
where[25] = new comefrom("云南","|昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
where[26] = new comefrom("西藏","|拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
where[27] = new comefrom("陕西","|西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
where[28] = new comefrom("甘肃","|兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
where[29] = new comefrom("宁夏","|银川|石嘴山|吴忠|固原");
where[30] = new comefrom("青海","|西宁|海东|海南|海北|黄南|玉树|果洛|海西");
where[31] = new comefrom("新疆","|乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
where[32] = new comefrom("香港","");
where[33] = new comefrom("澳门","");
where[34] = new comefrom("台湾","|台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
where[35] = new comefrom("其它","|北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");
function select()
 {
 	with(document.getElementById("guojia"))
 	{
 		var loca_guo = options[selectedIndex].value;
 	}
 	for(var i = 0;i<country.length;i++)
 	{
 		if (country[1][1] == loca_guo)
 		{
 			with(document.getElementById("shengfen")) 
			{

				for(i = 0;i < where.length;i ++) 
				{
					length = where.length;
					options[i].text = where[i].loca;
					options[i].value = where[i].loca;
				}
				 var loca2 = options[selectedIndex].value; 
				for(i = 0;i < where.length;i ++) 
				{
					if (where[i].loca == loca2) 
					{
						loca3 = (where[i].locacity).split("|");
						for(j = 0;j < loca3.length;j++)
						 { 
						 	with(document.getElementById("chengshi"))
						 	 { length = loca3.length;
						 	  options[j].text = loca3[j];
						 	  options[j].value = loca3[j];
						 	}
						 }
					break;
					}
				}
			}
 		
 		break;
 		}
 		else
 		{
 		 	with(document.getElementById("shengfen"))
			{ length = 1;
			 options[0].text = "其他";
			 options[0].value = "其他";
			}
			with(document.getElementById("chengshi"))
			{ length = 1;
			 options[0].text = "其他";
			 options[0].value = "其他";
			}
 		}

 	}
	

} 
function init() 
{
	with(document.getElementById("shengfen")) 
	{
		// length = where.length;
		// for(k=0;k<where.length;k++) 
		// 	{ 
		// 		options[k].text = where[k].loca; 
		// 		options[k].value = where[k].loca; 
		// 	}
		// options[selectedIndex].text = where[0].loca; 
		// options[selectedIndex].value = where[0].loca;
		length = 1;
		for(k=0;k<length;k++) 
			{ 
				options[k].text = where[k].loca; 
				options[k].value = where[k].loca; 
			}
		options[selectedIndex].text = where[0].loca; 
		options[selectedIndex].value = where[0].loca;
	}
	with(document.getElementById("chengshi")) 
	{
		loca3 = (where[0].locacity).split("|");
		length = loca3.length;
		for(l=0;l<length;l++) 
			{ 
				options[l].text = loca3[l]; 
				options[l].value = loca3[l]; 
			}
		options[selectedIndex].text = loca3[0]; 
		options[selectedIndex].value = loca3[0];
	}
	with(document.getElementById("guojia")) 
	{
		length = country.length;
		for(l=0;l<length;l++) 
			{ 
				options[l].text = country[l][1]; 
				options[l].value = country[l][1]; 
			}
		options[selectedIndex].text = country[0][1]; 
		options[selectedIndex].value = country[0][1];
	}
} 

window.onload = init;