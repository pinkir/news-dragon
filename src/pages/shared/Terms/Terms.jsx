import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ab nesciunt commodi vitae at nobis repudiandae ex unde officia ipsum facere error aliquam magni necessitatibus placeat magnam tempore aut quasi saepe, vero quidem possimus iste. Non sed corporis porro, omnis dolor eaque, maxime ipsam quidem laborum ex at magni asperiores.</p>
            <p>go back to <Link to ='/register'>register</Link></p>
        </div>
    );
};

export default Terms;