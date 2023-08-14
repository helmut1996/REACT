import React from "react";

// IMPLEMENTACION DE CUSTOM HOOKS
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
      setTimeout(()=>{
        try {
          // utilizando  localStorage
          let localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, 
              JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(error);
        }


      },2000)
  }, []);

  const SaveItemStorage = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, SaveItemStorage, error, loading };
}
// IMPLEMENTACION DE CUSTOM HOOKS

export { useLocalStorage };
