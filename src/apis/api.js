import axios from "axios";

const Axios = axios.create({
   baseURL: "https://opentdb.com/api.php",
});

export const getTests = async () => {
   const data = await Axios.get("?amount=10");
   return data.data.results.map((item) => ({
      ...item,
      selectedAnswer: null,
      answers: [item.correct_answer, ...item.incorrect_answers],
      id: Math.floor(Math.random() * 100000)
   }));
};
