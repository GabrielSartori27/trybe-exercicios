import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="myPokemon">
                <p> { data.name } </p>
                <p> { data.type } </p>
                <p> Average weight: { data.averageWeight.value }{ data.averageWeight.measurementUnit } </p>
                <img src={ data.image } alt={ data.name } />
            </div>
            
        )
    }
}

Pokemon.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
}

export default Pokemon;
