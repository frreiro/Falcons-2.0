import {ImageRequireSource} from 'react-native';

export type AugmentReality = {
  electrical: [];
  powertrain: [];
  chassis: [];
  suspension: [];
  brake: [];
  aerodynamic: [];
};

export type Documents = {
  id: number;
  title: string;
  path: string;
};

export type YearsData = {
  id: number;
  year: string;
  image: ImageRequireSource;
  title: string;
  documents: Documents[];
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
      documents: [
        {
          id: 0,
          title: 'Manual de ferramentas',
          path: 'path in assets',
        },
        {
          id: 1,
          title: 'Manual de montagem',
          path: 'path in assets',
        },
      ],
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
      documents: [
        {
          id: 2,
          title: 'Manual de ferramentas 2',
          path: 'path in assets',
        },
        {
          id: 3,
          title: 'Manual de montagem 2',
          path: 'path in assets',
        },
      ],
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
