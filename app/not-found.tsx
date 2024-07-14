import { Container, Status } from "./components";

export default function NotFound() {
  return (
    <main>
      <Container title="Página não encontrada">
        <Status
          type="error"
          message="Parece que você está tentando entrar em uma página que não existe."
        />
      </Container>
    </main>
  );
}
