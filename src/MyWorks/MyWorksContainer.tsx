import React from "react";
import {connect} from "react-redux";
import {MapDispatchToProps, MapStateToProps, MyWorks} from "./MyWorks";
import {RootStoreType} from "../state/store";
import { OwnPropsTypes} from "../Header/Header";
import {setWorksFilterAC} from "../state/mainPageReducer";

let mapStateToProps = (state: RootStoreType)=>{
    return{
        works: state.mainPage.works,
        filterValue: state.mainPage.filterValue
    }
}


export const MyWorksContainer = connect<MapStateToProps,MapDispatchToProps,OwnPropsTypes,RootStoreType>(mapStateToProps,{setWorksFilterAC})(MyWorks)
