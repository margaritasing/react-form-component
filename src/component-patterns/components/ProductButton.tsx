import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string
  style?:React.CSSProperties
}


export const ProductButton = ({className, style}: Props) => {

  const { increaseBy, counter } = useContext(ProductContext)
  
  return (
    <div className={ `${styles.buttonsContainer}  ${className}`}
    style={style}
    >
  
        <button className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}>-</button>
  
        <div className={styles.countLabel}> { counter }</div>
  
        <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}> + </button>
  
    </div>
  
  )
}
  