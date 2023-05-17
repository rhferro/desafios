import { Container } from "./styles";

interface Buttonprops {
    title: string; click?: () => void;
}


export function Button({ title, click }: Buttonprops) {
    return (
        <Container onClick={click}>
            {title}
        </Container>
    )
}