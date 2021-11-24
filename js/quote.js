const quotes = [
  {
    quote: "한 여자에 대해 생각해봐. 그 여자는 네가 자기에 대해 생각하는지 몰라. 네가 그 여자 생각을 하든 말든 상관 안해. 그러면 넌 더욱 더 그 여자 생각을 하게되지",
    author: "마틴 세이지",
  },
  {
    quote: "사랑은 지성에 대한 상상력의 승리다.",
    author: "헨리 루이스 맹켄",
  },
  {
    quote: "사랑은 거부할 수 없이 열망하게 되는 거부할 수 없는 열망이다.",
    author: "로버트 프로스트",
  },
  {
    quote: "나는 애정을 받을 엄청난 욕구와 그것을 베풀 엄청난 욕구를 타고났다.",
    author: "오드리 햅번",
  },
  {
    quote: "남들이 단순하게 살 수 있도록 검소하게 살라.",
    author: "마하트마 간디",
  },
  {
    quote: "우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
    author: "글로리아 피처",
  },
  {
    quote: "우리 모두는 초대장도 없이, 비자발적으로 지구에 온 방문객이다. 하지만 나에겐 이 비밀조차 감탄스러울 따름이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "인생의 비극이란 사람들이 삶을 사는 동안 내면에서 잃어가는 것들이다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "길을 떠나기 전, 여행자는 여행에서 달성할 목적과 동기를 가지고 있어야 한다.",
    author: "조지 산타야나",
  },
  {
    quote: "훈련이 전부다. 복숭아도 한때는 쓴 씨앗이었고, 대학교육을 받으면 꽃배추도 양배추에 불과하다.",
    author: "마크 트웨인",
  },
  {
    quote: "우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.",
    author: "월터 페이터",
  },
  {
    quote: "대학 졸업장은 한 인간이 완성품이라는 증명이 아니라, 인생의 준비가 되었다는 표시이다.",
    author: "애드워드 A 말로이",
  },
  {
    quote: "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
    author: "공자",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "창의성이란 억제되지 않은 어린아이의 에너지가 정반대이자 적이라 할 수 있는 그것, 즉 성인의 억제된 지능에서 찾을 수 있는 질서의식과 기적같은 합일점을 찾는 것이다.",
    author: "노먼 포도레츠",
  },
  {
    quote:
      "선수 경력을 통틀어 나는 9000개 이상의 슛을 놓쳤다. 거의 300회의 경기에서 패배했다. 경기를 뒤집을 수 있는 슛 기회에서 26번 실패했다. 나는 살아오면서 계속 실패를 거듭했다. 그것이 내가 성공한 이유다.",
    author: "마이클 조던",
  },
  {
    quote: "중국인은 '위기'를 두 글자로 씁니다. 첫 자는 위험의 의미이고 둘째는 기회의 의미입니다. 위기속에서는 위험을 경계하되 기회가 있음을 명심하십시요.",
    author: "존 F.케네디",
  },
  {
    quote: "모든 성공은 더 어려운 문제로 가는 입장권을 사는 것일 뿐이다.",
    author: "헨리 키신저",
  },
  {
    quote: "우연이 아닌 선택이 운명을 결정한다.",
    author: "진 니데치",
  },
  {
    quote: "기회를 찾아야 기회를 만든다.",
    author: "패티 헨슨",
  },
  {
    quote: "성공은 영원하지 않고, 실패는 치명적이지 않다.",
    author: "마이크 디트카",
  },
  {
    quote:
      "성공에 있어 가장 어려운 면은 성공한 상태를 계속 유지해야 한다는 것이다. 이 분야에서 재능은 출발점일 뿐이다. 당신은 그 재능을 계속 연마해야 한다. 언젠가 재능을 구하려 하면 그것은 거기에 없을 것이다.",
    author: "어빙 베를린",
  },
  {
    quote: "저는 미래가 어떻게 전개될지는 모르지만, 누가 그 미래를 결정하는지는 압니다.",
    author: "오프라 윈프리",
  },
  {
    quote: "돈이 다 무슨 소용인가? 사람이 아침에 일어나고 밤에 잠자리에 들며 그 사이에 하고 싶은 일을 한다면 그 사람은 성공한 것이다.",
    author: "밥 딜런",
  },
  {
    quote: "기회는 없어지지 않는다. 당신이 놓친 것은 다른 사람이 잡는다.",
    author: "Unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;