import React, { Component } from "react";
import { TodoConsumer } from "./Todos";
import { Input } from "reactstrap";

const TextEdit = ({ text, changeEditMode, changeEditModeOnEnter }) => (
    <TodoConsumer>
            {({ editItem }) => <Input onKeyDown={(e)=>changeEditModeOnEnter(e, editItem)} onDoubleClick={(e) => changeEditMode(e)} className={'col-6'} type="text" defaultValue={text} />}
    </TodoConsumer>
);

const Text = ({ text, changeEditMode }) => (
    <TodoConsumer>
        {() => <div className={'col-6'}>
            <div onDoubleClick={changeEditMode}>
                {text}
            </div>
        </div>}
    </TodoConsumer>
);


class TextItem extends Component {
    state = {
        isInEditMode: false
    }

    changeEditMode = (e) => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    changeEditModeOnEnter = (e, editItem) => {
        if (e.key === 'Enter') {
            editItem(e)
            this.setState({
                isInEditMode: !this.state.isInEditMode
            })
        }

    }

    render() {
        const { text } = this.props
        return this.state.isInEditMode ?
            <TextEdit className={'col-6'}
                type="text"
                text={text}
                changeEditMode={this.changeEditMode}
                changeEditModeOnEnter={this.changeEditModeOnEnter} 
                />
            :
            <Text className={'col-6'} text={text} changeEditMode={this.changeEditMode} />
    }
}

export default TextItem;
