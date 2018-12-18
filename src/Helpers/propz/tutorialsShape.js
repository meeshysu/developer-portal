import PropTypes from 'prop-types';

const tutorialsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default tutorialsShape;
