interface AdminOptionButtonInterface {
    id: string
    title: string
    method?: () => void
  }

const AdminOptionButton = ({
    id,
    title,
    method,
  }: AdminOptionButtonInterface) => {
    return (
      <button
        className="admin-menu-button"
        onClick={method}
        id={id}
        data-testid={id}
      >
        {title}
      </button>
    )
  }

export default AdminOptionButton;