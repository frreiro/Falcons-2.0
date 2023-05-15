import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {View} from 'react-native';
import {styles} from './styles';
import CustomSwiper from '../../components/CustomSwiper';
import Car from './Car';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../styles/GlobalStyles';

export default function Home() {
  const carDatas = [
    {
      id: 0,
      url: 'https://s3-alpha-sig.figma.com/img/c26d/c264/c2592359ccf984c93cf4478b44ab40c1?Expires=1682899200&Signature=mFlzd47vOb3iZRhVm6lfLJMC3oPOWZ2EaIlQIV7rDSlzissHfkxhIKeaV4BzlWaSfgBhXNdXltw~H8vDekXL5V2cicOlcrppCyrVY4bY9PZ5dU9raubzuLYmVs9fSVTJqyeBX7wTQsLbuHGu8KEJawhjaO8KShmHiPsgdjwwZxtNP3ScN8lzcMbifn2favbl39xbkV0EeA8Q97MptAZT-kiPRxg0~yeYR1wELgM3fFx5TP39xwA48X8m5Yp5hL8QAZWmzRSDLb42aBrIiNEDhh2cqFCeRiMqOKUoFAGo0fHGG5pbmmdUcW0Ju6qultjAxh0I5Wiftuqm1Mwm8ICHQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Protótipo 2023',
      documents: {
        montagem: 'http://',
        ferramenta: 'http://',
      },
    },
    {
      id: 1,
      url: 'https://s3-alpha-sig.figma.com/img/c26d/c264/c2592359ccf984c93cf4478b44ab40c1?Expires=1682899200&Signature=mFlzd47vOb3iZRhVm6lfLJMC3oPOWZ2EaIlQIV7rDSlzissHfkxhIKeaV4BzlWaSfgBhXNdXltw~H8vDekXL5V2cicOlcrppCyrVY4bY9PZ5dU9raubzuLYmVs9fSVTJqyeBX7wTQsLbuHGu8KEJawhjaO8KShmHiPsgdjwwZxtNP3ScN8lzcMbifn2favbl39xbkV0EeA8Q97MptAZT-kiPRxg0~yeYR1wELgM3fFx5TP39xwA48X8m5Yp5hL8QAZWmzRSDLb42aBrIiNEDhh2cqFCeRiMqOKUoFAGo0fHGG5pbmmdUcW0Ju6qultjAxh0I5Wiftuqm1Mwm8ICHQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Protótipo 2020',
      documents: {
        montagem: 'http://',
        ferramenta: 'http://',
      },
    },
  ];

  return (
    <MainLayout title="FALCONS UFFÓRMULA">
      <View style={styles.container}>
        <CustomSwiper>
          {carDatas.map(car => (
            <Car key={car.id} name={car.title} url={car.url} />
          ))}
        </CustomSwiper>
        <Icon
          name={'arrow-forward-circle'}
          size={70}
          color={GlobalStyles.colors.light}
        />
        <View style={styles.social_container}>
          <Icon
            style={styles.linkedin_icon}
            name={'logo-linkedin'}
            size={30}
            color={GlobalStyles.colors.light}
          />
          <Icon
            name={'logo-instagram'}
            size={30}
            color={GlobalStyles.colors.light}
          />
        </View>
      </View>
    </MainLayout>
  );
}
