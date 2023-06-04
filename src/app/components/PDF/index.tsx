import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FileViewer from 'react-native-file-viewer';
import fs from 'react-native-fs';
import PdfThumbnail, {ThumbnailResult} from 'react-native-pdf-thumbnail';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '@globalStyle/GlobalStyles';
import {Documents, YearsData} from '@resource/data';

export interface IDocument {
  fileName: string;
  name: Documents['title'];
  type: Documents['type'];
  year: YearsData['year'];
}

export default function PDFComponent(props: IDocument) {
  const [thumbnail, setThumbnail] = React.useState<
    ThumbnailResult | undefined
  >();

  const file = props.fileName;
  const fullFilePath = `custom/${file}`;
  const destiny = `${fs.DocumentDirectoryPath}/${file}`;

  useEffect(() => {
    const loadThumbnail = async () => {
      const result = await PdfThumbnail.generate(destiny, 0);
      setThumbnail(result);
    };

    loadThumbnail();
  }, [destiny]);

  const openPDF = async () => {
    //FIXME: Gerenciar erro
    try {
      await fs.copyFileAssets(fullFilePath, destiny); //Copia para o dispositivo -> local não visivel para o usuário. -> susbstitui o antigo arquivo a cada clique
      await FileViewer.open(destiny);
    } catch (error) {
      console.log('Error to open file');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openPDF}>
      {thumbnail ? (
        <Image
          source={thumbnail}
          resizeMode="stretch"
          style={styles.thumbnail_image}
        />
      ) : (
        <></>
      )}
      <View style={styles.title_continer}>
        <View style={styles.text_container}>
          <Text style={styles.pdf_title}>{props.name.toUpperCase()}</Text>
          <Text style={styles.pdf_year}>{props.year}</Text>
        </View>
        {props.type === 'assemblies' ? (
          <Icon name={'cog'} size={25} color={GlobalStyles.colors.light} />
        ) : (
          <Icon name={'hammer'} size={25} color={GlobalStyles.colors.light} />
        )}
      </View>
    </TouchableOpacity>
  );
}
