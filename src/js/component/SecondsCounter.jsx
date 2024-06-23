import React from 'react';
import PropTypes from 'prop-types';

const SecondsCounter = (props) => {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    digitFour: PropTypes.number.isRequired,
    digitThree: PropTypes.number.isRequired,
    digitTwo: PropTypes.number.isRequired,
    digitOne: PropTypes.number.isRequired
};

export default SecondsCounter;
