import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../Store/store";

export const useTypeSelector:TypedUseSelectorHook<RootState>=useSelector