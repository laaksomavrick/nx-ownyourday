import { useContext } from 'react';
import { CurrentUserContext } from '../providers';

export const useGetCurrentUser = () => useContext(CurrentUserContext);
