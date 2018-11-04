import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="card-footer fixed-bottom bg-dark text-center">
            <div>
                <a href="https://github.com/Harrison97" className="text-white"><FontAwesomeIcon icon={['fab', 'github-alt']} /></a>
            </div>

        </footer>
    );
};

export default Footer;
