import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { styles } from './FormContainerStyles';
import ApplicationForm from './ApplicationForm';
import ThankYouMessage from '../thank-you-msg/ThankYouMessage';


class FormContainer extends PureComponent {
  state = {
    renderThanks: false,
  }

  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;
  handleSubmit = (confirmation) => {
    this.setState({
      renderThanks: confirmation,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {!this.state.renderThanks ? <ApplicationForm onSubmit={this.handleSubmit} /> : <ThankYouMessage />}
        {/* <div className={classes.positionBtn}>
          <Button variant="contained" size="large" color="primary" className={classes.button} component={Link} to="/application-form">
            Back
          </Button>
        </div> */}
      </div>
    );
  }
}

FormContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(FormContainer);