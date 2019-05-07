import React, {Component} from 'react';

class Comment extends Component {
    render() {
        return getComment(params);
    }
}

const params = {
    author: {
        avatarUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        name: 'REACT'
    },
    text: "This is the first React project",
    date: new Date().toLocaleDateString()
};

function getComment(props) {
    return (
        <div className="Comment">
            {UserInfo(props.author)}
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}
            </div>
        </div>
    );
}

function UserInfo(userInfo) {
    return (
        <div className="UserInfo">
            {Avatar(userInfo)}
            <div className="UserInfo-name">
                {userInfo.name}
            </div>
        </div>
    );
}

function Avatar(user) {
    return (
        <img className="Avatar"
            src={user.avatarUrl}
            alt={user.name}
            width="40"
        />
    );
}
export default Comment;