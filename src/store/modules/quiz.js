import axios from "axios"
import router from '../../router'

const state = {
  quiz: [],
  whatQuestion: 0,
  userAnswers: [],
  makeQuiz: {
    category : "",
    amount: ""
  },
  score: {
    correct : 0,
    done : false,
  }
};

const getters = {
  wholeQuiz: state => state.quiz,
  whatQuestion: state => state.whatQuestion,
  userAnswers: state => state.userAnswers,
  getMadeQuiz: state => state.makeQuiz,
  getScore: state => state.score,
};

const actions = {
  async createMakeQuiz({commit}, data){
    data.event.preventDefault();
    commit('make', data.data)
    const res = await axios.get(`https://opentdb.com/api.php?amount=${state.makeQuiz.amount}&category=${state.makeQuiz.category}`)
    commit('getQuiz', res.data.results)
    router.push("/doQuiz")
  },
  nextQuestion({commit}){
    console.log("next", state.whatQuestion)
    commit("next")
  },
  prevQuestion({commit}){
    commit("prev")
  },
  resetAll({commit}){
    commit("reset")
  },
  chooseQuestion({commit}, choice){
    commit("choose", choice)
  },

  answerQuestion({commit}, value){

    commit("answered", value)
    let done = false;
    for(let i = 0; i < state.quiz.length; i++){
      if(state.userAnswers[i] === undefined){
        done = false;
        break;
      }
      if(state.userAnswers[i].answer === state.quiz[i].correct_answer){
        commit("addScore")
      }
      done = true;
    }

    if(done){
      commit("addDone")
    }else{
      commit("resetScore")
    }
    commit("next")
  }
};

const mutations = {
  getQuiz: (state, quiz) => state.quiz = quiz,
  next: (state) => state.whatQuestion >= state.quiz.length -1 ? state.whatQuestion = 0 : state.whatQuestion++ ,
  prev: (state) => state.whatQuestion < 1 ? state.whatQuestion = state.quiz.length -1 : state.whatQuestion--,
  choose: (state, choice) => state.whatQuestion = choice,
  answered: (state, value) => state.userAnswers[value.index] = {answer: value.answer, index: value.index},
  make: (state, data) => state.makeQuiz = {...data},
  addScore: (state) => state.score.correct++,
  resetScore: (state) => state.score.correct = 0,
  addDone: (state) => state.score.done = true,
  reset: (state) => {
    state.whatQuestion = 0;
    state.quiz = [];
    state.userAnswers = [];
    state.makeQuiz = {
      category : "",
      amount: ""
    }
    state.score = {
      correct : 0,
      done : false,
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};