import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { userId } = useSelector(store => store.users);

    if (userId == '') {
        return children
    } else {
        return <Navigate to={'/'} />
    }

}

export default ProtectedRoute