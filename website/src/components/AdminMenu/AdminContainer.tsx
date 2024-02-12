import AddUpdateScenario from './AddUpdateScenario';
import './admin.css'

interface AdminOptionButtonInterface {
    id: string;
    title: string;
}

const AdminOptionButton = ({id, title}: AdminOptionButtonInterface) => {
    return <button className="scenario-button" id={id} data-testid={id}>{title}</button>
}

const AdminOptionsContainer = () => (
    <div className={'admin-button-container'}>
        <AdminOptionButton id='update-add-scenario' title='Update or Add a Scenario' />
        <AdminOptionButton id='delete-scenario' title='Delete a Scenario' />
        <AdminOptionButton id='view-scenario' title='View Scenario' />
        <AdminOptionButton id='reset-leaderboard' title='Reset the leaderbard' />
    </div>
)

const AdminContainer = () => {
    return (
        <div className="menu-container" data-testid={'admin-menu-wrapper'}>
            <AdminOptionsContainer />
            <AddUpdateScenario />
        </div>
    )
}

export default AdminContainer;