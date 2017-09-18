$(document).ready(function () {

  $.get('https://lit-fortress-6467.herokuapp.com/object', function (data) {
    let container = document.getElementById('row');

    for (let i = 0; i < 3; i++) {
      if (data.results[i].cover_art !== "") {
        let div = document.createElement('div');
        // $(div).addClass('album');
        let cardAlb = document.createElement('IMG');
        $(cardAlb).addClass('album');
        cardAlb.src = "./images/" + data.results[i].cover_art;
        $(div).append(cardAlb)[i];
        $(container).append(div)[i];
      }
    }
  })
})


/* The function below creates random indices, but need help translating
this to pulling a random image from the API & displaying it on the screen*/

// function getRandomAlb(obj) {
//   let newObj = {};
//   let arr = [];
//   let randomArr = [];

//   for (let key in obj) {
//     newObj = obj[key];
//   }
//   for (let i = 0; i < newObj.length; i++) {
//     arr.push(newObj[i].id);
//   }
//   do {
//     let randomAlbNum = Math.floor(Math.random() * arr.length);
//     if (!randomArr.includes(randomAlbNum)) {
//       randomArr.push(randomAlbNum);
//     }
//   }
//   while (randomArr.length < 3);
//   console.log(randomArr);
// };