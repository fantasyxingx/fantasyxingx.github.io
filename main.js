/*
window.onload=function(){
    //document.write("hello");
}
*/
let dish_picture=[
    {
        "type" : "滷肉飯",
        "url" : "images/滷肉飯.jpg"
    },
    {
        "type" : "拉麵",
        "url" : "images/拉麵.jpg"
    },
    {
        "type" : "水餃",
        "url" : "images/水餃.jpg"
    }
];

$(document).ready(function(){
    $("#select_button").click(function(){
        let number_of_li_length=$("li").length;
        let random_number= Math.floor(Math.random()*number_of_li_length);
        $("H1").text($("li").eq(random_number).text());
        //$("#dish_picture").attr("src",$("li").eq(random_number).text());
        for(let i=0;i<3;i++)
            if(dish_picture[i].type==$("li").eq(random_number).text())
                $("#dish_picture").attr("src",dish_picture[i].url);

    });
});