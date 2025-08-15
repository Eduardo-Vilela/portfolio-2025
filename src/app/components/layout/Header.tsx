'use client';

import { useState, useRef, useEffect } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { NAVIGATION } from '@/constants';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isResized, setIsResized] = useState(false);

  // Usar motion para detectar scroll
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setIsResized(true);
    } else {
      setIsResized(false);
    }
  });

  return (
    <header
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        width: '100%'
      }}
    >
      <motion.div
        animate={{
          backdropFilter: isResized ? "blur(10px)" : "none",
          boxShadow: isResized
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: isResized ? "70%" : "100%",
          paddingRight: isResized ? "12px" : "0px",
          paddingLeft: isResized ? "12px" : "0px",
          borderRadius: isResized ? "2rem" : "0px",
          y: isResized ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          position: 'relative',
          zIndex: 50,
          margin: '0 auto',
          display: 'flex',
          width: '100%',
          maxWidth: 'calc(100vw - 2rem)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          // backgroundColor: isResized ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          padding: '0.5rem 0',
        }}
      >
        <Navbar 
          expand="lg" 
          className="w-100"
          style={{ background: 'transparent' }}
        >
          <Container fluid className="px-0">
            <Navbar.Brand href="/" className="text-2xl font-bold text-dark">
              Portfolio
            </Navbar.Brand>
            
            {/* Desktop Navigation - Centrada */}
            <motion.nav 
              className="d-none d-lg-flex flex-row align-items-center justify-content-center"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                gap: '2rem'
              }}
            >
              {NAVIGATION.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-dark text-decoration-none fw-medium"
                  style={{
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    color: '#007bff'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="position-absolute bottom-0 left-0 bg-primary"
                    style={{
                      height: '2px',
                      width: '0%',
                      borderRadius: '1px'
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.nav>

            {/* Desktop CTA Button */}
            <motion.div className="d-none d-lg-block">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline-dark px-4 py-2"
                style={{
                  borderRadius: '12px',
                  borderWidth: '2px',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}
              >
                Contactar
              </motion.button>
            </motion.div>
            
            {/* Mobile Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-toggler border-0 p-2 d-lg-none"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="d-block bg-dark"
                  style={{
                    width: '24px',
                    height: '2px',
                    marginBottom: '4px',
                    transition: 'all 0.3s ease'
                  }}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="d-block bg-dark"
                  style={{
                    width: '24px',
                    height: '2px',
                    marginBottom: '4px',
                    transition: 'all 0.3s ease'
                  }}
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="d-block bg-dark"
                  style={{
                    width: '24px',
                    height: '2px',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </motion.button>
          </Container>
        </Navbar>
      </motion.div>

      {/* Overlay con Blur */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ 
              opacity: 1, 
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)"
            }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Offcanvas Moderno */}
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
              position: 'fixed',
              right: 0,
              top: 0,
              height: '100vh',
              width: '100%',
              backgroundColor: 'white',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 50,
              overflow: 'hidden'
            }}
          >
            {/* Header del Offcanvas */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="d-flex justify-content-between align-items-center p-4 border-bottom"
            >
              <div className="d-flex align-items-center">
                <div 
                  className="bg-dark text-white d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    fontSize: '20px',
                    fontWeight: 'bold'
                  }}
                >
                  P
                </div>
                <span className="h5 mb-0 text-dark fw-bold">Portfolio</span>
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
                  color: '#333'
                }}
              >
                ×
              </motion.button>
            </motion.div>

            {/* Contenido del Offcanvas */}
            <div className="p-4">
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
                      className="py-3 px-0 text-dark fw-medium"
                      style={{
                        fontSize: '1.1rem',
                        borderBottom: '1px solid #f0f0f0',
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
                className="mt-5"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mb-3"
                >
                  <Button 
                    variant="outline-dark" 
                    className="w-100 py-3"
                    style={{
                      borderRadius: '12px',
                      borderWidth: '2px',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    Acceso
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline-dark" 
                    className="w-100 py-3"
                    style={{
                      borderRadius: '12px',
                      borderWidth: '2px',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    Reservar una llamada
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};