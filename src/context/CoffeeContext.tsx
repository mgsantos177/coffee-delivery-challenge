import React, { createContext, useEffect, useState } from 'react';
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
  addAddress: (addressData: AddressData) => void;
  clearCart: () => void;
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

  useEffect(() => {
    const storedAddressAsJson = localStorage.getItem(
      '@coffee-delivery:address-state-1.0.0',
    );

    if (storedAddressAsJson) {
      const parsedData = JSON.parse(storedAddressAsJson);

      if (parsedData as AddressData) {
        setAddressData(parsedData);
      }
    }
  }, []);

  function addAddress(addressData: AddressData) {
    setAddressData(addressData);

    localStorage.setItem(
      '@coffee-delivery:address-state-1.0.0',
      JSON.stringify(addressData),
    );
  }

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

  function clearCart() {
    setCoffeeOnCart([]);
  }

  return (
    <CoffeeContext.Provider
      value={{
        addCoffeeOnCart,
        clearCart,
        coffeeOnCart,
        removeCoffeeFromCart,
        updateCoffeeAmount,
        addressData,
        addAddress,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
