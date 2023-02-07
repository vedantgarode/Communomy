import { async } from "@firebase/util";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid, Card, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MainCard from "../Ui-compo/MainCard";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GetAppTwoToneIcon from "@mui/icons-material/GetAppOutlined";
import FileCopyTwoToneIcon from "@mui/icons-material/FileCopyOutlined";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfOutlined";
import ArchiveTwoToneIcon from "@mui/icons-material/ArchiveOutlined";
import EarningIcon from "../Ui-compo/assets/icons/earning.svg";
import { InputLabel } from "@mui/material";
import Label from "../Ui-compo/Label";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { auth as firebase } from "../../firebase";
import {app } from "../../firebase"

// material-ui

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  return account;
}
function Home(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(5, 0),
    // color: theme.palette.primary.darker,
    //   backgroundColor: theme.palette.primary.lighter
  }));

  const [anchorEl, setAnchorEl] = useState(null);

  const [bid, setbid] = useState();
  const [user_com, setuser_com] = useState();
  const [amt, setamt] = useState();
  const [c_typ, setc_typ] = useState();
  const [b_ids, setb_ids] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [formData, setFormData] = useState({
    b_id: "",
    user: "",
    amount: "",
    coin_type: "",
  });
  const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: 210,
      height: 210,
      background: theme.palette.secondary[800],
      borderRadius: "50%",
      top: -85,
      right: -95,
      [theme.breakpoints.down("sm")]: {
        top: -105,
        right: -140,
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: 210,
      height: 210,
      background: theme.palette.secondary[800],
      borderRadius: "50%",
      top: -125,
      right: -15,
      opacity: 0.5,
      [theme.breakpoints.down("sm")]: {
        top: -155,
        right: -70,
      },
    },
  }));

  const [acc_add, setAcc_add] = useState();
  const [acc_bal, setAcc_bal] = useState();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleMetaMask = () => {
    console.log("heheheh)))))", window.ethereum);
    if (typeof window !== "undefined") {
      getAccount().then((res) => {
        setAcc_add(res);
        getBalnce(res);
        console.log(res);
      });
    }
  };
  const handleLogout = () => {
    // toast.error("Logged Out Successfully");
    navigate("/login");
    console.log("firebase",app.default.signOut())
    // firebase.auth().signOut()
  };
  const getBalnce = (acc_num) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [acc_num, "latest"] })
      .then((balance) => {
        setAcc_bal(ethers.utils.formatEther(balance));
      });
  };
  const handleopenform = () => {
    setOpen(true);
  };

  const bids = [
    { id: "1", name: "ABC" },
    { id: "2", name: "DEF" },
    { id: "3", name: "GHI" },
    { id: "4", name: "JKL" },
    
  ];
  const bid_user = [
    { id: "1", bidsid: "ABC", name: "Ashish Dange" },
    { id: "2", bidsid: "DEF", name: "Raj Belani" },
    { id: "3", bidsid: "GHI", name: "Rushabh Garode" },
    { id: "4", bidsid: "JKL", name: "Vedant Magar" },
  ];

  const HandleUnique = (id) => {
    setb_ids(id);
    console.log("i am id", id);
  };

  const coin_opts = ["Etherum", "Bitcoin", "BNB"];

  let name, valuee;

  const handleFormDataChange = (e) => {
    console.log(e.target);
    name = e.target.name;
    valuee = e.target.value;
    setFormData({ ...formData, [name]: valuee });
    console.log(name);
    console.log(valuee);
    console.log("HEllo WORLD");
  };

  return (
    <>
      <div>
        <div align="right" padding="10px">
          <Button
            variant="contained"
            color="error"
            sx={{ marginRight: 1, marginTop: 1 }}
            onClick={handleLogout}
          >
            Logout, {props.name}
            {/* <Link to="/login">Logut</Link> */}
          </Button>
        </div>
      </div>
      <Box
        marginTop="40px"
        marginLeft="450px"
        width="600px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        // margin="5"
        border="1px dashed grey"
        paddingBottom="10px"
      >
        {/* <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                  </Grid>
                  <Grid item>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography
                      sx={{
                        fontSize: "2.125rem",
                        fontWeight: 500,
                        mr: 1,
                        mt: 1.75,
                        mb: 0.75,
                      }}
                    >
                      $500.00
                    </Typography>
                  </Grid>
                  <Grid item>

                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.secondary[200],
                  }}
                >
                  Total Earning
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper> */}

        <div>
          <h2>
            {props.name ? `Welcome to Communomy :-${props.name}` : "Login"}
          </h2>
        </div>
        <Button
          size="medium"
          variant="contained"
          color="info"
          onClick={handleMetaMask}
          startIcon={<AccountBalanceWalletIcon />}
        >
          Connect Metamask
        </Button>
        {/* <button onClick={handleMetaMask}>Connect Metamask</button> */}
        <br></br>
        <Box
          component="span"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          //sx={boxDefault}
        >
          <Box sx={{ p: 1 }}>
            <CardWrapper border={false} content={false}>
              <Box sx={{ p: 2.25 }}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent="space-between">
                      <Grid item></Grid>
                      <Grid item></Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Typography
                          sx={{
                            fontSize: "2.125rem",
                            fontWeight: 500,
                            mr: 1,
                            mt: 1.75,
                            mb: 0.75,
                          }}
                        >
                          {/* $500.00 */}
                          {acc_bal == undefined ? "--" : acc_bal}
                        </Typography>
                      </Grid>
                      <Grid item></Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ mb: 1.25 }}>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: theme.palette.secondary[200],
                      }}
                    >
                      Wallet Balance
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardWrapper>
          </Box>
          <Box sx={{ p: 1 }}>
            <CardWrapper border={false} content={false}>
              <Box sx={{ p: 2.25 }}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent="space-between">
                      <Grid item></Grid>
                      <Grid item></Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Typography
                          sx={{
                            fontSize: "2.125rem",
                            fontWeight: 500,
                            mr: 1,
                            mt: 1.75,
                            mb: 0.75,
                          }}
                        >
                          $0.00
                        </Typography>
                      </Grid>
                      <Grid item></Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ mb: 1.25 }}>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: theme.palette.secondary[200],
                      }}
                    >
                      Amount Invested
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardWrapper>
          </Box>
        </Box>

        <div>
          <Label variant="ghost" color="info">
            Metamask address :{" "}
            {acc_add == undefined ? "connect wallet to get address" : acc_add}
          </Label>
        </div>
        <br></br>

        {/* <div>Balance : {acc_bal}</div> */}
        <div>
          <Button
            size="medium"
            variant="contained"
            color="success"
            onClick={handleopenform}
          >
            Send Money Button
          </Button>
          {/* <button onClick={handleopenform}>Send Money Button</button> */}
        </div>
        <Dialog
          open={open}
          //onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            <Box
              component="span"
              m={1}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              //sx={boxDefault}
            >
              Send Money Details
              <CloseIcon
                onClick={() => setOpen(false)}
                style={{ color: "#ff5252" }}
                boxShadow={1}
              />
            </Box>
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              //   ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Autocomplete
                value={bid}
                name="b_id"
                onChange={(event, newValue) => {
                  setbid(newValue);
                  {
                    formData.b_id = newValue;
                    console.log(formData.b_id);
                  }
                  {
                    HandleUnique(newValue);
                  }
                }}
                id="controllable-states-demo"
                isOptionEqualToValue={(option, value) => option.id === value.id}
                options={bids.map((el) => el.name)}
                getOptionLabel={(option) =>
                  typeof option === "string" || option instanceof String
                    ? option
                    : ""
                }
                sx={{ margin: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Unique Id" required />
                )}
              />
              <Autocomplete
                value={user_com}
                name="user"
                onChange={(e, newValue) => {
                  setuser_com(newValue);
                  {
                    formData.user = newValue;
                  }
                }}
                id="controllable-states-demo"
                options={bid_user
                  .filter((x) => x.bidsid === b_ids)
                  .map((el) => el.name)}
                getOptionLabel={(option) =>
                  typeof option === "string" || option instanceof String
                    ? option
                    : ""
                }
                sx={{ margin: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Name" required />
                )}
              />
              <Autocomplete
                value={c_typ}
                name="coin_type"
                onChange={(event, newValue) => {
                  setc_typ(newValue);
                  {
                    formData.coin_type = newValue;
                  }
                }}
                id="controllable-states-demo"
                options={coin_opts}
                sx={{ margin: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Coin" required />
                )}
              />
              <TextField
                value={amt}
                name="amount"
                onChange={(e) => {
                  setamt(e.target.value);
                  {
                    formData.amount = e.target.value;
                  }
                //   {
                //     handleFormDataChange;
                //   }
                }}
                label="Amount"
                variant="outlined"
                sx={{ margin: 1 }}
                required
              />
              <div align="center">
              <Button
              variant="contained"
              color="success"
              >
                SEND
              </Button>
              </div>

            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
}

export default Home;
