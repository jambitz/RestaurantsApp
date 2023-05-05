import React, {useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {styles} from './styles';

interface BottonDrawerProps {
  children: JSX.Element;
}
const BottonDrawer = ({children}: BottonDrawerProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      backgroundStyle={styles.background}
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      snapPoints={snapPoints}>
      {children}
    </BottomSheet>
  );
};

export {BottonDrawer};
