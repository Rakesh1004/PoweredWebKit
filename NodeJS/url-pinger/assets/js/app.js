// DEFINING CONSTANTS;

const curURL = window.location.origin;

// DEFINE ELEMENTS

const dataDiv = document.querySelector('.details');
const input = document.querySelector('.hero__input');
const submit = document.querySelector('.btn');
const loader = document.querySelector('.loader');


const newNumber = () => {
    var num = Math.floor(Math.random() * 6) +1;
    return num;
}

const fetchData = async (arr, curr) => {
  for (var i = 0; i < arr.length; i++) {
    const API = await fetch(`${curURL}/${arr[i]}`)
      .then((data) => {
        return data.json();
      })
      .then((apiData) => {
        return apiData;
      });

      const getData = async ()=> {
          const a = await API;
          return a;
      }
      const b = await getData();
      console.log(b);

      const num = newNumber();

      const element = `<div class="item">
      <img src="./img/${num}.jpg" alt="" class="item__img">
      <ul class="item__ul">
          <li class="host">Host: </li><span class="host__span">${b.host}</span>
          <li class="alive">Alive: </li><span class="alive__span">${b.alive}</span>
          <li class="time">Time: </li><span class="time__span">${b.avg} ms</span>
          <li class="loss">Packet Loss: </li><span class="loss__span">${b.packetLoss}</span>
          <li class="numHost">Numeric Host: </li><span class="numHost__span">${b.numHost}</span>
      </ul>
  </div>`;

      dataDiv.insertAdjacentHTML('beforeend', element);

  }
};




// MAIN CONTROLLER

submit.addEventListener('click', () => {
    if(!input.value) {
        alert('Please Enter atleast one URL');
    }
    else {
        dataDiv.innerHTML = "";
        loader.classList.remove('display')
        const value = input.value;
        const initArr = value.split(',');
        var finalArr = [];
        
        for (var k = 0; k < initArr.length; k++) {
            finalArr.push(initArr[k].trim());
        }

        console.log(finalArr)
        
        fetchData(finalArr, curURL);
        dataDiv.classList.remove('get');
        loader.classList.add('display');
        
    }
})

    // document.addEventListener('keypress', (data) => {
    //     if(data.keyCode = 13) {
    //         alert ("Pls enter the ")
    //     }
    // })