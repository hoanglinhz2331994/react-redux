import React, { Component } from 'react';
import {connect} from 'react-redux';

class News extends Component {
    // userEditStatusStore = () =>{
    //     // var dispatch = this.props.dispatch;
    //     //Hoac
    //     var {dispatch} = this.props;
    //     dispatch({type:'CHANGE_EDIT_STATUS'})
    // }
    render() {
        return (
            <div>
                <h2>Đây là component Thêm mới</h2>
                <button onClick={() => this.props.userEditStatusStore()}>Click di</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dulieuNews: state.giatri
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userEditStatusStore: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);