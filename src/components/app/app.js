
import { useEffect, useState } from 'react';
import Header from '../header/header';
import { useDispatch, useSelector } from 'react-redux';
import './app.scss';
import Home from '../home/home';
import { getUsersUsername } from '../../services/actions/users-username';
import { getUsersId } from '../../services/actions/users-id';


function App() {
  const [arrUsers, setArrUsers] = useState([])
  const [userFilter, setUserFilter] = useState('')
  const [filterId, setFilterId] = useState('username')
  const [filterUsername, setFilterUsername] = useState('id')
  const [isLoading, setIsLoading] = useState(true)



  const dispatch = useDispatch();  

  useEffect(() => {
    
    let filter1 = ''
    let filter2 = ''
    let _userFilter = ''
    userFilter === '' ? _userFilter = userFilter : _userFilter = userFilter.replace(/\s/g, '')
        
    if (_userFilter !== '') {    
      
      if (_userFilter.indexOf(',') > -1) {
        let arrfilter = ''

        arrfilter = _userFilter.split(',')
        if (arrfilter.length === 1) {
          filter1 = `username=${arrfilter[0]}`
          filter2 = `id=${arrfilter}`         
        } else {
          arrfilter.forEach(item => {
            if (filter1 === '') {
              filter1 = `username=${item}`
              filter2 = `id=${item}`
            } else {
              filter1 = filter1 + `&username=${item}`
              filter2 = filter2 + `&id=${item}`
            }
          })
        }

      } else {
        filter1 = `username=${_userFilter}`
        filter2 = `id=${_userFilter}`
      }
      
    } else {
      filter1 = `username`
      filter2 = `id`
    }

    setFilterId(filter2)
    setFilterUsername(filter1)
    
  }, [userFilter]);

  useEffect(() => {    
    setIsLoading(true)  
    dispatch(getUsersUsername(filterUsername));    
    dispatch(getUsersId(filterId));    
  }, [dispatch, filterUsername, filterId]);

  const usersId = useSelector((store) => store.usersId);
  const usersUsername = useSelector((store) => store.usersUsername);

  useEffect(() => {
    let _arrUsers = []
    if (usersId && usersUsername) {
      _arrUsers = [...usersId.users]
      usersUsername.users.forEach(user => {
        if (!_arrUsers.find(el => el.id === user.id)) {
          _arrUsers.push(user)
        }
      })
    }
   
    setArrUsers(_arrUsers.slice(0, 5))  //выводит первые 5 элементов массива
    setIsLoading(false)
  }, [usersId, usersUsername ]);
  

  return (
    <div className='page'>
      <Header />
      <main className="page__main">
        <Home isLoading={isLoading } userFilter={userFilter} setUserFilter={setUserFilter} arrUsers={arrUsers}/>
      </main>      
    </div>  
  );
}

export default App;
