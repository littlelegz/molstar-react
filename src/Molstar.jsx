import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "molstar/build/viewer/molstar.css";
import { Viewer } from "molstar/build/viewer/molstar";

const Molstar = props => {

  const { pdbId } = props;

  useEffect(() => {
    const viewer = new Viewer("molstar", {

    });
    viewer.loadStructureFromUrl(`https://files.rcsb.org/view/${pdbId}.cif`);
  })

  return (
    <div id="molstar" />
  );
};

Molstar.propTypes = {
  pdbId: PropTypes.string.isRequired
};

export default Molstar;