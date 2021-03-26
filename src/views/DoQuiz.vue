<template>
  <div class="flex">
    <button @click="goBack" class="goback">go back</button>
    <div class="flex-container">
      <div v-for="quiz in wholeQuiz" :key="quiz.id">
        <QuizCard v-bind:quiz="quiz" />
      </div>
    </div>
    <div class="buttons">
      <button class="btn right" @click="this.prevQuestion">prev</button>
      <div class="flex-grow">
        <div v-for="(quiz, i) in wholeQuiz" :key="quiz.id">
          <div @click="chooseQuestion(i)" class="orb" 
            :class="[
              whatQuestion === i ? 'full' : '', 
              userAnswers[i] !== undefined ? 'answered' : '',
              whatQuestion === i & userAnswers[i] !== undefined ? 'all' : ''
            ]"
            
            ><p>{{i + 1}}</p></div>
        </div>
      </div>
      <button class="btn left" @click="this.nextQuestion">next</button>
    </div>
    <button class="results goback" v-if="getScore.done">Click here for results!</button>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";
import QuizCard from "../components/QuizCard";
import router from "../router"

export default {
  name: "DoQuiz",
  components: {
    QuizCard
  },
  methods: {
    ...mapActions(["fetchQuiz", "nextQuestion", "prevQuestion", "chooseQuestion", "resetAll"]),
    goBack(){
      router.push("/");
      this.resetAll();
    },
  },
  computed: mapGetters(["wholeQuiz", "whatQuestion", "userAnswers", "getScore"]),
  created(){
    const test = () => {
      if(this.wholeQuiz.length < 5){
        router.push("/")
      }
    }
    test();
  }
}
</script>

<style scoped>
  .flex{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 25vw;
    margin-top: 100px;
  }
  .flex-container{
    display: flex;
    flex-direction: row;
    width: 50vw;
    align-items: center;
    overflow: hidden;
  }
  .buttons{
    margin-top: 10px;
    display: flex;
    width: 50vw;
    max-width: 50vw;
    justify-content: space-between;
    background: #fff;
    border: 2px solid black;
    border-radius: 15px;
  }
  .flex-grow{
    display: flex;
    max-width: 50vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .orb{
    margin: 2px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 4px solid black;
    cursor: pointer;
    position: relative
  }
  .orb p{
    width: 30px;
    height: 30px;
    font-size: 120%;
    position: absolute;
    top: -14px;
    left: -4px;
    text-align: center;
  }
  .btn{
    background: rgb(94, 221, 151);
    border: none;
    width: 100px;
    font-size: 120%;
    outline: none;
    cursor: pointer;
    transition: 0.2s ease-in;
  }
  .btn:hover{
    background: rgb(61, 150, 201);
    width: 150px;
  }
  .answered{
    background: rgb(61, 150, 201);
  }
  .full{
    background: rgb(94, 221, 151);
    border-color: rgb(94, 221, 151);
  }
  .all{
    background: rgb(61, 150, 201);
    border: 4px solid rgb(61, 150, 201);
  }
  .left{
    border-radius: 0 12px 12px 0;
    border-left: 2px solid black;
  }
  .right{
    border-radius: 12px 0 0 12px;
    border-right: 2px solid black;
  }
  .goback{
    width: 50vw;
    border: none;
    background: rgb(255, 255, 255);
    border: 2px solid black;
    height: 50px;
    border-radius: 15px;
    font-size: 150%;
    cursor: pointer;
  }
  .results{
    margin-top: 20px;
    background: rgb(255, 123, 174);
  }
</style>