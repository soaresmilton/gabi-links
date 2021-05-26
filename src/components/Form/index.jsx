import styles from './styles.module.css';

export default function Form() {

  return (
    <>
    <div className={styles.container}>

      <form action="" className={styles.form} noValidate autoComplete="off">
        <input type="text" className={styles.inputText} placeholder="Digite seu melhor e-mail"/>
        <input type="button" value="Cadastrar" className={styles.inputButton} />
      </form>

    </div>
    </>
  )
}