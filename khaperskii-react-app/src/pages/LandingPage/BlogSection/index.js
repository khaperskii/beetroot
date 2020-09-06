import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Title from '../Title';
import BlogsCard from './BlogsCard';
import blog1 from '../../../assets/images/blog/blog1.png';
import blog2 from '../../../assets/images/blog/blog2.png';

import './styles.scss';

export default function BlogSection() {
  return (
    <section className="blog" id="blog">
      <ContentWidthLimiter>
        <div className="blog__content-container">
          <Title
            title="Recent Blog Posts"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet"
          />
          <BlogsCard
            image={blog1}
            date="18 oct"
            title="Startup ideas needs to be funded"
            subtitle="By Khalil Uddin in Development"
            news="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat,
             sed diam voluptua. At vero eos et accusam et justo duo dolores et
             erebum. Stet clita kasd gubergren, no sea takimata sanctus est
             Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur
             sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et
             dolore aliquyam erat, sed diam "
          />
          <div className="blog__line"> </div>
          <BlogsCard
            image={blog2}
            date="20 oct"
            title="User interface designing element"
            subtitle="By Khalil Uddin in Development"
            news="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat,
             sed diam voluptua. At vero eos et accusam et justo duo dolores et
             erebum. Stet clita kasd gubergren, no sea takimata sanctus est
             Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur
             sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et
             dolore aliquyam erat, sed diam "
          />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
