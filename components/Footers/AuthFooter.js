import React from 'react';
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

function AuthFooter() {
  return (
    <>
      <footer className='py-5'>
        <Container>
          <Row className='align-items-center justify-content-xl-between'>
            <Col xl='6'>
              <div className='copyright text-center text-xl-left text-muted'>
                © {new Date().getFullYear()}{' '}
                <a
                  className='font-weight-bold ml-1'
                  href='https://brilang.com?ref=njsad-auth-footer'
                  target='_blank'>
                  Brian Lang
                </a>
              </div>
            </Col>
            <Col xl='6'>
              <Nav className='nav-footer justify-content-center justify-content-xl-end'>
                <NavItem>
                  <NavLink href='https://www.brilang.com?ref=njsad-auth-footer' target='_blank'>
                    Brian Lang
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href='https://www.about.me/brilang?ref=njsad-auth-footer'
                    target='_blank'>
                    About Me
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
