function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div className="footer-logo">OneStop</div>
        <div className="product-section">
          <div className="product-h">Product</div>
          <div className="product-links">
            <a href="#">Overview</a>
            <a href="#">Policy</a>
            <a href="#">Products</a>
            <a href="#">Shipping</a>
          </div>
        </div>
        <div className="company-section">
          <div className="company-h">Company</div>
          <div className="company-links">
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="connect-section">
          <div className="connect-h">Connect</div>
          <div className="connect-links">
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="attribution">
        Developed by <a href="https://github.com/Lspacedev">Lspacedev</a>
      </div>
    </footer>
  );
}

export default Footer;
