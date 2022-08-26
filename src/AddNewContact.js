
function AddNewContact({newContact, handleSubmit, handleChange}) {
    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <input 
                className='input'
                autoFocus
                type='text' 
                name='name' 
                value={newContact.name} 
                onChange={handleChange} 
                placeholder='enter name'
            />
            <input 
                className='input'
                type='text' 
                name='email' 
                value={newContact.email} 
                onChange={handleChange} 
                placeholder='enter email'
            />
            <button id="addButton">+ contact</button>
        </form>
    )
};

export default AddNewContact;