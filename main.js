canvas= new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
player_object ="";
function playerupdate(){
    fabric.Image.fromURL("https://tse2.mm.bing.net/th?id=OIP.UUzLxSAMdzisNbxl7S1_VAHaK9&pid=Api&P=0&w=300&h=300", function(IMG){
        player_object = IMG;
        player_object.scaleToWidth(100);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}