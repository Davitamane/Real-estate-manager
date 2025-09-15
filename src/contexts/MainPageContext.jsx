import { createContext, useReducer, useState } from "react";

const initialState = {
  temp: {
    region: [],
    priceRange: [],
    area: [],
    bedrooms: [],
  },
  final: {
    region: [],
    priceRange: [],
    area: [],
    bedrooms: [],
  },
};

function filterReducer(state, action) {
  switch (action.type) {
    case "toggle_region": {
      const includes = state.temp.region.includes(action.payload);
      return {
        ...state,
        temp: {
          ...state.temp,
          region: includes
            ? state.temp.region.filter((region) => region != action.payload)
            : [...state.temp.region, action.payload],
        },
      };
    }

    case "toggle_bedrooms": {
      const includes = state.temp.bedrooms.includes(action.payload);
      return {
        ...state,
        temp: {
          ...state.temp,
          bedrooms: includes
            ? state.temp.bedrooms.filter((bedroom) => bedroom != action.payload)
            : [...state.temp.bedrooms, action.payload],
        },
      };
    }
 
    case "toggle_price": {
      console.log(action.payload[0], action.payload[1]);
      return {
        ...state,
      };
    }
    case "select": {
      return {
        ...state,
        final: { ...state.temp },
      };
    }
    case "reset": {
      return {
        ...state,
        temp: { ...state.final },
      };
    }
    default:
      return { ...state };
  }
}

export const MainPageContext = createContext();

function MainPageProvider({ children }) {
  const [open, setOpen] = useState("");
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  return (
    <MainPageContext.Provider value={{ open, setOpen, dispatch, filters }}>
      {children}
    </MainPageContext.Provider>
  );
}

export default MainPageProvider;
