import presetText from "./presetText"

export const stockText = (stock) => {
    if (stock === 0) return presetText.zeroStock
    else if (stock === 1) return presetText.oneInStock
    else if (stock > 1 && stock <= 10) return presetText.lowStock(stock)
    else return presetText.stock(stock)
}