import React from "react";
import { Card, CardHeader, CardContent, Grid, TextField, FormLabel, Radio, RadioGroup, FormControlLabel, Select, MenuItem, InputLabel, Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Alert from '@mui/material/Alert';

import Validations from "../../../../assets/global/formValidations";

import { useForm} from "react-hook-form";

const useStyles = makeStyles((theme) => ({

    root: {

        '&&':{
            backgroundColor: '#fff',
            boxShadow: '0px 3px 4px 1px rgba(0, 0, 0, 0.05)',
            borderRadius: '10px',
            borderSpacing: '2px',
        },

        '& .MuiCardHeader-root':{
            padding: '16px 24px',
            borderBottom: '1px dashed #6A71854D',
        
        },

        '& input':{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            border: '1px dashed #6A71854D',
            borderRadius: '6px',
            padding: '6px 12px',
        },

        '& label': {
            fontSize: '14px',
            letterSpacing: '0.5px',
            marginBottom: '4px',
            // color: theme.text.primary
        },

        '& .MuiStack-root':{
            padding: 0,
            overflow: 'unset'
        },

        '& .MuiInputBase-root, & .MuiTextField-root': {
            width: '100%'
        },

        '& .MuiAlert-root':{
            marginTop: '10px'
        }
    }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const roles = [
    'Admin',
    'Developer',
    'Manager',
    'Super Admin',
    'Tester',
  ];

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const AddEmployee = () => {


    const { register, handleSubmit, setValue, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const classes = useStyles();

    const [date, setDate] = React.useState(dayjs('2022-04-17'));

    const [joiningDate, setJoiningDate] = React.useState(dayjs('2022-04-17'));

    const [userRole, setUserRole] = React.useState(['Developer']);

    const roleChange = (event) => {
        const { target: { value }, } = event;
        setUserRole( typeof value === 'string' ? value.split(',') : value, );
        setValue("role", event.target.value);
    };

    const [status, setStatus] = React.useState('select');

    const statusChange = (event) => {
        setStatus(event.target.value);
        setValue("status", event.target.value);
    };

    const [gender, setGender] = React.useState('male');

    const genderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <Card className={classes.root}>
            <CardHeader title="Add Employee" />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <FormLabel>First Name</FormLabel>
                            <TextField name="firstname" placeholder="First Name" fullWidth autoComplete="none" {...register("firstname", Validations.firstName)} /> 
                            {errors.firstname && <Alert severity="error">{errors.firstname.message}</Alert>}  
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Last Name</FormLabel>
                            <TextField name="lastname" placeholder="Last Name" fullWidth autoComplete="none" {...register("lastname", Validations.lastName)} />
                            {errors.lastname && <Alert severity="error">{errors.lastname.message}</Alert>}    
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Email</FormLabel>
                            <TextField type="email" name="email" placeholder="Email" fullWidth autoComplete="none" {...register("email", Validations.email)} /> 
                            {errors.email && <Alert severity="error">{errors.email.message}</Alert>}  
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Username</FormLabel>
                            <TextField name="username" placeholder="Username" fullWidth autoComplete="none" {...register("username")} />   
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Password</FormLabel>
                            <TextField type="password" name="password" placeholder="Password" fullWidth autoComplete="none" {...register("password", Validations.password)} /> 
                            {errors.password && <Alert severity="error">{errors.password.message}</Alert>}   
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Phone</FormLabel>
                            <TextField type="tel" name="phone" placeholder="Phone" fullWidth autoComplete="none" {...register("phone", Validations.phone)} />
                            {errors.phone && <Alert severity="error">{errors.phone.message}</Alert>}   
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Date of birth</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker
                                        value={date}
                                        name="dob"
                                        onChange={(newDate) => setDate(newDate)}
                                        {...register("dob")}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Date of Joining</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker
                                        value={joiningDate}
                                        name="joining-date"
                                        onChange={(date) => setJoiningDate(date)}
                                        {...register("joining-date")}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="gender"
                                name="gender"
                                value={gender}
                                onChange={genderChange}
                            >
                                <FormControlLabel {...register("gender")} value="male" control={<Radio />} label="Male" />
                                <FormControlLabel {...register("gender")} value="female" control={<Radio />} label="Female" />
                            </RadioGroup>  
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                                labelId="status"
                                id="status"
                                value={status}
                                onChange={statusChange}
                                name="status"
                            >
                                <MenuItem value="select" {...register("status")}>--- Select Status ---</MenuItem>
                                <MenuItem value="active" {...register("status")}>Active</MenuItem>
                                <MenuItem value="blocked" {...register("status")}>Blocked</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel id="role">Roles</InputLabel>
                            <Select
                                labelId="role"
                                id="role"
                                multiple
                                value={userRole}
                                onChange={roleChange}
                                MenuProps={MenuProps}
                                name="role"
                            >
                                {roles.map((role) => (
                                    <MenuItem key={role} value={role} {...register("role")}>
                                        {role}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={4}>
                            <FormLabel>Upload Profile Photo</FormLabel>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<CloudUploadIcon />}
                            >
                                    Upload file
                                <VisuallyHiddenInput type="file" name="profile-photo" {...register("profile-photo")} />
                            </Button> 
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel>Bio</FormLabel>
                            <TextField name="bio" placeholder="About Employee" multiline rows={3} fullWidth autoComplete="none" {...register("bio")} />   
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Button variant="contained" type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default AddEmployee