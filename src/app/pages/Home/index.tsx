import React, {useRef} from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import MainLayout from '@layouts/MainLayout';
import CustomSwiper from '@components/CustomSwiper';
import {GlobalStyles} from '@globalStyle/GlobalStyles';
import Falcons from '@resource/data';
import Car from './Car';
import {useAppDispatch} from '@redux/hooks';
import {changeYear} from '@redux/features/yearDataSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@components/Tabs';

export default function Home() {
  const indexRef = useRef<number>(0);
  const dispatch = useAppDispatch();

  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  const setFalconsData = () => {
    const actualFalconsSlideYear = Falcons.years[indexRef.current];
    dispatch(changeYear(actualFalconsSlideYear.id));
    navigate.navigate('Documents');
  };

  return (
    <MainLayout title="FALCONS UFFÓRMULA">
      <View style={styles.container}>
        <CustomSwiper
          style={styles.swiper_container}
          backgroundElement={<View style={styles.box} />}
          setActualIndex={index => (indexRef.current = index)}>
          {Falcons.years.map(car => (
            <Car
              key={car.id}
              id={car.id}
              name={car.title}
              image_uri={car.image}
            />
          ))}
        </CustomSwiper>
        <TouchableOpacity onPress={setFalconsData}>
          <Icon
            name={'arrow-forward-circle'}
            size={70}
            color={GlobalStyles.colors.light}
          />
        </TouchableOpacity>
        <View style={styles.social_container}>
          <Icon
            style={styles.linkedin_icon}
            name={'logo-linkedin'}
            size={30}
            color={GlobalStyles.colors.light}
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/company/falcons-ufformula-sae/',
              )
            }
          />
          <Icon
            name={'logo-instagram'}
            size={30}
            color={GlobalStyles.colors.light}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/falconsufformula/')
            }
          />
        </View>
      </View>
    </MainLayout>
  );
}
