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
              Connecting startup employess with <span className="text-color-primary">liquidity!</span>
            </h1>
            <div className="container-xs">

            <h3><span className="text-color-primary">Employees:</span></h3>

            <ol style={{ listStyleType: 'lower-alpha' }}>
            <li>Identify how much investors are willing to pay for your stocks</li>
            <li>Get interest in your stocks</li>
            <li>Directly onnect with investors and craft a deal</li>
            <li>Access liquidty!</li>
          </ol>
            
              <div className="reveal-from-bottom" data-reveal-delay="400">
              <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://app.upsideapp.io/">
                    Get Started
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