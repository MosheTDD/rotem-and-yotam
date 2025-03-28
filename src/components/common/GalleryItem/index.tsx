import { Badge, Divider, Flex, Image, Modal, Text } from '@mantine/core';
import { useState } from 'react';

interface IGalleryItem {
  imageUrl: string;
  tag: string;
  description: string;
}

function GalleryItem({ imageUrl, tag, description }: IGalleryItem) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Flex
        w='10rem'
        h='10rem'
        bg={'rgba(212,163,115, 0.5)'}
        direction='column'
        justify='center'
        align='center'
        style={{
          borderRadius: '10px',
          border: '2px solid #D4A373',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => setOpenModal(true)}
        pos='relative'
      >
        <Image
          src={imageUrl}
          width='100%'
          height='100%'
          style={{ objectFit: 'cover' }}
        />
        <Badge
          variant='filled'
          pos='absolute'
          top='5px'
          right='5px'
          color='#D4A373'
          size='xl'
        >
          {tag}
        </Badge>
      </Flex>

      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        size='lg'
        styles={{
          header: { background: '#FAEDCD' },
          body: { background: '#FAEDCD' },
        }}
      >
        <Flex
          w='100%'
          h='100%'
          direction='column'
          justify='center'
          align='center'
          gap='xs'
        >
          <Image
            src={imageUrl}
            style={{ objectFit: 'contain', borderRadius: '10px' }}
            maw={'80%'}
          />
          <Divider w='90%' size='sm' color='#D4A373' />
          <Text
            ff={'Amatic SC'}
            fz={'h3'}
            w={'90%'}
            dir='rtl'
            bg={'rgba(212,163,115, 0.3)'}
            style={{ borderRadius: '5px' }}
            p={5}
          >
            {description}
          </Text>
        </Flex>
      </Modal>
    </>
  );
}

export default GalleryItem;
