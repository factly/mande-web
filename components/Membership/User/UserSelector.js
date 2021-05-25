import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Input,
  FormControl,
  Select,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { loadMembers } from "../../../actions/members";
import { useDispatch, useSelector } from "react-redux";
import { createMembershipUser } from "../../../actions/membershipUsers";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

export default function UserSelector({ mID, ids }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [id, setID] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMembers());
  }, []);

  const { loading, users = [] } = useSelector(({ members }) => ({
    loading: members.loading,
    users: members.items,
  }));

  const handleChange = (event) => {
    setID(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOK = () => {
    dispatch(createMembershipUser(mID, id));
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        <AddIcon />
        Add user
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Email</InputLabel>
              <Select
                native
                value={id}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                {users
                  .filter((each) => !ids.includes(each.id))
                  .map((user) => (
                    <option value={user.id}>{user.email}</option>
                  ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(e) => handleOK(e)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
