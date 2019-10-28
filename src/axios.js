import axios from 'axios'

const ADDRESS = 'https://douban-api-git-master.zce.now.sh'
// 正在上映
export const getShowNow = () => {
    return axios.get(ADDRESS + '/v2/movie/in_theaters')
}

// 即将上映
export const getShownSoon = () => {
    return axios.get(ADDRESS + '/v2/movie/coming_soon')
}

// 口碑榜
export const getMouthList = () => {
    return axios.get(ADDRESS + '/v2/movie/weekly')
}

// 新片榜
export const getNewsMovie = () => {
    return axios.get(ADDRESS + '/v2/movie/new_movies')
}

// Top250
export const getTop250 = () => {
    return axios.get(ADDRESS + '/v2/movie/top250?count=250')
}

// 影片详情
export const getMovieDetail = (id) => {
    return axios.get(ADDRESS + '/v2/movie/subject/' + id)
}

