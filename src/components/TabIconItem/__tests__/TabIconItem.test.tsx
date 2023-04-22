import React from 'react';
import {render} from '@testing-library/react-native';

import TabIconItem from '..';
import {GlobalStyles} from '../../../styles/GlobalStyles';
import {TabInfoType} from '../../Tabs/TabItem';

type TabInfoTestType = Omit<TabInfoType, 'name' | 'component'>;
describe('TabIconItem', () => {
  it('Should render component', () => {
    const item: TabInfoTestType = {
      id: 0,
      focusedIcon: 'cube',
      unfocusedIcon: 'cube-outline',
    };

    render(
      <TabIconItem
        id={item.id}
        color={GlobalStyles.colors.primary}
        focused={true}
        size={10}
        focusedIconName={item.focusedIcon}
        unfocusedIconName={item.unfocusedIcon}
      />,
    );
  });

  it('Should render component with focused Icon', () => {
    const item: TabInfoTestType = {
      id: 0,
      focusedIcon: 'cube',
      unfocusedIcon: 'cube-outline',
    };

    const {getByTestId} = render(
      <TabIconItem
        id={item.id}
        color={GlobalStyles.colors.primary}
        focused={true}
        size={10}
        focusedIconName={item.focusedIcon}
        unfocusedIconName={item.unfocusedIcon}
      />,
    );

    expect(getByTestId('focusedIcon_0')).toBeTruthy();
  });

  it('Should render component with unfocused Icon', () => {
    const item: TabInfoTestType = {
      id: 0,
      focusedIcon: 'cube',
      unfocusedIcon: 'cube-outline',
    };

    const {getByTestId} = render(
      <TabIconItem
        id={item.id}
        color={GlobalStyles.colors.primary}
        focused={false}
        size={10}
        focusedIconName={item.focusedIcon}
        unfocusedIconName={item.unfocusedIcon}
      />,
    );

    expect(getByTestId('unfocusedIcon_0')).toBeTruthy();
  });
});
