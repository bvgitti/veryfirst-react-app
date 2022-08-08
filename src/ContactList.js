import Contact from './Contact';

function ContactList({contacts, handleDelete}) {

    const contList = contacts.map((item)=> {
        return (
          <Contact key={item.id} cont={item} handleDelete={handleDelete}/>
        )
      });

    return (
        <>
            {contList}
        </>
    )
};

export default ContactList;