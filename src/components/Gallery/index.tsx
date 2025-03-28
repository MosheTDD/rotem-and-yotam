import { Badge, Divider, Flex, ScrollArea, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import AnimatedLogo from '../common/AnimatedLogo';
import GalleryItem from '../common/GalleryItem';
import IMAGE_ONE from '../../assets/images/image_one.png';
import IMAGE_TWO from '../../assets/images/image_two.png';
import IMAGE_THREE from '../../assets/images/image_three.png';
import IMAGE_FOUR from '../../assets/images/image_four.png';
import IMAGE_FIVE from '../../assets/images/image_five.png';
import IMAGE_SIX from '../../assets/images/image_six.png';
import IMAGE_SEVEN from '../../assets/images/image_seven.png';
import IMAGE_EIGHT from '../../assets/images/image_eight.png';
import IMAGE_NINE from '../../assets/images/image_nine.png';
import IMAGE_TEN from '../../assets/images/image_ten.png';

const IMAGES = [
  {
    imageSrc: IMAGE_ONE,
    tag: 'חתונה',
    description:
      'זוכרים את החתונה של ענבר וצחי? מרגיש לפני שניה. והנה אתם, ביחד, עומדים לעבור זאת גם. לבחור אחת בשניה, והפעם אל מול כולם. מאחלים לכם המשך זוגיות טובה, בריאה ותומכת.',
  },
  {
    imageSrc: IMAGE_TWO,
    tag: 'חופשה',
    description:
      'כיף היה במיקונוס? לא ככה? לאט לאט, צוברים חוויות. עוד קצת מכאן, עוד קצת משם. המון מקומות, אנשים, נופים, צבעים. סוגרים כבר עשר שנים, והמסע שלכם עוד ממשיך, לעוד הרבה חוויות, נופים ומקומות. לבד וביחד, תמיד מוקפים באהבה.',
  },
  {
    imageSrc: IMAGE_THREE,
    tag: 'חמודים',
    description:
      'יצאנו לעשות טיול שדה קטן, במקום לא ברור תאמת. אבל יצא ממש כיף בסופו של דבר, היה יום ממש יפה, היה שם הרבה דשא, הרבה שטח. יום שלא אשכח כנראה.',
  },
  {
    imageSrc: IMAGE_FOUR,
    tag: 'חמודים',
    description:
      'הבר מצווה של יואב. וואי איך שהזמן עובר מהר... הנה הגענו גם ליום שלכם. רק 4 שנים אחרי :)',
  },
  {
    imageSrc: IMAGE_FIVE,
    tag: 'שבת בבוקר',
    description:
      'שבת בבוקר יום יפה, אמא שותה המון קפה.. אין כיף כמו לטייל כל המשפחה בשבת בבוקר, להיות ביחד, לנשום אוויר נקי, לטייל. מקווה שעוד נעשה פה ושם ימי טיול כאלה נחמדים כולם ביחד? אה? סומכים עליכם.',
  },
  {
    imageSrc: IMAGE_SIX,
    tag: 'הדרכת קורונה',
    description:
      'זו לא תמונה של שניכם אבל רציתי לשים אותה כאן, תיראו באיזה תקופה הזויה היינו. וכמה זמן כבר עבר מאז?? 5 שנים. מטורף. בסוף זה גם היה חוויה מטורפת שנזכור תמיד ועברתם אותה יחד. ',
  },
  {
    imageSrc: IMAGE_SEVEN,
    tag: 'מבט מיוחד',
    description:
      'אז עוד בתקופת שגרתם פה, הייתי איתכם מלא ונהנתי מכל רגע. מקווה שאתם מנצלים את החיים כמו שצריך ולא שוכחים גם לבלות ביחד. תמשיכו לעשות צחוקים כמו שרק אתם יודעים.',
  },
  {
    imageSrc: IMAGE_EIGHT,
    tag: 'פילטרים',
    description:
      'עוד קצת תמונות מצחיקות כי למה לא, שתזכו תמיד לצחוק הזה, ולבדיחות שלכם. זה הניצוץ שמרים אותכם תמיד למעלה. ',
  },
  {
    imageSrc: IMAGE_NINE,
    tag: 'פורים',
    description:
      'זוכרים את המסיבת תחפושות שעשינו אצל צביקה? היה ממש נחמד ודי ספונטני, אין על המשפחה שלנו. ניסיתי למצוא אם יש לי אולי תמונה של הדרקונים שהתחפשתם אליהם אבל לא, אז אני רק אזכיר לכם אותם. בואו שנה הבאה נעשה משהו נחמד ונמצא תחפושת מגניבה',
  },
  {
    imageSrc: IMAGE_TEN,
    tag: 'חו"ל',
    description:
      'שרק תמשיכו לטייל ולגלות את העולם ביחד. יש לכם עוד את כל החיים לפניכם, תמשיכו לחייך, לצמוח ולחקור יחד. לעוד הרבה שנים ❤️',
  },
];

function Gallery() {
  return (
    <Flex w='100%' h='100%' direction='column' align='center'>
      <AnimatedLogo lettersScale={0.9} imageSize={110} />
      <Divider
        w='90%'
        labelPosition='center'
        size='xs'
        color='#D4A373'
        label={
          <>
            <IconHeartFilled color='#D4A373' size={24} />
            <Text mx={5} fz={'h2'} c='#D4A373'>
              רגעים שאהבנו
            </Text>
            <IconHeartFilled color='#D4A373' size={24} />
          </>
        }
      />
      <Badge variant='light' size='xl' color='#D4A373' mb={15}>
        נסו ללחוץ על התמונות
      </Badge>
      <ScrollArea w='100%' h='25rem' mb={10}>
        {Array.from({ length: Math.ceil(IMAGES.length / 2) }, (_, i) => (
          <Flex key={i} justify='center' align='center' gap='sm' mb='md'>
            <GalleryItem
              imageUrl={IMAGES[i * 2].imageSrc}
              tag={IMAGES[i * 2].tag}
              description={IMAGES[i * 2].description}
            />
            {IMAGES[i * 2 + 1] && (
              <GalleryItem
                imageUrl={IMAGES[i * 2 + 1].imageSrc}
                tag={IMAGES[i * 2 + 1].tag}
                description={IMAGES[i * 2 + 1].description}
              />
            )}
          </Flex>
        ))}
      </ScrollArea>
    </Flex>
  );
}

export default Gallery;
