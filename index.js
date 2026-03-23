document.getElementById("Xscore").textContent = "0";
document.getElementById("Oscore").textContent = "0";
document.getElementById("tiescore").textContent = "0";

let i,
  j,
  id,
  gameactive,
  Xscore = 0,
  Oscore = 0,
  tiescore = 0,
  turn;
gameactive = false;
let allclickhandlers = {};
const easyai = document.getElementById("easyai");
const mediumai = document.getElementById("mediumai");
const passplay = document.getElementById("passplay");
const label1 = document.getElementById("l1");
const label2 = document.getElementById("l2");
const label3 = document.getElementById("l3");
const label4 = document.getElementById("l4");
const label5 = document.getElementById("l5");
const label6 = document.getElementById("l6");
const label7 = document.getElementById("l7");
const label8 = document.getElementById("l8");
const label9 = document.getElementById("l9");

function Xwincheck() {
  let win = false;
  if (
    label1.textContent == "X" &&
    label2.textContent == "X" &&
    label3.textContent == "X"
  ) {
    win = true;
    document.getElementById("b1").style.backgroundColor = "#1fd655";
    document.getElementById("b2").style.backgroundColor = "#1fd655";
    document.getElementById("b3").style.backgroundColor = "#1fd655";
  } else if (
    label4.textContent == "X" &&
    label5.textContent == "X" &&
    label6.textContent == "X"
  ) {
    win = true;
    document.getElementById("b4").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b6").style.backgroundColor = "#1fd655";
  } else if (
    label7.textContent == "X" &&
    label8.textContent == "X" &&
    label9.textContent == "X"
  ) {
    win = true;
    document.getElementById("b7").style.backgroundColor = "#1fd655";
    document.getElementById("b8").style.backgroundColor = "#1fd655";
    document.getElementById("b9").style.backgroundColor = "#1fd655";
  } else if (
    label1.textContent == "X" &&
    label5.textContent == "X" &&
    label9.textContent == "X"
  ) {
    win = true;
    document.getElementById("b1").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b9").style.backgroundColor = "#1fd655";
  } else if (
    label3.textContent == "X" &&
    label5.textContent == "X" &&
    label7.textContent == "X"
  ) {
    win = true;
    document.getElementById("b3").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b7").style.backgroundColor = "#1fd655";
  } else if (
    label1.textContent == "X" &&
    label4.textContent == "X" &&
    label7.textContent == "X"
  ) {
    win = true;
    document.getElementById("b1").style.backgroundColor = "#1fd655";
    document.getElementById("b4").style.backgroundColor = "#1fd655";
    document.getElementById("b7").style.backgroundColor = "#1fd655";
  } else if (
    label2.textContent == "X" &&
    label5.textContent == "X" &&
    label8.textContent == "X"
  ) {
    win = true;
    document.getElementById("b2").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b8").style.backgroundColor = "#1fd655";
  } else if (
    label3.textContent == "X" &&
    label6.textContent == "X" &&
    label9.textContent == "X"
  ) {
    win = true;
    document.getElementById("b3").style.backgroundColor = "#1fd655";
    document.getElementById("b6").style.backgroundColor = "#1fd655";
    document.getElementById("b9").style.backgroundColor = "#1fd655";
  }

  if (win == true) {
    for (let i = 1; i <= 9; i++) {
      let id = "b" + i;
      document
        .getElementById(id)
        .removeEventListener("click", allclickhandlers[i]);
    }
  }
  return win;
}

