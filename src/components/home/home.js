import { useEffect, useState } from "react";
import { UserCard } from "../user-card/user-card";
import "./home.scss";
import { Preloader } from "../preloader/preloader";
import avatar from "../../images/avatar.jpg";

export default function Home({ isLoading, userFilter, setUserFilter, arrUsers }) {
  const [active, setActive] = useState("");
  const [activeUser, setActiveUser] = useState({});


  useEffect(() => {
    if ( active !== '') {
      let _activeUser = arrUsers.find(user => user.id === active)
           
      if (_activeUser) {
        setActiveUser(_activeUser)
      } else {
        setActiveUser({})
        setActive('')
      }
    } else setActiveUser({})
   
  }, [active, arrUsers]);

  return (
    <div className="home">
      <h1 className="home__title" >Жилфонд</h1>
      <div className="home__content">
        <div className="home__filter">
          <input type="text" name="name" value={userFilter} onChange={(e) => setUserFilter(e.target.value)} placeholder="фильтр по имени" />
          <div className="home__users">
            {isLoading 
              ?  <Preloader/>
              : <>
                  {arrUsers.length > 0 
                    ? <ul className="home__users">
                        {
                          arrUsers.map((user) => {
                            return (
                              <UserCard user={user} id={user.id} setActive={setActive} active={active} />
                            );
                          })}
                      </ul>
                    : <p> ничего не найдено </p>
                  }
                </>
            }
          </div>
        </div>
        {activeUser.name
          ? <div className="home__user">
              <img src={avatar} alt="avatar" className='home__user_avatar'/>
              <div>
                <h2 className="home__user_name">{activeUser.name}</h2>
                <div className="home__user_info">
                  <p className="home__user_info-lable">email:</p> 
                  <p className="home__user_info-text">{activeUser.email}</p>
                </div>
                <div className="home__user_info">
                  <p className="home__user_info-lable">phone:</p> 
                  <p className="home__user_info-text">{activeUser.phone}</p>
                </div>
                <p className="home__user_about-lable">О себе:</p> 
                <p className="home__user_about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
              </div>
            </div>
          : <p className="home__no-user">Выберите сотрудника, чтобы посмотреть его профиль</p>
          }
      </div>
    </div>
  );
}
