document.addEventListener("DOMContentLoaded", () => {
  // [start] 오늘의 인증 횟수, 누적 인증 횟수 쉼표 정규표현식
  const numComma = (arr) => {
    arr.forEach((element) => {
      let inText = element.innerText;
      let comText = inText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      element.innerText = comText;
    });
  };

  numComma(document.querySelectorAll(".count_text_right span"));
  // [end] 오늘의 인증 횟수, 누적 인증 횟수 쉼표 정규표현식

  // [start] 카드 넘기기
  const addCard = () => {
    const numDefault = `<ul class="count_num">
      <li class="back">
        <div class="up"><div class="num"></div></div>
        <div class="down"><div class="num"></div></div>
      </li>
      <li class="front">
        <div class="up"><div class="num"><span>0</span></div></div>
        <div class="down"><div class="num"><span>0</span></div></div>
      </li>
      <li>
        <div class="up"><div class="num">1</div></div>
        <div class="down"><div class="num">1</div></div>
      </li>
      <li>
        <div class="up"><div class="num">2</div></div>
        <div class="down"><div class="num">2</div></div>
      </li>
      <li>
        <div class="up"><div class="num">3</div></div>
        <div class="down"><div class="num">3</div></div>
      </li>
      <li>
        <div class="up"><div class="num">4</div></div>
        <div class="down"><div class="num">4</div></div>
      </li>
      <li>
        <div class="up"><div class="num">5</div></div>
        <div class="down"><div class="num">5</div></div>
      </li>
      <li>
        <div class="up"><div class="num">6</div></div>
        <div class="down"><div class="num">6</div></div>
      </li>
      <li>
        <div class="up"><div class="num">7</div></div>
        <div class="down"><div class="num">7</div></div>
      </li>
      <li>
        <div class="up"><div class="num">8</div></div>
        <div class="down"><div class="num">8</div></div>
      </li>
      <li>
        <div class="up"><div class="num">9</div></div>
        <div class="down"><div class="num">9</div></div>
      </li>
    </ul>`;
    const commaText = `<span class="count_com">,</span>`;

    const numWrap = document.querySelector(".count_num_wrap");
    const targetData = numWrap.getAttribute("data-count");
    const targetNum = Array.from(targetData).reverse();
    
    let cardCount = 0;
    let i = 0;
    let cardInt = setInterval(() => {
      if (i > targetNum.length - 1) {
        clearInterval(cardInt);
        i = 0;
      } else {
        const cardNum = numWrap.querySelector(".count_num");
        const cardNumList = cardNum.querySelectorAll("li");
        cardNumList[cardCount].classList.add("back");
        cardNumList[cardCount + 1].classList.add("front");
        cardCount++;
        if (cardCount > Number(targetNum[i])) {
          cardCount = 0;
          i++;
          if (i < targetNum.length) {
            let counting = setTimeout(() => {
              if (numWrap.querySelectorAll(".count_num").length % 3 === 0) {
                numWrap.insertAdjacentHTML("afterbegin", commaText);
              }
              numWrap.insertAdjacentHTML("afterbegin", numDefault);
            }, 600);
          }
          
        }
      }
    }, 600);
  };
  addCard();
  // [end] 카드 넘기기
});