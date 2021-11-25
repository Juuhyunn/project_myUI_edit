import PropTypes from "prop-types";
import React, { Fragment } from "react";
import TeamMemberOne from "../components/TeamMemberOne";
import { LayOut } from "features/common";

export default function About(){

  return (
    <LayOut>
    <Fragment>
        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
    </Fragment>
    </LayOut>
  );
};

About.propTypes = {
  location: PropTypes.object
};

