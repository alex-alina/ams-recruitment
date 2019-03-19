import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { faqText } from './FaqText';
import { Divider } from '@material-ui/core';
import { styles } from './FaqSectionStyles';

function FaqSection(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle} variant="h6">F.A.Q</Typography>
      <Divider className={classes.faqDivider} />
      {faqText.map((text) => (
        <ExpansionPanel key={text.question}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" className={classes.heading}>{text.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body1">{text.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

FaqSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaqSection);