import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import {View} from 'react-native';
import {styles} from './styles';
import Car from './Car';
import Icon from 'react-native-vector-icons/Ionicons';
import Falcons from '../../../../data/data';
import CustomSwiper from '@components/CustomSwiper';
import {GlobalStyles} from '@globalStyle/GlobalStyles';

export default function Home() {
  return (
    <MainLayout title="FALCONS UFFÓRMULA">
      <View style={styles.container}>
        <CustomSwiper>
          {Falcons.years.map(car => (
            <Car
              key={car.id}
              id={car.id}
              name={car.title}
              image_uri={car.image}
            />
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
