const ContactMe = () => {
  return (
    <ul className="footer-link-list">
      <li>
        <a
          target="en_blank"
          className="footer-link"
          href="https://www.linkedin.com/in/luz-edith-tobar-87818077/"
        >
          <ion-icon className="footer-icon" name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li>
        <a
          className="footer-link"
          target="en_blank"
          href="https://github.com/lizth93"
        >
          <ion-icon className="footer-icon" name="logo-github"></ion-icon>
        </a>
      </li>

      <li>
        <a
          target="en_blank"
          className="footer-link"
          href="https://api.whatsapp.com/send?phone=573137036415"
        >
          <ion-icon className="footer-icon" name="logo-whatsapp"></ion-icon>
        </a>
      </li>

      <li>
        <a
          className="footer-link"
          target="en_blank"
          href="mailto:lizth93@hotmail.com"
        >
          <ion-icon className="footer-icon" name="mail-outline"></ion-icon>
        </a>
      </li>
    </ul>
  );
};

export default ContactMe;
