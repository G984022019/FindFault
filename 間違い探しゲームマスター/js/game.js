let timer = null;
let MIN = 0;
let MAX = 1;
function init() {
  if (timer == null) {
    start = new Date();
    time();
    gameStart();
  }
}

function gameStart() {
  let size = 5;
  let qNum = Math.floor(Math.random()*q.length);
  for (let i = 0; i < size*size; i ++){
    let s = document.createElement("span");
    s.textContent = q[qNum][0];
    s.setAttribute("id", "num" + i);
    cells.appendChild(s);
    let abc = s.addEventListener("click" ,function(){
      // wrong.play();
      if(this.textContent == q[qNum][1]){
        // alert("正解");
        correct.play();
        MIN++;
        save();
        while (cells.firstChild) {
          cells.removeChild(cells.firstChild);
        }

        gameStart();
      } else {
        wrong.play();
      }
    });
    if(i % size == size -1){
      const br = document.createElement("br");
      cells.appendChild(br);
    }
  }
  if (MIN == MAX ){
    clearTimeout(timer);
    alert("Game clear");
    load();
  }
  let p = Math.floor(Math.random()*size*size);
  let ans = document.getElementById("num" + p);
  ans.textContent = q[qNum][1];
}

function time() {
  let now = new Date;
  let eTime = parseInt((now.getTime() - start.getTime())/1000);
  score.textContent = eTime;
  timer = setTimeout("time()",1000);
}

function save() {
  let test = new TestClass();
  let key = "message";
  let value = score.textContent ;
  const text = document.getElementById('message');
  test.set(key, parseInt(value));
  test.save()
    .then (function(){
      console.log(timer);
    })
    .catch(function (err) {
      console.log("エラー発生： " + err)
    });

}

function load(){
  TestClass
          .order("message")
          .fetchAll()
          .then(function(results){
              let highscore = results[0].message;
              for ( let i = 1; i < results.length-1;i++){
                if (results[i].message < highscore ){
                  highscore = results[i].message;
                }
              }
              if (results[results.length-1].message <= highscore){
                alert("おめでとう！　ハイスコアです" );
              }　else {
                alert("残念です。今までのハイスコア　：" + highscore );
              }

            })
          .catch(function(err){
              console.log("エラー発生： " + err)
          });

}
