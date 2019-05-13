import React from 'react';
import * as CodeSplittingMath from '../C2_CodeSplittingMath';

class AnotherComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>AnotherComponent : </h3>
                <p style={{margin: "30px"}}>add(16, 26) = {CodeSplittingMath.add(16, 26)}</p>
            </div>
        );
    }
}

export default AnotherComponent;