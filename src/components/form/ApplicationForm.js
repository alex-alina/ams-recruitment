import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styles } from './ApplicationFormStyles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import RadioBtns from './RadioBtns';

class ApplicationForm extends PureComponent {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      confirmApplication: true,
    });
    this.props.onSubmit(this.state.confirmApplication);
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
      street: "",
      houseNum: "",
      zipCode: "",
      city: "",
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
        <Typography className={classes.formTitle} variant="h5">Application Form</Typography>
        <form className={classes.form} onSubmit={this.handleSubmit} autocomplete="off" noValidate>
          {/* Personal information */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Personal Information</Typography>
            </div>
            <div className={classes.formSubsection}>
              <TextField
                required
                id="full-name"
                label="Full Name"
                type="text"
                name="fullName"
                value={this.state.fullName || ''}
                onChange={this.handleChange}
                placeholder="Your full name"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
              />

              <TextField
                required
                id="email"
                label="Email"
                type="email"
                name="email"
                value={this.state.email || ''}
                onChange={this.handleChange}
                placeholder="Your email address"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
              />

              <TextField
                required
                id="phone"
                label="Phone"
                type="tel"
                name="phone"
                value={this.state.phone || ''}
                onChange={this.handleChange}
                placeholder="06-12-345-678"
                pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
              />

              <TextField
                required
                id="date"
                label="Birth Date"
                type="date"
                name="birthDate"
                value={this.state.birthDate || "2000-01-12"}
                onChange={this.handleChange}
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <RadioBtns />
            </div>
          </div>
          {/* Address */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Current Address</Typography>
            </div>
            <div className={classes.formSubsection}>
              <TextField
                required
                id="street"
                label="Street"
                type="text"
                name="street"
                value={this.state.street || ''}
                onChange={this.handleChange}
                placeholder="Street name"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
              />

              <div className={classes.homeId}>
                <TextField
                  required
                  id="house-number"
                  label="House number"
                  type="number"
                  name="houseNum"
                  value={this.state.houseNum || ''}
                  onChange={this.handleChange}
                  placeholder="House number"
                  style={{ margin: 12 }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                />
                <TextField
                  required
                  id="zip-code"
                  label="Zip code"
                  type="text"
                  name="zipCode"
                  value={this.state.zipCode || ''}
                  onChange={this.handleChange}
                  placeholder="Zip code"
                  pattern="/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i;"
                  style={{ margin: 12 }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textFieldZip}
                />
              </div>

              <TextField
                required
                id="city"
                label="City"
                type="text"
                name="city"
                value={this.state.city || ''}
                onChange={this.handleChange}
                placeholder="City"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
              />
            </div>
          </div>

          {/* second information category */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">CV / Resume</Typography>
            </div>
            <div className={classes.formSubsection}>
              <TextField
                required
                id="resume"
                type="file"
                name="resume"
                value={this.state.resume || ''}
                accept=".pdf, .doc, .docx, .rtf, .txt"
                onChange={this.handleChange}
                placeholder="City"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                helperText="We accept PDF, DOC, DOCX, RTF and TXT files"
              />
            </div>
          </div>

          {/* Cover letter */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Cover Letter</Typography>
            </div>
            <div className={classes.formSubsection}>
              <TextField
                required
                id="cover-letter"
                label="Cover Leter"
                type="text"
                name="motivation"
                value={this.state.motivation || ''}
                onChange={this.handleChange}
                style={{ margin: 12 }}
                multiline
                rows="5"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                helperText="Insert your cover letter here"
              />
            </div>
          </div>

          {/* submit section */}
          <div className={classes.positionSubmitBtn}>
            <label htmlFor="submit">
              <Button variant="contained" color="primary" size="large" component="span" className={classes.submitBtn}>
                Submit Application
              </Button>
            </label>
            <input id="submit" className="submit-btn" type="submit" value="Submit Application" style={{ display: "none" }} />
          </div>
        </form>
      </div>
    );
  }
}

ApplicationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(ApplicationForm);





// <label htmlFor="resume">
// <Button
//   variant="contained"
//   color="primary"
//   size="small"
//   component="span"
//   className={classes.button}
// >
//   Upload file
// </Button>
// <span>We accept PDF, DOC, DOCX, RTF and TXT files</span>
// </label>