function Owincheck() {
  let win = false;
  if (
    label1.textContent == "O" &&
    label2.textContent == "O" &&
    label3.textContent == "O"
  ) {
    win = true;
    document.getElementById("b1").style.backgroundColor = "#1fd655";
    document.getElementById("b2").style.backgroundColor = "#1fd655";
    document.getElementById("b3").style.backgroundColor = "#1fd655";
  } else if (
    label4.textContent == "O" &&
    label5.textContent == "O" &&
    label6.textContent == "O"
  ) {
    win = true;
    document.getElementById("b4").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b6").style.backgroundColor = "#1fd655";
  } else if (
    label7.textContent == "O" &&
    label8.textContent == "O" &&
    label9.textContent == "O"
  ) {
    win = true;
    document.getElementById("b7").style.backgroundColor = "#1fd655";
    document.getElementById("b8").style.backgroundColor = "#1fd655";
    document.getElementById("b9").style.backgroundColor = "#1fd655";
  } else if (
    label1.textContent == "O" &&
    label5.textContent == "O" &&
    label9.textContent == "O"
  ) {
    win = true;
    document.getElementById("b1").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b9").style.backgroundColor = "#1fd655";
  } else if (
    label3.textContent == "O" &&
    label5.textContent == "O" &&
    label7.textContent == "O"
  ) {
    win = true;
    document.getElementById("b3").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b7").style.backgroundColor = "#1fd655";
  } else if (
    label1.textContent == "O" &&
    label4.textContent == "O" &&
    label7.textContent == "O"
  ) {
    win = true;
    document.getElementById("b1").style.backgroundColor = "#1fd655";
    document.getElementById("b4").style.backgroundColor = "#1fd655";
    document.getElementById("b7").style.backgroundColor = "#1fd655";
  } else if (
    label2.textContent == "O" &&
    label5.textContent == "O" &&
    label8.textContent == "O"
  ) {
    win = true;
    document.getElementById("b2").style.backgroundColor = "#1fd655";
    document.getElementById("b5").style.backgroundColor = "#1fd655";
    document.getElementById("b8").style.backgroundColor = "#1fd655";
  } else if (
    label3.textContent == "O" &&
    label6.textContent == "O" &&
    label9.textContent == "O"
  ) {
    win = true;
    document.getElementById("b3").style.backgroundColor = "#1fd655";
    document.getElementById("b6").style.backgroundColor = "#1fd655";
    document.getElementById("b9").style.backgroundColor = "#1fd655";
  }

  if (win == true) {
    for (let i = 1; i <= 9; i++) {
      let id = "b" + i;
      document
        .getElementById(id)
        .removeEventListener("click", allclickhandlers[i]);
    }
  }
  return win;
}

function clearboard() {
  for (i = 1; i <= 9; i++) {
    id = "l" + i;
    document.getElementById(id).textContent = "";
    id = "b" + i;
    document.getElementById(id).style.backgroundColor = "#FFFFFF";
  }
}

function XOcolour() {
  for (let i = 1; i <= 9; i++) {
    let id = "l" + i;
    if (document.getElementById(id).textContent == "X") {
      document.getElementById(id).style.color = "#FF5C8D";
    }
    if (document.getElementById(id).textContent == "O") {
      document.getElementById(id).style.color = "#7B68EE";
    }
  }
}

function Owinpos() {
  let pos = "none";
  if (
    label3.textContent === "" &&
    ((label1.textContent == "O" && label2.textContent == "O") ||
      (label6.textContent == "O" && label9.textContent == "O") ||
      (label5.textContent == "O" && label7.textContent == "O"))
  ) {
    pos = "l3";
  } else if (
    label2.textContent === "" &&
    ((label1.textContent == "O" && label3.textContent == "O") ||
      (label5.textContent == "O" && label8.textContent == "O"))
  ) {
    pos = "l2";
  } else if (
    label1.textContent === "" &&
    ((label2.textContent == "O" && label3.textContent == "O") ||
      (label4.textContent == "O" && label7.textContent == "O") ||
      (label5.textContent == "O" && label9.textContent == "O"))
  ) {
    pos = "l1";
  } else if (
    label4.textContent === "" &&
    ((label1.textContent == "O" && label7.textContent == "O") ||
      (label5.textContent == "O" && label6.textContent == "O"))
  ) {
    pos = "l4";
  } else if (
    label5.textContent === "" &&
    ((label4.textContent == "O" && label6.textContent == "O") ||
      (label2.textContent == "O" && label8.textContent == "O") ||
      (label3.textContent == "O" && label7.textContent == "O"))
  ) {
    pos = "l5";
  } else if (
    label6.textContent === "" &&
    ((label4.textContent == "O" && label5.textContent == "O") ||
      (label3.textContent == "O" && label9.textContent == "O"))
  ) {
    pos = "l6";
  } else if (
    label7.textContent === "" &&
    ((label8.textContent == "O" && label9.textContent == "O") ||
      (label1.textContent == "O" && label4.textContent == "O") ||
      (label5.textContent == "O" && label3.textContent == "O"))
  ) {
    pos = "l7";
  } else if (
    label8.textContent === "" &&
    ((label7.textContent == "O" && label9.textContent == "O") ||
      (label2.textContent == "O" && label5.textContent == "O"))
  ) {
    pos = "l8";
  } else if (
    label9.textContent === "" &&
    ((label7.textContent == "O" && label8.textContent == "O") ||
      (label3.textContent == "O" && label6.textContent == "O") ||
      (label1.textContent == "O" && label5.textContent == "O"))
  ) {
    pos = "l9";
  }
  return pos;
}

