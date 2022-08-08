import React from "react";
import ContactList from "./ContactList";
import EditContacts from "./EditContacts";
import Footer from "./Footer";
import Header from "./Header";

function App() {

  const [contacts, setContacts]= React.useState([]);
  const [newContact, setNewContact]= React.useState({id:'', name:'', email:''});

  // loading contacts to state
  React.useEffect(()=> {
    setContacts(JSON.parse(localStorage.getItem('ContactDb')))
  }, []);

  const handleChange= (event)=> {
    const {name, value}= event.target;
    const newId= contacts.length ? contacts[contacts.length -1].id +1 : 1;
    setNewContact(prevState=> ({...prevState, id: newId, [name]: value}))
  };

  //email address validator regex
  const emailRegex= /^\d|\w{1,1}[\d|\w|-]{1,20}@[-|\d|\w|.]{2,20}\.\w{2,3}$/gi;

  // name validator
  const validName= (str)=> {
    return str.trim()
              .split(' ')
              .filter(e=> e.length> 0)
              .join(' ')
  }

  //validating the new contact data and adding new contact to the list (contacts)
  const handleSubmit= (event)=> {
    event.preventDefault();

    if(!newContact.name || !newContact.email) {
      return alert('missing name or email!')
    };
    if(!newContact.email.match(emailRegex)) {
      return alert('invalid email');
    };
    setNewContact(prevState=> ({ ...prevState, name: validName(prevState.name) }))
    
    const updatedContactList=[...contacts, newContact];
    localStorage.setItem('ContactDb', JSON.stringify(updatedContactList));
    setContacts(JSON.parse(localStorage.getItem('ContactDb')));
    setNewContact({id:'', name:'', email:''});
  };

  // deleting contact from db, updating state
  const handleDelete= (id)=> {
    const updatedContactList= contacts.filter((item)=> item.id !==id);
    localStorage.setItem('ContactDb', JSON.stringify(updatedContactList));
    setContacts(JSON.parse(localStorage.getItem('ContactDb')));
  };

  return (
    <>
      <Header />
      <main>
          <EditContacts 
            newContact={newContact} 
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
          />
          {contacts.length ? (
            <ContactList 
              contacts={contacts} 
              handleDelete={handleDelete}
            />
          ) : (
            <p className='emptyList'>Contactlist is empty</p>
          )}
      </main>
      <Footer />
    </>
  )
};

export default App; 