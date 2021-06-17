onFilterChange = (value) => {
   this.setState(({ stateFilter }) => {
      return {
         stateFilter: value
      }
   });
 };

onToggleFilter = (e) => {
   const innerText = e.target.innerText.toLowerCase()
  
   this.setState(({ todoData }) => {
      if(innerText === 'all') {
         return todoData;
      } else if (innerText === 'active') { 
         return todoData.filter((item) => (!item.done))
      } else if (innerText === 'completed') {
         return todoData.filter((item) => (item.done))
      }

   })
}

// filterItems(todoData, stateFilter) {
//    // if (stateFilter === 'all') {
//    //   return todoData;
//    // } else if (stateFilter === 'active') {
//    //   return todoData.filter((item) => (!item.done));
//    // } else if (stateFilter === 'done') {
//    //   return todoData.filter((item) => toditemoData.done);
//    // }
//  }
// onToggleAll = (e) => {
   
//    this.setState(({ todoData }) => {
//       const allItem = todoData.filter((el) => el.label);
//       return {
//          todoData: allItem
//       }
//    })
// }

// onToggleActive = (e) => {   
//    console.log(e.target)   
//    // this.setState(({ todoData }) => {
//    //    return this.toggleFilter(todoData, true)
//    // })
// }

// onToggleCompleted = () => {      
//    this.setState(({ todoData }) => {
//       return this.toggleFilter(todoData, false)
//    })
// }

// onToggleFilter = (onToggleAll, onToggleActive, onToggleCompleted) => {
//    this.setState(( { todoData }) => {
//       if(onToggleActive)
//    })
// }
