import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import './SectionHeading.css'

/** سرِ بخش‌ها: عنوان و توضیح در یک ردیف، دکمه اختیاری در سمت مقابل. */
export default function SectionHeading({ eyebrow, title, description, action, actionTo }) {
  return (
    <header className="section-heading">
      <div className="section-heading__text">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="title">{title}</h2>
        {description ? <p className="lead section-heading__lead">{description}</p> : null}
      </div>

      {action ? (
        <Link to={actionTo || '/'} className="section-heading__action">
          {action}
          <Icon name="arrowLeft" size={17} />
        </Link>
      ) : null}
    </header>
  )
}
