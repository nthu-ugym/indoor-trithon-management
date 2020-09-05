// 初始變數

var 已登入 = false;

//TODO: 處理輸入參數
//const queryString = window.location.search;
//console.log(queryString);
//const urlParams = new URLSearchParams(queryString);
//const name = urlParams.get('name')

//$("#radio").prop("checked")

//TODO: 1. 讀取 Database，取得 現行比賽 過往比賽 所有學院, 
var 最後比賽編號 = 4; //模擬資料
var 比賽編號;


//TODO: 2. 初始現行比賽及過往比賽表格

//3. 初始學院系所表格
所有學院.forEach(學院 => {
  if (學院[0] != "無") $("#學院List").append('<div class="學院List內容" onclick="學院Selected(this)">'+學院[0]+'</div>');
});
所有學院[1].forEach(系所 => {
  $("#所系List").append('<div id="系所List" class="系所List內容">'+系所+'</div>');       
});

//比賽表格的 schema 定義
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

//比賽表格的 欄位 定義
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
    title: "報名截止時間",
    width: "140px"
  },
  {
    field: "隊數限制",
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
    template: "<div onclick='editClick(this)'><i style='font-size:20px' class='fa fa-pencil-square-o'></i></div>",
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
    title: "報名截止時間",
    width: "140px"
  },
  {
    field: "隊數限制",
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
    template: "<div onclick='infoClick(this)'><i style='font-size:20px' class='fa fa-info-circle'></i></div>",
    width:"50px",
    filterable: false            
  }
];

$(document).ready(function() {
  
  $("#新增比賽表格Div").hide();
  $("#院所系管理表單Div").hide(); 
  $("#比賽資訊").css("background", "orange");$("#比賽資訊").css("color", "white");  
  
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
  
//  $('#報名名單Export').click(function() {
//    var str = "報名名單";
//
//    var blob = new Blob([str], {type: "text/plain"}); 
//    var url  = window.URL.createObjectURL(blob);
//   
//    $(this).attr('href', url).attr('download', "export.csv");
//
//  });
//  
//  $('#比賽結果Export').click(function() {
//    var str = "比賽結果";
//
//    var blob = new Blob([str], {type: "text/plain"}); 
//    var url  = window.URL.createObjectURL(blob);
//   
//    $(this).attr('href', url).attr('download', "export.csv");
//
//  });
  

});

function 更改學院(selectObject){
  console.log(selectObject.name, selectObject.selectedIndex, selectObject.id);
  
  var 學院Idx   = selectObject.selectedIndex;
  var 隊伍學院id = selectObject.id;
  var 隊伍系所id = 隊伍學院id.replace(/學院/i, '系所');
  var 隊伍號碼   = 隊伍系所id.substr(4,4);
  
  console.log(隊伍系所id, 隊伍號碼);
  
  $("#系所Option"+隊伍號碼).remove();
  
  所有學院[學院Idx].forEach(系所 => {
    $("#"+隊伍系所id).append('<option id="系所Option'+隊伍號碼+'" value="'+系所+'">'+系所+'</option>');    
  });  
   
}

function 學院Selected(學院){
  console.log("學院Selected", 學院.textContent);
  $("#清華大學系所").text(學院.textContent);
  
  var 學院Idx;
  for (var i=0; i< 所有學院.length; i++){
    if (所有學院[i][0]==學院.textContent) {
      console.log(i);
      學院Idx = i;
      break;
    }
  }
  
  $("#系所List").remove();
  所有學院[學院Idx].forEach(系所 => {
    $("#所系List").append('<div id="系所List" class="系所List內容">'+系所+'</div>');       
  });   
  
}


function 回主畫面(){
  console.log("回主畫面");
  $("#新增比賽表格Div").hide();
  $("#院所系管理表單Div").hide();  
  $("#mainPage").show();
}

