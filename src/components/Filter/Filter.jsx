import { useSelector, useDispatch } from "react-redux";
import { MdPerson } from 'react-icons/md';
import { FilterLabel, SearchInput } from './Filter.styled';
import { getFilter } from "redux/contacts/contacts-selectors";
import { filterContact } from 'redux/contacts/contacts-actions';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(filterContact(event.target.value));

  return (
    <FilterLabel>
      <MdPerson style={{ width: 23, height: 23, marginRight: '5px' }} />
      Find contact by name
      <SearchInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
      />
    </FilterLabel>
  );
};
