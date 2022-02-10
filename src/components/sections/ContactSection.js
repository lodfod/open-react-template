import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';



const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const GenericSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
    
      <div className="container">
        <div className={innerClasses}>
        
          {children}
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/BiggerLogoSplash.svg')}
                alt="Hero"
                width={448}
                height={300} />

          </div>
          
          <h1 className="bigtext mt-0 mb-16 reveal-from-bottom" class="bigtext" data-reveal-delay="200">
              Get <span className="text-color-primary">Updates</span></h1>
            
              <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom bigtext" data-reveal-delay="400">
                UpSide is changing the way secondary equity is exchanged. Join our e-list to get updates!
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                
              </div>
            </div>
            
          <iframe className="mt-0 mb-16 reveal-from-bottom" title="form" src="https://docs.google.com/forms/d/e/1FAIpQLScDqcLPmQAxWRc2aD6mI8RFZxtoN0PTYgAg3gGfM3B0vVtHJQ/viewform?embedded=true" width="80%" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          
        </div>
      </div>
    </section>
  );
}

GenericSection.propTypes = propTypes;
GenericSection.defaultProps = defaultProps;

export default GenericSection;