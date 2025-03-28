import { Avatar, Container } from '@mantine/core';
import CircularText from '../CircularText';
import LOGO from '../../../assets/logo.jpeg';

interface IAnimatedLogo {
  imageSize?: number;
  lettersScale?: number;
}

function AnimatedLogo(props: IAnimatedLogo) {
  return (
    <Container pos={'relative'}>
      <Avatar
        w={props.imageSize ?? 90}
        h={props.imageSize ?? 90}
        src={LOGO}
        pos='absolute'
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <CircularText
        text='YOTAM ❤️ROTEM ❤️YOTAM ❤️ROTEM ❤️'
        spinDuration={20}
        scale={props.lettersScale || 1}
      />
    </Container>
  );
}

export default AnimatedLogo;
