
function Footer() {

    const year= new Date();

    return (

        <footer className='footer'>
            <p>Contact-list: Copyright &copy; {year.getFullYear()}</p>
        </footer>
    )
};

export default Footer;