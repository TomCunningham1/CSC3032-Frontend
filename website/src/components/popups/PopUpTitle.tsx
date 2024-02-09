import './PopUp.css'

interface PopUpTitleInterface {
  title: string
}

const PopUpTitle = ({ title }: PopUpTitleInterface) => {
  return (
    <h1 data-testid="pop-up-title" className="PopUpTitle">
      {title}
    </h1>
  )
}

export default PopUpTitle
