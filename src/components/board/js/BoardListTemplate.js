import React from 'react';
import '../css/BoardListTemplate.css';
// import React,{useEffect}, {useState} from "react"
// import * as boardsApi from "../../../api/board";

const BoardListTemplate = (props) => {
    // const [state, setState] = useState("초기확값");
    // useEffect(()=>{
    //     callBoardList = async () => {
    //
    //         await boardsApi.getBoards({size: 100}).then(function (response) {
    //                 setState({
    //                     boards: response.data._embedded.boardList
    //                 })
    //             }
    //         ).catch(e => {
    //             console.log(e)
    //         });
    //     }
    // },[]);
    return (
        <main className="board-list-template">
            <div className="title">
                Board
            </div>
            <section className="form-wrapper">
                { props.form }
            </section>
            <section className="form-wrapper">
                { props.table }
            </section>
        </main>
    );
};

export default BoardListTemplate;