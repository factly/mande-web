import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import SkeletonCard from "../../Skeleton/SkeletonCard";
import {
  loadMembershipUsers,
  deleteMembershipUser,
} from "../../../actions/membershipUsers";
import { useRouter } from "next/router";
import UserSelector from "./UserSelector";

import {
  List,
  Grid,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Popover,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  table: {
    minWidth: 650,
  },
}));

export default function MembershipUsersList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  let { membershipID } = router.query;
  const [anchorEl, setAnchorEl] = React.useState(null);

  if (membershipID) membershipID = parseInt(membershipID, 10);
  else membershipID = 0;

  React.useEffect(() => {
    if (membershipID > 0) dispatch(loadMembershipUsers(membershipID));
  }, [membershipID]);

  const { loading, users = [] } = useSelector(({ membershipUsers }) => ({
    loading: membershipUsers.loading,
    users: membershipUsers.items,
  }));

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return loading ? (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <CircularProgress />
    </div>
  ) : (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.title}>
          Membership Users
        </Typography>
        <UserSelector mID={membershipID} ids={users.map((user) => user.id)} />
        <br />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell component="th" scope="row">
                    {user.display_name}
                  </TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">
                    <Button onClick={handleClick}>
                      <DeleteIcon />
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                    >
                      <div style={{ margin: 10 }}>
                        <p>Sure to Delete?</p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            margin: 2,
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{ marginRight: 5 }}
                            onClick={handleClose}
                          >
                            Cancel
                          </Button>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() =>
                              dispatch(
                                deleteMembershipUser(membershipID, user.id)
                              )
                            }
                          >
                            Ok
                          </Button>
                        </div>
                      </div>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
