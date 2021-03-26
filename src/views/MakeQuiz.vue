<template>
  <div>
    <h1>MAKE YOUR DREAM QUIZ</h1>
   <form @submit="createMakeQuiz({event : $event, data : data})">
     <select @change="selectOptions($event)" name="category">
       <option selected name="" value="15">Entertainment: Video Games</option>
       <option value="11">Entertainment: Film</option>
       <option value="12">Entertainment: Music</option>
       <option value="10">Entertainment: Books</option>
     </select>
     <select @change="selectOptions($event)" name="amount">
       <option value="5">5</option>
       <option selected value="10">10</option>
       <option value="20">20</option>
       <option value="50">50</option>
     </select>
     <button type="submit">Create Quiz!</button>
   </form>
  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {
  name: "MakeQuiz",
  data() {
    return {
      data : {category: "15", amount: "10"}
    }
  },
  methods: {
    ...mapActions(["createMakeQuiz"]),
    selectOptions(e) {
      this.data[e.target.name] = e.target.value;
      console.log("NEW", this.data)
    }
  },
  computed: mapGetters(["getMadeQuiz"]),
}
</script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    margin-left: 30vw;
    background: rgb(255, 255, 255);
    border: 2px solid black;
    padding: 100px 20px;
    border-radius: 10px;
  }
  select{
    border: 2px solid black;
    margin-bottom: 10px;
    width: 70%;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    outline: none;
    cursor: pointer;
  }
  button{
    margin-bottom: 10px;
    width: 70%;
    height: 40px;
    border-radius: 20px;
    padding: 0 20px;
    outline: none;
    cursor: pointer;
    background: rgb(61, 150, 201);
    border: none;
    color: #fff;
    font-size: 120%;
  }

</style>