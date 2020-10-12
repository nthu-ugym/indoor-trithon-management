var 學院Str ='{ \
  "理學院":  ["理學院", "數學系", "物理學系", "化學系", "統計學研究所", "天文研究所", "理學院學士班", "先進光源科技學位學程", "計算與建模科學研究所"], \
  "工學院": ["工學院", "化學工程學系", "動力機械工程學系", "材料科學工程學系", "工業工程與工程管理學系", "工業工程與工程管理學系碩士在職專班", "奈米工程與微系統研究所", "生物醫學工程研究所", "工學院學士班", "全球營運管理碩士雙聯學位學程"],\
  "原子科學院":["原子科學院", "工程與系統科學系", "生醫工程與環境科學系", "核子工程與科學研究所", "分析與環境科學研究所", "原子科學院學士班", "先進光源科技學位學程", "環境科技博士學位學程(台灣聯合大學系統)"],\
  "人文社會學院": ["人文社會學院", "中國文學系", "外國語文學系", "歷史研究所", "語言學研究所", "人類學研究所", "社會學研究所", "哲學研究所", "台灣文學研究所", "台灣研究教師在職進修碩士學位班", "人文社會學院學士班", "亞際文化研究國際碩士學位學程(台灣聯合大學系統)", "華文文學研究所"],\
  "生命科學院":["生命科學院", "生命科學系", "醫學科學系", "分子與細胞生物研究所", "分子醫學研究所", "生物資訊與結構生物研究所", "生物科技研究所", "系統神經科學研究所", "生命科學院學士班", "跨領域神經科學博士學位學程(台灣聯合大學系統)"],\
  "電機資訊學院":["電機資訊學院", "資訊工程學系", "電機工程學系", "通訊工程研究所", "電子工程研究所", "資訊系統與應用研究所", "光電工程研究所", "資訊安全研究所", "電機資訊學院學士班", "光電博士學位學程(台灣聯合大學系統)"], \
  "科技管理學院":["科技管理學院", "計量財務金融學系", "經濟學系", "科技管理研究所", "經營管理碩士在職專班(MBA)", "科技法律研究所", "高階經營管理碩士在職專班(EMBA)", "科技管理學院學士班", "國際專業管理碩士班(IMBA)", "服務科學研究所", "財務金融碩士在職專班(MFB)", "公共政策與管理碩士在職專班(MPM)"],\
  "清華學院":["清華學院", "通識教育中心", "體育室", "軍訓室", "藝術中心", "語文中心", "住宿書院", "清華學院學士班", "清華學院國際學士班"],\
  "教務處":["教務處", "跨院國際博士班學位學程", "跨院國際碩士班學位學程", "智慧製造跨院高階主管碩士在職學位學程"],\
  "竹師教育學院":["竹師教育學院", "教育與學習科技學系", "幼兒教育學系", "特殊教育學系", "教育心理與諮商學系", "運動科學系", "學習科學與科技研究所", "數理教育研究所", "臺灣語言研究與教學研究所", "英語教學系", "環境與文化資源學系", "學前特殊教育碩士在職學位學程", "竹師教育學院學士班", "華德福教育碩士在職學位學程"],\
  "藝術學院":["藝術學院", "音樂學系", "藝術與設計學系", "藝術學院學士班"],\
  "合校過渡單位":["合校過渡單位", "系所調整院務中心", "應用科學系", "應用數學系", "中國語文學系", "人力資源與數位學習科技研究所"]\
}';

var gameStr = '[]';
var gameStr1 = '[\
  { "比賽編號" : 3,     \
    "直播連結" : "",    \
    "比賽日期" : "2020-10-04", \
    "比賽名稱" : "第二屆室內三鐵挑戰賽", \
    "比賽說明" : "無", \
    "時間範圍" : "08:00~17:00", \
    "截止時間" : "2020-09-30 18:00", \
    "隊數限制" : 5, \
    "報名人數" : 12, \
    "比賽種類" : "個人三鐵",  \
    "比賽距離" : "跑步機: 10公里 ,飛輪車: 30公里 ,划船器: 2000公尺",   \
    "學院系所" : ["1:理學院,1:數學系", \
                 "2:工學院,0:工學院", \
                 "4:人文社會學院,7:哲學研究所", \
                 "8:清華學院,2:體育室", \
                 "11:藝術學院,1:音樂學系" \
                ] \
  }, \
  { "比賽編號" : 4, \
    "直播連結" : "", \
    "比賽日期" : "2020-11-04", \
    "比賽名稱" : "30公里跑步賽", \
    "比賽說明" : "無",    \
    "時間範圍" : "08:00~17:00",  \
    "截止時間" : "2020-10-31 18:00",\
    "隊數限制" : 15, \
    "報名人數" : 11, \
    "比賽種類" : "個人跑步", \
    "比賽距離" : "跑步機: 30公里", \
    "學院系所" : [] \
  } \
]';

