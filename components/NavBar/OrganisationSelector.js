import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Input } from "@material-ui/core";
import {
  loadOrganisations,
  setSelectedOrganisation,
} from "./../../actions/organisations";

function OrganisationSelector() {
  const { organisations, selected } = useSelector((state) => {
    return {
      organisations: state.organisations.ids.map(
        (id) => state.organisations.details[id]
      ),
      selected: state.organisations.selected,
    };
  });

  console.log({ organisations, selected });

  React.useEffect(() => {
    dispatch(loadOrganisations());
  }, []);

  const dispatch = useDispatch();

  const handleOrganisationChange = (id) => {
    dispatch(setSelectedOrganisation(id));
  };

  return (
    <Select
      native
      value={selected}
      style={{ width: "100%", backgroundColor: "#c6c3ca", padding: "10px" }}
      onChange={(e) => handleOrganisationChange(parseInt(e.target.value, 10))}
      input={<Input id="demo-dialog-native" />}
    >
      {organisations.map((organisation) => (
        <option key={"organisation-" + organisation.id} value={organisation.id}>
          {organisation.title}
        </option>
      ))}
    </Select>
  );
}

export default OrganisationSelector;
