import { PickerModal as PickerModalComponent } from "mui-daterange-picker-plus";
import type { DateRange } from "mui-daterange-picker-plus";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

type PickerModalProps = {
  handleSetDateRangeOnChange: (range: DateRange) => void;
  handleSetDateRangeOnSubmit: (range: DateRange) => void;
  handleClose: () => void;
  anchorEl: HTMLButtonElement | null;
  open: boolean;
};

export const PickerModal = ({
  handleSetDateRangeOnChange,
  handleSetDateRangeOnSubmit,
  handleClose,
  anchorEl,
  open,
}: PickerModalProps) => {
  return (
    <PickerModalComponent
      //   hideDefaultRanges={true}
      hideOutsideMonthDays={false}
      initialDateRange={{
        startDate: new Date(),
        endDate: new Date("2024-12-31"),
      }}
      definedRanges={[
        {
          label: "Today",
          startDate: new Date(),
          endDate: new Date(),
        },
        {
          label: "Yesterday",
          startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
          endDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
        {
          label: "This Week",
          startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
          endDate: new Date(),
        },
        {
          label: "Last Week",
          startDate: new Date(new Date().setDate(new Date().getDate() - 14)),
          endDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      ]}
      minDate={new Date("2023-08-02")}
      maxDate={new Date("2025-02-04")}
      onChange={(range: DateRange) => handleSetDateRangeOnChange(range)}
      customProps={{
        onSubmit: (range: DateRange) => handleSetDateRangeOnSubmit(range),
        onCloseCallback: handleClose,
        RangeSeparatorIcons: {
          xs: ArrowCircleDownIcon,
          md: ArrowCircleRightIcon,
        },
        // hideActionButtons: true,
      }}
      modalProps={{
        open,
        anchorEl,
        onClose: handleClose,
        slotProps: {
          paper: {
            sx: {
              borderRadius: "16px",
              boxShadow: "rgba(0, 0, 0, 0.21) 0px 0px 4px",
            },
          },
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      }}
    />
  );
};
