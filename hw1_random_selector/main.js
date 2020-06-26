let number_of_li_length=list.length;


$(document).ready(function(){
    $("#select-button").click(function(){
        if(number_of_li_length){
            number_of_li_length=list.length;
            let random_number=Math.floor(Math.random()*number_of_li_length);
            $("#display-text").text(list[random_number]);
        }
        else{
            alert("沒有可以選的!");
        }
    });
    $("#list-input").keydown(function(event) {
        if(event.keyCode == 13){
            if($("#list-input").val()){
                $("#choice-li").empty();
                list.push($("#list-input").val());
                $("#list-input").val("");

                number_of_li_length=list.length;
                for(let i=0;i<number_of_li_length;i++)
                    $("#choice-li").append("<li>"+list[i]+"</li>");
            }
        };
    });
});

