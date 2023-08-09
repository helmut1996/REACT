import React from "react";

// IMPLEMENTACION DE CUSTOM HOOKS
function useLocalStorage(itemName,initialValue){
    // utilizando  localStorage
    let localStorageItem = localStorage.getItem(itemName)
    let parsedItem;
    
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem= JSON.parse(localStorageItem);
      
    }
    const [item,setItem]= React.useState(parsedItem);
    
    const SaveItemStorage = (newItem)=>{
      localStorage.setItem(itemName,JSON.stringify (newItem));
      setItem(newItem);
      };
    return [item,SaveItemStorage]
    }
    // IMPLEMENTACION DE CUSTOM HOOKS

    export {useLocalStorage}