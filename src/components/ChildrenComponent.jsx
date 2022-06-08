import React, {Component} from "react"
import { UserConsumer } from "./userContext";

class ChildrenComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <UserConsumer >
        {contextStore => { 
          return(
            <>
              {contextStore.text}
            </>
          )
        }}
      </UserConsumer>
     );
  }
}
 
export default ChildrenComponent;