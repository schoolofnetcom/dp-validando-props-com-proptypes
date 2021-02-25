import React from 'react';
import PropTypes from 'prop-types';

// export default class ComponentReact extends React.Component {
//     static defaultProps = {
//         name: 'Leonan'
//     };
//     constructor(props) {
//         super(props)
//     }

//     render(){
//         return (
//             <div>Hello {this.props.name}</div>
//         );
//     }
// }

export default function ComponentReact(props) {
    return (
        <div>Hello {props.name}</div>
    );
}
ComponentReact.propTypes = {
    name: PropTypes.oneOf(['Leonan', 'Wesley', 'Luiz']).isRequired
};