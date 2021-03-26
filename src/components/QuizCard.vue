<template>
  <div class="container" :class="userAnswers[whatQuestion] !== undefined ? 'cleared' : ''"  :style="cssProps">
    <h2>{{"#" + (whatQuestion + 1) + " - " + decoded}}</h2>
      <div v-for="answer in answers" :key="answer">
        <div @click="answerQuestion({answer: answer, index: whatQuestion})" class="choice">{{answer}}</div>
      </div>
  </div>
</template>

<script>

import {shuffle} from "../utils/shuffle"
import {mapGetters, mapActions} from "vuex";
import {unescape} from 'html-escaper';

export default {
  name: "QuizCard",
  props: ['quiz'],
  data() {
    return {
      answers : ["whaaat"],
      decoded : unescape(this.quiz.question)
    }
  },
  methods: {
    ...mapActions(["answerQuestion"])
  },
  computed: {
      ...mapGetters(["whatQuestion", "userAnswers"]),
      cssProps() {
        return {'--right-value': + (50 * this.whatQuestion) + "vw"}
      },
  },
  created(){
    const makeArray = (quiz) => {
      let newAnswers = [...quiz.incorrect_answers, quiz.correct_answer]
      return shuffle(newAnswers);
    };
    
    this.answers = makeArray(this.quiz);
  }
}
</script>

<style scoped>
  .container{
    margin-top: 10px;
    background: white;
    width: 50vw;
    min-height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    position: relative;
    right: var(--right-value);
    perspective: 500px;
    border: 2px solid black;
  }
  .cleared{
    background: rgb(255, 123, 174);
  }
  .questions{
    display: flex;
    justify-content: center;
  }
  .choice{
    width: 40vw;
    height: 40px;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    transition: 0.1s ease-out all;
  }
  .choice:hover{
    background: rgb(61, 150, 201);
    color:#fff;
    width: 45vw;
  }
</style>