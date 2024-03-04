import './main-menu.css'

interface MainMenuButton {
  id: string
  method: () => void
  text: string
}

const MainMenuButton = ({ id, method, text }: MainMenuButton) => {
  return (
    <button
      className="main-menu-button"
      data-testid={id}
      id={id}
      key={id}
      onClick={method}
    >
      {text}
    </button>
  )
}

export default MainMenuButton
