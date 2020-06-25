$(document).ready(setTable()
);

$("#clickButton").click(function(){
    let inputDate = $("#inputDate").val();
    console.log(inputDate);//yyyy-mm-dd
    let splitText = inputDate.split("-");
    console.log(splitText);
    setMonthAndDay(splitText[1],splitText[2]);
    setTable();
});

function setTable(){
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );
    let oneDayMilliseconds=24*60*60*1000;
    let topicCount = topicArray.length;
    for(let x=0;x<topicCount;x++)
    {
        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        $("#courseTable").append(
            "<tr><th>"+
            (x+1)+
            "</th><th>"+
            thisDate.toLocaleDateString().slice(5)+
            "</th><th>"+
            topicArray[x]+
            "</th></tr>"
        );
    
    }
}