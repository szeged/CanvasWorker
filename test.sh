#!/bin/bash

BASE=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

KILL="killall chrome 2>/dev/null"
CHROME=$BASE/src/out/Release/chrome
USERDIR="$HOME/.config/google-chrome-dev"
PARAMS="--no-sandbox --allow-file-access-from-files --user-data-dir=$USERDIR"
EXEC="$CHROME $PARAMS"
TDIR=""

cd $BASE

if [ "x$1" != "x" ]
then
  if [ -f $1/test.sh ]
  then
    $KILL
    TDIR=$BASE/$1
    source $1/test.sh
  else
    echo "[Error] File $1/test.sh is not found"
    exit 1
  fi
else
  DIRS=`find tests -maxdepth 1 -mindepth 1 -type d`
  for D in $DIRS
  do
    if [ -f $D/test.sh ]
    then
      $KILL
      TDIR=$BASE/$D
      source $D/test.sh
    fi
  done
fi

$KILL
