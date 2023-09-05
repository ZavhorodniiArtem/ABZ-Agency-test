import React, {useEffect, useState} from "react";
import "./styles.scss"
import {User} from "./User";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getUsersThunk} from "../../store/modules/thunks/getUsersThunk";
import {IUsers} from "../../store/modules/types";

export const Users: React.FC = () => {
debugger
    const {users, totalUsers} = useSelector((state: RootState) => state.getUsers)
    const dispatch = useDispatch<AppDispatch>()
    const [showUsers, setShowUsers] = useState<IUsers[] | null>(users)

    useEffect(() => {
        setShowUsers(users)

    }, [users])

    const showMore = () => {
        let count = showUsers!.length + 6
        dispatch(getUsersThunk(count))
    }

    if ( showUsers === null) {
        return <div>Loading...</div>
    }

    return (
        <div className="users" id="users">
            <div className="container">
                <div className="users__title">Working with GET request</div>
                <div className="users__cards">
                    {
                        showUsers.map((user) => <User key={user.id}
                                                  photo={user.photo}
                                                  name={user.name}
                                                  position={user.position}
                                                  email={user.email}
                                                  phone={user.phone}
                        />)
                    }
                </div>

                {
                     showUsers.length === totalUsers ? null : <div className="users__btn">
                         <button onClick={showMore}>Show more</button>
                     </div>
                }
            </div>
        </div>
    )
}