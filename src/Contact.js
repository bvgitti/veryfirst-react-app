
function Contact(props) {

    const {id, name, email}= props.cont;

    return (
        <div className='contact' style={{ backgroundColor: id%2===1 ? 'lightgray' : 'white'}}>
            <p className='contactText'>contact name:</p>
            <h3 className='contactName'>{name}</h3>
            <p className='contactText'>contact email:</p>
            <p id='contactMail'>{email}</p>
            <button id='delButton' onClick={()=> props.handleDelete(id)}>Delete</button>
            <hr/>
        </div>
    )
};

export default Contact;