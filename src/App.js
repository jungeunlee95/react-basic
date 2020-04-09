import React, {Component} from 'react';
import BoardListTemplate from './components/board/js/BoardListTemplate';
import BoardList from './components/board/js/BoardList';
import BoardCreateForm from './components/board/js/BoardCreateForm';

import * as boardsApi from './api/board'

class App extends Component {

    state = {
        boards: []
    }

    callBoardList = async () => {
        const obj = this
        await boardsApi.getBoards({size: 100}).then(function (response) {
                obj.setState({
                    boards: response.data._embedded.boardList
                })
            }
        ).catch(e => {
            console.log(e)
        });
    }

    componentDidMount() {
        this.callBoardList()
    }

    render() {
        return (
            <BoardListTemplate table={<BoardList boards={this.state.boards}/>} form={<BoardCreateForm/>}>
                BoardListTemplate
            </BoardListTemplate>

        );
    }
}

export default App;