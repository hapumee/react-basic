import React, { Suspense, lazy } from 'react';
import * as CodeSplittingMath from '../CodeSplittingMath';

class OtherComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>OtherComponent : </h3>
                <p style={{margin: "30px"}}>add(180, 296) = {CodeSplittingMath.add(180, 296)}</p>
            </div>
        );
    }
}

export default OtherComponent;