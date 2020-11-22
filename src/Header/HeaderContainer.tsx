import React from "react";
import {connect} from "react-redux";
import {RootStoreType} from "../state/store";
import {Dispatch} from "redux";
import {openItemsAC} from "../state/mainPageReducer";
import {Header, MapDispatchToPropsTypes, MapStateToPropsTypes, OwnPropsTypes} from "./Header";

let mapStateToProps = (state: RootStoreType) => {
    return {
        open: state.mainPage.openMenu
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        openItemsOnClick: () => {
            dispatch(openItemsAC())
        },

    };
}

export const HeaderContainer = connect<MapStateToPropsTypes, MapDispatchToPropsTypes, OwnPropsTypes, RootStoreType>(mapStateToProps, mapDispatchToProps)(Header);