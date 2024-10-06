import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "../model/Action";
import { Image } from "../model/Image";

const API_URL: string = import.meta.env.VITE_APP_HOST + "/images";

export const fetchImages: any = createAsyncThunk('images/fetchImages', async () => {
    const response: Response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch images");
    }
    const data: Image[] = await response.json();
    return data;
});

export const addImage: any = createAsyncThunk('images/addImage', async (newImage: Partial<Image>) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            author: newImage.author,
            title: newImage.title,
            data: newImage.data,
            tags: newImage.tags,
            likes: []
        }),
    });
    if (!response.ok) {
        throw new Error("Failed to add image");
    }
    const data = await response.json();
    return data;
});

export const deleteImage: any = createAsyncThunk('images/deleteImage', async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Failed to delete image");
    }
    const data = await response.json();
    return data;
});

const initialState: Image[] = [];

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state, action: Action) => {
            return action.payload;
        });
        builder.addCase(addImage.fulfilled, (state, action: Action) => {
            state.push(action.payload);
        });
        builder.addCase(deleteImage.fulfilled, (state, action: Action) => {
            return state.filter((image: Image) => image.id !== action.payload);
        });
    }
});

export default imagesSlice.reducer;