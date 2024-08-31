import React from 'react';
import '../style/Header.css';
import { Link, useParams } from 'react-router-dom';

export default function Header() {
    const { id } = useParams();

    return (
        <>
            <div className="header">
                <Link to="/">galleria.</Link> {/* Updated to valid path */}
                {id ? (
                    <span>STOP SLIDESHOW</span>
                ) : (
                    <span>START SLIDESHOW</span>
                )}
            </div>
            <div className="hr"></div>
        </>
    );
}
