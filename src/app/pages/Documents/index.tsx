import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

import {useAppSelector} from '@redux/hooks';
import MainLayout from '@layouts/MainLayout';
import PDFComponent from '@components/PDF';
import CustomSwiper from '@components/CustomSwiper';

export default function Documents() {
  const year = useAppSelector(state => state.data);
  const indexRef = useRef<number>(0);

  return (
    <MainLayout title="DOCUMENTOS">
      <View style={styles.container}>
        {year.documents.length > 0 ? (
          <CustomSwiper setActualIndex={index => (indexRef.current = index)}>
            {year.documents.map(document => {
              return (
                <PDFComponent
                  key={document.id}
                  fileName={document.file_name}
                  type={document.type}
                  name={document.title}
                  year={year.year}
                />
              );
            })}
          </CustomSwiper>
        ) : (
          <Text style={styles.text_no_content}>
            Não há documentos referente a este ano
          </Text>
        )}
      </View>
    </MainLayout>
  );
}
