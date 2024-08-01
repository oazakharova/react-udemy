

const SingleCourse = (props) => {
  const {id, title, slug} = props;

  return (
    <div>
      <h2>Single Course</h2>
      <p>{title}</p>
    </div>
  )
}

export default SingleCourse