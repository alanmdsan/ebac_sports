import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoData = action.payload

      if (state.itens.find((produto) => produto.id === produtoData.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtoData)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
