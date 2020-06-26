
let topicArray=[
    "企劃書定版",
    "一籌",
    "二籌",
    "三籌",
    "成果展示",
    "購買材料"
]

let startDate=new Date();
function setMonthAndDay(startMonth,startDay)
{
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);
