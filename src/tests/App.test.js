import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockFetch from '../../cypress/mocks/fetch'
import userEvent from '@testing-library/user-event';

describe('Testando a aplicação', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch)
  });

  afterEach(() => {
    jest.clearAllMocks()
  });

  it('filtros existem', async () => {
    render(<App/>);

    const name = await screen.findByTestId("name-filter");
    const column = await screen.findByTestId("column-filter");
    const comparison = await screen.findByTestId('comparison-filter');
    const value = await screen.findByTestId('value-filter');    
    const button = await screen.findByTestId('button-filter');

    expect(name).toBeInTheDocument();
    expect(column).toBeInTheDocument();
    expect(comparison).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(button).toBeInTheDocument();
 });

 test('Testa filtro menor que', async () => {
     render(<App/>)

    const name = await screen.findByTestId("name-filter");
    const column = await screen.findByTestId("column-filter");
    const comparison = await screen.findByTestId('comparison-filter');
    const value = await screen.findByTestId('value-filter');    
    const button = await screen.findByTestId('button-filter');

    userEvent.type(name, 'tatoo' );
    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(comparison, 'menor que');
    userEvent.type(value, '24');
    userEvent.click(button);

    expect(screen.getByText('tatoo')).toBeInTheDocument();
 })
 test('Testa filtro igual a', async () => {
  render(<App/>)

    const name = await screen.findByTestId("name-filter");
    const column = await screen.findByTestId("column-filter");
    const comparison = await screen.findByTestId('comparison-filter');
    const value = await screen.findByTestId('value-filter');    
    const button = await screen.findByTestId('button-filter');

    userEvent.type(name, 'tatoo' );
    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(comparison, 'igual a');
    userEvent.type(value, '23');
    userEvent.click(button);

    expect(screen.getByText('tatoo')).toBeInTheDocument();
})
test('testa filtro maior que', async () => {
  render(<App/>)

    const name = await screen.findByTestId("name-filter");
    const column = await screen.findByTestId("column-filter");
    const comparison = await screen.findByTestId('comparison-filter');
    const value = await screen.findByTestId('value-filter');    
    const button = await screen.findByTestId('button-filter');

    userEvent.type(name, 'tatoo' );
    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(comparison, 'maior que');
    userEvent.type(value, '22');
    userEvent.click(button);

    expect(screen.getByText('tatoo')).toBeInTheDocument();
})
})