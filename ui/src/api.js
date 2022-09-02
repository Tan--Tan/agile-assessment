import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

export default createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5000/api/v1' }),
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
  }),
})