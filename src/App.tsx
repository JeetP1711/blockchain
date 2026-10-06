import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import TopicView from "./pages/TopicView";
import Visualize from "./pages/Visualize";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import ExamMode from "./pages/ExamMode";
import Revision from "./pages/Revision";
import Glossary from "./pages/Glossary";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="learn" element={<Learn />} />
          <Route path="learn/:topicId" element={<TopicView />} />
          <Route path="visualize" element={<Visualize />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="exam-mode" element={<ExamMode />} />
          <Route path="revision" element={<Revision />} />
          <Route path="glossary" element={<Glossary />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
