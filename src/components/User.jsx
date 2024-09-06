

import PropTypes from 'prop-types';



function User({userName,userSurname,age,isLogging,userFriends,userAddress}){

    if(!isLogging){
        return
    }
    return(
        <>
        <p>{userName} {userSurname} {age}</p>
        {userFriends.map((friend,index)=>(
            <div key={index}>{friend} </div>
        ))}
        <h1>{userAddress.title} {userAddress.zip}</h1>
        </>

    )
};

User.propTypes={
    userName:PropTypes.string.isRequired,
    userSurname:PropTypes.string.isRequired,
    age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    isLogging:PropTypes.bool.isRequired,
    userFriends:PropTypes.array.isRequired,
    userAddress:PropTypes.shape({
        title:PropTypes.string.isRequired,
        zip:PropTypes.number.isRequired,
    })

};

User.defaultProps={
    isLogging:false,
};

export default User;