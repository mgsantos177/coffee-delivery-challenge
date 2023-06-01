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

interface AddressData {
  complement?: string | undefined;
  number: string;
  cep: string;
  street: string;
  district: string;
  city: string;
  UF: string;
  paymentOption: 'credit-card' | 'debit-card' | 'cash';
}

interface CoffeeContextType {
  addCoffeeOnCart: (availableCoffee: ICoffee, amount: number) => void;
  removeCoffeeFromCart: (id: string) => void;
  updateCoffeeAmount: (id: string, amount: number) => void;
  coffeeOnCart: ICoffeeOnCart[];
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface ICoffeeContextProvider {
  children: React.ReactNode;
}

export function CoffeeContextProvider({ children }: ICoffeeContextProvider) {
  const [coffeeOnCart, setCoffeeOnCart] = useState<ICoffeeOnCart[]>([]);

  const [addressData, setAddressData] = useState<AddressData>({
    cep: '',
    city: '',
    district: '',
    number: '',
    paymentOption: 'credit-card',
    street: '',
    UF: '',
    complement: '',
  });

  function addCoffeeOnCart(coffee: ICoffee, amount: number) {
    const coffeeIndex = coffeeOnCart.findIndex(
      (coffeeOnCart) => coffeeOnCart.id === coffee.id,
    );

    if (coffeeIndex !== -1) {
      setCoffeeOnCart((state) => {
        const addNewCoffee = state.map((coffee, index) => {
          if (index === coffeeIndex) {
            return {
              ...coffee,
              amount: coffee.amount + amount,
            };
          }
          return coffee;
        });

        return addNewCoffee;
      });
    } else {
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
        addressData,
        setAddressData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
