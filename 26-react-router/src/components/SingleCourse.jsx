import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import courses from '../data/courses';
// import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();
  const navigateFunction = useNavigate(); // хук useNavigate() - перенаправление на другую страницу
  const course = courses.find((course) => course.slug === params.courseSlug);

  // отображение <NotFound /> с сохранением ссылки
  // if (!course) {
  //   return <NotFound />
  // }

  // перенаправление на страницу со всеми курсами при отсутствии такого курса в массиве курсов
  useEffect(()=> {
    if (!course) {
      navigateFunction('..', {relative: "path"}); // переход на 1 уровень выше относительно текущего пути
    }
  }, [course, navigateFunction]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>

      {/* relative='path' - переход на 1 уровень выше относительно текущего пути */}
      <Link to='..' relative='path'>All courses</Link>
    </>
  )
}

export default SingleCourse