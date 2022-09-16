import React from 'react';
import {
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  Title,
  useMantineTheme,
  MantineProvider,
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
      <Title order={1} weight={800}>
        M-LARD
      </Title>
  

      <Group position='center' style={{ marginBottom: 30, marginTop: 20 }}>
        <Text weight={500} size='lg'>
          We are a diverse group of software developers with a common goal. To
          build dynamic, functional user friendly applications. Meet the team!
        </Text>
      </Group>

      <Grid justify='space-around'>
        <Grid.Col style={{ maxWidth: 330 }} sm={4} xs={4}>
          <Card shadow='sm' padding='lg'>
            <Card.Section>
              <Image
                src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                height={160}
                alt='Pic'
              />
            </Card.Section>
            <Text
              weight={500}
              align='center'
              style={{ marginTop: 6, marginBottom: 6 }}
            >
              Monika
            </Text>
            <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
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
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 330 }} sm={4} xs={4}>
          <Card shadow='sm' padding='lg'>
            <Card.Section>
              <Image
                src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                height={160}
                alt='Pic'
              />
            </Card.Section>
            <Text
              weight={500}
              align='center'
              style={{ marginTop: 6, marginBottom: 6 }}
            >
              Lauren
            </Text>
            <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
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
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 330 }} sm={4} xs={4}>
          <Card shadow='sm' padding='lg'>
            <Card.Section>
              <Image
                src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                height={160}
                alt='Pic'
              />
            </Card.Section>
            <Text
              weight={500}
              align='center'
              style={{ marginTop: 6, marginBottom: 6 }}
            >
              Dan
            </Text>
            <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
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
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 330 }} sm={4} xs={4}>
          <Card shadow='sm' padding='lg'>
            <Card.Section>
              <Image
                src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                height={160}
                alt='Pic'
              />
            </Card.Section>
            <Text
              weight={500}
              align='center'
              style={{ marginTop: 6, marginBottom: 6 }}
            >
              Ray
            </Text>
            <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
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
        </Grid.Col>

        <Grid.Col style={{ maxWidth: 330 }} sm={4} xs={4}>
          <Card shadow='sm' padding='lg'>
            <Card.Section>
              <Image
                src='https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'
                height={160}
                alt='Pic'
              />
            </Card.Section>
            <Text
              weight={500}
              align='center'
              style={{ marginTop: 6, marginBottom: 6 }}
            >
              Alex
            </Text>
            <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
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
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
}

export default About;
