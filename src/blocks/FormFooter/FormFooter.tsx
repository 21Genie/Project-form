import styles from './FormFooter.module.scss'

export function FormFooter() {

  return (
    <div className={styles.footer}>
        <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
                <p className={styles.footer__way + " " + styles.footer__number__phone}>Phone</p>
                <a className={styles.footer__number} href="tel:+79172388855">89172388855</a>
            </li>
            <li className={styles.footer__item}>
                <p className={styles.footer__way + " " + styles.footer__number__info}>E-MAIL</p>
                <a className={styles.footer__link} href="info@company.com">info@company.com</a>
            </li>
             <li className={styles.footer__item}>
                <p className={styles.footer__way + " " + styles.footer__number__info}>HELPDESK</p>
                <a className={styles.footer__link} href="https://helpdesk.com">https://helpdesk.com</a>
            </li>
        </ul>
    </div>
  )
}
