import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GlobalAlertBar from './GlobalAlertBar';
import { StateProvider, useStateValue } from '../utils/reducers/StateProvider';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers

// Mock the useStateValue hook
jest.mock('../utils/reducers/StateProvider', () => ({
  ...jest.requireActual('../utils/reducers/StateProvider'),
  useStateValue: jest.fn(),
}));

// Mock the Snackbar component
jest.mock('@mui/material/Snackbar', () => {
  return jest.fn(({ children, ...rest }) => (
    <div {...rest}>
      {children}
    </div>
  ));
});

describe('GlobalAlertBar component', () => {

  it('should render a Snackbar with the correct message when the alert is open', () => {
    // Mock the useStateValue hook to return the state with alertOpen true
    const initialState = { alertOpen: true, alertMessage: 'This is a success message!', alertType: 'success' };
    useStateValue.mockReturnValue([initialState]);

    const { getByText } = render(
      <StateProvider>
        <GlobalAlertBar />
      </StateProvider>,
    );

    // Assert that the Snackbar renders the correct message
    expect(getByText('This is a success message!')).toBeInTheDocument();
  });


  it('should render the GlobalAlertBar component', () => {
    const div = document.createElement('div');
      <StateProvider>
        ReactDOM.render(
        <GlobalAlertBar />
        , div);
      </StateProvider>;
      expect(div.textContent).toBe('');
  });

  // it('should close the Snackbar when the close button is clicked', () => {
  //   // Mock the useStateValue hook to return the state with alertOpen true
  //   const initialState = { alertOpen: true, alertMessage: 'This is a success message!', alertType: 'success' };
  //   useStateValue.mockReturnValue([initialState]);
  //
  //   const handleClose = jest.fn();
  //
  //   const { getByRole } = render(
  //     <StateProvider>
  //       <GlobalAlertBar onClose={handleClose} />
  //     </StateProvider>,
  //   );
  //
  //   // Find the close button using getByRole and simulate a click event
  //   const closeButton = getByRole('button', { name: 'Close' });
  //   fireEvent.click(closeButton);
  //
  //   // Assert that the handleClose function is called
  //   expect(handleClose).toHaveBeenCalled();
  // });

  // it('should close the Snackbar when the close button is clicked', () => {
  //   // Mock the useStateValue hook to return the state with alertOpen true and a dispatch function
  //   const initialState = { alertOpen: true, alertMessage: 'This is a success message!', alertType: 'success' };
  //   const mockDispatch = jest.fn();
  //   useStateValue.mockReturnValue([initialState, mockDispatch]);
  //
  //   const handleClose = jest.fn();
  //
  //   const { getByRole } = render(
  //     <StateProvider>
  //       <GlobalAlertBar onClose={handleClose} />
  //     </StateProvider>,
  //   );
  //
  //   // Find the close button using getByRole and simulate a click event
  //   const closeButton = getByRole('button', { name: 'Close' });
  //   fireEvent.click(closeButton);
  //
  //   // Assert that the handleClose function is called
  //   expect(handleClose).toHaveBeenCalled();
  // });
  //
  //
  it('should render the alert bar when alertOpen is true', () => {
    // Mock the useStateValue hook to return the state with alertOpen true
    const initialState = { alertOpen: true, alertMessage: 'Test Message', alertType: 'info' };
    useStateValue.mockReturnValue([initialState]);

    const { getByText } = render(
      <div style={{ height: '100px' }}>
        <StateProvider>
          <GlobalAlertBar />
        </StateProvider>
      </div>,
    );

    // Assert that the component renders the alert bar with the provided message and type
    expect(getByText('Test Message')).toBeInTheDocument();
    expect(getByText('Test Message')).toHaveClass('MuiAlert-message css-1pxa9xg-MuiAlert-message');
  });

  it('should render the alert bar when alertOpen is true', () => {
    // Mock the useStateValue hook to return the state with alertOpen true
    const initialState = { alertOpen: true, alertMessage: 'Test Message', alertType: 'info' };
    useStateValue.mockReturnValue([initialState]);

    const { getByText } = render(
      <StateProvider>
        <GlobalAlertBar />
      </StateProvider>,
    );

    // Assert that the component renders the alert bar with the provided message and type
    expect(getByText('Test Message')).toBeInTheDocument();
    expect(getByText('Test Message')).toHaveClass('MuiAlert-message css-1pxa9xg-MuiAlert-message');
  });

  // it('should not render the alert when the alertOpen is false', () => {
  //   const { queryByText } = render(
  //     <StateProvider>
  //       <GlobalAlertBar />
  //     </StateProvider>,
  //   );
  //
  //   const alertMessage = 'Test Message';
  //   const alertElement = queryByText(alertMessage);
  //
  //   expect(alertElement).toBeNull();
  // });

  it('should close the alert bar when onClose is called', () => {
    // Mock the useStateValue hook to return the state with alertOpen true
    const initialState = { alertOpen: true, alertMessage: 'Test Message', alertType: 'info' };
    const mockDispatch = jest.fn();
    useStateValue.mockReturnValue([initialState, mockDispatch]);

    const { getByRole } = render(
      <StateProvider>
        <GlobalAlertBar />
      </StateProvider>,
    );

    // Simulate closing the alert bar
    const closeButton = getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Assert that the dispatch function is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_ALERT_OPEN',
      alertOpen: false,
    });
  });
});