function Xwinpos() {
  let pos = "none";
  if (
    label3.textContent === "" &&
    ((label1.textContent == "X" && label2.textContent == "X") ||
      (label6.textContent == "X" && label9.textContent == "X") ||
      (label5.textContent == "X" && label7.textContent == "X"))
  ) {
    pos = "l3";
  } else if (
    label2.textContent === "" &&
    ((label1.textContent == "X" && label3.textContent == "X") ||
      (label5.textContent == "X" && label8.textContent == "X"))
  ) {
    pos = "l2";
  } else if (
    label1.textContent === "" &&
    ((label2.textContent == "X" && label3.textContent == "X") ||
      (label4.textContent == "X" && label7.textContent == "X") ||
      (label5.textContent == "X" && label9.textContent == "X"))
  ) {
    pos = "l1";
  } else if (
    label4.textContent === "" &&
    ((label1.textContent == "X" && label7.textContent == "X") ||
      (label5.textContent == "X" && label6.textContent == "X"))
  ) {
    pos = "l4";
  } else if (
    label5.textContent === "" &&
    ((label4.textContent == "X" && label6.textContent == "X") ||
      (label2.textContent == "X" && label8.textContent == "X") ||
      (label3.textContent == "X" && label7.textContent == "X") ||
      (label1.textContent == "X" && label9.textContent == "X"))
  ) {
    pos = "l5";
  } else if (
    label6.textContent === "" &&
    ((label4.textContent == "X" && label5.textContent == "X") ||
      (label3.textContent == "X" && label9.textContent == "X"))
  ) {
    pos = "l6";
  } else if (
    label7.textContent === "" &&
    ((label8.textContent == "X" && label9.textContent == "X") ||
      (label1.textContent == "X" && label4.textContent == "X") ||
      (label5.textContent == "X" && label3.textContent == "X"))
  ) {
    pos = "l7";
  } else if (
    label8.textContent === "" &&
    ((label7.textContent == "X" && label9.textContent == "X") ||
      (label2.textContent == "X" && label5.textContent == "X"))
  ) {
    pos = "l8";
  } else if (
    label9.textContent === "" &&
    ((label7.textContent == "X" && label8.textContent == "X") ||
      (label3.textContent == "X" && label6.textContent == "X") ||
      (label1.textContent == "X" && label5.textContent == "X"))
  ) {
    pos = "l9";
  }
  return pos;
}

function easy(number) {
  id = "l" + number.charAt(1);
  document.getElementById(id).textContent = "X";
  XOcolour();
  let num = number.charAt(1);
  document
    .getElementById(number)
    .removeEventListener("click", allclickhandlers[num]);
  let check = false;
  let counter = 0;
  Xwincheck();
  if (Xwincheck()) {
    Xscore++;
    document.getElementById("turn").textContent = "PLAYER X WINS!";
    document.getElementById("Xscore").textContent = Xscore;
    return;
  }
  for (i = 1; i <= 9; i++) {
    id = "l" + i;
    if (document.getElementById(id).textContent == "") {
      counter++;
    }
  }
  if (counter > 1) {
    while (check == false) {
      let computerchoice = Math.floor(Math.random() * 9 + 1);
      let computerchoiceid = "l" + computerchoice;
      if (document.getElementById(computerchoiceid).textContent == "") {
        document.getElementById(computerchoiceid).textContent = "O";
        check = true;
        num = computerchoiceid.charAt(1);
        let buttonid = "b" + num;
        document
          .getElementById(buttonid)
          .removeEventListener("click", allclickhandlers[num]);
      }
    }
  }
  Owincheck();
  if (Owincheck()) {
    Oscore++;
    document.getElementById("turn").textContent = "EASY AI WINS!";
    document.getElementById("Oscore").textContent = Oscore;
  }
  let cnt = 0;
  for (let i = 1; i <= 9; i++) {
    let id = "l" + i;
    if (document.getElementById(id).textContent != "") {
      cnt++;
    }
  }
  if (Xwincheck() == false && Owincheck() == false && cnt == 9) {
    tiescore++;
    document.getElementById("turn").textContent = "DRAW!";
    document.getElementById("tiescore").textContent = tiescore;
  }
  XOcolour();
}

