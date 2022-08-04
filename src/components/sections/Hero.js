import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
//import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/BiggerLogoSplash.svg')}
                alt="Hero"
                width={896}
                height={600} />

          </div>
            <h1 className="bigtext mt-0 mb-16 reveal-from-bottom" class="bigtext" data-reveal-delay="200">
              Coming Soon in <span className="text-color-primary">Late 2022</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom bigtext" data-reveal-delay="400">
                Join our waitlist for updates.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="400">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/contact">
                    Get Updates
                    </Button>
                  
                </ButtonGroup>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;