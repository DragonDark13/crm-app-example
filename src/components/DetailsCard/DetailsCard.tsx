import React from "react";

import {Fab, Typography, CardContent, Card} from "@mui/material";

interface IDetailsCard {
    name: string;
    company: string;
    email: string;
    phone: string;
    label: string;
}

const DetailsCard = ({name, company, email, phone, label}: IDetailsCard) => {
    return (
        <>
            <Card sx={{minWidth: 250, marginBottom: "2rem", marginTop: "2rem"}}>
                <CardContent>
                    <Typography
                        variant="body"
                        gutterBottom
                        component="div"
                        sx={{textAlign: "center", marginBottom: "1rem"}}
                    >
                        Personal Details
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {phone}
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{minWidth: 250, marginBottom: "2rem"}}>
                <CardContent>
                    <Typography
                        variant="body"
                        gutterBottom
                        component="div"
                        sx={{textAlign: "center", marginBottom: "1rem"}}
                    >
                        Professional Details
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {company}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {email}
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{minWidth: 250}}>
                <CardContent>
                    <Typography
                        variant="body"
                        gutterBottom
                        component="div"
                        sx={{textAlign: "center", marginBottom: "1rem"}}
                    >
                        label
                    </Typography>
                    <Fab variant="extended" size="small">
                        {label}
                    </Fab>
                </CardContent>
            </Card>
        </>
    );
};
export default DetailsCard;