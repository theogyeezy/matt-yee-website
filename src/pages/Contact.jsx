import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #0a0a0a;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Orbitron', monospace;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #cccccc;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled(motion.div)`
  background: #111111;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #222222;
  text-align: center;
`;

const ContactMethod = styled.h2`
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ContactLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #764ba2;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid #667eea;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

const FormSection = styled(motion.div)`
  background: #111111;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #222222;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: #0a0a0a;
  border: 1px solid #333333;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const Textarea = styled.textarea`
  background: #0a0a0a;
  border: 1px solid #333333;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid #4caf50;
  color: #4caf50;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Matt Yee</title>
        <meta name="description" content="Get in touch with Matt Yee. Let's discuss technology, startups, or your next big idea." />
        <meta property="og:title" content="Contact Matt Yee" />
        <meta property="og:description" content="Connect with Matt Yee for collaborations, speaking engagements, or just to say hello." />
      </Helmet>

      <ContactContainer>
        <Container>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </Title>
          
          <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind? Want to collaborate? Or just want to talk baseball? 
            Drop me a line!
          </Subtitle>

          <ContactGrid>
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactMethod>Email</ContactMethod>
              <ContactLink href="mailto:matt.sam.yee@gmail.com">
                matt.sam.yee@gmail.com
              </ContactLink>
            </ContactCard>
          </ContactGrid>

          <FormSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
              Send a Message
            </h2>
            
            {showSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks for reaching out! I'll get back to you soon.
              </SuccessMessage>
            )}
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </Form>
          </FormSection>

          <SocialLinks>
            <SocialLink
              href="https://linkedin.com/in/mattyee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              in
            </SocialLink>
            <SocialLink
              href="https://twitter.com/mattyee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              𝕏
            </SocialLink>
            <SocialLink
              href="https://github.com/mattyee"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              gh
            </SocialLink>
          </SocialLinks>
        </Container>
      </ContactContainer>
    </>
  );
};

export default Contact;