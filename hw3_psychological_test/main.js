

$(document).ready(function(){
    let currentQuiz="null";
    $("#startButton").click(function(){
        if(currentQuiz=="null"){
            //第0題
            currentQuiz=0;
            
            //顯示題目
            $("#questions").text(questions[0].question);
            //清空按鈕
            $("#options").empty();

            //加入按鈕選項
            for(let i=0;i<3;i++){
                $("#options").append(
                    "<input name='options' type='radio' value='"
                    +i+"'>"+
                    "<label>"+
                    questions[0].answers[i][0]+
                    "</label><br><br>"                
                );
            }

            $("#startButton").attr("value","下一題");
        }
        else{
            $.each($(":radio"),function(i,val){
                if(val.checked)
                {
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        let finalResult=questions[currentQuiz].answers[i][1];

                        $("#questions").text(finalAnswers[finalResult][0]);                   
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        
                        currentQuiz="null";

                        $("#startButton").attr("value","重新開始");
                    }                   
                    else{
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#questions").text(questions[currentQuiz].question);                   
                        $("#options").empty();

                        for(let i=0;i<3;i++){
                            $("#options").append(
                                "<input name='options' type='radio' value='"
                                +i+"'>"+
                                "<label>"+
                                questions[currentQuiz].answers[i][0]+
                                "</label><br><br>"                
                            );
                        }
                    }
                    
                    return false;
                }
            });
        }


    });
});



