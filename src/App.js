import './App.css';
import React, { Component } from 'react';
import {
  Container,
  Segment,
  Header,
  List,
  Feed,
  Image,
  Input,
  Form,
} from 'semantic-ui-react';

const App = () => (
  <Container>
    <div>
      <Image src='/img/logo-meatstory@2x.png' size= 'medium' centered className='logoMeatstory'/>
    </div>

    <Segment basic secondary>
      <Header as='h2'>Wer liegt auf deinem Teller?</Header>
      Wir machen die Geschichte deines Steaks sichtbar.
    </Segment>

    <Segment basic>
      <Header as='h3'>So gehts los:</Header>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <Header as='h2'>1</Header>
          </Feed.Label>
          <Feed.Content>
            Kauf dir ein Stück Fleisch
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label>
            <Header as='h2'>2</Header>
          </Feed.Label>
          <Feed.Content>
            Scan den QR Code <br/> oder <br/> gib den Code hier ein
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label>
            <Header as='h2'>3</Header>
          </Feed.Label>
          <Feed.Content>
            Lies die Story und geniesse deine Mahlzeit
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Segment>

    <Segment basic secondary>
      <Header as='h2'>Über uns</Header>
      Mit der "Meatstory" möchten wir den Weg des Fleisches von der Weide bis auf den Teller transparent machen.
    </Segment>

    <Segment basic>
      <Header as='h2'>Let us know your thoughts!</Header>
      <Form>
        <Form.Group grouped>
        <label><Header as='h3'>Was ist die interessanteste Information?</Header></label>
        <Form.Field label='Der Geburtsort' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Das Alter' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Das Gewicht' control='input' type='radio' name='htmlRadios' />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group grouped>
        <label><Header as='h3'>Was schmeckt am besten?</Header></label>
        <Form.Field label='Braten' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Wurst' control='input' type='radio' name='htmlRadios' />
        <Form.Field label='Steak' control='input' type='radio' name='htmlRadios' />
        </Form.Group>
      </Form>
    </Segment>

    <Segment basic inverted color='grey'>
      <Header as='h2'>Partner</Header>
      <div className='is-flex'>
        <img src='/img/BFH+HAFL@2x.png' className='bfh'/>
        <img src='/img/Identitas@2x.png'/>
        <img src='/img/OpenData.ch@2x.png'/>
        <img src='/img/OpenFoodlogo@2x.png'/>
        <img src='/img/20min@2x.png'/>
        <img src='/img/SonntagsZeitung@2x.png'/>
      </div>
    </Segment>

    <Segment basic inverted>
      <Header as='h2'>Get in touch</Header>
      sam@meatstory.ch
    </Segment>

    <Segment basic>
      meatstory part story
    </Segment>

    <Segment basic secondary>
      TDV Nummer auf der Etikette <br/>
      <Input action='GO' />
    </Segment>

    <Segment basic>
      <Header as='h2'>Frida la vache qui rit</Header>
      Murten, Fr <br/>
      Irish Golden Hopper
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='/img/cow.svg' size= 'tiny' />
          </Feed.Label>
          <Feed.Content>
            Die Irish Golden Hopper Frida war die Tochter von Samira und Elron und ist am 1.April 2016 zur Welt gekommen mit einem Gewicht von 48 Kilogramm. <br/>Dank der zarten Gräser und Kräuter ist ihr Fleisch saftig und schmackhaft geworden.
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label>
            <img src='/img/tractor.svg' size= 'tiny' />
          </Feed.Label>
          <Feed.Content>
            Nach der Geburt bei der Familie Hornbläser in Finkenschlupf ging die Reise nach Weissfurchen. <br/>Dort verbrachte sie viel Zeit fressend und wiederkäuend mit ihren FreundInnen auf den Weiden.
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Segment>

    <Segment basic secondary>
      <Header as='h2'>Über uns repeat</Header>
    </Segment>

  </Container>
)

export default App;
