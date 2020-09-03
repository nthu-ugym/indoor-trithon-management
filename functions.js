// Functions

var 已登入 = false;

//處理輸入參數
//const queryString = window.location.search;
//console.log(queryString);
//const urlParams = new URLSearchParams(queryString);
//const name = urlParams.get('name')

//$("#radio").prop("checked")

//表格的 schema 定義
var schemaModel = {
      fields: {
        比賽日期: { type: "string" },
        比賽名稱: { type: "string" },
        時間範圍: { type: "string" },
        截止時間: { type: "string" },            
        人數限制: { type: "number" },
        報名人數: { type: "number" },
        比賽種類: { type: "string" }, 
        比賽距離: { type: "string" },             
      }
    };

//表格的 欄位 定義
var defineColumns_現行比賽 = [
  {
    field: "比賽日期",
    //format: "{0:MM/dd/yyyy}",
    //format: "{0:yyyy-MM-dd}",
    title: "比賽日期",
    width: "125px",
  },
  {
    field: "比賽名稱",
    //template: "<div><a> #: 比賽名稱 # </a><br>aaa</div>",
    //width: "230px"
  },
  {
    field: "時間範圍",
    //title: "時間範圍",
    width: "125px"
  },
  {
    field: "截止時間",
    //title: "報名截止時間",
    width: "140px"
  },
  {
    field: "人數限制",
    //title: "人數限制",
    width: "125px"
  },
  {
    field: "報名人數",
    //title: "報名人數",
    width: "125px"
  },      
  {
    field: "比賽種類",
    //title: "比賽種類",
    width: "125px"
  },
  {
    field: "比賽距離",
    //title: "比賽距離",
    width: "130px"
  },                  
  {
    field: "比賽編號",
    title: " ",
    template: "<div onclick='editClick(this)'><i class='fa fa-pencil-square-o'></i></div>",
    width:"50px",
    filterable: false            
  }
];

var defineColumns_過往比賽 = [
  {
    field: "比賽日期",
    //format: "{0:MM/dd/yyyy}",
    //format: "{0:yyyy-MM-dd}",
    title: "比賽日期",
    width: "125px",
  },
  {
    field: "比賽名稱",
    //template: "<div><a> #: 比賽名稱 # </a><br>aaa</div>",
    //width: "230px"
  },
  {
    field: "時間範圍",
    //title: "時間範圍",
    width: "125px"
  },
  {
    field: "截止時間",
    //title: "報名截止時間",
    width: "140px"
  },
  {
    field: "人數限制",
    //title: "人數限制",
    width: "125px"
  },
  {
    field: "報名人數",
    //title: "報名人數",
    width: "125px"
  },      
  {
    field: "比賽種類",
    //title: "比賽種類",
    width: "125px"
  },
  {
    field: "比賽距離",
    //title: "比賽距離",
    width: "130px"
  },                  
  {
    field: "比賽編號",
    title: " ",
    template: "<div onclick='editClick(this)'><i class='fa fa-info-circle'></i></div>",
    width:"50px",
    filterable: false            
  }
];


$(document).ready(function() {
  
  //實體化現行比賽表格
  $("#現行比賽表格").kendoGrid({
    dataSource: {
      data: games,
      sort: { field: "比賽日期", dir:"desc"},
      schema: {
        model: schemaModel
      },
      pageSize: 20
    },
    height: 300,
    toolbar: ["search"],
    scrollable: true,
    sortable: true,
    filterable: true,
    pageable: {
      input: true,
      numeric: false
    },
    columns: defineColumns_現行比賽
  });
  
  //實體化過往比賽表格
  $("#過往比賽表格").kendoGrid({
    dataSource: {
      data: gamehistory,
      sort: { field: "比賽日期", dir:"desc"},          
      schema: {
        model: schemaModel
      },
      pageSize: 20
    },
    height: 300,
    toolbar: ["search"],
    scrollable: true,
    sortable: true,
    filterable: true,
    pageable: {
      input: true,
      numeric: false
    },
    columns: defineColumns_過往比賽
  });      

});

//現行比賽的 Edit 按鈕 handler
function editClick(e) {
  console.log("edit click");
  var 現行比賽表格 = $("#現行比賽表格").data("kendoGrid");
  var dataItem = 現行比賽表格.dataItem($(e).closest("tr"));
  console.log(dataItem.比賽編號);
  games.forEach( 
    game => {
      console.log(game.比賽編號);
      if (game.比賽編號==dataItem.比賽編號) console.log(game);
    }
  );
}    

//過往比賽的 Edit 按鈕 handler
function infoClick(e) {
  console.log("info click");
  var 過往比賽表格 = $("#過往比賽表格").data("kendoGrid");
  var dataItem = 過往比賽表格.dataItem($(e).closest("tr"));
  console.log(dataItem.比賽編號);
}

//登出入按鈕 handler
function 登出入按鈕click() {
  console.log("登出入按鈕click", );
  if (已登入) {
    $("#登出入按鈕").html("登入");
    $("#登出入訊息").html("請登入進行管理比賽");        
    已登入 = false;
    console.log("已登出");
  } else {
    $("#登出入按鈕").html("登出");
    已登入 = true;       
    $("#登出入訊息").html("已登入，不用時請登出");          
    console.log("已登入");
  }
}

//dynamic add items and click
//$("#報名名單Div").append('<label class="新增比賽表格項目標題" id="隊伍1">隊伍1</label>');
//$("#隊伍").click({aaa:"a", bbb:"2"}, 新增比賽按鈕click)
//$("#院所系").append('<option value="資訊">資訊</option>')

function 新增比賽按鈕click(event){
  console.log(event.data.aaa, "新增比賽")
}

