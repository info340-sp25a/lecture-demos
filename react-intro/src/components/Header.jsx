
export function HeaderComponent(props) {

  const subtitleText = "The hottest webpage around"; 

  //what does a HeaderComponent look like?
  return (
    <header>
      <h1>Hello World!!!</h1>
      <p><em>{subtitleText.toUpperCase() + "!!!"}</em></p>
    </header>
  )
}
