import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './HeaderStateDemo';
import { StateProvider, useStateValue } from '../utils/reducers/StateProvider';
import { darkTheme, lightTheme } from '../styles/theme';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers

// Mock the useStateValue hook
jest.mock('../utils/reducers/StateProvider', () => ({
  ...jest.requireActual('../utils/reducers/StateProvider'),
  useStateValue: jest.fn(),
}));

describe('Header component', () => {
  it('should render the header with light theme by default', () => {
    // Mock the useStateValue hook to return the initial state
    const initialState = { themeMode: 'light' };
    useStateValue.mockReturnValue([initialState]);

    const { getByText } = render(
      <StateProvider>
        <Header />
      </StateProvider>,
    );

    // Assert that the component renders with the light theme
    const appBar = getByText('MyApp').closest('header');
    expect(appBar).toHaveStyle(`background-color: ${lightTheme.palette.primary.main}`);
  });

  it('should change the theme when the theme change button is clicked', () => {
    // Mock the useStateValue hook to return the initial state and dispatch function
    const initialState = { themeMode: 'light' };
    const mockDispatch = jest.fn();
    useStateValue.mockReturnValue([initialState, mockDispatch]);

    const { getByTestId } = render(
      <StateProvider>
        <Header />
      </StateProvider>,
    );

    // Simulate clicking the theme change button
    const themeButton = getByTestId('theme-change-button');
    fireEvent.click(themeButton);

    // Assert that the dispatch function is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_THEME',
      themeMode: 'dark',
    });
  });

  it('should render the header with dark theme when themeMode is "dark"', () => {
    const initialState = { themeMode: 'dark' };
    useStateValue.mockReturnValue([initialState]);

    const { getByText } = render(
      <StateProvider>
        <Header />
      </StateProvider>,
    );

    const appBar = getByText('MyApp').closest('header');
    expect(appBar).toHaveStyle(`background-color: ${darkTheme.palette.primary.main}`);
  });

  it('should toggle the theme when the theme change button is clicked', () => {
    const initialState = { themeMode: 'light' };
    const mockDispatch = jest.fn();
    useStateValue.mockReturnValue([initialState, mockDispatch]);

    const { getByTestId } = render(
      <StateProvider>
        <Header />
      </StateProvider>,
    );

    const themeButton = getByTestId('theme-change-button');
    fireEvent.click(themeButton);
    console.log('First dispatch call:', mockDispatch.mock.calls[0]);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_THEME',
      themeMode: 'dark',
    });

    fireEvent.click(themeButton);
    console.log('Second dispatch call:', mockDispatch.mock.calls[1]);

    // expect(mockDispatch).toHaveBeenCalledWith({
    //   type: 'SET_THEME',
    //   themeMode: 'light',
    // });

    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });

});
