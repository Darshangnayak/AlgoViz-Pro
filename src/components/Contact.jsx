import React from 'react';
import styled, { keyframes } from 'styled-components';

const primaryBlue = '#2196F3'; // Main brand blue
const darkerBlue = '#1976D2'; // Darker shade for gradients
const lighterBlue = '#64B5F6'; // Lighter shade for accents
const accentYellow = '#FFC107'; // Accent color for highlights
const backgroundLight = '#E3F2FD'; // Very light blue for main background
const backgroundCard = '#FFFFFF'; // Pure white for card backgrounds
const textDark = '#263238'; // Very dark grey/blue for main text
const textMedium = '#455A64'; // Medium grey/blue for descriptions
const textLight = '#78909C'; // Light grey/blue for secondary info
const borderColor = '#BBDEFB'; // Light blue for borders
const errorColor = '#F44336'; // Standard red for error/coming soon

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: ${backgroundLight};
  animation: ${fadeIn} 1s ease-in;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${primaryBlue};
  text-align: center;
  margin-bottom: 2.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  background: ${backgroundCard};
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-in;
  border: 1px solid ${borderColor};
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.8rem;
  color: ${textDark};
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${borderColor};
  border-radius: 10px;
  font-size: 1.1rem;
  &:focus {
    outline: none;
    border-color: ${primaryBlue};
    box-shadow: 0 0 0 4px ${lighterBlue}80; /* Lighter blue with 50% opacity */
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${borderColor};
  border-radius: 10px;
  font-size: 1.1rem;
  resize: vertical;
  min-height: 120px;
  &:focus {
    outline: none;
    border-color: ${primaryBlue};
    box-shadow: 0 0 0 4px ${lighterBlue}80; /* Lighter blue with 50% opacity */
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(to right, ${primaryBlue}, ${darkerBlue});
  color: white;
  border: none;
  padding: 1.1rem 2.2rem;
  font-size: 1.15rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease;
  font-weight: bold;
  width: 100%; /* Make button full width */

  &:hover {
    background: linear-gradient(to right, ${darkerBlue}, ${primaryBlue});
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We appreciate your message and will get back to you as soon as possible.');
    // In a real application, you'd send this data to a backend.
  };

  return (
    <ContactSection>
      <SectionTitle>We'd Love to Hear From You!</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Your Name</Label>
          <Input type="text" id="name" name="name" required placeholder="e.g., Jane Doe" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Your Email Address</Label>
          <Input type="email" id="email" name="email" required placeholder="e.g., jane.doe@example.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" name="subject" required placeholder="What is your message about?" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Your Message</Label>
          <TextArea id="message" name="message" rows="6" required placeholder="Share your thoughts, questions, or feedback here..."></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Send Your Message</SubmitButton>
      </Form>
    </ContactSection>
  );
}

export default Contact;