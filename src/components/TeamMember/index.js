import React from "react";
import styles from "./styles.module.css";


export default function TeamMember({children, frontMatter}) {
  const photo = require( '@site/src/pages/team/' + frontMatter.photo ).default;
  console.log('in TeamMember');
  return (
    <div className={'row ' + styles.team_member}>

      <div className='col col--3 '>
        <img className={ styles.member_photo } src={ photo } />
      </div>

      <div className={ 'col  '+ styles.member_info }>
        <h2 className={ styles.member_name }>{frontMatter.name}</h2>
          { frontMatter.title
            && <h3 className={ styles.member_title }>{frontMatter.title}</h3> }
          <div className={styles.member_contact}>
            <span className={ styles.member_email }>
              <a href={frontMatter.email}>{frontMatter.email}</a>
            </span> 
            <span className={ styles.member_twitter }>{frontMatter.twitter}</span>
          </div>
        <div className={ styles.member_text }>
          {children}
        </div>
      </div>
    </div>
  )
}
