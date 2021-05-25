export default (state = {sum:0, selectedMenus:{}}, action) => {
  let nstate = {
    ...state
};
    switch (action.type) {
      case 'ADD':
        console.log(action);
        if(action.id in state.selectedMenus)
        nstate.selectedMenus[action.id].number = nstate.selectedMenus[action.id].number + 1;
        else{
            nstate.selectedMenus[action.id] = {number:1, cost: action.cost}
            //nstate.selectedMenus[action.id].number = 1;
            //nstate.selectedMenus[action.id].cost = action.cost;
        }
        nstate.sum = nstate.sum + action.cost;
        return nstate;
      case 'REDUCE':
        nstate.sum = nstate.sum - nstate.selectedMenus[action.id].cost;

        if(nstate.selectedMenus[action.id].number==1){
            delete nstate.selectedMenus[action.id];
        }
        else{
            nstate.selectedMenus[action.id].number = nstate.selectedMenus[action.id].number - 1;
        }
        return nstate;
      case 'REMOVE':
        nstate.sum = nstate.sum - nstate.selectedMenus[action.id].number * nstate.selectedMenus[action.id].cost;
        delete nstate.selectedMenus[action.id];
        return nstate
      default:
        return state
    }
  }