var gamehistoryStr = '[]';
var gamehistoryStr1 = '[\
  { "比賽編號" : 2,\
    "直播連結" : "",\
    "比賽日期" : "2020-03-04",\
    "比賽名稱" : "(測試)室內三鐵挑戰賽",\
    "比賽說明" : "無",\
    "時間範圍" : "08:00~17:00",  \
    "截止時間" : "2020-09-30 18:00",\
    "隊數限制" : 2,\
    "報名人數" : 4,\
    "比賽種類" : "三人三鐵", \
    "比賽距離" : "跑步機: 10公里 ,飛輪車: 30公里 ,划船器: 2000公尺",  \
    "學院系所" : ["8:清華學院,2:體育室", \
                 "11:藝術學院,1:音樂學系" \
                ] \
  },\
  { "比賽編號" : 1,\
    "直播連結" : "",\
    "比賽日期" : "2020-01-04",\
    "比賽名稱" : "(測試)30公里跑步賽",\
    "比賽說明" : "無",    \
    "時間範圍" : "08:00~17:00",  \
    "截止時間" : "2020-10-31 18:00",\
    "隊數限制" : 3,\
    "報名人數" : 3,\
    "比賽種類" : "個人跑步", \
    "比賽距離" : "跑步機: 30公里",   \
    "學院系所" : []    \
  }\
]';

var 報名名單3 = {
  "比賽編號" : 3,
  "隊伍" : {
    "T1": {
          "學院系所": "1:理學院,1:數學系",
          "報名者": {
            "第一位": { "運動": "跑步", "姓名": "AA1" },
            "第二位": { "運動": "飛輪", "姓名": "BB1" }, 
            "第三位": { "運動": "划船", "姓名": "CC1" },
          }   
         },
    "T2": {
          "學院系所": "2:工學院,0:工學院",
          "報名者": {
            "第一位": { "運動": "跑步", "姓名": "AA2" },
            "第二位": { "運動": "飛輪", "姓名": "BB2" }, 
            "第三位": { "運動": "划船", "姓名": "CC2" },
          }   
         },
    "T3": {
          "學院系所": "4:人文社會學院,7:哲學研究所",
          "報名者": {
            "第一位": { "運動": "跑步", "姓名": "" },
            "第二位": { "運動": "飛輪", "姓名": "BB3" }, 
            "第三位": { "運動": "划船", "姓名": "CC3" },
          }   
         },
    "T4": {
          "學院系所": "8:清華學院,2:體育室",
          "報名者": {
            "第一位": { "運動": "跑步", "姓名": "AA4" },
            "第二位": { "運動": "飛輪", "姓名": "" }, 
            "第三位": { "運動": "划船", "姓名": "CC4" },
          }   
         },
    "T5": {
          "學院系所": "11:藝術學院,1:音樂學系",
          "報名者": {
            "第一位": { "運動": "跑步", "姓名": "AA5" },
            "第二位": { "運動": "飛輪", "姓名": "BB5" }, 
            "第三位": { "運動": "划船", "姓名": "" },
          }   
         },    
  }
}

var 報名名單4 = {
  "比賽編號" : 4,
  "隊伍" : {
    "T1": {
          "學院系所": "",
          "報名者": {
            "第一位": { "運動": "飛輪", "姓名": "AA1" }, 
          }   
         },
    "T2": {
          "學院系所": "",
          "報名者": {
            "第一位": { "運動": "飛輪", "姓名": "AA2" }, 
          }   
         },
    "T3": {
          "學院系所": "",
          "報名者": {
            "第一位": { "運動": "飛輪", "姓名": "AA3" }, 
          }   
         }, 
    "T4": {
          "學院系所": "",
          "報名者": {
            "第一位": { "運動": "飛輪", "姓名": "" }, 
          }   
         }, 
    "T5": {
          "學院系所": "",
          "報名者": {
            "第一位": { "運動": "飛輪", "姓名": "" }, 
          }   
         },     
  }
}


