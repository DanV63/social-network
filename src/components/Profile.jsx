import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      Main Content
      <div>
        <img src="https://cdn.photosight.ru/img/d/319/3893388_large.jpg" />
      </div>
      <div>ava + content</div>
      <div>
        my posts
        <div>new post</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
