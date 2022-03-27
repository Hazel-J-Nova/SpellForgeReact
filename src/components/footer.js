const Footer = (props) => {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <Modal show={email} title="Email Me" close={ToggleEmail}>
        <UserForm info={emailForm} title="Email Me"></UserForm>
      </Modal>
    </footer>
  );
};
