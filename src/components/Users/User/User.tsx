import React from "react";
import "./styles.scss"


type PropsType = {
    photo: string ,
    name: string,
    position: string,
    email: string,
    phone: string
}

export const User: React.FC<PropsType> = ({photo, name, position, email, phone}) => {





    return (
        <div className="user">
            <div className="user__card">
                <img className="user__photo " src={photo} />
                <div className="user__name ellipsis">{name}</div>
                <div className="user__position ellipsis">{position}</div>
                <div className="user__email ellipsis">{email}</div>
                <div className="user__phone ">{phone}</div>
            </div>
        </div>
    )
}