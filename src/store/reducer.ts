const initState = {
  coisa: ["Lavinia", "Linda", "Maravilhosa", "Inteligente", "Amor"],
};

// TODO: Create type action
export default function reducer(state = initState, action: any) {
  if (action.type === "ADD") {
    return { ...state, coisa: [...state.coisa, action.payload] };
  }
  if (action.type === "GENERATE") {
    return { ...state, coisa: [...state.coisa, action.payload] };
  }
  return state;
}
