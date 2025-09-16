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
    case "pop_region": {
      return {
        ...state,
        final: {
          ...state.final,
          region: state.final.region.filter((el) => el !== action.payload),
        },
      };
    }

    case "toggle_price": {
      return {
        ...state,
        final: {
          ...state.final,
          priceRange: action.payload,
        },
      };
    }
    case "pop_price": {
      return {
        ...state,
        final: {
          ...state.final,
          priceRange: [],
        },
      };
    }

    case "toggle_area": {
      return {
        ...state,
        final: {
          ...state.final,
          area: action.payload,
        },
      };
    }
    case "pop_area": {
      return {
        ...state,
        final: {
          ...state.final,
          area: [],
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
    case "pop_bedrooms": {
      return {
        ...state,
        final: {
          ...state.final,
          bedrooms: state.final.bedrooms.filter((el) => el !== action.payload),
        },
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
    case "empty": {
      return {
        temp: { ...initialState.temp },
        final: { ...initialState.final },
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
