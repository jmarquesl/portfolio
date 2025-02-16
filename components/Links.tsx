import NavLink from "./NavLink"
import React from 'react';

const Links = () => {
    return (
        <>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/aboutMe">Sobre Mí</NavLink>
            <NavLink href="/contact">Contacto</NavLink>
        </>
    );
}

export default Links;