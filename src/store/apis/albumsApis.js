import { faker } from '@faker-js/faker';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
    reducerPath:'albums',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3005',
    }),
    endpoints(builder){
        return {
            addAlbum: builder.mutation({
                query: (user) => {
                    return {
                        url:'/albums',
                        method:'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url:'/albums',
                        method:'GET',
                        params:{
                            userId:user.id
                        }
                    }
                }
            })
        }
    }
});

export const {useFetchAlbumsQuery, useAddAlbumMutation} = albumsApi;
export {albumsApi};