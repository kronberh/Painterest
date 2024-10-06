import { createSlice } from "@reduxjs/toolkit";
import { Image } from "../model/Image";
import { Action } from "../model/Action";

const initialState: Image[] = [];

const imagesSlice: any = createSlice({
    name: "images",
    initialState,
    reducers: {
        addImage: (state: any, action: Action) => {
            const newImage: Image = {
                id: Date.now(),
                author: action.payload.author,
                title: action.payload.title,
                data: action.payload.data,
                tags: action.payload.tags,
                likes: []
            };
            state.push(newImage)
        },
        deleteImage: (state: any, action: Action) => {
            state = state.filter((image: Image) => image.id !== action.payload);
        }
    }
});

export const { addImage, deleteImage } = imagesSlice.actions;
export default imagesSlice.reducer;