import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { PickerModal } from "./PickerModal";
import { PickerBase } from "./PickerBase";
import { DateRange } from "mui-daterange-picker-plus";

export default function PlaygroundPage() {
  const theme = useTheme();

  // state + handlers for Picker Selection
  const [selection, setSelection] = useState("left");
  const onChangeSelection = (
    _event: React.MouseEvent<HTMLElement>,
    selection: string | null,
  ) => {
    if (selection !== null) {
      setSelection(selection);
      handleSetDateRangeOnChange({}); // reset the date range (OnChange)
      handleSetDateRangeOnSubmit({}); // reset the date range (OnSubmit)
    }
  };

  // state + handlers for the Modal
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  // state + handlers for the DateRange Value
  const [dateRangeOnChange, setDateRangeOnChange] = useState<DateRange>({});
  const [dateRangeOnSubmit, setDateRangeOnSubmit] = useState<DateRange>({});
  const handleSetDateRangeOnChange = (dateRange: DateRange) => {
    setDateRangeOnChange(dateRange);
    handleSetDateRangeOnSubmit({});
  };
  const handleSetDateRangeOnSubmit = (dateRange: DateRange) => {
    setDateRangeOnSubmit(dateRange);
    // handleClose(); // close the modal
  };

  // extract the date range
  const { startDate: startDateOnChange, endDate: endDateOnChange } =
    dateRangeOnChange;
  const { startDate: startDateOnSubmit, endDate: endDateOnSubmit } =
    dateRangeOnSubmit;

  return (
    <>
      <Grid2
        container
        width={1}
        height={1}
        overflow={"auto"}
        justifyContent={"center"}
      >
        <Grid2
          xs={12}
          py={"50px"}
          width={{
            xs: "calc(100% - 32px)",
            sm: "500px",
            md: "800px",
            lg: "1100px",
          }}
        >
          <Grid2 xs={12}>
            <ToggleButtonGroup
              selection={selection}
              onChangeSelection={onChangeSelection}
            />
          </Grid2>

          <Grid2
            mt={6}
            xs={12}
            container
            gap={"32px"}
            direction={{
              xs: "column",
              lg: "row",
            }}
          >
            <Grid2
              lg
              container
              justifyContent={selection === "left" ? "center" : "flex-start"}
              sx={{
                borderRadius: "8px",
                boxShadow: "rgba(0, 0, 0, 0.21) 0px 0px 4px",
                backgroundColor: theme.palette.grey[100],
                p: "16px",
              }}
            >
              {selection === "left" ? (
                <Box
                  sx={{
                    boxShadow: "rgba(0, 0, 0, 0.21) 0px 0px 4px",
                    borderRadius: "16px",
                  }}
                >
                  <PickerBase
                    handleSetDateRangeOnChange={handleSetDateRangeOnChange}
                  />
                </Box>
              ) : (
                <Grid2>
                  <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    disableRipple
                    onClick={handleClick}
                  >
                    Test Date Picker Modal
                  </Button>
                </Grid2>
              )}
            </Grid2>

            <Grid2 lg="auto">
              <Grid2
                xs={12}
                lg="auto"
                container
                direction={"column"}
                gap={"16px"}
                sx={{
                  width: {
                    xs: "100%",
                    md: "300px",
                  },
                  p: "16px",
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: "16px",
                }}
              >
                <Grid2>
                  <Typography variant="subtitle2" mb="10px">
                    OnChange
                  </Typography>
                  <Stack
                    mb={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">Start Date:</Typography>
                    <Typography variant="body2">
                      {startDateOnChange?.toLocaleDateString()}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">End Date:</Typography>
                    <Typography variant="body2">
                      {endDateOnChange?.toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Grid2>

                <Grid2 display={selection === "right" ? "block" : "none"}>
                  <Divider />
                </Grid2>

                <Grid2 display={selection === "right" ? "block" : "none"}>
                  <Typography variant="subtitle2" mb="10px">
                    OnSubmit
                  </Typography>
                  <Stack
                    mb={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">Start Date:</Typography>
                    <Typography variant="body2">
                      {startDateOnSubmit?.toLocaleDateString()}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="body2">End Date:</Typography>
                    <Typography variant="body2">
                      {endDateOnSubmit?.toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Grid2>
              </Grid2>

              {/* <Grid2
                mt="16px"
                xs={12}
                lg="auto"
                container
                direction={"column"}
                gap={"16px"}
                sx={{
                  width: {
                    xs: "100%",
                    md: "300px",
                  },
                  p: "16px",
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: "16px",
                }}
              >
                <Typography variant="subtitle2" mb="10px">
                  Customization
                </Typography>
                <Stack spacing={4}>
                  <DatePicker
                    label="Min Date"
                    defaultValue={dayjs("2022-04-17")}
                  />
                  <DatePicker
                    label="Max Date"
                    defaultValue={dayjs("2022-04-17")}
                  />
                  <Autocomplete
                    disablePortal
                    options={top100Films}
                    renderInput={(params) => (
                      <TextField {...params} label="Locale" />
                    )}
                  />

                  <Autocomplete
                    disablePortal
                    options={top100Films}
                    renderInput={(params) => (
                      <TextField {...params} label="Separator Icon(xs)" />
                    )}
                  />

                  <Autocomplete
                    disablePortal
                    options={top100Films}
                    renderInput={(params) => (
                      <TextField {...params} label="Separator Icon(xs+)" />
                    )}
                  />

                  <MUI_Checkbox label="Hide Default Ranges" />
                  
                </Stack>
              </Grid2> */}
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <PickerModal
        handleSetDateRangeOnChange={handleSetDateRangeOnChange}
        handleSetDateRangeOnSubmit={handleSetDateRangeOnSubmit}
        handleClose={handleClose}
        anchorEl={anchorEl}
        open={open}
      />
    </>
  );
}
