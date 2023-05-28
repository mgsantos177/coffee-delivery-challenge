import React, { createContext, useState } from 'react';
import { ICoffee } from '../pages/Home/components/CoffeeCard';

export interface ICoffeeOnCart {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  tagList: string[];
  amount: number;
}

interface CoffeeContextType {
  addCoffeeOnCart: (availableCoffee: ICoffee, amount: number) => void;
  coffeeOnCart: ICoffeeOnCart[];
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface ICoffeeContextProvider {
  children: React.ReactNode;
}

export function CoffeeContextProvider({ children }: ICoffeeContextProvider) {
  const [coffeeOnCart, setCoffeeOnCart] = useState<ICoffeeOnCart[]>([]);

  function addCoffeeOnCart(coffee: ICoffee, amount: number) {
    setCoffeeOnCart((state) => {
      const addNewCoffee = [
        {
          ...coffee,
          amount,
        },
        ...state,
      ];

      return addNewCoffee;
    });
  }

  return (
    <CoffeeContext.Provider value={{ addCoffeeOnCart, coffeeOnCart }}>
      {children}
    </CoffeeContext.Provider>
  );
}
