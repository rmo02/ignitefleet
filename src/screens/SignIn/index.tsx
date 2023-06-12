import { Container, Title, Slogan } from './styles';
import background from '../../assets/background.png'
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container source={background}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão do uso de veículos</Slogan>

      <Button title='Entrar com o Google'/>
    </Container>
  );
}