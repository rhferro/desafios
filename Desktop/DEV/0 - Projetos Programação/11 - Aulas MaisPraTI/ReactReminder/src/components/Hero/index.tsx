import {Container} from "./styles"
import heroImg from '../../assets/images/hero.jpg'

export function Hero() {
    return <Container>
        <img src={heroImg} alt="Um monte, com várias casas e um céu brilhante" />
    </Container>
}