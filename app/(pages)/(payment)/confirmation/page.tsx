import { AnimatedConfirmation, Container } from "@/app/components";

export default function ConfirmationPage() {
  return (
    <main>
      <Container title="Obrigado João, seu pagamento foi confirmado!">
        <AnimatedConfirmation />
      </Container>
    </main>
  );
}
