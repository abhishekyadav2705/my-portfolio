import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

// ===== Styled Components =====
const Section = styled.section`
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: "Montserrat", sans-serif;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #0056b3;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const animateButton = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
    animation: ${animateButton} 0.5s ease-in-out;
  }
`;

// ===== Component =====
const ContactSection = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        dataToSend,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("📨 Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        console.log("Data to send:", dataToSend);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <Section id="contact" theme={theme}>
      <Container>
        <Title theme={theme}>Contact Me</Title>
        <p>
          I'd love to connect with you! Reach out via the form below or on my
          socials.
        </p>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/abhishek-yadav-556228168/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/abhishekyadav2705"
            target="_blank"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://twitter.com/abhishekyadav" target="_blank">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="https://facebook.com/abhishekyadav" target="_blank">
            <FaFacebook />
          </SocialLink>
        </SocialLinks>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
        <ToastContainer position="top-right" autoClose={5000} />
      </Container>
    </Section>
  );
};

export default ContactSection;
