import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <strong>Rafael Gonçalves</strong>
        <span>Rafael Gonçalves</span>

        <footer>
          <a href="#">Editar seu perfil</a>
        </footer>
      </div>
    </aside>
  )
}
