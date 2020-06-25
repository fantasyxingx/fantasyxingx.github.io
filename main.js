/*
window.onload=function(){
    //document.write("hello");
}
*/
let dish_picture=[
    {
        "type" : "滷肉飯",
        "url" : "hw1_random_selector/images/滷肉飯.jpg"
    },
    {
        "type" : "拉麵",
        "url" : "hw1_random_selector/images/拉麵.jpg"
    },
    {
        "type" : "水餃",
        "url" : "hw1_random_selector/images/水餃.jpg"
    }
];

$(document).ready(function(){
    $("#select_button").click(function(){
        let number_of_li_length=$("#choice-li li").length;
        let random_number= Math.floor(Math.random()*number_of_li_length);
        $("#dishes").text($("#choice-li li").eq(random_number).text());
        //$("#dish_picture").attr("src",$("li").eq(random_number).text());
        for(let i=0;i<3;i++)
            if(dish_picture[i].type==$("#choice-li li").eq(random_number).text())
                $("#dish_picture").attr("src",dish_picture[i].url);

    });
});