import { PickerBase as PickerBaseComponent } from "mui-daterange-picker-plus";
import type { DateRange } from "mui-daterange-picker-plus";

type PickerBaseProps = {
  handleSetDateRangeOnChange: (range: DateRange) => void;
};

export const PickerBase = ({ handleSetDateRangeOnChange }: PickerBaseProps) => {
  return (
    <PickerBaseComponent
      hideDefaultRanges={true}
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
    />
  );
};
