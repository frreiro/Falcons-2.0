import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';

import Tabs from '..';

describe('Tabs', () => {
  it('Should render component', () => {
    render(<Tabs />);
  });

  describe('change routes', () => {
    it('Should change the route to RA', () => {
      const {getByTestId} = render(<Tabs />);

      const IconRAelement = getByTestId('unfocusedIcon_0');
      fireEvent.press(IconRAelement);

      const RATitle = screen.getByText(/peças/i);

      expect(RATitle).toBeTruthy();
    });

    it('Should change the route to Home', () => {
      const {getByTestId} = render(<Tabs />);

      const IconRAelement = getByTestId('unfocusedIcon_1');
      fireEvent.press(IconRAelement);

      const HomeTitle = screen.getByText(/falcons/i);

      expect(HomeTitle).toBeTruthy();
    });

    it('Should change the route to Document', () => {
      const {getByTestId} = render(<Tabs />);

      const IconRAelement = getByTestId('unfocusedIcon_2');
      fireEvent.press(IconRAelement);

      const DocTitle = screen.getByText(/documentos/i);

      expect(DocTitle).toBeTruthy();
    });
  });
});
