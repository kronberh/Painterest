import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "../model/Action";
import { Image } from "../model/Image";

const API_URL: string = import.meta.env.VITE_APP_HOST + "/images";

export const fetchImages: any = createAsyncThunk('images/fetchImages', async (searchParams?: any) => {
    const response: Response = await fetch(API_URL + "?" + new URLSearchParams(searchParams).toString(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
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
            likes: 0,
            views: 0,
        }),
    });
    if (!response.ok) {
        throw new Error("Failed to add image");
    }
    const data = await response.json();
    return data;
});

export const getImage: any = createAsyncThunk('images/getImage', async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to get image");
    }
    const data = await response.json();
    return data;
});

export const likeImage: any = createAsyncThunk('images/likeImage', async (id: string) => {
    let response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to get image");
    }
    let data = await response.json();
    data.likes += 1;
    response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            likes: data.likes
        }),
    });
    if (!response.ok) {
        throw new Error("Failed to get image");
    }
    data = await response.json();
    return data;
});

export const viewImage: any = createAsyncThunk('images/viewImage', async (id: string) => {
    let response = await fetch(`${API_URL}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to get image");
    }
    let data = await response.json();
    data.views += 1;
    response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            views: data.views
        }),
    });
    if (!response.ok) {
        throw new Error("Failed to get image");
    }
    data = await response.json();
    return data;
});

export const editImage: any = createAsyncThunk('images/editImage', async (newImage: Partial<Image>) => {
    const response = await fetch(`${API_URL}/${newImage.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newImage),
    });
    if (!response.ok) {
        throw new Error("Failed to get image");
    }
    const data = await response.json();
    return data;
});

export const deleteImage: any = createAsyncThunk('images/deleteImage', async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error("Failed to delete image");
    }
    const data = await response.json();
    return data;
});

const initialState = {
    images: [] as Image[],
    image: {} as Partial<Image>,
    loading: false,
    error: false,
};

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchImages.pending, (state: any) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(fetchImages.fulfilled, (state: any, action: Action) => {
            state.images = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchImages.rejected, (state: any) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(addImage.pending, (state: any) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(addImage.fulfilled, (state: any, action: Action) => {
            state.image = action.payload;
            state.images.push(action.payload);
            state.loading = false;
        });
        builder.addCase(addImage.rejected, (state: any) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(getImage.pending, (state: any) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(getImage.fulfilled, (state: any, action: Action) => {
            state.image = action.payload;
            state.loading = false;
        });
        builder.addCase(likeImage.fulfilled, (state: any, action: Action) => {
            state.image = action.payload;
            state.loading = false;
        });
        builder.addCase(viewImage.fulfilled, (state: any, action: Action) => {
            state.image = action.payload;
            state.loading = false;
        });
        builder.addCase(getImage.rejected, (state: any) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(editImage.pending, (state: any) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(editImage.fulfilled, (state: any, action: Action) => {
            state.image = action.payload;
            state.loading = false;
        });
        builder.addCase(editImage.rejected, (state: any) => {
            state.loading = false;
            state.error = true;
        });
        builder.addCase(deleteImage.pending, (state: any) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(deleteImage.fulfilled, (state: any, action: Action) => {
            state.image = state.images.filter((image: Image) => image.id === action.payload)[0];
            state.images = state.images.filter((image: Image) => image.id !== action.payload);
            state.loading = false;
        });
        builder.addCase(deleteImage.rejected, (state: any) => {
            state.loading = false;
            state.error = true;
        });
    }
});

export default imagesSlice.reducer;