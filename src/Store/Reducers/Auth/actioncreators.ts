import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./AuthTypes";
import {IUser} from "../../../Models/Models";
import {AppDispatch} from "../../store";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const url='https://localhost:7076/api/Users'
            const users= await axios.get<IUser[]>(url)
            const loginUser=users.data.find(user=>user.password===password && user.name===username)

            if(loginUser){
                console.log("мы тут")
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', loginUser.name);
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(loginUser));
            }
            else{
                console.log("или тут")
                dispatch(AuthActionCreators.setError('ошибка неверный логин или пароль'))
            }
            dispatch(AuthActionCreators.setIsLoading(false));
            //console.log(users)
        }

         catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}