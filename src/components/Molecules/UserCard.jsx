import React from 'react';
import '../../assets/css/styles.scss';

const UserCard = ({ name, username, email }) => (
    <React.Fragment>
        <article className="card">
            <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                <h3 className="center">
                    { name }
                </h3>
                <div className="s-main-center">
                    { username }
                </div>
                <div className="s-main-center">
                    <a className="button--ghost-alert button--tiny" href="www.linkedin.com/in/javieragustinale">{ email }</a>
                </div>
            </div>
        </article>
        
    </React.Fragment>
)

export default UserCard;