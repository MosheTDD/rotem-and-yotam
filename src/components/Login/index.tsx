import {
  ActionIcon,
  Badge,
  Center,
  Flex,
  TextInput,
  Transition,
} from '@mantine/core';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { GiDiamondRing } from 'react-icons/gi';
import AnimatedLogo from '../common/AnimatedLogo';

const POSSIBLE_NAMES = ['יותם ארנסברג', 'רותם ארנסברג'];

function Login() {
  const [loginAttempts, setLoginAttempts] = useState<number>(0);
  const [nameMatchInput, setNameMatchInput] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLoginClicked = () => {
    setLoginAttempts((prev) => prev + 1);
    if (POSSIBLE_NAMES.includes(nameMatchInput.toLocaleLowerCase())) {
      navigate('/welcome');
    } else {
      setShowError(true);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(false);
    setNameMatchInput(event.target.value);
  };

  return (
    <Flex
      w='100%'
      h='100%'
      direction='column'
      align='center'
      justify='center'
      gap='xl'
      pos='relative'
    >
      <Center pos='absolute' top='3rem'>
        <AnimatedLogo lettersScale={0.9} imageSize={110} />
      </Center>
      <Center w={'100%'} h={'2rem'}>
        <Transition
          mounted={loginAttempts > 2}
          transition='fade-left'
          duration={400}
          timingFunction='ease'
        >
          {(styles) => (
            <Badge
              variant='light'
              fw={'lighter'}
              py={15}
              color={'#D4A373'}
              fz={'h3'}
              style={styles}
            >
              תזכיר/י לי מה השם משפחה שלך?
            </Badge>
          )}
        </Transition>
      </Center>
      <TextInput
        w='80%'
        h={'4rem'}
        size='lg'
        value={nameMatchInput}
        onChange={handleInputChange}
        variant='default'
        label='מה השם המלא שלך?'
        placeholder='רותם / יותם'
        styles={{
          input: { background: '#FEFAE0', borderColor: '#CCD5AE' },
          label: {
            fontSize: '1.5rem',
          },
        }}
        error={showError && 'נסו שוב'}
      />
      <ActionIcon
        mt={20}
        size={'input-xl'}
        radius={'xl'}
        variant='filled'
        color={'#D4A373'}
        onClick={handleLoginClicked}
      >
        <GiDiamondRing size={'2.5rem'} />
      </ActionIcon>
    </Flex>
  );
}

export default Login;
