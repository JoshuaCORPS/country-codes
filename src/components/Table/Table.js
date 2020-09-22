import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles({
  icons: {
    color: "#fff",
    paddingRight: "10px",
  },
  alignIcons: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
  },
  tableHeaderSize: {
    fontSize: "20px",
    fontFamily: "Archivo Black, sans-serif",
  },
  padding: {
    padding: "20px 0",
  },
});

const Table = ({ date, time, timezone, callingCode }) => {
  const classes = useStyles();

  return (
    <table>
      <tbody>
        <tr>
          <th colSpan="2" width="45%">
            <Typography
              variant="overline"
              className={clsx(classes.alignIcons, classes.tableHeaderSize)}
            >
              <AccessTimeIcon className={classes.icons} />
              Local Time
            </Typography>
          </th>
          <th colSpan="2" width="45%">
            <Typography
              variant="overline"
              className={clsx(classes.alignIcons, classes.tableHeaderSize)}
            >
              <AccessTimeIcon className={classes.icons} />
              Time Zone
            </Typography>
          </th>
        </tr>
        <tr>
          <td colSpan="2" rowSpan="3">
            <Typography variant="subtitle1" color="textSecondary">
              {date}
            </Typography>

            <Typography variant="h4" color="textPrimary">
              {time}
            </Typography>
          </td>
          <td>
            <Typography
              variant="h4"
              color="textPrimary"
              className={classes.padding}
            >
              {timezone}
            </Typography>
          </td>
        </tr>
        <tr>
          <th>
            <Typography
              variant="overline"
              className={clsx(classes.alignIcons, classes.tableHeaderSize)}
            >
              <CallIcon className={classes.icons} />
              Calling Code
            </Typography>
          </th>
        </tr>
        <tr>
          <td>
            <Typography
              variant="h4"
              color="textPrimary"
              className={classes.padding}
            >
              + {callingCode}
            </Typography>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
