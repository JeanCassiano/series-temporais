import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  FormContainer,
  Form,
  Input,
  TextArea,
  Button,
  Title,
  Content,
} from "./styles.tsx";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // Referência ao formulário
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r1cm9xe", // Substitua pelo seu Service ID
        "template_726g58f", // Substitua pelo seu Template ID
        formRef.current!, // Referência ao formulário
        "Pj0UyIUYWYyByPTuV" // Substitua pelo seu Public Key
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset(); // Limpa os campos do formulário

          // Remove a mensagem de sucesso após 1,5 segundos
          setTimeout(() => {
            setSuccess(false);
          }, 1500);
        },
        (error) => {
          console.error("Erro:", error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <Title>Contact Us</Title>
      <Content>
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type="text" name="name" placeholder="Name" required />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <TextArea name="message" placeholder="Your message" required />
            <Button type="submit">SEND</Button>
          </Form>
          {success && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centraliza horizontal e verticalmente
                background: "cyan",
                color: "#000",
                padding: "20px 30px", // Melhor aparência
                borderRadius: "8px",
                boxShadow: `
        5px 5px rgba(0, 255, 255, 0.4), 
        10px 10px rgba(0, 255, 255, 0.3), 
        15px 15px rgba(0, 255, 255, 0.2)
      `,
                fontWeight: "bold",
                fontSize: "1rem",
                zIndex: 1000,
                textAlign: "center", // Garante que o texto fique centralizado
                maxWidth: "90%", // Limita a largura em telas menores
                wordWrap: "break-word", // Quebra o texto se necessário
              }}
            >
              Obrigado! Mensagem enviada com sucesso.
            </div>
          )}
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Contact;
