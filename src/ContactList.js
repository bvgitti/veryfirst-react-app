import Contact from './Contact';

function ContactList({contacts, handleDelete}) {

  const contList = contacts.map((item)=> {
    return (
      <Contact key={item.id} cont={item} handleDelete={handleDelete}/>
    )
  });

  return (
    <div className='contactList'>
      {contList}
    </div>
  )
};

export default ContactList;