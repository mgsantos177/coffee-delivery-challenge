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
  removeCoffeeFromCart: (id: string) => void;
  updateCoffeeAmount: (id: string, amount: number) => void;
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

  function removeCoffeeFromCart(id: string) {
    setCoffeeOnCart((state) => state.filter((coffee) => coffee.id !== id));
  }

  function updateCoffeeAmount(id: string, amount: number) {
    setCoffeeOnCart((state) => {
      return state.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, amount };
        } else {
          return coffee;
        }
      });
    });
  }

  return (
    <CoffeeContext.Provider
      value={{
        addCoffeeOnCart,
        coffeeOnCart,
        removeCoffeeFromCart,
        updateCoffeeAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
