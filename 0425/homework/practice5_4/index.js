/* 
  아래에 코드를 작성해주세요.
*/

const keyWord = document.querySelector('.search-box__input')
const API_URI = '?method=album.search&format=json'
const searchBtn = document.querySelector('.search-box__button')

function fetchAlbums(event, page=1, limit=10) {
  // alert('확인')
  const keyword = keyWord.value
  axios({
    method:'get',
    url:API_URI,
    baseURL: 'http://ws.audioscrobbler.com/2.0/', 
    params: {
      api_key: '62fde9d54e2a10573ab322b19313038c',
      limit: limit,
      page: page,
      album: keyword,
    }
  })
  .then((response) => {
    const albumLst = response.data.results.albummatches.album
    console.log(albumLst);
    albumLst.forEach(album => {
      console.log(album);
      console.log(album.artist);
      const imgSrc = album.image[1]['#text']
      const resultCard = document.createElement('div')
      resultCard.setAttribute('class', "search-result__card")

      // const imgTag = document.createElement('img')
      // imgTag.setAttribute('src', imgSrc)
      
      // const resultText = document.createElement('div')
      // resultText.setAttribute('class', 'search-result__text')
      
      // const artistNameTag = document.createElement('h2')
      // artistNameTag.innerText = album.artist

      // const albumNametag = document.createElement('p')
      // albumNametag.innerText=album.name

      // resultText.appendChild(artistNameTag)
      // resultText.appendChild(albumNametag)
      // resultCard.appendChild(imgTag)
      // resultCard.appendChild(resultText)
      const result = document.querySelector('.search-result')
      resultCard.innerHTML = `
      <div class="search-result__card">
        <img src="${imgSrc}">
        <div class="search-result__text">
          <h2>${album.artist}</h2></h2>
          <p>${album.name}</p>
        </div>
      </div>
      `
      result.appendChild(resultCard)
    });
  })
  .catch((response) => {
    alert('잠시후 다시 시도해주세요.')
  })
  keyWord.value = ""
}

searchBtn.addEventListener('click', fetchAlbums)
//       div.innerHTML = `
//       <div class="search-result__card">
//   <img src="${주소}">
//   <div class="search-result__text">
//     <h2>아티스트의 이름</h2>
//     <p>앨범의 이름</p>
//   </div>
// </div>`