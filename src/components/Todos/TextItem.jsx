import React, { Component } from "react";
import { TodoConsumer } from "./Todos";


const Text = ({ text, changeEditMode }) => (
    <TodoConsumer>
      {() => <div onDoubleClick={changeEditMode}>
        {text}
      </div>}
    </TodoConsumer>
  );

class TextItem extends Component {
    state = {
      isInEditMode: false
    }
  
    render() {
      const { text } = this.props
        return <Text text={text} />
    }
  }
  
  export default TextItem;
  