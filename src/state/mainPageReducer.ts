import sckyScraper from "../assets/img/skyscraper.png";
import rp from "../assets/img/RP.png";
import mobApp from "../assets/img/mobApp.png";
import Coffee from "../assets/img/coffe.jpg";
import Garlic from "../assets/img/pizza.jpg";
import mainScreen from "../assets/img/mainScreen.jpg";
import lama from "../assets/img/lama325.jpg";
import colab from "../assets/img/colab.png";


const OPEN_ITEMS = "OPEN_ITEMS";
const SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER";
const SET_VALUE_INPUT = "SET_VALUE_INPUT";

export type WorksType = {
    id: number, title: string, img: string, address: string, spa: boolean, effect:string
}

export type FormIdType = "name" | "email" | "textarea";

type initialStateType = {
    filterValue: FilterValueType
    openMenu: boolean
    works: Array<WorksType>,
    form: { name: string, email: string, message: string }

}
export type FilterValueType = "all" | "website" | "spa"
type OpenItemsAcType = {
    type: "OPEN_ITEMS";
}
type SetWorksFilter = {
    type: "SET_ACTIVE_FILTER"
    filterValue: FilterValueType
}
type SetValueInputType = {
    type: "SET_VALUE_INPUT"
    valueInput: string
    id: FormIdType
}

export type ActionsType = OpenItemsAcType | SetWorksFilter | SetValueInputType;

const initialState: initialStateType = {
    filterValue: "all",
    openMenu: false,
    works: [
        {id: 1, title: "SkyScraper", img: sckyScraper, address: "https://www.figma.com/file/Kv0iDgdP8ON0SScifyTRFl/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-1?node-id=0%3A1", spa: false, effect:"fade-down-left"},
        {id: 2, title: "RP", img: rp, address: "https://www.figma.com/file/eu5FKAsiZ1bzsvC9HGHp14/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-2?node-id=0%3A1", spa: false, effect:"fade-up"},
        {id: 3, title: "Colab", img: colab, address: "https://www.figma.com/file/u6siQpNAcCq123BigjxHP0/%D0%9A%D0%BE%D0%B2%D0%BE%D1%80%D0%BA%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D1%81%D0%B5%D1%82%D1%8C-OfficeCube?node-id=26%3A395", spa: false, effect:"fade-up-right"},
        {id: 4, title: "Coffee", img: Coffee, address: "/coffee", spa: false, effect:"fade-right"},
        {id: 5, title: "Garlic", img: Garlic, address: "/garlic", spa: false, effect:"fade-up-right"},
        {id: 6, title: "Main Screens", img: mainScreen, address: "/screens", spa: false, effect:"zoom-in"},
        {id: 7, title: "Lama", img: lama, address: "/lama", spa: false, effect:"fade-down-left"},
        {id: 8, title: "Play", img: mobApp, address: "https://www.figma.com/file/XAC2oXkL5ap05RGRgLFEjA/%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5?node-id=0%3A1", spa: true, effect:"fade-down"},

    ],
    form: {
        name: "", email: "", message: ""
    }
}
export const mainPageReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case OPEN_ITEMS:
            return {
                ...state, openMenu: !state.openMenu
            }
        case SET_ACTIVE_FILTER:
            return {
                ...state, filterValue: action.filterValue
            }
        case SET_VALUE_INPUT:
            if (action.id === "name") return {...state, form: {...state.form, name: action.valueInput}}
            if (action.id === "email") return {...state, form: {...state.form, email: action.valueInput}}
            if (action.id === "textarea") return {...state, form: {...state.form, message: action.valueInput}}
            return state
        default:
            return state
    }

}

export const openItemsAC = (): OpenItemsAcType => {
    return {type: OPEN_ITEMS}
}
export const setWorksFilterAC = (filterValue: FilterValueType): SetWorksFilter => {
    return {type: SET_ACTIVE_FILTER, filterValue}
}
export const setInputValueAC = (valueInput: string, id: "name" | "email" | "textarea"): SetValueInputType => {
    return {type: SET_VALUE_INPUT, valueInput, id}
}