/* eslint-disable react/prop-types */
const BlogItem = ({ title, desc, img }) => {
  return (
    <a className="blog-item" href="#">
      <img src={img} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </a>
  );
};

export default BlogItem;
