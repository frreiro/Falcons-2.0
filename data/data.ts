import {ImageRequireSource} from 'react-native';

export type AugmentReality = {
  electrical: [];
  powertrain: [];
  chassis: [];
  suspension: [];
  brake: [];
  aerodynamic: [];
};

export type Document = {
  tool: string;
  assembly: string;
};

export type YearsData = {
  id: number;
  year: string;
  image: ImageRequireSource;
  title: string;
  documents: Document;
  augment_reality: AugmentReality;
};

export interface IFalcons {
  years: YearsData[];
}

const Falcons: IFalcons = {
  years: [
    {
      id: 0,
      year: '2022',
      image: require('@assets/images/carro.png'),
      title: 'Protótipo 2022',
      documents: {
        tool: 'path in assets',
        assembly: 'path in assets',
      },
      augment_reality: {
        electrical: [],
        powertrain: [],
        chassis: [],
        suspension: [],
        brake: [],
        aerodynamic: [],
      },
    },
    {
      id: 1,
      year: '2023',
      image: require('@assets/images/carro.png'),
      title: 'Protótipo 2023',
      documents: {
        tool: 'path in assets',
        assembly: 'path in assets',
      },
      augment_reality: {
        electrical: [],
        powertrain: [],
        chassis: [],
        suspension: [],
        brake: [],
        aerodynamic: [],
      },
    },
  ],
};
export default Falcons;
