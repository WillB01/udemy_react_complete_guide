import React, {Component} from 'react';

// const otherWithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

const otherWithClass = (WrappedComponent, className) => {
    return class extends Component {
        render(){
            return(
                <div className={className}>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    } 
};



export default otherWithClass;