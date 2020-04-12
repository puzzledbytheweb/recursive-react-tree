import PropTypes from "prop-types";

const LevelItemInterface = PropTypes.shape({
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
});

// Recursive type where children will be an array of identical objects
export const LevelInterface = PropTypes.shape({
  name: PropTypes.string.isRequired,
  // ID should be unique, use
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(LevelItemInterface),
  children: PropTypes.arrayOf(PropTypes.shape(this)),
});