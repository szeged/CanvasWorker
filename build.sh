#!/bin/bash

RELDIR=`dirname $0;`
BASE=`cd $RELDIR;pwd`


cd $BASE

LKGR=`cat LKGR`
LKGR_WK=`cat LKGR-WebKit`

if [ ! -d src ]
then
  mkdir tmp
  cd tmp

  # Download Chromium source
  fetch --nohooks chromium

  # Install dependencies
  cd src
  ./build/install-build-deps.sh
  gclient runhooks

  # Move everything to its final place
  cd $BASE/tmp
  mv $BASE/tmp/src $BASE/
  ls -l $BASE/tmp/
  mv $BASE/tmp/.* $BASE/
  rm -rf $BASE/tmp

  cd $BASE/src
  # Move to Last Known Good Revision
  git checkout -B canvasWorker $LKGR
  gclient sync
  cd third_party/WebKit
  git checkout -B canvasWorker $LKGR_WK

  # Setup build env
  cd $BASE/src
  ./build/gyp_chromium

  cd $BASE/src/third_party/WebKit
  git am -3 $BASE/patches/*patch
fi

cd $BASE/src

if [ "x$ICECC_VERSION" != "x" ]
then
  JOBS="-j 40"
fi

# Start the build
ninja -C out/Release $JOBS chrome
