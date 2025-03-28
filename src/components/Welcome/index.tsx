import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Center, DEFAULT_THEME, Flex, Text, Transition } from '@mantine/core';
import AnimatedLogo from '../common/AnimatedLogo';

const TEXTS = [
  'היי',
  'כאן אור ומשה',
  'אנחנו אוהבים אתכם מאוד',
  'וכל כך שמחים בשבילכם',
  'ולפני שתרוצו לעתיד',
  'רצינו להסתכל לעבר',
];

const Welcome = () => {
  const [textIndex, setTextIndex] = useState(-1);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (textIndex < TEXTS.length) {
      const timeout = setTimeout(
        () => {
          setVisible(false);
          setTimeout(() => {
            setTextIndex((prev) => prev + 1);
            setVisible(true);
          }, 750); // Matches fade-out duration
        },
        textIndex === -1 ? 1000 : 4000
      ); // Display time before fade-out
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => navigate('/gallery'), 1000);
    }
  }, [textIndex, navigate]);

  return (
    <Flex
      w='100%'
      h='100%'
      pos={'relative'}
      direction='column'
      justify='center'
      align='center'
    >
      <Center pos={'absolute'} top={'3rem'}>
        <AnimatedLogo lettersScale={0.9} imageSize={110} />
      </Center>

      <Transition
        mounted={visible}
        transition='fade-up'
        duration={750}
        timingFunction='ease-in-out'
      >
        {(styles) => (
          <Text
            ta={'center'}
            fw='lighter'
            fz='3rem'
            c={DEFAULT_THEME.colors.dark[8]}
            style={styles}
          >
            {TEXTS[textIndex] || ''}
          </Text>
        )}
      </Transition>
    </Flex>
  );
};

export default Welcome;
