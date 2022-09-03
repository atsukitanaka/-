
let username;
let username1;
let userresult;

username = prompt("お名前を教えて下さい");
document.getElementById("name").innerHTML = username;

username1 = "名無し";

if(username == ""){
  document.getElementById("name").innerHTML = username1;
}

let rand = Math.floor(Math.random() *5);

if (rand == 0) {
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
  }
  if (rand == 2) {
    userresult = "小吉";
  }
  if (rand == 3) {
    userresult = "吉";
  }
  if (rand == 4) {
    userresult = "凶";
  }
document.getElementById("result").innerHTML = userresult;