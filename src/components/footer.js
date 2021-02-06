// import logo from './logo.svg';
import './footer.css';

function Footer() {
  return (
<>
<footer className="bg-light text-center text-lg-start mt-5 ">
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2021 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/"> AcademyCo.com</a>
  </div>
  {/* Copyright */}
</footer>

</>

  );
}

export default Footer;