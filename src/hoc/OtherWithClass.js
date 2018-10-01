import React, {Component} from 'react';

// const otherWithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     );
// };

const otherWithClass = (WrappedComponent, className) => {
    const OtherWithClass = class extends Component {
        render(){
            return(
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} 
                                          {...this.props} />
                </div>
            );
        }
    } 

    return React.forwardRef((props, ref) => {
        return <OtherWithClass {...props} forwardedRef={ref} />
    });
};



export default otherWithClass;