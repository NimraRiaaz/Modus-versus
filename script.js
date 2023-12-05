/**
 * Created by ZSystem on 2/22/2017.
 */
function myFunction() {
    var x = document.getElementById("my-menu");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}