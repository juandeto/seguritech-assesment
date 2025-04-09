import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubHeader from '../SubHeader';

describe('SubHeader', () => {
  it('renders the title correctly', () => {
    render(<SubHeader title="Test Title" />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Test Title');
  });
  
  it('has the correct styling', () => {
    render(<SubHeader title="Test Title" />);
    
    const container = screen.getByText('Test Title').closest('div');
    expect(container).toHaveStyle({
      'background-color': '#414141',
      'color': 'white'
    });
    
    const heading = screen.getByRole('heading');
    expect(heading).toHaveStyle({
      'margin': '0',
      'font-size': '24px'
    });
  });
});
