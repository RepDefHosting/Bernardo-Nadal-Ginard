import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import moment from 'moment'
import { featuredImagePropTypes } from '../proptypes'

const Moment = moment().constructor

const PostCard = ({ count, image, slug, pageTitle, date, teaser }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <article ref={ref}>
      <img src={!!image && !!image.square && !!image.square.childImageSharp && !!image.square.childImageSharp.fluid && !!image.square.childImageSharp.fluid.src ? image.square.childImageSharp.fluid.src : '/img/default-blog-thumb-01.webp'} alt={!!image && !!image.alt ? image.alt : pageTitle} />
      <Link to={slug} className="title">{pageTitle}</Link>
      {!!date && (
        <p className="date">{moment(date).format('MMM D, YYYY')}</p>
      )}
      {!!teaser && (
        <p>{teaser}</p>
      )}
    </article>
  )
}

export const postPropTypes = {
  count: PropTypes.number.isRequired,
  image: featuredImagePropTypes,
  slug: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Moment),
  teaser: PropTypes.string,
}

PostCard.propTypes = postPropTypes

export default PostCard
