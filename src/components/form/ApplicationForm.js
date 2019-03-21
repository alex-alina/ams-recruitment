import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { styles } from './ApplicationFormStyles';
import Button from '@material-ui/core/Button';
import RadioBtns from './RadioBtns';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { InputLabel } from '@material-ui/core';

class ApplicationForm extends PureComponent {
  state = {}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(true);
    this.setState({
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
      street: "",
      houseNum: "",
      zipCode: "",
      city: "",
      file: "",
      coverLetter: "",
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.formTitle} variant="h5">Application Form</Typography>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit} className={classes.form} autocomplete="off" noValidate>

          {/* Personal information */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Personal Information</Typography>
            </div>
            <div className={classes.formSubsection}>
              <TextValidator
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
                validators={['required', 'minStringLength: 5']}
                errorMessages={['Required field', 'Please enter min 5 characters.']}
              />
              <TextValidator
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
                validators={['required', 'isEmail']}
                errorMessages={['Required field', 'Please enter a valid email address.']}
              />
              <TextValidator
                required
                id="phone"
                label="Phone"
                type="tel"
                name="phone"
                value={this.state.phone || ''}
                onChange={this.handleChange}
                placeholder="061-234-5678"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
                validators={['required', 'matchRegexp:[0-9]{3}-[0-9]{3}-[0-9]{4}']}
                errorMessages={['Required field', 'Phone number format 061-234-5678.']}
              />
              <TextValidator
                required
                id="date"
                label="Birth Date"
                type="date"
                name="birthDate"
                value={this.state.birthDate || ""}
                onChange={this.handleChange}
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                validators={['required']}
                errorMessages={['Required field']}
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
              <TextValidator
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
                validators={['required', 'minStringLength: 4']}
                errorMessages={['Required field', 'Please enter min 4 characters']}
              />
              <TextValidator
                required
                id="house-number"
                label="House number"
                type="text"
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
                autocomplete="off"
                validators={['required', 'minStringLength:1', 'matchRegexp:[1-9]{1,}[a-zA-Z]*']}
                errorMessages={['Required field', 'Please start with min 1 numeric character']}
              />
              <TextValidator
                required
                id="zip-code"
                label="Zip code"
                type="text"
                name="zipCode"
                value={this.state.zipCode || ''}
                onChange={this.handleChange}
                placeholder="Zip code"
                pattern="/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i"
                style={{ margin: 12 }}
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textFieldZip}
                validators={['required', 'matchRegexp:^[1-9][0-9]{3} *(?!sa|sd|ss|SA|SA|SS)[a-zA-Z]{0,2}$']}
                errorMessages={['Required field', 'Please enter a valid Dutch zip code']}
              />
              <TextValidator
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
                validators={['required', 'minStringLength:4']}
                errorMessages={['Required field', 'Please enter min 4 characters']}
              />
            </div>
          </div>

          {/* Resume */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.cvCategoryTitleTxt} variant="h6">CV / Resume *</Typography>
            </div>
            <div className={classes.formSubsection}>
              <div className={classes.positionUploadBtn}>
                <input
                  required
                  id="file"
                  onChange={this.handleChange}
                  type="file"
                  name="file"
                  value={this.state.file || ''}
                  accept=".doc,.docx,.pdf,.rtf,.txt"
                  style={{ margin: 12 }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.input}
                  // eslint-disable-next-line
                  style={{ "display": "none" }}
                  // validators={['required']}
                  // errorMessages={['Required field']}
                />
                <InputLabel htmlFor="file">
                  <Button variant="outlined" color="primary" size="small" component="span" className={classes.uploadButton}>
                    Add file
                  </Button>
                </InputLabel>
                {this.state.file ? <InputLabel className={classes.uploadTxt}>{`You uploaded: ${this.state.file.slice(12)}`}</InputLabel> : <InputLabel className={classes.uploadTxt}>We accept PDF, DOC, DOCX, RTF and TXT files.</InputLabel>}
              </div>
            </div>
          </div>

          {/* Cover letter */}
          <div className={classes.informationCategory}>
            <div className={classes.categoryTitle}>
              <Typography className={classes.categoryTitleTxt} variant="h6">Cover Letter</Typography>
            </div>
            <div className={classes.formSubsection}>
              <TextValidator
                required
                id="cover-letter"
                label="Cover Leter"
                type="text"
                name="coverLetter"
                value={this.state.coverLetter || ''}
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
                helperText="Insert your cover letter here."
                validators={['required', 'minStringLength:600', 'maxStringLength: 2200']}
                errorMessages={['Required field', 'Please enter min 600 characters', 'Please use a max of 2200 characters']}
              />
            </div>
          </div>

          {/* submit section */}
          <div className={classes.positionSubmitBtn}>
            <InputLabel htmlFor="submit">
              <Button variant="contained" color="primary" size="large" component="span" className={classes.submitBtn}>
                Submit Application
              </Button>
            </InputLabel>
            <input id="submit" className="submit-btn" type="submit" value="Submit Application" style={{ display: "none" }} />
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

ApplicationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { theme: true })(ApplicationForm);
