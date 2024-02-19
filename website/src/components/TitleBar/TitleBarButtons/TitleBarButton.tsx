import '../TitleBar.css'

interface TitleBarButton {
  id: string
  text: string
  method: () => void
}

const TitleBarButton = ({ id, text, method }: TitleBarButton) => {
  return (
    <button
      className={'TitleBarButton'}
      data-testid={`main-menu-navigation-${id}`}
      onClick={method}
    >
      {text}
    </button>
  )
}

export default TitleBarButton
