import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '..';

describe('Header', () => {
  it('Should render component', () => {
    render(<Header title={'Hi'} />);
  });

  it('Should render component with a title "Hello"', () => {
    const title = 'Hello';
    const {getByText} = render(<Header title={title} />);
    const elementText = getByText(title);

    expect(elementText).toBeTruthy();
  });
});
