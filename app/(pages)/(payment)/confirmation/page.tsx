import { Status, Container } from "@/app/components";

export default function ConfirmationPage() {
  return (
    <main>
      <Container title="Obrigado João, seu pagamento foi confirmado!">
        <Status type="success" message="Já recebemos o seu pagamento." />
      </Container>
    </main>
  );
}
