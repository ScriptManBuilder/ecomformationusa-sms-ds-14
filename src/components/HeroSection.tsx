import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.eformcallcenter.com';

  const handleRequestDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSpeakToSales = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Reduce Revenue Loss from Declined Payments
        </HeroTitle>
        <HeroDescription>
          We recover a portion of your failed transactions with an automated decline-salvage engine. Merchants typically recover <strong style={{color: '#34d399', fontSize: '1.2em'}}>8–15%</strong> of declined revenue—<strong>automatically</strong>, <strong>securely</strong>, and <strong>without manual intervention</strong>.
        </HeroDescription>
        <Tagline>We specialize in serving merchants who acquire customers through <strong style={{color: '#34d399'}}>SMS marketing campaigns</strong>. Our decline recovery technology is optimized for businesses using text-based acquisition, mobile commerce, and SMS-driven billing flows.</Tagline>
        <CTAButtonGroup>
          {/* <CTAButtonPrimary onClick={handleRequestDemo}>
            Request a Demo
          </CTAButtonPrimary> */}
          <CTAButtonSecondary onClick={handleSpeakToSales}>
            Schedule a Call
          </CTAButtonSecondary>
        </CTAButtonGroup>
        <Highlight>We serve only SMS clients.</Highlight>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
