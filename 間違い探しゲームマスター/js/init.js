const q = [
  ['高', '髙'],
  ['吉', '𠮷'],
  ['酒', '洒'],
  ['人', '入'],
  ['昴', '昂'],
  ['鳴', '嗚'],
  ['倶', '惧'],
  ['師', '帥'],
  ['狭', '挟'],
  ['壁', '璧']
];
const cells = document.getElementById("cells");
const score = document.getElementById("time");
let start ;
const correct = new Audio('sound/correct.mp3');
const wrong = new Audio('sound/wrong.mp3');


const APPLICATION_KEY = "25ee028733c442f6e534363f9c1208f78ca564547dd794dbf7764c772c0817a8";
const CLIENT_KEY = "82cda4a88c4ac8cf20bcebf15fbf127e4b7eb4ee665bde87d99dc0ea802e04ce";
const ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
const DBName = "TestClass";
let TestClass = ncmb.DataStore(DBName);
