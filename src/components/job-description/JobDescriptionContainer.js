import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles } from './JobDescriptionStyles';
import { Divider, Hidden } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import SocialMediaBtns from './SocialMediaBtns';

function JobDescriptionContainer(props) {
  const { classes } = props;
  return (
    <article className={classes.root}>
      <div className={classes.jobTitleHeader}>
        <Typography className={classes.jobTitle} variant="h5">Purchasing Assistant</Typography>
        <Hidden only={['xs', 'sm', 'md']}>
          <div className={classes.positionTopBtn}>
            <Button variant="contained" size="large" color="primary" className={classes.button}>
              APPLY
            </Button>
          </div>
        </Hidden>
      </div>
      <Divider />
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">Job description</Typography>
        <Typography variant="body1">We are looking for a Purchasing Assistant to order supplies and equipment based on our company’s needs. This is a Purchasing Assistant job description template to help you attract and hire qualified candidates. For more senior-level roles, check our Purchasing Manager job description. </Typography>
      </section>
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">Company description</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sodales nisi. In lacinia purus dolor, id faucibus quam fringilla nec. Etiam enim justo, porta placerat erat commodo, condimentum gravida nunc. Nulla fringilla ex vel vehicula tristique. </Typography>
      </section>
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">Responsibilities</Typography>
        <ul className={classes.sectionList}>
          {["Monitoring stock levels.",
            "Identifying purchasing needs.",
            "Researching potential vendors.",
            "Tracking placed orders.",
            "Ensuring timely delivery."]
            .map((text) => (
              <li key={text} className={classes.listItem}>
                <Typography className={classes.listText} variant='body1' color='inherit' noWrap>{text}</Typography>
              </li>
            ))}
        </ul>
      </section>
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">Profile</Typography>
        <ul className={classes.sectionList}>
          {["Batchelor's degree",
            "Min. 2 years of experience in acquisition",
            "Excellent administrative skills",
            "Fluent in English and French",
            "Entrepreneurial mindset"]
            .map((text) => (
              <li key={text} className={classes.listItem}>
                <Typography className={classes.listText} variant='body1' color='inherit' noWrap>{text}</Typography>
              </li>
            ))}
        </ul>
      </section>
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">What we offer</Typography>
        <ul className={classes.sectionList}>
          {["Lots of responsibility and influence within our flat company culture.",
            "A global team of highly skilled and ambitious colleagues.",
            "A central Amsterdam location (near the Amstel Station).",
            "Fresh coffee, tea, fruit and lunch every day.",
            "A competitive salary and opportunities to learn."]
            .map((text) => (
              <li key={text} className={classes.listItem}>
                <Typography className={classes.listText} variant='body1' color='inherit'>{text}</Typography>
              </li>
            ))}
        </ul>
      </section>
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">Get in touch</Typography>
        <Typography variant="body1">If you have any questions please contact our recruitment team.</Typography>
        <Typography variant="body1">We’d love to hear from you. Use our contact form or give us a call at + 31 20 123 456 78</Typography>
      </section>
      <div className={classes.positionBtn}>
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          APPLY
        </Button>
      </div>
      <section className={classes.sections}>
        <Typography className={classes.sectionTitle} variant="h6">Share this job</Typography>
        <Divider className={classes.bottomDivider} />
        <div className={classes.socialIconsContainer}>
          <Icon>
          </Icon>
        </div>
      </section>
      <SocialMediaBtns />
    </article>
    
  );
}

JobDescriptionContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(JobDescriptionContainer);