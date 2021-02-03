// Import React
import React from 'react';

// Import PageContent
import PageContent from '../../components/PageContent';

// Import AboutMe Component
import AboutMe from '../../components/AboutMe';

//Import Portfolio Component
import Portfolio from '../../components/Portfolio';

// Import Contact Component
import Contact from '../../components/Contact';

// Import Resume Component
import Resume from '../../components/Resume';

// render content for current page SPA BABY!!!
function Page({ currentPage }) {
    const renderPageContent = () => {
        switch (currentPage.name) {
            case 'about me':
                return <AboutMe />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <AboutMe />;
        }
    };

    return (
        <section>
            <h2>{currentPage.name}</h2>
            <PageContent>
                {renderPageContent}
            </PageContent>
        </section>
    );
};

export default Page;