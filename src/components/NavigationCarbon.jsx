import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react';
import { User, Help } from '@carbon/icons-react';

const NavigationCarbon = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Matt Yee Portfolio">
          <SkipToContent />
          <HeaderName href="#" prefix="">
            Matt Yee
          </HeaderName>
          <HeaderNavigation aria-label="Main Navigation">
            <HeaderMenuItem onClick={() => scrollToSection('hero')}>
              Home
            </HeaderMenuItem>
            <HeaderMenuItem onClick={() => scrollToSection('about')}>
              About
            </HeaderMenuItem>
            <HeaderMenuItem onClick={() => scrollToSection('consulting')}>
              Consulting
            </HeaderMenuItem>
            <HeaderMenuItem onClick={() => scrollToSection('blog')}>
              Blog
            </HeaderMenuItem>
            <HeaderMenuItem onClick={() => scrollToSection('contact')}>
              Contact
            </HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Contact"
              tooltipAlignment="end"
              onClick={() => scrollToSection('contact')}
            >
              <User size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default NavigationCarbon;