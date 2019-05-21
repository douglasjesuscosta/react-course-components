import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (     
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail  author="Sam" 
                                timeAgo="Today at 04:44PM"
                                content="Nice blog!"
                                avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail  author="Alex"
                                timeAgo="Today at 02:30PM"
                                content="Heted this content."
                                avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail  author="Jane" 
                                content="I think this blog is comunist. Protect your children!!!"
                                timeAgo="Today at 06:35PM"
                                avatar={faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));