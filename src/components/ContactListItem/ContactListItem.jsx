import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
// import EdiText from 'react-editext'
import toast from 'react-hot-toast';
import { MdContactPhone } from 'react-icons/md';
import {
  ContactSetUnit,
  ContactInfo,
  // ContactName,
  // ContactNumber,
  DeleteButton,
  StyledEdiText,
} from './ContactListItem.styled';
import {
  deleteContact,
  changeContactName,
  changeContactNumber
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

  return (
    <ContactSetUnit>
      <MdContactPhone style={{ width: 48, height: 48, marginRight: '10px' }} />
      <ContactInfo>        
        {/* <b>{name}:</b> {number} */}
        {/* <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber> */}
        <b>
          <StyledEdiText
          type="text"
          value={nameValue}
          onSave={handleSaveName(id)}
          showButtonsOnHover
          />
        </b>
        <StyledEdiText
          type="tel"
          value={numberValue}
          onSave={handleSaveNumber(id)}
          showButtonsOnHover
            />
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