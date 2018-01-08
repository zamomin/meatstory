import './App.css';
import React from 'react';
import {
  Container,
  Segment,
  Header,
  Feed,
  Image,
  Input,
  Form,
  Radio,
  Button
} from 'semantic-ui-react';

const App = () => (
  <Container>



    <div className='landing-image'>
      <div>
        <Segment basic>
          <Image src='/img/logo-meatstory@2x.png' size='small' alt='logo meatstory'/>
        </Segment>
      </div>
      <div className='fair'>
        <Segment basic>
          <Header size='huge'>Was liegt auf deinem Teller?</Header>
          <div className='id_box'>
            <Header as='h2'>Finde deine Story!</Header>
            <p>Scanne den QR-Code oder gib die MeatStory-ID ein, z.B. <a className="id">120.1166.0014.6</a></p>
            <Input action='Los' />
          </div>
        </Segment>
      </div>
    </div>


    <div>
      <Segment basic>
        <Header as='h2'>Frida la vache qui rit</Header>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img src='/img/cow.svg' size= 'tiny' className='icons' alt='cow'/>
            </Feed.Label>
            <Feed.Content>
              Die Irish Golden Hopper Frida war die Tochter von Samira und Elron
              und ist am 1.April 2016 zur Welt gekommen mit einem Gewicht von 48
              Kilogramm. <br/>Dank der zarten Gräser und Kräuter ist ihr Fleisch
              saftig und schmackhaft geworden.
            </Feed.Content>
          </Feed.Event>
          <Feed.Event>
            <Feed.Label>
              <img src='/img/tractor.svg' size= 'tiny' className='icons' alt='tractor'/>
            </Feed.Label>
            <Feed.Content>
              Nach der Geburt bei der Familie Hornbläser in Finkenschlupf ging
              die Reise nach Weissfurchen.<br/>Dort verbrachte sie viel Zeit
              fressend und wiederkäuend mit ihren FreundInnen auf den Weiden.
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    </div>
    <div className='fair'>
      <Segment basic>
        <Header as='h2'>Teile uns deine Meinung mit!</Header>
        <Form>
          <Form.Group grouped>
            <Header as='h3'>Wie findest du deine MeatStory?</Header>
            <Form.Field>
              <Radio
                label='Interessant'
                name='radioGroup'
                value='interessant'
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Durchschnittlich'
                name='radioGroup'
                value='durchschnittlich'
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Uninteressant'
                name='radioGroup'
                value='uniteressant'
              />
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <Header as='h3'>Welche Information findest du besonders interessant, was vermisst du?</Header>
            <Form.Field control='textarea' rows='3' />
            <Button type='submit'>Senden</Button>
          </Form.Group>
        </Form>
      </Segment>
    </div>
    <div>
      <Segment basic className='specialtrick'>
        <Header as='h2'>Partner</Header>
        <div className='is-flex partner'>
          <a href='https://opendata.ch/' target="_blank" rel="noopener noreferrer"><img src='/img/OpenData.ch@2x.png' alt='open data'/></a>
          <a href='https://food.opendata.ch/' target="_blank" rel="noopener noreferrer"><img src='/img/OpenFoodlogo@2x.png' alt='open food'/></a>
          <a href='https://www.identitas.ch/' target='_blank' rel="noopener noreferrer"><Image src='/img/id.png' alt='identitas'/></a>
          <a href='https://www.hafl.bfh.ch/home.html' target='_blank' rel="noopener noreferrer"><Image src='/img/BFH1.png' alt='BFH-HAFL'/></a>
        </div>
        <Header as='h2'>Medien</Header>
        <div className='is-flex partner'>
          <a href='http://www.20min.ch/schweiz/bern/story/28948666' target='_blank' rel="noopener noreferrer"><Image src='/img/20min@2x.png' alt='20min'/></a>
          <a href='https://desktop.12app.ch/articles/30000183' target='_blank' rel="noopener noreferrer"><Image src='/img/SonntagsZeitung@2x.png' alt='SonntagsZeitung'/></a>
        </div>
      </Segment>
    </div>

    <div className='dark'>
      <Segment basic className='about'>
        <Header as='h2'>Über uns</Header>
        <p>MeatStory ermöglicht Konsumenten die Herkunft von Fleischprodukten zu
        verfolgen. Die transparente Rückverfolgbarkeit erleichtert ihnen informierte
        Entscheidungen zu treffen.</p>
        <Feed className='about'>
          <Feed.Event
            image='/img/sam.png'
            content='Samuel Bühlmann schafft begeistert mehr Bewusstsein für dein Plätzli à la Minute.'
          />
          <Feed.Event
            image='/img/simon.png'
            content='Simon Josi entwickelt geniale Rückverfolgbarkeit von deinem Teller zur Wiese.'
          />
          <Feed.Event
            image='/img/pascal.png'
            content='Pascal Geronimi zeichnet gekonnt Daten für Lebensmittel-LiebhaberInnen auf.'
          />
        </Feed>
      </Segment>
    </div>


    <div>
      <Segment basic inverted>
        <Header as='h2'>Kontakt</Header>
        <a href="mailto:hello@meatstory.ch" target="_top">hello@meatstory.ch</a>
      </Segment>
    </div>
  </Container>
)

export default App;
