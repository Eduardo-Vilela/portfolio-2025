import { NAVIGATION } from '@/constants';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 🔥 Detectar ancho de pantalla
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <Navbar key={'lg'} expand={'lg'} className="bg-body-tertiary" fixed="top" style={{height: '8vh'}}>
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bold'>Eduardo Vilela &lt;/&gt;</Navbar.Brand>
        <Navbar.Toggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
        {isMobile ?(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%", scale: 0.8, }}
              animate={{ 
                x: 0, 
                scale: 1, 
                borderRadius: "0px"
              }}
              exit={{ x: "100%", scale: 0.8, }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.5
              }}
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                height: '100vh',
                width: '100%',
                backgroundColor: 'black',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                zIndex: 1001,
                overflow: 'hidden'
              }}
            >
              {/* Header del Offcanvas */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="d-flex justify-content-between align-items-center p-4 border-bottom"
                style={{zIndex: '1'}}
              >
                <div className="d-flex align-items-center">
                  <div 
                    className="text-white d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: 'fit-content',
                      height: '40px',
                      borderRadius: '12px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    Eduardo Vilela  &lt;/&gt;
                  </div>
                  <span className="h5 mb-0 text-dark fw-bold"></span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-close"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    color: 'white'
                  }}
                >
                  ×
                </motion.button>
              </motion.div>

              {/* Contenido del Offcanvas */}
              <div className="p-4 d-flex flex-column gap-5">
                <Nav className="flex-column">
                  {NAVIGATION.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        damping: 20
                      }}
                    >
                      <Nav.Link 
                        href={item.href}
                        className="py-3 px-0 text-white fw-medium"
                        style={{
                          fontSize: '1.1rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#007bff';
                          e.currentTarget.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#333';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        {item.name}
                      </Nav.Link>
                    </motion.div>
                  ))}
                </Nav>

                {/* Botones CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-2 d-flex flex-column gap-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="mb-3"
                  >
                  <Button variant='secondary' href='/EduardoVilela-CV.pdf' download className='py-3'>
                    Descargar CV
                  </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ width: '100%' }}
                  >
                    <SocialLinks />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        ): (
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'lg'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {NAVIGATION.map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.href}
                  className='fw-bold'
                  onClick={e => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const section = document.querySelector(item.href);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
            <Button variant='primary' href='/EduardoVilela-CV.pdf' download>
              Descargar CV
            </Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;