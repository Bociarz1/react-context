import React, {Component} from 'react'
import ChildrenComponent from "./ChildrenComponent"

class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <>
        <ChildrenComponent />
      </>
     );
  }
}
 
export default ParentComponent;