//現行比賽的 Edit 按鈕 handler
function editClick(e) {
  console.log("edit click");
  var 現行比賽表格 = $("#現行比賽表格").data("kendoGrid");
  var dataItem = 現行比賽表格.dataItem($(e).closest("tr"));
  console.log(dataItem.比賽編號);
  //var selectedGame;
  games.forEach( 
    game => {
      //console.log(game.比賽編號);
      if (game.比賽編號==dataItem.比賽編號) selectedGame=game;
    }
  );
  
  console.log(selectedGame);
  比賽編號 = selectedGame.比賽編號;
  $("#比賽編號內容").text(比賽編號.toString());
  $("#比賽名稱內容").text(selectedGame.比賽名稱);
  $("#比賽說明內容").text(selectedGame.比賽說明);
  $("#比賽日期").val(selectedGame.比賽日期);
  var 時間範圍 = selectedGame.時間範圍; 
  var 開始結束 = 時間範圍.split("~");
  $("#開始時間").val(開始結束[0]);
  $("#結束時間").val(開始結束[1]);  
  $("#參賽隊數").val(selectedGame.隊數限制.toString());  
  $("#"+selectedGame.比賽種類).prop("checked", "checked");
  var distStr = selectedGame.比賽距離;
  distArr = distStr.split(",");
  for (var i=0; i<3; i++){
    if (distArr[i]!=undefined) {
      var execise = distArr[i].split(":");
      var exeType = execise[0].substr(0,2);
      var exeDist = execise[1].replace(/\D/g,'');
      console.log(exeType, exeDist);
      $("#"+exeType+"距離").val(exeDist);
    }
  }
  
  //設定隊伍學院系所
  設定隊伍院系所(selectedGame.隊數限制); //先 reset
  var numGroup = selectedGame.學院系所.length;
  for (var i=0; i<numGroup; i++){
    var 學院系所Arr = selectedGame.學院系所[i].split(',');
    var 學院Arr = 學院系所Arr[0].split(':');
    var 系所Arr = 學院系所Arr[1].split(':');    
    
    console.log(學院Arr[0], 學院Arr[1], 系所Arr[0], 系所Arr[1]);
    
    $("#隊伍學院"+(i+1).toString()).val(學院Arr[1]);
    
    $("#系所Option"+(i+1).toString()).remove();
    所有學院[parseInt(學院Arr[0])].forEach(系所 => {
      $("#隊伍系所"+(i+1).toString()).append('<option id="系所Option'+(i+1).toString()+'" value="'+系所+'">'+系所+'</option>');    
    });  
    $("#隊伍系所"+(i+1).toString()).val(系所Arr[1]);
    
  }
  
  
  $("#新增比賽儲存按鈕").prop("disabled", false);
  
  // TODO: 從資料庫取得 比賽編號 的 比賽資訊, 報名名單, 比賽結果，填入表格
  
  //
  $("#mainPage").hide();
  $("#院所系管理表單Div").hide(); 
  $("#報名名單Div").hide(); 
  $("#比賽結果Div").hide(); 
  $("#新增比賽表格Div").show(); 
  $("#新增比賽表格header").text("編輯比賽");  
  $("#報名名單").prop("disabled", false);
  $("#比賽結果").prop("disabled", false);  
  比賽資訊click();  
}    

