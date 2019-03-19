import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styles } from './ApplicationFormStyles';

class ApplicationForm extends PureComponent {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
      resume: "",
      coverLetter: "",
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={this.handleSubmit} /*noValidate*/>
          {/* first information category */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Personal Information</Typography>
            </div>
            <div className={classes.formSubsection}>
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={this.state.fullName || ''}
                  onChange={this.handleChange}
                  placeholder="Your full name"
                  autocomplete="off"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={this.state.email || ''}
                  onChange={this.handleChange}
                  placeholder="Your email address"
                  required
                  autocomplete="off"
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
                  value={this.state.phone || ''}
                  onChange={this.handleChange}
                  placeholder="06-55-333-444"
                  required
                  autocomplete="off"
                />
              </label>
              <label>
                Birth Date
                <input
                  type="date"
                  name="birthDate"
                  value={this.state.birthDate || ''}
                  onChange={this.handleChange}
                  placeholder="Your date of birth"
                  required
                  autocomplete="off"
                />
              </label>
            </div>
          </div>
          {/* second information category */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">CV / Resume</Typography>
            </div>
            <div className={classes.formSubsection}>
              <label>
                {/* CV / Resume */}
                <input
                  type="file"
                  name="resume"
                  value={this.state.resume || ''}
                  accept=".pdf, .doc, .docx, .rtf, .txt"
                  onChange={this.handleChange}
                  placeholder="Upload your CV or resume file"
                  required
                  autocomplete="off"
                />
              </label>
            </div>
          </div>
          {/* third information category */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Cover Letter</Typography>
            </div>
            <div className={classes.formSubsection}>
              <label>
                {/* Cover Letter */}
                <input
                  type="text"
                  name="coverLetter"
                  value={this.state.coverLetter || ''}
                  onChange={this.handleChange}
                  maxLength="500"
                  minLength="200"
                  size="30"
                  placeholder="Insert your cover letter here"
                  required
                  autocomplete="off"
                />
              </label>
            </div>
          </div>
          {/* submit section */}
          <input className="submit-btn" type="submit" value="Submit Application" />
          {/* <button type="submit">Submit Apllication</button> */}
        </form>
      </div>
    );
  }
}

ApplicationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(ApplicationForm);






