const Footer = ({ simpleFooter = false }) => {
  return (
    <div
      className={`bg-white ${simpleFooter && "fixed-bottom "}`}
      style={{ maxWidth: "100vw", minHeight: "10vh" }}
    >
      <footer className="py-5">
        {!simpleFooter && (
          <div className="container">
            <div className="row gap-4">
              <div className="col-6 col-md-2 mb-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Τρόποι Παραγγελίας
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Τρόποι Αποστολής
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Επιστροφές & αλλαγές
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Τρόποι Πληρωμής
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Προστασία Δεδομένων
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Όροι Χρήσης
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Ρυθμίσεις & Πολιτική
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Η Εταιρεία
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Club 9
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Καταστήματα
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Συχνές Ερωτήσεις
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Newsletter Sign Up
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Εταιρική Πολιτική
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-2 mb-3">
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Επικοινωνία
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Συνεργάτες
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Κεντρικά Γραφεία
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Θέσεις Εργασίας
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div
          className={`d-flex flex-column flex-sm-row justify-content-between ${
            !simpleFooter && " pt-4 mt-4 border-top"
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col">© 2022 All rights reserved.</div>
              <div className="col">Designed & Developed by Sleed</div>
              <div className="col">Terms of Use | Privacy Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
