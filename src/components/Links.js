import React from 'react';

const Links = () => {
    const links = ['Home', 'About', 'Contact', 'Blog', 'Careers', 'Support', 'Private Policy'];

    return (
        <ul className="links">
            {links.map((link, i) => ( //take links array and map each one
                <li className="link" key={i}>
                    <a href='#'>
                        {link}
                        {i === 1 && <span> Us</span>}
                    </a>
                </li> //mapping each link item to be a <li> tag(everything mapped needs a key)
            ))}
        </ul>
    )
}

export default Links;