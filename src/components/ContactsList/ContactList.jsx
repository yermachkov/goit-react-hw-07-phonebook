import { Box } from 'components/Box/Box';
import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = filter
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
    : contacts;

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width={450}
          >
            <ContactItem contact={contact} />
          </Box>
        </li>
      ))}
    </List>
  );
};
