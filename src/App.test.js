import { render, screen } from '@testing-library/react';
import App from './App';
import { data as MENU_ITEMS } from '../fixtures/menuItems.json'

it('should show the title, price, and description of a menu item when rendered', () => {
  // Arrange
  const expectedMenuItems = [MENU_ITEMS[0]]
  
  render(<App items={expectedMenuItems}/>)

  // Act

  // Assert
  expect(screen.getByText(expectedMenuItems[0].title)).not.toBeNull()
  expect(screen.getByText(expectedMenuItems[0].price)).not.toBeNull()
  expect(screen.getByText(expectedMenuItems[0].description)).not.toBeNull()
})

it('should display multiple menu items when multiple menu items are returned from the API', () => {
  // Arrange
  const expectedMenuItems = MENU_ITEMS
  render(<App items={expectedMenuItems}/>)

  // Act

  // Assert
  expectedMenuItems.forEach(item => {
    expect(screen.getByText(item.title)).not.toBeNull()
    expect(screen.getByText(item.price)).not.toBeNull()
    expect(screen.getByText(item.description)).not.toBeNull()
  })
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
