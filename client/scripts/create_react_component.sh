#!/usr/bin/env bash

if [ -z "$*" ]; then
 echo "put argument with ComponentName"
 exit 0

fi

FOLDER="components"
FILE_NAME=$1
FIRST_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FOLDER:0:1})${FOLDER:1}"
APPEND=`echo "${FIRST_CAP%?}"`

echo `mkdir src/${FOLDER}/${FILE_NAME}`

# react file
echo `echo "import React from 'react';
import './styles.scss';

export type ${FILE_NAME}Props = unknown;

const ${FILE_NAME} = () => {
  return (
    <div>
      ${FILE_NAME}
    </div>
  );
};

export default ${FILE_NAME};
" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}.tsx`

# scss file
echo `"" > src/${FOLDER}/${FILE_NAME}/styles.scss`