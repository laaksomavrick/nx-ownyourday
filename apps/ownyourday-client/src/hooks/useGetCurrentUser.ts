import { useContext } from 'react';
import { CurrentUserContext } from '../providers';

const useGetCurrentUser = () => useContext(CurrentUserContext);

export default useGetCurrentUser;
