class Dogs {
    constructor() {
    }
    async getRandomDog() {
        const buscadog = await fetch('https://api.thedogapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                let resul = data[0]
                //console.log(resul.url)
                return resul.url
            })
            return buscadog
    }

}
let test = new Dogs();
//console.log(test.getRandomDog());
//console.log(test.getImageUrl())

// class Cats {
//     constructor() {
//     }
//     async getRandomCat() {
//         const buscaCat = await fetch('https://api.thecatapi.com/v1/images/search')
//             .then(response => response.json())
//             .then(rpsJson => {
//                 let resul = rpsJson[0]
//                 console.log(resul.url)
//                 return resul.url
//             })
//     }
// }

// let test2 = new Cats();
// console.log(test2.getRandomCat());

const divImgDog = document.getElementById('divImgDog');
const testImg = document.createElement('p');
divImgDog.appendChild(testImg);
testImg.innerText = '' + test.getRandomDog();