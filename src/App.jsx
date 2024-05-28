import './App.css'
import illustraionArticle from './assets/illustration-article.svg'
import avatar from './assets/image-avatar.webp'

function App() {
  
  return (
    <div className="container">
      <div className="blog_card">
        <div className="illustration_img_container">
          <img src={illustraionArticle} alt="blog image" className="illustration_img" />
        </div>
        <div className="blog_details_container">
          <div className="blog_category">
            <a href="#" className="blog_category_link figtree-800">Learning</a>
          </div>
          <div className="blog_publish_date figtree-500">Published 21 Dec 2023</div>
          <h1 className="blog_title figtree-800">HTML & CSS foundations</h1>
          <p className="blog_description figtree-500">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <div className="blog_author_container">
          <div className="blog_author_img_container">
            <img src={avatar} alt="blog author avatar" className="blog_author_img" />
          </div>
          <p className="blog_author_name figtree-800">Greg Hooper</p>
        </div>
      </div>
    </div>
  )
}

export default App