//過往比賽的 Info 按鈕 handler
function infoClick(e) {
  console.log("info click");
  var 過往比賽表格 = $("#過往比賽表格").data("kendoGrid");
  var dataItem = 過往比賽表格.dataItem($(e).closest("tr"));
  console.log(dataItem.比賽編號);
  
  //var selectedGame;
  gamehistory.forEach( 
    game => {
      //console.log(game.比賽編號);
      if (game.比賽編號==dataItem.比賽編號) selectedGame=game;
    }
  );
  
  console.log(selectedGame);
  比賽編號 = selectedGame.比賽編號;
  $("#比賽編號內容").text(比賽編號.toString());
  $("#比賽名稱內容").text(selectedGame.比賽名稱); //$("#比賽名稱內容").prop('disabled', true);
  $("#比賽說明內容").text(selectedGame.比賽說明); //$("#比賽說明內容").prop('disabled', true);
  $("#比賽日期").val(selectedGame.比賽日期);     //$("#比賽日期").prop('disabled', true);
  var 時間範圍 = selectedGame.時間範圍; 
  var 開始結束 = 時間範圍.split("~");
  $("#開始時間").val(開始結束[0]); //$("#開始時間").prop('disabled', true);
  $("#結束時間").val(開始結束[1]); //$("#結束時間").prop('disabled', true); 
  $("#參賽隊數").val(selectedGame.隊數限制.toString()); //$("#參賽隊數").prop('disabled', true);
  $("#"+selectedGame.比賽種類).prop("checked", "checked"); //$("#"+selectedGame.比賽種類).prop("disabled", true); 
  var distStr = selectedGame.比賽距離;
  distArr = distStr.split(",");
  
  $("#跑步距離").val("");  $("#飛輪距離").val("");  $("#划船距離").val("");
  for (var i=0; i<3; i++){
    if (distArr[i]!=undefined) {
      var execise = distArr[i].split(":");
      var exeType = execise[0].substr(0,2);
      var exeDist = execise[1].replace(/\D/g,'');
      console.log(exeType, exeDist);
      $("#"+exeType+"距離").val(exeDist); //$("#"+exeType+"距離").prop('disabled', true);
    }
  }
  
  //設定隊伍學院系所
  設定隊伍院系所(selectedGame.隊數限制); //先 reset
  var numGroup = selectedGame.學院系所.length;
  for (var i=0; i<numGroup; i++){
    var 學院系所Arr = selectedGame.學院系所[i].split(',');
    var 學院Arr = 學院系所Arr[0].split(':');
    var 系所Arr = 學院系所Arr[1].split(':');    
    
    console.log(學院Arr[0], 學院Arr[1], 系所Arr[0], 系所Arr[1]);
    
    $("#隊伍學院"+(i+1).toString()).val(學院Arr[1]);
    
    $("#系所Option"+(i+1).toString()).remove();
    所有學院[parseInt(學院Arr[0])].forEach(系所 => {
      $("#隊伍系所"+(i+1).toString()).append('<option id="系所Option'+(i+1).toString()+'" value="'+系所+'">'+系所+'</option>');    
    });  
    $("#隊伍系所"+(i+1).toString()).val(系所Arr[1]);
    
  }
  
  $("#新增比賽儲存按鈕").prop("disabled", true);
  
  // TODO: 從資料庫取得 比賽編號 的 比賽資訊, 報名名單, 比賽結果，填入表格
  
  $("#mainPage").hide();
  $("#院所系管理表單Div").hide(); 
  $("#報名名單Div").hide(); 
  $("#比賽結果Div").hide(); 
  $("#新增比賽表格Div").show(); 
  $("#新增比賽表格header").text("比賽資訊"); 
  $("#報名名單").prop("disabled", false);
  $("#比賽結果").prop("disabled", false);  
  比賽資訊click();   
  
  
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
//$("#隊伍院所設定").append('<label class="新增比賽表格項目標題" id="隊伍1">隊伍1</label>');
//$("#隊伍").click({aaa:"a", bbb:"2"}, 新增比賽按鈕click)
//$("#院所系").append('<option value="資訊">資訊</option>')

function 新增比賽按鈕click(){
  console.log("新增比賽");
  $("#mainPage").hide();
  $("#院所系管理表單Div").hide(); 
  $("#報名名單Div").hide(); 
  $("#比賽結果Div").hide(); 
  $("#新增比賽表格Div").show(); 
  $("#新增比賽表格header").text("新增比賽");    
  $("#報名名單").prop("disabled", true);
  $("#比賽結果").prop("disabled", true);
  
  
  比賽編號 = 最後比賽編號+1;
  $("#比賽編號內容").text(比賽編號.toString());
  $("#比賽名稱內容").text(""); 
  $("#比賽說明內容").text(""); 
  $("#比賽日期").val("");    
  $("#開始時間").val(""); 
  $("#結束時間").val(""); 
  $("#參賽隊數").val("10"); 
  $("#個人三鐵").prop("checked", "checked");  
  $("#跑步距離").val("");  $("#飛輪距離").val("");  $("#划船距離").val("");
  
  
  
  //預設新增比賽 參賽隊伍 10 隊
  $("#參賽隊數").val("10");
  設定隊伍院系所(10);
  
  $("#新增比賽儲存按鈕").prop("disabled", false);
  
  // TODO: clear 比賽資訊, 報名名單, 比賽結果
  比賽資訊click();  
}

function 比賽資訊click(){
  $("#比賽資訊Div").show(); 
  $("#比賽資訊").css("background", "orange");$("#比賽資訊").css("color", "white"); 
  $("#報名名單Div").hide(); 
  $("#報名名單").css("background", "");$("#報名名單").css("color", "black");   
  $("#比賽結果Div").hide();  
  $("#比賽結果").css("background", "");$("#比賽結果").css("color", "black");   
}

function 報名名單click(){
  $("#比賽資訊Div").hide(); 
  $("#比賽資訊").css("background", "");$("#比賽資訊").css("color", "black");   
  $("#報名名單Div").show(); 
  $("#報名名單").css("background", "orange");$("#報名名單").css("color", "white");   
  $("#比賽結果Div").hide();  
  $("#比賽結果").css("background", "");$("#比賽結果").css("color", "black");   
  
  $("#報名名單內容").append("TEST");
}

function 比賽結果click(){
  $("#比賽資訊Div").hide(); 
  $("#比賽資訊").css("background", "");$("#比賽資訊").css("color", "black");  
  $("#報名名單Div").hide(); 
  $("#報名名單").css("background", "");$("#報名名單").css("color", "black");   
  $("#比賽結果Div").show();  
  $("#比賽結果").css("background", "orange");$("#比賽結果").css("color", "white");     
}

function 院所系管理按鈕click(){
  $("#mainPage").hide();
  $("#新增比賽表格Div").hide();
  $("#院所系管理表單Div").show(); 
}

function 設定隊伍院系所(比賽隊數){
  
  //先清除已有的資料
  remove隊伍院系所();
  
  // 根據比賽隊數 appned 報名隊伍
  for (i=1; i< 比賽隊數+1; i++) {
    var num = i.toString();
    var insertHtml = '\
      <p> \
        <div class="隊伍格式" >' +num+ '</div>\
        <select class="新增比賽表格項目內容" style="width:250px" name="隊伍學院' +num+ '" id="隊伍學院' +num+ '" style="margin-left:10px" onchange="更改學院(this)">\
          <!-- 內容 appended by JS code-->\
        </select>\
        <select class="新增比賽表格項目內容" style="width:550px" name="隊伍系所' +num+ '" id="隊伍系所' +num+ '" style="margin-left:10px">\
          <!-- 內容 appended by JS code-->\
        </select>\
      </p>';


    //console.log(insertHtml);
    $("#隊伍院所設定").append(insertHtml);
  }

  //init 學院選單
  //get selectedIndex by $("#學院").prop('selectedIndex'
  for (i=1; i< 比賽隊數+1; i++) {
    所有學院.forEach(學院 => {
      $("#隊伍學院"+i.toString()).append('<option value="'+學院[0]+'">'+學院[0]+'</option>');
    });

    //$("#隊伍學院"+i.toString()).prop("selectedIndex", 3);
    所有學院[0].forEach(系所 => {
      $("#隊伍系所"+i.toString()).append('<option id="系所Option' +i.toString()+ '" value="'+系所+'">'+系所+'</option>');    
    });
  }  
}

function remove隊伍院系所(){
  $(".隊伍格式").remove();
  for (var i=1; i<1000; i++) {
    if ($("#隊伍學院"+i.toString()).val() == undefined) break;
    $("#隊伍學院"+i.toString()).remove();
    $("#隊伍系所"+i.toString()).remove();
  }  
  
}
  
function ExportClick(index) {
  console.log("Export", index);
  
  var str ="";
  if (index=2) str = "報名名單";
  if (index=3) str = "比賽結果";  

  var blob = new Blob([str], {type: "text/plain;charset=utf-8"});
  saveAs(blob, str+"_export.txt")
  
}