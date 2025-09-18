// Testes unitários para ScrollAnimations
const ScrollAnimations = require('../js/script.js');

describe('ScrollAnimations', () => {
  // Mock do elemento
  const mockElement = {
    classList: {
      add: jest.fn(),
      remove: jest.fn()
    },
    getBoundingClientRect: jest.fn(() => ({
      top: 100
    }))
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isElementVisible', () => {
    test('deve retornar true quando elemento está visível', () => {
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 800,
      });
      
      mockElement.getBoundingClientRect.mockReturnValue({ top: 100 });
      
      const result = ScrollAnimations.isElementVisible(mockElement, 100);
      
      expect(result).toBe(true);
    });

    test('deve retornar false quando elemento não está visível', () => {
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 800,
      });
      
      mockElement.getBoundingClientRect.mockReturnValue({ top: 900 });
      
      const result = ScrollAnimations.isElementVisible(mockElement, 100);
      
      expect(result).toBe(false);
    });

    test('deve retornar false quando elemento é null', () => {
      const result = ScrollAnimations.isElementVisible(null);
      
      expect(result).toBe(false);
    });

    test('deve usar threshold personalizado', () => {
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 800,
      });
      
      mockElement.getBoundingClientRect.mockReturnValue({ top: 700 });
      
      const result = ScrollAnimations.isElementVisible(mockElement, 50);
      
      expect(result).toBe(true);
    });
  });

  describe('Funções de validação', () => {
    test('deve validar se elemento existe antes de manipular', () => {
      const result1 = ScrollAnimations.addActiveClass(null);
      const result2 = ScrollAnimations.removeActiveClass(null);
      
      expect(result1).toBeUndefined();
      expect(result2).toBeUndefined();
    });
  });
});