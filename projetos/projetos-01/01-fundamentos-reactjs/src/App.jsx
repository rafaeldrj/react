import { Post } from "./Post"

export function App() {
  // Se tiver mais return, precisa colocar em uma div.
  return (
    <div>
      <Post
        author="Rafael Goncalves"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus inventore eveniet deleniti veniam reprehenderit error officiis necessitatibus sapiente officia, molestias cum doloremque laboriosam porro aliquam earum quod fugiat sed itaque!"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  )
}
