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
      <li>
        <div class="up"><div class="num">0</div></div>
        <div class="down"><div class="num">0</div></div>
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
      <li>
        <div class="up"><div class="num"></div></div>
        <div class="down"><div class="num"></div></div>
      </li>
    </ul>`;

    const numWrap = document.querySelector(".count_num_wrap");
    const targetData = numWrap.getAttribute("data-count");
    const targetNum = Array.from(targetData).reverse();
    
    let cardNum = numWrap.querySelectorAll(".count_num");
    let cardLength = cardNum.length;
    let cardCount = 0;
    let i = 0;
    let cardInt = setInterval(() => {
      // console.log(i);
      if (i === targetNum.length) {
        clearInterval(cardInt);
      }
      // 숫자 넘어가기
      setTimeout(() => {
        cardNum = numWrap.querySelectorAll(".count_num");
        const cardNumList = cardNum[cardLength - 1].querySelectorAll("li");
        if (cardCount > 0) {
          cardNumList[cardCount - 1].classList.add("back");
        }
        cardNumList[cardCount].classList.add("front");
        cardCount++;
        if (cardCount > Number(targetNum[i])) {
          cardCount = 0;
          i++;
          if (i < 5) {
            cardLength--;
          } else if (i === 5 && targetNum.length > 5) {
            setTimeout(() => {
              numWrap.insertAdjacentHTML("afterbegin", numDefault);
            });
            cardLength = 1;
          }
        }
      }, 60);
      // 숫자 넘어가기
    }, 60);
  };
  addCard();
  // [end] 카드 넘기기

  // date
  function updateTime(){
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
  
    const yearText = document.getElementById("year");
    const monthText = document.getElementById("month");
    const dateText = document.getElementById("date");
    const hourText = document.getElementById("hour");
    const minuteText = document.getElementById("minute");

    const format = (num) => (num < 10 ? '0' + num : num);
  
    yearText.innerText = year;
    monthText.innerText = format(month);
    dateText.innerText = format(date);
    hourText.innerText = format(hour);
    minuteText.innerText = format(minute);
  }
  setInterval(updateTime, 1500);
  updateTime();
  
});