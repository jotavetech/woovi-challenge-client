"use client";

import { Status, Container, Fade } from "@/app/components";

export default function SuccessPage() {
  return (
    <Fade timeout={1500}>
      <div>
        <Container title="Obrigado João, seu pagamento foi confirmado!">
          <Status type="success" message="Já recebemos o seu pagamento." />
        </Container>
      </div>
    </Fade>
  );
}
