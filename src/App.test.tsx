import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('demo', () => {
  expect(true).toBe(true);
});

describe('render', () => {
  test('renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
