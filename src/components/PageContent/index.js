// Import React
import React from 'react';

// render PageContent passing in the children
const PageContent = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default PageContent;