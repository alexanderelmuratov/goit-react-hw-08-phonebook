import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MdClose, MdContactPhone } from 'react-icons/md';
// import { RiDeleteBin2Line } from 'react-icons/ri';
import {
  ContactSetUnit,
  ContactInfo,
  DeleteButton,
  StyledEdiText,
  StyledEdiTextName,
} from './ContactListItem.styled';
import {
  deleteContact,
  changeContactName,
  changeContactNumber,
} from "redux/contacts/contacts-operations";

export const ContactListItem = ({
  contact: { id, name, number },
}) => {
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);
  const dispatch = useDispatch();

  const handleSaveName = id => value => {
    if (value === name) return;
    setNameValue(value);
    dispatch(changeContactName({ id, value }));
  };

  const handleSaveNumber = id => value => {
    if (value === number) return;
    setNumberValue(value);
    dispatch(changeContactNumber({ id, value }));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success(`"${name}" deleted from contacts!`);  
  };

  const validateName = value => {
    const pattern =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return value.trim() !== '' && pattern.test(value);
  };

  const validateNumber = value => {
    const pattern =
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
    return value.trim() !== '' && pattern.test(value);
  };

  const validateNameFailed = () => toast.info('Name may contain only letters, apostrophe, dash and spaces');
  const validateNumberFailed = () => toast.info('Phone number must be digits and can contain spaces, dashes, parentheses and can start with +');

  return (
    <ContactSetUnit>
      <MdContactPhone style={{ width: 48, height: 48, marginRight: '10px' }} />
      <ContactInfo>
        <StyledEdiTextName
          type="text"
          value={nameValue}
          onSave={handleSaveName(id)}
          showButtonsOnHover
          cancelOnUnfocus
          submitOnEnter
          cancelOnEscape
          validation={validateName}
          onValidationFail={validateNameFailed}
        />
        <StyledEdiText
          type="tel"
          value={numberValue}
          onSave={handleSaveNumber(id)}
          showButtonsOnHover
          cancelOnUnfocus
          submitOnEnter
          cancelOnEscape
          validation={validateNumber}
          onValidationFail={validateNumberFailed}
        />
      </ContactInfo>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        <MdClose style={{ width: 40, height: 40 }} />
      </DeleteButton>
    </ContactSetUnit>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};


// ==========================================
// import PropTypes from 'prop-types';
// import { useDispatch } from "react-redux";
// import toast from 'react-hot-toast';
// import { MdContactPhone } from 'react-icons/md';
// import {
//   ContactSetUnit,
//   ContactInfo,
//   DeleteButton,
// } from './ContactListItem.styled';
// import { deleteContact } from "redux/contacts/contacts-operations";

// export const ContactListItem = ({
//   contact: { id, name, number },
// }) => {
//   const dispatch = useDispatch();
//   const onDeleteContact = id => {
//     dispatch(deleteContact(id));
//     toast.success(`"${name}" deleted from contacts!`);  
//   };

//   return (
//     <ContactSetUnit>
//       <MdContactPhone style={{ width: 25, height: 25, marginRight: '10px' }} />
//       <ContactInfo>
//         <b>{name}:</b> {number}
//       </ContactInfo>
//       <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
//         Delete
//       </DeleteButton>
//     </ContactSetUnit>
//   );
// }

// ContactListItem.propTypes = {
//   contact: PropTypes.objectOf(PropTypes.string.isRequired),
// };