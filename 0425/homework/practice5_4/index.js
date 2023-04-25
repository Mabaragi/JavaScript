/* 
  아래에 코드를 작성해주세요.
*/

const API_URI = '?method=album.search&album=believe&format=json'
const keyWord = document.querySelector('.search-box__input')
const searchBtn = document.querySelector('.search-box__button')

function fetchAlbums(page=1, limit=10) {
  // alert('확인')
  axios({
    method:'get',
    url:API_URI,
    baseURL: 'http://ws.audioscrobbler.com/2.0/', 
    params: {
      api_key: '62fde9d54e2a10573ab322b19313038c',
      limit: limit,
      page: page,
    }
  })
  .then((response) => {
    console.log(response.data);
  })
}

searchBtn.addEventListener('click', fetchAlbums)