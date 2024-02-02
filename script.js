function clicked(tiles){
    let clicked_tiles = document.getElementById(tiles).innerHTML;
    let text = document.getElementById("box").value;
    document.getElementById("box").value = text + clicked_tiles;
}