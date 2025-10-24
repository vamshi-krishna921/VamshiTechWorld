import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./(main)/Home/Home";
import Contact from "./(main)/Contact/Contact";
import Courses from "./(main)/Courses/Courses";
import Offline from "./(main)/Offline/Offline";
import Online from "./(main)/Online/Online";
import PageNotFound from "./(main)/PageNotFound/PageNotFound";
import CourseDetail from "./(main)/CourseDetail/CourseDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/offline" element={<Offline />} />
      <Route path="/online" element={<Online />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
