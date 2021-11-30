import PropTypes from 'prop-types';

export const ToolHeader = (props) => {

    return (
        <header>
            <h1>{props.headerText}</h1>
        </header>
    );
};

//default props are react specific thing and not js
ToolHeader.defaultProps = {
    headerText: "The Tool",
}

ToolHeader.propTypes = {
    headerText: PropTypes.string.isRequired,
}