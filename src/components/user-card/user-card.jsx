import './user-card.scss';
import avatar from '../../images/avatar.jpg'

export const UserCard = ({user, active, setActive}) => {   
    
    return (
        <li className='user' onClick={() => active !== user.id ? setActive(user.id) : setActive('')}>
            <div className='user__avatar'>
                <img src={avatar} alt="avatar" className='user__avatar_image'/>
           </div>
            
            <div className={active === user.id ? 'user__info user__info_active' : 'user__info'}>
                <h2 className='user__name'>
                    {user.username}
                </h2>
                <p className='user__email'>
                    {user.email}
                </p>
            </div>
        </li>
    )

}