function medium(number) {
  let id = "l" + number.charAt(1);
  document.getElementById(id).textContent = "X";
  XOcolour();
  id = "b" + number.charAt(1);
  document
    .getElementById(id)
    .removeEventListener("click", allclickhandlers[number.charAt(1)]);
  Xwincheck();
  if (Xwincheck()) {
    Xscore++;
    document.getElementById("turn").textContent = "PLAYER X WINS!";
    document.getElementById("Xscore").textContent = Xscore;
    return;
  }
  XOcolour();

  let xpos = Xwinpos();
  let opos = Owinpos();
  if (opos !== "none") {
    document.getElementById(opos).textContent = "O";
    let id = "b" + opos.charAt(1);
    document
      .getElementById(id)
      .removeEventListener("click", allclickhandlers[opos.charAt(1)]);
  } else if (xpos !== "none") {
    document.getElementById(xpos).textContent = "O";
    let id = "b" + xpos.charAt(1);
    document
      .getElementById(id)
      .removeEventListener("click", allclickhandlers[xpos.charAt(1)]);
  } else {
    let counter = 0;
    let check = false;
    for (i = 1; i <= 9; i++) {
      id = "l" + i;
      if (document.getElementById(id).textContent == "") {
        counter++;
      }
    }
    if (counter > 0) {
      while (check === false) {
        let computerchoice = Math.floor(Math.random() * 9 + 1);
        let computerchoiceid = "l" + computerchoice;
        if (document.getElementById(computerchoiceid).textContent == "") {
          document.getElementById(computerchoiceid).textContent = "O";
          check = true;
          let num = computerchoiceid.charAt(1);
          let buttonid = "b" + num;
          document
            .getElementById(buttonid)
            .removeEventListener("click", allclickhandlers[num]);
        }
      }
    }
  }
  Owincheck();
  if (Owincheck()) {
    Oscore++;
    document.getElementById("turn").textContent = "MEDIUM AI WINS!";
    document.getElementById("Oscore").textContent = Oscore;
  }
  let cnt = 0;
  for (let i = 1; i <= 9; i++) {
    let id = "l" + i;
    if (document.getElementById(id).textContent != "") {
      cnt++;
    }
  }
  if (Xwincheck() == false && Owincheck() == false && cnt == 9) {
    tiescore++;
    document.getElementById("turn").textContent = "DRAW!";
    document.getElementById("tiescore").textContent = tiescore;
  }
  XOcolour();
}

function pass(number) {
  if (turn == "X") {
    document.getElementById("turn").textContent = "PLAYER O'S TURN";
    id = "l" + number.charAt(1);
    document.getElementById(id).textContent = "X";
    XOcolour();
    id = "b" + number.charAt(1);
    document
      .getElementById(id)
      .removeEventListener("click", allclickhandlers[number.charAt(1)]);
    Xwincheck();
    if (Xwincheck()) {
      Xscore++;
      document.getElementById("turn").textContent = "PLAYER X WINS!";
      document.getElementById("Xscore").textContent = Xscore;
    }
    turn = "O";
  } else if (turn == "O") {
    document.getElementById("turn").textContent = "PLAYER X'S TURN";
    id = "l" + number.charAt(1);
    document.getElementById(id).textContent = "O";
    XOcolour();
    id = "b" + number.charAt(1);
    document
      .getElementById(id)
      .removeEventListener("click", allclickhandlers[number.charAt(1)]);
    Owincheck();
    if (Owincheck()) {
      Oscore++;
      document.getElementById("turn").textContent = "PLAYER O WINS!";
      document.getElementById("Oscore").textContent = Oscore;
    }
    turn = "X";
  }
  let count = 0;
  for (let i = 1; i <= 9; i++) {
    let id = "l" + i;
    if (document.getElementById(id).textContent != "") {
      count++;
    }
  }
  if (Xwincheck() == false && Owincheck() == false && count == 9) {
    tiescore++;
    document.getElementById("turn").textContent = "DRAW!";
    document.getElementById("tiescore").textContent = tiescore;
  }
}

function addlisteners(gamemode) {
  clearboard();
  for (let i = 1; i <= 9; i++) {
    let id = "b" + i;
    let clickhandler = () => gamemode(id);
    allclickhandlers[i] = clickhandler;
    document.getElementById(id).addEventListener("click", clickhandler);
  }
}

clearboard();

document.getElementById("newgame").onclick = () => {
  clearboard();
  for (let i = 1; i <= 9; i++) {
    let id = "b" + i;
    document
      .getElementById(id)
      .removeEventListener("click", allclickhandlers[i]);
  }
  gameactive = false;
};

easyai.onclick = () => {
  if (gameactive == false) {
    document.getElementById("turn").textContent =
      "PLAYER X'S TURN (VS EASY AI)";
    addlisteners(easy);
    gameactive = true;
  }
};
mediumai.onclick = () => {
  if (gameactive == false) {
    document.getElementById("turn").textContent =
      "PLAYER X'S TURN (VS MEDIUM AI)";
    addlisteners(medium);
    gameactive = true;
  }
};

passplay.onclick = () => {
  if (gameactive == false) {
    document.getElementById("turn").textContent = "PLAYER X'S TURN";
    addlisteners(pass);
    turn = "X";
    gameactive = true;
  }
};
