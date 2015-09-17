#!/bin/bash

RELDIR=`basename $0;`
BASE=`cd $0;pwd`

cd $BASE

LKGR=`cat LKGR`

if [ ! -d src ]
then
  fetch --nohooks chromium
  cd src
  ./build/install-build-deps.sh
  gclient runhooks

  git checkout -B canvasWorker $LKGR
  cd ..
fi

cd src

gn gen out/Release
gn args out/Release
ninja -C out/Release chrome

cd ..
