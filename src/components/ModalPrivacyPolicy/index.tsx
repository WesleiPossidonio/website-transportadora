import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Button, Content, Overlay } from "./styled";

export const ModalPrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função que verifica o localStorage
  useEffect(() => {
    const hasAccepted = localStorage.getItem("policyAccepted");
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  // Função que salva a aceitação no localStorage
  const handleAccept = () => {
    localStorage.setItem("policyAccepted", "true");
    setIsOpen(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Overlay />

      <Content>
        <Dialog.Title>Política de Privacidade</Dialog.Title>
        <Dialog.Description>
          Este site utiliza Cookies, para melhorar a sua experiência de
          navegação e personalizar o conteúdo oferecido. Ao continuar a usar
          este site, você concorda com o uso de cookies de acordo com a nossa <a href="#">Política de Privacidade</a>
        </Dialog.Description>

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Button onClick={handleAccept}>Aceitar</Button>
        </div>
      </Content>
    </Dialog.Root>
  );
};
