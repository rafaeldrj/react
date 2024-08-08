import { Header } from "./components/Header"
import { Post } from "./Post"

import "./global.css"
import style from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

export function App() {
  // Se tiver mais return, precisa colocar em uma div.
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rafael Goncalves"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus inventore eveniet deleniti veniam reprehenderit error officiis necessitatibus sapiente officia, molestias cum doloremque laboriosam porro aliquam earum quod fugiat sed itaque!"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  )
}
