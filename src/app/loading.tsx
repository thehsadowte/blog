import React from "react";

import styles from "./laoding.module.css";
import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <Loader2 className={styles.load} size={48} />
    </div>
  );
}

export default Loader;
