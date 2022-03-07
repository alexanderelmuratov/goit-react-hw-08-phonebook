import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { MdContactPhone } from 'react-icons/md';
import {
  ContactSetUnit,
  ContactInfo,
  DeleteButton,
} from './ContactListItem.styled';
import { deleteContact } from "redux/contacts/contacts-operations";

export const ContactListItem = ({
  contact: { id, name, number },
}) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success(`"${name}" deleted from contacts!`);  
  };

  return (
    <ContactSetUnit>
      <MdContactPhone style={{ width: 25, height: 25, marginRight: '10px' }} />
      <ContactInfo>
        <b>{name}:</b> {number}
      </ContactInfo>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </ContactSetUnit>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};
