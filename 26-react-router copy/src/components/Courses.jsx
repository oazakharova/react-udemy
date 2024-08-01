import { Routes, Route } from 'react-router-dom';

import SingleCourse from "./SingleCourse";
import courses from "../data/courses";

const Courses = () => {
  return (
    <Routes>
      <Route path="courses/" element={<Courses />}>
        {courses.map((course) => (
          <Route
            key={course.id}
            path={`${course.id}`}
            element={
              <SingleCourse
                title={course.title}
                slug={course.slug}
                id={course.id} />} />
        ))}
      </Route>
    </Routes>
  )
}

export default Courses