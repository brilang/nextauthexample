import { getCsrfToken } from 'next-auth/client';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';
import Auth from '../../Layouts/auth.js';

export default function Login({ csrfToken }) {
  return (
    <Auth>
      <Col lg='5' md='7'>
        <Card className='bg-secondary shadow border-0'>
          <CardHeader className='bg-transparent pb-5'>
            <div className='text-muted text-center mt-2 mb-3'>
              <small>Sign in with</small>
            </div>
            <div className='btn-wrapper text-center'>
              <Button
                className='btn-neutral btn-icon'
                color='default'
                href='#pablo'
                onClick={(e) => e.preventDefault()}>
                <span className='btn-inner--icon'>
                  <img alt='...' src='../../assets/img/icons/common/google.svg' />
                </span>
                <span className='btn-inner--text'>Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className='px-lg-5 py-lg-5'>
            <div className='text-center text-muted mb-4'>
              <small>Or sign in with email</small>
            </div>
            <Form role='form' method='post' action='/api/auth/signin/email'>
              <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
              <FormGroup className='mb-3'>
                <InputGroup className='input-group-alternative'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <i className='ni ni-email-83' />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder='Email'
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='new-email'
                  />
                </InputGroup>
              </FormGroup>
              <div className='custom-control custom-control-alternative custom-checkbox'>
                <input className='custom-control-input' id=' customCheckLogin' type='checkbox' />
                <label className='custom-control-label' htmlFor=' customCheckLogin'>
                  <span className='text-muted'>Remember me</span>
                </label>
              </div>
              <div className='text-center'>
                <Button className='my-4' color='primary' type='submit'>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className='mt-3'>
          <Col xs='6'>
            <a className='text-light' href='#pablo' onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className='text-right' xs='6'>
            <a className='text-light' href='#pablo' onClick={(e) => e.preventDefault()}>
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </Auth>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
