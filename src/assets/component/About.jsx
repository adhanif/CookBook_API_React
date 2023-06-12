import React from 'react'
import './SocialMediaIcons.css';
import './../../App.css' 

import { Container,Image, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function About() {
    return (
        <Container fluid className='AboutContainer  p-5 mt-5'>
      <Row>
        <Col md={6} className='About'>
          <Image src="https://myfoodbook.com.au/sites/all/themes/custom/mfb/images/mfb-logo-sml.png" className='logo' rounded />
          <h4 className='pb-3'>More about myfoodbook</h4>
          <p className='pb-3'>
            myfoodbook is a recipe and cookbook site where for the first time in Australia you can create your own personalised digital cookbooks using recipes from top food brands and chefs, combined with your own ideas. Learn more about what makes us different from other recipe sites and cookbook products here.
            Check out some easy home recipes and get cooking.
          </p>
        </Col>
        <Col md={6}>
          <div className='mt-5'>
            <h4 className='TitleCol2 pb-3'>Sign up for the latest recipes and news</h4>
          </div>
          <Row>
            <Col className=' SignUp col-9 col-md-9'>
              <InputGroup className="mb-3">
                <FormControl className='InputGroup' placeholder="Enter your email" />
                <Button variant="secondary" className='SubsBtn'>Subscribe</Button>
              </InputGroup>
            </Col>
            <Col className='col-10 mt-3 mt-md-0'>
              <div className='social-icons'>
                <FaFacebookF className="facebook-icon" size={30} />
                <FaTwitter className="twitter-icon" size={30} />
                <FaInstagram className="instagram-icon" size={30} />
                <FaYoutube className="youtube-icon" size={30} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      );
    }
