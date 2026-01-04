import ProductCard from '.././src/components/ProductCard'
import { render, screen } from '@testing-library/react'

describe('ProductCard component', () => {
  test('affiche le nom et le prix du produit passé en props', () => {
    const item = {
      id: "85ds2f5ssdds5",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcedQOqZ03m4heMg7EZvSLGD6f05rkp18nVg&s",
      name: "Pizza pepperoni",
      isAvailable: true,
      price: 19.99,
    }

    render(<ProductCard item={item} addToCart={() => {}} />)

    // Vérifier le nom
    expect(screen.getByText('Pizza pepperoni')).toBeInTheDocument()

    // Vérifier le prix 
      expect(
      screen.getByText((content) => content.includes('19.99'))
    ).toBeInTheDocument()
  })
})
