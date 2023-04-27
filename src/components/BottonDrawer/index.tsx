import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

interface BottonDrawerProps {
  children: JSX.Element;
}
const BottonDrawer = ({children}: BottonDrawerProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      {children}
    </BottomSheet>
  );
};

export {BottonDrawer};
