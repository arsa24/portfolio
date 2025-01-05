import exampleImg from "../assets/example.png";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <section id="blog">
      <div className="blog-header">
        <h1 className="title-section">Our Blog</h1>
        <p className="text-section">Eksplore our latest updates,tips and stories</p>
      </div>
      <div className="blog-items">
        <BlogItem
          title="How to create..."
          img={exampleImg}
          desc="Lorem ipsum dolor sit amet contejhahd sdhaskjdh hdask"
        />
        <BlogItem
          title="How to create..."
          img={exampleImg}
          desc="Lorem ipsum dolor sit amet contejhahd sdhaskjdh hdask"
        />
        <BlogItem
          title="How to create..."
          img={exampleImg}
          desc="Lorem ipsum dolor sit amet contejhahd sdhaskjdh hdask"
        />
      </div>
      <div className="btn-blog">
        <a href="">
          <button>See More</button>
        </a>
      </div>
    </section>
  );
};

export default Blog;
