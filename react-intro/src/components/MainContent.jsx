import { PuppyImage } from "./DogImage.jsx"


export function MainContent(props) {

  return (
    <main>
      <p>React is so much fun!</p>
      <p>My favorite numbers is {3+40}</p>
      <p>I'm so glad we're doing this and not enjoying the sunshine</p>
      <PuppyImage caption="a cute puppy" />
      <PuppyImage isGrown={true} caption="a grown husky" />
    </main>
  )

}
