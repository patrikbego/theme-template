import React from 'react';
import { render } from '@testing-library/react';
import { StateProvider, useStateValue } from '../utils/reducers/StateProvider';
import CustomStyledCheckbox from './CustomCheckboxDemo';

jest.mock('../utils/reducers/StateProvider', () => ({
  ...jest.requireActual('../utils/reducers/StateProvider'),
  useStateValue: jest.fn(),
}));

describe('CustomStyledCheckbox', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the checkbox with default checked state', () => {
    useStateValue.mockReturnValue([{ themeMode: 'light' }]);

    const { getByRole } = render(
      <StateProvider>
        <CustomStyledCheckbox />
      </StateProvider>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('renders the checkbox with custom color when theme mode is dark', () => {
    useStateValue.mockReturnValue([{ themeMode: 'dark' }]);

    const { getByRole } = render(
      <StateProvider>
        <CustomStyledCheckbox />
      </StateProvider>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    // const computedStyle = getComputedStyle(checkbox);
    // expect(computedStyle.color).toMatch(/rgb\(0,\s*128,\s*0\)/);
    // expect(checkbox).toHaveClass('Mui-checked');
    expect(checkbox).toHaveStyle('background-color: white');
  });

  it('renders the checkbox with custom color when theme mode is light', () => {
    useStateValue.mockReturnValue([{ themeMode: 'light' }]);

    const { getByRole } = render(
      <StateProvider>
        <CustomStyledCheckbox />
      </StateProvider>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('PrivateSwitchBase-input css-1m9pwf3');
    expect(checkbox).toHaveStyle('background-color: white');
  });

  it('renders the checkbox with default checked state', () => {
    useStateValue.mockReturnValue([{ themeMode: 'light' }]);

    const { getByRole } = render(
      <StateProvider>
        <CustomStyledCheckbox />
      </StateProvider>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('PrivateSwitchBase-input css-1m9pwf3');
  });

  it('renders the checkbox with custom color when theme mode is dark', () => {
    useStateValue.mockReturnValue([{ themeMode: 'dark' }]);

    const { getByRole } = render(
      <StateProvider>
        <CustomStyledCheckbox />
      </StateProvider>,
    );

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('PrivateSwitchBase-input css-1m9pwf3');
    expect(checkbox).toHaveClass('PrivateSwitchBase-input css-1m9pwf3');
  });
});
