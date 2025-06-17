import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../../../components/ui/button'

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click me</Button>)
    
    const buttonElement = screen.getByRole('button', { name: /click me/i })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Click me')
  })

  test('applies default variant classes', () => {
    render(<Button>Default Button</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('bg-primary', 'text-primary-foreground')
  })

  test('applies outline variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>)
    
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('border', 'border-input', 'bg-background')
  })

  test('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    
    const buttonElement = screen.getByRole('button')
    buttonElement.click()
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})