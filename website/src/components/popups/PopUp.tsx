import PopUpButton from './PopUpButton'
import PopUpTitle from './PopUpTitle'

interface PopUpInterface {
  id: string
  title: string
  name?: string
  onClose: () => void
  children: any
}

const PopUp = ({ id, title, name, onClose, children }: PopUpInterface) => {
  return (
    <div className="popup" data-testid={id}>
      <div className={name ? name : "menu-container-solid"}>
        <PopUpTitle title={title} />
        {children}
        <PopUpButton id={id} onClose={onClose} />
      </div>
    </div>
  )
}

export default PopUp
