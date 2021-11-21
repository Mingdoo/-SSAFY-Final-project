import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trendingMovieList: [],
    selectedMovie: '',
    selectedArticle: '',
    selectedArticleComments: [],
    userId: null,
    isLogin: false,
    token: null,
  },
  mutations: {
    MOVIE_DETAIL(state, trendingMovie) {
      state.selectedMovie = trendingMovie
    },
    CHANGE_LOGGED(state){
      state.isLogin = !state.isLogin
    },
    SET_JWT_TOKEN(state, token) {
      const base64Payload = token.split('.')[1]; 
      const payload = Buffer.from(base64Payload, 'base64'); 
      const result = JSON.parse(payload.toString())

      state.userId = result['user_id']
      
      state.token = token
    },
    SELECT_ARTICLE(state, article){
      state.selectedArticle = article
    },
    SET_COMMENTS(state, comments){
      state.selectedArticleComments = comments 
    },
    COMMENT_CREATED(state, comment){
      state.selectedArticleComments.push(comment)
    }
  },
  actions: {
    movieDetail({ commit }, trendingMovie) {
      commit('MOVIE_DETAIL', trendingMovie)
    },
    changeLogged({ commit }){
      commit('CHANGE_LOGGED')
    },
    setJwtToken({ commit }, token){
      commit('SET_JWT_TOKEN', token)
    },
    selectArticle({ commit }, article){
      commit('SELECT_ARTICLE', article)
    },
    setComments({ commit }, comments){
      commit('SET_COMMENTS', comments)
    },
    commentCreated({ commit }, comment){
      commit('COMMENT_CREATED', comment)
    }
  },
  modules: {
  }
})