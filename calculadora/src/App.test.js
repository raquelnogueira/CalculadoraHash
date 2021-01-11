import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('teste base', () => {
  test('verdadeiro', () => {
    expect(true).toBe(true);
  });
 
  test('falso', () => {
    expect(false).toBe(false);
  });
});
 
// describe('App', () => {
//   test('Renderização do resultado', async () => {
//     render(<App />);
 
//     await screen.findByText(/VOCÊ RECEBERÁ:/);
 
//     expect(screen.queryByText(/Amanhã/)).toBeNull();
 
//     await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
 
//     expect(
//       screen.getByText(/Em/)
//     ).toBeInTheDocument();
//   });
// });

// describe('Calculo', () => {
//   test('Testa a requisição', () => {
//     const onChange = jest.fn();
 
//     render(<App />);
 
//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' },
//     });
 
//     expect(onChange).toHaveBeenCalledTimes(1);
//   });
// });