import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

export default createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/api/v1' }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: ({search, cat} = {}) => ({
        url: `recipes`,
        params: { search, cat }
      }),
    }),
    getRecipeById: builder.query({
      query: (recipeId) => `recipes/${recipeId}`,
    }),
    getIngredients: builder.query({
      query: (search) => ({
        url: `ingredients`,
        params: { search }
      }),
    }),
    getFavourites: builder.query({
      query: () => ({
        url: `favourites`
      }),
    }),
  }),
})