import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CareerPic from "../CareerContainer/Career.jpg";
import { Divider, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
    margin: '0 auto',
  },
  requiredLabel: {
    color: 'red',
  },
  careerPic: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));

const Career = () => {
  const classes = useStyles();

  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [qualification, setQualification] = useState('');
  const [institution, setInstitution] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [positionAppliedFor, setPositionAppliedFor] = useState('');
  const [reference, setReference] = useState('');
  const [previousOrganization, setPreviousOrganization] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [previousCTC, setPreviousCTC] = useState('');
  const [cvFile, setCVFile] = useState(null);
  const [pictureFile, setPictureFile] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or validation here
    // You can access the form values using the state variables above
    console.log('Form submitted:', {
      fullName,
      fatherName,
      motherName,
      dateOfBirth,
      currentAddress,
      permanentAddress,
      qualification,
      institution,
      yearOfPassing,
      positionAppliedFor,
      reference,
      previousOrganization,
      yearsOfExperience,
      previousCTC,
      cvFile,
      pictureFile,
    });

    // Reset the form after submission
    setFullName('');
    setFatherName('');
    setMotherName('');
    setDateOfBirth('');
    setCurrentAddress('');
    setPermanentAddress('');
    setQualification('');
    setInstitution('');
    setYearOfPassing('');
    setPositionAppliedFor('');
    setReference('');
    setPreviousOrganization('');
    setYearsOfExperience('');
    setPreviousCTC('');
    setCVFile(null);
    setPictureFile(null);
  };

  return (
    <>
      <div className='w-12/12 items-center justify-center flex flex-col py-7'>
        <Typography
          variant="h4"
          sx={{
            width: "250px",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Apply
          <Divider sx={{
            width: "250px",
            height: "6px",
            borderRadius: 12,
            margin: "5px 0 15px 0",
            background: "rgb(253, 185, 19)",
          }} />
        </Typography>
      </div>
      <div className="application-form flex items-center justify-center ">
        <div className='lg:w-6/12 w-12/12 mb-20'>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label="Full Name "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <TextField
              label="Father's Name "
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              required
            />
            <TextField
              label="Mother's Name "
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              required
            />
            <TextField
              label="Date of Birth (DDMMYYYY)"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
            <TextField
              label="Current Address "
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
              required
            />
            <TextField
              label="Permanent Address "
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
              required
            />
            <TextField
              label="Qualification "
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
            />
            <TextField
              label="Institution "
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              required
            />
            <TextField
              label="Year of Passing  (MMYYYY)"
              value={yearOfPassing}
              onChange={(e) => setYearOfPassing(e.target.value)}
              required
            />
            <TextField
              label="Position Applied For "
              value={positionAppliedFor}
              onChange={(e) => setPositionAppliedFor(e.target.value)}
              required
            />
            <TextField
              label="Reference (if any)"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
            <TextField
              label="Previous Organization Worked With"
              value={previousOrganization}
              onChange={(e) => setPreviousOrganization(e.target.value)}
            />
            <TextField
              label="Number of Years of Experience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            />
            <TextField
              label="Previous CTC"
              value={previousCTC}
              onChange={(e) => setPreviousCTC(e.target.value)}
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e: any) => setCVFile(e.target.files[0])}
            />
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e: any) => setPictureFile(e.target.files[0])}
            />
          </form>
        </div>
        {<img src='https://i.pinimg.com/originals/de/85/65/de8565e2224a39ae0a7778c9d622a473.jpg' className='lg:w-5/12 mb-20 sm:flex hidden' />}

      </div >
      <div className='w-12/12 items-center justify-center flex flex-col mb-10'>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </>
  );
};

export default Career;
