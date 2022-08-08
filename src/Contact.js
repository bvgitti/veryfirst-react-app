
function Contact(props) {

    const {id, name, email}= props.cont;

    return (
        <div className='contact' style={{ backgroundColor: id%2===1 ? 'lightgray' : 'white'}}>
            <p>contact name:</p>
            <h3 className='contactName'>{name}</h3>
            <p>contact email: {email}</p>
            <button id='delButton' onClick={()=> props.handleDelete(id)}>Delete</button>
            <hr/>
        </div>
    )
};

export default Contact;