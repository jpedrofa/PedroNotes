import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';


export function Details(){


  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Autoconhecimento
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam voluptatibus cum ducimus, aliquam numquam perspiciatis animi assumenda unde veniam rerum quis neque quam rem quos officiis nobis? Maiores, aperiam.
          </p>

          <Section title="Links úteis">
            <Links>
                <li><a href="#">https://www.youtube.com/@CanaldoEslen</a></li>
                <li><a href="#">https://www.youtube.com/@MotivadoresDeSucesso"</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Psicologia"/>
            <Tag title="Motivação"/>

          </Section>


          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}