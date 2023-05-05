import { Wrapper } from './Contact.styled';
import { Button } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <Wrapper>
      <p>
        {name} : {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Wrapper>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
