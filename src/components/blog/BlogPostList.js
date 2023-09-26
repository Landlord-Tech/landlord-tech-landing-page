import * as React from "react";
import { navigate } from "gatsby";
import BlogCard from "./BlogCard";
import { useLocation } from "@reach/router";
import { useSingleBlogData } from "../../fetchHooks/useSingleBlog";

const BlogPostList = () => {
  const location = useLocation();
  const data = useSingleBlogData();
  const newData = data.map(item => item.node.frontmatter);
  const categories = newData.map(card => card.category);
  const uniqueCategories = [...new Set(categories)];

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  }

  const currentCategorySlug = location.search.substring(1);
  const currentCategory = uniqueCategories.find(cat => slugify(cat) === currentCategorySlug);
  
  const filteredData = currentCategory
    ? newData.filter(item => item.category === currentCategory)
    : newData;

  function handleCategoryFilter(category) {
    const slug = slugify(category);
    navigate(slug ? `/resources/?${slug}` : "/resources", { replace: false });
  }

  return (
    <section className="blog-wrapper">
      <div className="container mb-5 mt-5">
        <ul className="blog-categories">
          <li>
            <button
              className={!currentCategory ? "active" : ""}
              onClick={() => handleCategoryFilter("")}
            >
              All
            </button>
          </li>
          {uniqueCategories.map((category, index) => (
            <li key={index}>
              <button
                className={slugify(category) === currentCategorySlug ? "active" : ""}
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <ul className="blog-list">
          {filteredData.map(page => (
            <li key={page.path} className="blog-list-item">
              <BlogCard data={page} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogPostList;
