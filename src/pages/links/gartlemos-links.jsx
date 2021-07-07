import Head from 'next/head';
import Image from 'next/image'

import styles from './links.module.css';

export default function GartlemosLinks() {
  return (
    <>
      <Head>
        <title>Gartlemos Links</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous" />
        <link rel="icon" href="/images/GartIcon.svg" />
      </Head>
      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.image}>
            <Image
              src="/images/gabiPerfil.svg"
              height={150}
              width={150}
              alt="Gart Lemos"
            />
          </div>
          <div className={styles.gabiIg}>
            <a href="https://www.instagram.com/gartlemos/" target="_blank">@gartlemos <i class="fas fa-external-link-alt"></i></a>
          </div>
        </header>

        <section className={styles.linksContainer}>
          <a href="https://www.tiktok.com/@gartlemos?" target="_blank" className={styles.link}>
            <div className={styles.linkGroup1}>
              <i class="fab fa-tiktok fa-2x"></i>
              <span>TikTok</span>
            </div>
          </a>
          <a href="https://br.pinterest.com/gartlemos/_created/" target="_blank" className={styles.link}>

            <div className={styles.linkGroup2}>
              <i class="fab fa-pinterest fa-2x"></i>

              <span>Pinterest</span>
            </div>

          </a>
          <a href="https://www.facebook.com/gartlemos/" target="_blank" className={styles.link}>

            <div className={styles.linkGroup1}>
              <i class="fab fa-facebook fa-2x"></i>

              <span>Facebook</span>
            </div>

          </a>
          <a href="https://www.linkedin.com/in/gabiarl/" target="_blank" className={styles.link}>

            <div className={styles.linkGroup2}>
              <i class="fab fa-linkedin fa-2x" id="linkedin"></i>

              <span>LinkedIn</span>
            </div>

          </a>
          <a href="https://twitter.com/gartlemos" target="_blank" className={styles.link}>

            <div className={styles.linkGroup1}>
              <i class="fab fa-twitter fa-2x"></i>

              <span>Twitter</span>
            </div>

          </a>
        </section>

        <footer className={styles.footer}>
          <div className={styles.questMasterFoo}>
            <span className={styles.span}>
              Desenvolvido por:
            </span>
             <a href="www.questmaster.com.br" target="_blank"
              <Image
                src="/images/questmasterlogo.svg"
                height={55}
                width={200}
                alt="Quest Master"
                className={styles.image}
              />
            </a>
          </div>
        </footer>

      </main>
    </>
  )

}
