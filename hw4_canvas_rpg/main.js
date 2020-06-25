let mapArray, ctx, currentImgMainX, currentImgMainY;
let imgMountain, imgMain, imgEnemy;

$(document).ready(function(){
    //生成遊戲地圖
    //0:可走 1:障礙 2:終點 3:敵人
    mapArray=[0,1,1,0,0,0,3,1,2];
    ctx=$("#myCanvas")[0].getContext("2d");
    
    //擺主角
    imgMain=new Image();
    imgMain.src="hw4_canvas_rpg/images/main.png";
    currentImgMainX = 0;
    currentImgMainY = 0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,69.5,0,69.5,69.5,currentImgMainX,currentImgMainY, 200, 200);
    }

    imgMountain=new Image();
    imgMountain.src="hw4_canvas_rpg/images/mountains.png";
    imgEnemy=new Image();
    imgEnemy.src="hw4_canvas_rpg/images/Enemy.png";
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for(let x in mapArray){
                if(mapArray[x]==1)
                    ctx.drawImage(imgMountain,0,0,200,200,x%3*200+50,Math.floor(x/3)*200+50,200,200);
                else if(mapArray[x]==3)
                    ctx.drawImage(imgEnemy,7,40,104,135,x%3*200+50,Math.floor(x/3)*200+50,100,100);
            }
        }
    };
});

$(document).keydown(function(event){
    let targetImgMainX, targetImgMainY, targetBlock;
    let cutImgPositionStart=[,];
    event.preventDefault();
    //避免鍵盤點擊瀏覽器出現其他行為
    switch(event.keyCode){
        case 37: //left
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImgPositionStart=[0,69.5];
            break;
        case 38: //up
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImgPositionStart=[69.5,208.5];
            break;
        case 39: //right
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImgPositionStart=[139,139];
            break;
        case 40: //down
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImgPositionStart=[69.5,0];
            break;
        default:
            return;
    }
    if(targetImgMainX<=400&&targetImgMainX>=0 && 
       targetImgMainY<=400&&targetImgMainY>=0 ){
        targetBlock=targetImgMainX/200+targetImgMainY/200*3;
    }
    else
        targetBlock=-1;


    //清除
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
    if(targetBlock==-1 || mapArray[targetBlock] ==3 || mapArray[targetBlock] ==1){

    }
    else{
        $("#talkBox").empty();
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
    }

    ctx.drawImage(imgMain,
        cutImgPositionStart[0],cutImgPositionStart[1],69.5,69.5,currentImgMainX,currentImgMainY, 200, 200);

    switch(mapArray[targetBlock])
    {
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("山");
            break;
        case 2:
            $("#talkBox").text("終點");
            break;
        case 3:
            $("#talkBox").text("哈摟");
            break;
    }
});
