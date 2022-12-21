import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { Link } from 'gatsby'
import TitleBanner from 'components/banners/TitleBanner/TitleBanner'
import Section from 'components/containers/Section/Section'
import Button from 'components/Button/Button'
import LatestPosts from 'components/post/LatestPosts/LatestPosts'
import { blogsingle } from './WpPostTemplate.module.scss'

const WpPostTemplate = ( { title, date, content } ) => {

	return (
		<>
			<article>
				<TitleBanner
					title={ title }
					date={ date }
				/>
				<Section>
					<div className={ blogsingle }>
						{ content && (
							<div className="blogsingle_content">
								<div className="blogsingle_back">
									{ parse( content ) }

									<Link
										to="/blog"
									>
										<Button text="Back to Blog" />
									</Link>
								</div>
							</div>
						) }
					</div>
				</Section>
			</article>
			<LatestPosts title="Further reading from the blog" />
		</>
	)
}

WpPostTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	content: PropTypes.string.isRequired,
	featuredImage: PropTypes.object.isRequired
}

export default WpPostTemplate