import React from 'react';
import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Title,
  useMantineTheme,
  MantineProvider,
  Accordion,
} from '@mantine/core';

function About() {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Title order={1} weight={800} size={40} style={{ marginTop: 30 }}>
        M-LARD
      </Title>

      <Group
        position='center'
        style={{
          marginBottom: 30,
          marginTop: 20,
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <Text weight={500} size='md'>
          A diverse group of software developers with a common goal • Building
          creative, dynamic, user friendly applications.
        </Text>
      </Group>

      <Group
        position='center'
        style={{
          marginBottom: 30,
          marginTop: 20,
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <Text weight={500} size='lg'>
          Meet the team!
        </Text>
      </Group>

      <Accordion style={{ maxWidth: 450, marginInline: 'auto' }}>
        <Accordion.Item value='flexibility'>
          <Accordion.Control>Monika</Accordion.Control>
          <Accordion.Panel>
            <Card shadow='sm' padding='lg'>
              <Card.Section align='center'>
                <Image
                  src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                  height={180}
                  width={180}
                  radius='md'
                  style={{ marginTop: 20 }}
                  alt='Photo Monika'
                />
              </Card.Section>
              <Text
                weight={500}
                align='Left'
                style={{ marginTop: 15, marginBottom: 6 }}
              >
                Monika Davies
              </Text>
              <Text
                size='sm'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
              </Text>
              <Button
                variant='light'
                color='blue'
                fullWidth
                style={{ marginTop: 14 }}
                component='a'
                href='mailto:email@example.com'
              >
                Send Message
              </Button>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion style={{ maxWidth: 450, marginInline: 'auto' }}>
        <Accordion.Item value='flexibility'>
          <Accordion.Control>Ray</Accordion.Control>
          <Accordion.Panel>
            <Card shadow='sm' padding='lg'>
              <Card.Section align='center'>
                <Image
                  src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                  height={180}
                  width={180}
                  radius='md'
                  style={{ marginTop: 20 }}
                  alt='Photo Ray'
                />
              </Card.Section>
              <Text
                weight={500}
                align='Left'
                style={{ marginTop: 15, marginBottom: 6 }}
              >
                Raymond Ruazol
              </Text>
              <Text
                size='sm'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
              </Text>
              <Button
                variant='light'
                color='blue'
                fullWidth
                style={{ marginTop: 14 }}
                component='a'
                href='mailto:email@example.com'
              >
                Send Message
              </Button>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion style={{ maxWidth: 450, marginInline: 'auto' }}>
        <Accordion.Item value='flexibility'>
          <Accordion.Control>Lauren</Accordion.Control>
          <Accordion.Panel>
            <Card shadow='sm' padding='lg'>
              <Card.Section align='center'>
                <Image
                  src='images/Lauren.jpg'
                  height={180}
                  width={180}
                  radius='md'
                  style={{ marginTop: 20 }}
                  alt='Photo Lauren'
                />
              </Card.Section>
              <Text
                weight={500}
                align='Left'
                style={{ marginTop: 15, marginBottom: 6 }}
              >
                Lauren Main
              </Text>
              <Text
                size='sm'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                Lauren Main is a software developer with a background in project management and IT analysis. For the last six years, Lauren has worked in user support, with the King County Sheriff's Office in the Computer Resource Unit. Lauren has gained expertise in IT project management, writing use cases, and documenting software requirements. Lauren has worked hard to complement these skills by learning to code in an accelerated bootcamp.
              </Text>
              <Button
                variant='light'
                color='blue'
                fullWidth
                style={{ marginTop: 14 }}
                component='a'
                href='mailto:email@example.com'
              >
                Send Message
              </Button>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion style={{ maxWidth: 450, marginInline: 'auto' }}>
        <Accordion.Item value='flexibility'>
          <Accordion.Control>Dan</Accordion.Control>
          <Accordion.Panel>
            <Card shadow='sm' padding='lg'>
              <Card.Section align='center'>
                <Image
                  src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                  height={180}
                  width={180}
                  radius='md'
                  style={{ marginTop: 20 }}
                  alt='Photo Dan'
                />
              </Card.Section>
              <Text
                weight={500}
                align='Left'
                style={{ marginTop: 15, marginBottom: 6 }}
              >
                Daniel Brott
              </Text>
              <Text
                size='sm'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
              </Text>
              <Button
                variant='light'
                color='blue'
                fullWidth
                style={{ marginTop: 14 }}
                component='a'
                href='mailto:email@example.com'
              >
                Send Message
              </Button>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Accordion style={{ maxWidth: 450, marginInline: 'auto' }}>
        <Accordion.Item value='flexibility'>
          <Accordion.Control>Alex</Accordion.Control>
          <Accordion.Panel>
            <Card shadow='sm' padding='lg'>
              <Card.Section align='center'>
                <Image
                  src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                  height={180}
                  width={180}
                  radius='md'
                  style={{ marginTop: 20 }}
                  alt='Photo Alex'
                />
              </Card.Section>
              <Text
                weight={500}
                align='Left'
                style={{ marginTop: 15, marginBottom: 6 }}
              >
                Alejandro Rivera
              </Text>
              <Text
                size='sm'
                style={{ color: secondaryColor, lineHeight: 1.5 }}
              >
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
              </Text>
              <Button
                variant='light'
                color='blue'
                fullWidth
                style={{ marginTop: 14 }}
                component='a'
                href='mailto:email@example.com'
              >
                Send Message
              </Button>
            </Card>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </MantineProvider>
  );
}

export default About;

