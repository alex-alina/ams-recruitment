import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import { Link } from 'react-router-dom';
// import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { styles } from './FormContainerStyles';
import ApplicationForm from './ApplicationForm';
// componentDidMount() {
//   loadCSS(
//     'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
//     document.querySelector('#insertion-point-jss'),
//   );
// }
// renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;


class FormContainer extends PureComponent {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.formTitle} variant="h5">Application Form</Typography>

        <ApplicationForm />




      </div>
    );
  }
}

FormContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(FormContainer);