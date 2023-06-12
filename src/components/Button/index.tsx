import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { Loading } from '../Loading/Loading';


type Props = TouchableOpacityProps & {
    title: string;
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container
    activeOpacity={0.7}
    disable={isLoading}
    {...rest}
    >
        {
            isLoading
            ? <Loading />
            :<Title>{title}</Title>
        }
    </Container>
  );
}