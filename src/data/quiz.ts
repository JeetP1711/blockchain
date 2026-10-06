export type { QuizQuestion, Difficulty } from "./quiz1";
import { quizQuestions1 } from "./quiz1";
import { quizQuestions2 } from "./quiz2";
import { quizQuestions3 } from "./quiz3";
import { quizQuestions4 } from "./quiz4";

export const allQuizQuestions = [
  ...quizQuestions1,
  ...quizQuestions2,
  ...quizQuestions3,
  ...quizQuestions4
];
