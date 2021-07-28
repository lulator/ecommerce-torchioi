import prod1 from './images/prod1.jpg'

const item = {
      name: "JEANS FRENCH BOOT BLUE",
      price: 7000,
      src: prod1,
      description:
        "Conocé el Jeans French Boot, es nuestro jeans de calce Effortless Flaire , tiro medio. Con pierna amplia y bolsillos",
}

const task = new Promise ((res) => {
    res(item)
}, 2000)

export const getItem =() => {
    return(
        task
    )
}