import ToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";

type ToggleButtonGroupProps = {
  selection: string;
  onChangeSelection: (
    event: React.MouseEvent<HTMLElement>,
    selection: string | null,
  ) => void;
};

export const ToggleButtonGroup = ({
  selection,
  onChangeSelection,
}: ToggleButtonGroupProps) => {
  return (
    <MuiToggleButtonGroup
      color="secondary"
      size="small"
      value={selection}
      exclusive
      onChange={onChangeSelection}
    >
      <ToggleButton value="left">Picker Base</ToggleButton>
      <ToggleButton value="right">Picker Modal</ToggleButton>
    </MuiToggleButtonGroup>
  );
};
