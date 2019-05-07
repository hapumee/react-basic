import React, {Component} from 'react';

const posts = [
    {id: 1, title: 'Hello World!', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'Tou can install React from npm.'}
];

// Keys serve as a hint to React but they don’t get passed to your components.
// If you need the same value in your component, pass it explicitly as a prop
// with a different name.
function Sidebar(props) {
    let posts = props.posts;

    return (
        <ul>
            {posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
}

function Contents(props) {
    let posts = props.posts;

    return (
        posts.map((post, index) =>
            <div key={post.id} seq={post.id}>
                <h3>[#{index + 1}] {post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    );
}

class Blog extends React.Component {
    render() {
        return (
            <div>
                <Sidebar posts={posts} />
                <hr />
                <Contents posts={posts} />
            </div>
        );
    }
}

export default Blog;