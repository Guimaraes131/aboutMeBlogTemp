import styles from "./Banner.module.css"
import circulo from "assets/circulo_colorido.png"
import perfil from "assets/perfil.jpg"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}>Hello, world!</h1>
        <p className={styles.paragrafo}>Welcome to my personal space! I am Guimarães131, a full stack developer. Here I share some knowledge and hope you learn something new.</p>
      </div>

      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circulo} alt="Circulo colorido" aria-hidden={true} />
        <img className={styles.minhaFoto} src={perfil} alt="Foto de perfil Guimarães131" />
      </div>
    </div>
  )
}

export default Banner