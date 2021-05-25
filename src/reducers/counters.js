export default (state = {sum:0, selectedMenus:[]}, action) => {
  let nstate = {
    ...state
};
console.log(nstate);
  let inde = nstate.selectedMenus.findIndex((element) => element.id === action.id);
    switch (action.type) {
      case 'ADD':
        console.log(action);
        if(inde > -1)
          nstate.selectedMenus[inde].number = nstate.selectedMenus[inde].number + 1;
        else{
            nstate.selectedMenus.push({id: action.id, number:1, cost: action.cost})
        }
        nstate.sum = nstate.sum + action.cost;
        return nstate;
      case 'REDUCE':
        if(inde > -1){
        nstate.sum = nstate.sum - nstate.selectedMenus[inde].cost;
        if(nstate.selectedMenus[inde].number==1){
          nstate.selectedMenus.splice(inde, 1);
        }
        else{
            nstate.selectedMenus[inde].number = nstate.selectedMenus[inde].number - 1;
        }
      }
        return nstate;
      case 'REMOVE':
        if(inde > -1){
        nstate.sum = nstate.sum - nstate.selectedMenus[inde].number * nstate.selectedMenus[inde].cost;
        nstate.selectedMenus.splice(inde, 1);
        }
        return nstate
      default:
        return state
    }
  }