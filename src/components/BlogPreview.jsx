import Icon from './Icon.jsx'
import { POSTS } from '../data/catalog.js'
import './BlogPreview.css'

export default function BlogPreview() {
  return (
    <ul className="posts">
      {POSTS.map((post) => (
        <li className="post" key={post.title}>
          <article>
            <div className="post__head">
              <span className="post__index latin">{post.index}</span>
              <span className="chip">{post.tag}</span>
            </div>
            <h3 className="post__title">{post.title}</h3>
            <p className="post__excerpt">{post.excerpt}</p>
            <p className="post__meta">
              <Icon name="clock" size={15} />
              {post.readTime}
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}
