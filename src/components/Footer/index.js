// Import React
import React from 'react';

// render Footer
function Footer() {
    // add array of links and accompanying icons for spaces where I can be contacted
    const socials = [
        {
            name: 'fa fa-github',
            link: 'https://github.com/SterlynKong'
        },
        {
            name: 'fa fa-linkedin',
            link: 'https://www.linkedin.com/in/sterlyn-kong'
        },
        {
            name: 'fa fa-envelope',
            link: '<a href="mailto:sterlyn.kong@icloud.com">'
        }
    ]

    // map socials array and place in footer
    return (
        <footer className='flex-row px-1'>
            {socials.map(socialConnection => (
                <a href={socialConnection.link} key={socialConnection.name} target='_blank' rel='noopener noreferrer'><i className={socialConnection.name}></i></a>
            )
            )}
        </footer>
    );
};

export default Footer;