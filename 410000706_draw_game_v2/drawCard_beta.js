var cards = {
    N: [
      { "id": 1, "rank": "N", "lyric":"好厲害","name": "千早愛音", "image": "n_images/n_1.JPG" },
      { "id": 2, "rank": "N", "lyric":"好硬派", "name": "千早愛音", "image": "n_images/n_2.JPG" },
      { "id": 3, "rank": "N", "lyric":"不錯吧", "name": "千早愛音", "image": "n_images/n_3.JPG" },
      { "id": 4, "rank": "N", "lyric":"好可愛喔", "name": "千早愛音", "image": "n_images/n_4.JPG" },
      { "id": 5, "rank": "N", "lyric":"沒錯沒錯", "name": "千早愛音", "image": "n_images/n_5.JPG" },
      { "id": 6, "rank": "N", "lyric":"是這樣沒錯", "name": "千早愛音", "image": "n_images/n_6.PNG" }
    ],
    R: [
      { "id": 7, "rank": "R", "lyric":"不行", "name": "長崎爽世", "image": "r_images/r_1.JPG" },
      { "id": 8, "rank": "R", "lyric":"不是這樣", "name": "高松燈", "image": "r_images/r_2.JPG" },
      { "id": 9, "rank": "R", "lyric":"應該不是", "name": "高松燈", "image":  "r_images/r_3.JPG" },
      { "id": 10, "rank": "R", "lyric":"是這樣嗎", "name": "豐川祥子", "image":  "r_images/r_4.JPG" },
      { "id": 11, "rank": "R", "lyric":"差勁", "name": "椎名立希", "image":  "r_images/r_5.JPG" }
    ],
    SR: [
      { "id": 12, "rank": "SR", "lyric":"已經死了","name": "豐川祥子", "image": "sr_images/sr_1.JPG" },
      { "id": 13, "rank": "SR", "lyric":"有趣的女人","name": "要樂奈", "image": "sr_images/sr_2.JPG" },
      { "id": 14, "rank": "SR", "lyric":"我不知道","name": "千早愛音", "image": "sr_images/sr_3.JPG" },
      { "id": 15, "rank": "SR", "lyric":"我不知道","name": "千早愛音", "image": "sr_images/sr_4.JPG" },
      { "id": 16, "rank": "SR", "lyric":"我亂說的","name": "千早愛音", "image": "sr_images/sr_5.JPG" }
    ],
    SSR: [
      { "id": 17, "rank": "SSR", "lyric":"太過分了","name": "長崎爽世", "image": "ssr_images/ssr_1.JPG" },
      { "id": 18, "rank": "SSR", "lyric":"蛤","name": "椎名立希", "image": "ssr_images/ssr_2.JPG" },
      { "id": 19, "rank": "SSR", "lyric":" ","name": "長崎(不)爽世", "image": "ssr_images/ssr_3.JPG" }
    ]
};
  var obtioncard = [];
  var TenCards = [];
  var images = ["background/background_1.jpg", "background/background_2.jpg", "background/background_3.png"]; // Array to store image paths
        var currentIndex = 0;
        var slideshow = document.getElementById("slideshow");

  function showNextImage() {
        slideshow.style.backgroundImage = "url('" + images[currentIndex] + "')";
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(showNextImage, 5000); // Change image every 2 seconds
        }
 showNextImage(); // Start the slideshow
 function one(){
    clearPreviousResults();
    var randomNum = GetRandomNum();
    var cardRank = CardRank(randomNum);
    var card = RandomCard(cards[cardRank]);
    ShowResult(card);
    obtioncard.push(card); // 紀錄
    showObtainedCards();
 } 
 function ten() {
    clearPreviousResults();
    for (var i = 0; i < 10; i++) {
        var randomNum = GetRandomNum();
        var cardRank = CardRank(randomNum);
        var card = RandomCard(cards[cardRank]);
        ShowResult(card);
        obtioncard.push(card); // 將抽到的卡片記錄到obtioncard中
    }
    showObtainedCards(); // 顯示已獲得的卡片
}

 function clearPreviousResults() {
    document.getElementById("results").innerHTML = "";
  }
 function GetRandomNum(){
    var random = Math.random()*100;
    return random;
 }
 function CardRank(randomNum){
    if(randomNum <= 5){
        return "SSR";
    }else if( randomNum <= 25){
        return "SR";
    }else if(randomNum <= 60){
        return "R";
    }else{
        return "N";
    }
 }
 function RandomCard(cardRank){
    var index = Math.floor(Math.random()*cardRank.length);
    return cardRank[index];
 }
function ShowResult(card){
    var resultDiv = document.getElementById("results");
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    switch(card.rank){
        case "N":
            cardDiv.classList.add("N_card");
            break;
        case "R":
            cardDiv.classList.add("R_card");
            break;
        case "SR":
            cardDiv.classList.add("SR_card");
            break;
        case "SSR":
            cardDiv.classList.add("SSR_card");
            break;
        default:

    }
    cardDiv.innerHTML = "<div class='card' >" +
                        "<img src='" + card.image + "' alt='" + card.name + "'><br>" +
                        "<p>稀有度: " + card.rank + "<br>" + 
                        "卡片名稱: " + card.name + "<br>" +
                        "台詞: " + card.lyric + "</p></div>";
    resultDiv.appendChild(cardDiv);
}
function showObtainedCards() {
    var collectionDiv = document.getElementById("collection");
    collectionDiv.innerHTML = ""; // 清空已有内容

    var cardCounts = {};
    obtioncard.forEach(card => {
        if (!cardCounts[card.id]) {
            cardCounts[card.id] = { count: 0, card: card };
        }
        cardCounts[card.id].count += 1;
    });

    for (const id in cardCounts) {
        const card = cardCounts[id].card;
        const count = cardCounts[id].count;

        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        switch (card.rank) {
            case "N":
                cardDiv.classList.add("N_card");
                break;
            case "R":
                cardDiv.classList.add("R_card");
                break;
            case "SR":
                cardDiv.classList.add("SR_card");
                break;
            case "SSR":
                cardDiv.classList.add("SSR_card");
                break;
            default:
                break;
        }

        cardDiv.innerHTML = "<div class='ob_cards'>" +
                            "<div class='card'><img src='" + card.image + "' alt='" + card.name + "'><br>" +
                            "<p>"+
                            "稀有度: " + card.rank + "<br>" +
                            "卡片名稱: " + card.name + "<br>" +
                            "台詞: " + card.lyric + "</p></div>" +
                            "已獲得數量: " + count + "</div>";

        collectionDiv.appendChild(cardDiv);
    }
}
