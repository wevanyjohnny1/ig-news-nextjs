import { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from 'next/link';
import { ImArrowDown } from "react-icons/im";
import { useRouter } from "next/router";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { asPath } = useRouter();

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logoBox}>
          <div className={styles.logo}>
            <Image
              className={styles.logoImage}
              src="/images/logo.svg"
              width={56}
              height={56}
              alt="jwb"
            />
            <ul className={styles.logoTextBox}>
              <li className={styles.logoTextOne}>Johnny Wevany</li>
              <li className={styles.logoTextTwo}>Developer</li>
            </ul>
          </div>
        </a>
        <button onClick={handleOpenModal}>
          <div className={styles.menuHolder}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        closeTimeoutMS={1000}
      >
        <div className={styles.modalAnimated}>
          <div className={styles.titleContent}>
            <div className={styles.modalTitle}>
              <span>
                <ImArrowDown className={styles.arrow} />
              </span>
              <h1 className={styles.modalText}>VISITE TAMBÉM</h1>
              <span>
                <ImArrowDown className={styles.arrow} />
              </span>
            </div>
          </div>
          <ul className={styles.modalContent}>
            <Link href="/blog" prefetch>
            <a onClick={handleCloseModal}>
              <li className={asPath === '/blog' ? styles.active : styles.modalLink}>Blog</li>
            </a>
            </Link>
            <Link href="/rpg">
            <a onClick={handleCloseModal}>
              <li className={asPath === '/rpg' ? styles.active : styles.modalLink}>RPG</li>
            </a>
            </Link >
            <Link href="/portifolio">
            <a onClick={handleCloseModal}>
              <li className={asPath === '/portifolio' ? styles.active : styles.modalLink}>Portifólio</li>
            </a>
            </Link>
            <Link href="/contato">
            <a onClick={handleCloseModal}>
              <li className={asPath === '/contato' ? styles.active : styles.modalLink}>Contato</li>
            </a>
            </Link>
            <Link href="/sobre">
            <a onClick={handleCloseModal}>
              <li className={asPath === '/sobre' ? styles.active : styles.modalLink}>Sobre mim</li>
            </a>
            </Link>
          </ul>
        </div>
      </Modal>
    </header>
  );
}
