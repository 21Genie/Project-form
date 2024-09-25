import styles from './Form.module.scss'

export function Form() {

  return (
    <form className={styles.form} action=''  method="post">
        <ul className={styles.form__list}>
            <li className={styles.form__item}>
                <input className={styles.form__input} type="text" name="name" id="name" placeholder='Contact name' required/>
            </li>
            <li className={styles.form__item}>
                <input className={styles.form__input} type="phone" name="phone" id="phone" placeholder='Contact phone' required/>
            </li>
            <li className={styles.form__item}>
                <input className={styles.form__input} type="email" name="email" id="email" placeholder='E-mail' required/>
            </li>
            <li className={styles.form__item}>
                <input className={styles.form__input} type="text" name="idea" id="idea" placeholder='Let’s talk about your idea' required/>
            </li>
        </ul>

        <p className={styles.form__file}>
            <input className={styles.form__file_input} type="file" name="file" id="file" required/>
            <p className={styles.form__file_text}>Attach file. File size of your documents should not exceed 10MB</p>
        </p>
        <p className={styles.form__checkbox}>
            <input className={styles.form__checkbox_input} type="checkbox" name="checkbox" id="checkbox" required/>
            <span className={styles.form__checkbox_text}>Attach file. File size of your documents should not exceed 10MB</span>
        </p>

        <button className={styles.form__button} type="submit">Submit</button>
    </form>
  )
}
