function date(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date").innerHTML=today
    console.log("date function loaded.")
}

function time() {
    var d = new Date();
    d.setTime(1332403882588);
    document.getElementById("time").innerHTML = d;
  }