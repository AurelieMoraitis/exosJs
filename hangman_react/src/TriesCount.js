import PropTypes from 'prop-types';
import React from 'react';

import './TriesCount.css';

//destructure la prop
const TriesCount = ({tries}) => <div className="tries">{tries}</div>


TriesCount.propTypes ={
    tries: PropTypes.number.isRequired, //condition sur la prop tries
}

export default TriesCount