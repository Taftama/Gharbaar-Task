import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItemFilesReceipt, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../Component/CrouselCardItemFilesReceipt';
import dataForFiles from '../Globaldata/DataForFiles';

const CarouselCardsFilesReceipt = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layoutCardOffset={9}
        ref={isCarousel}
        data={dataForFiles}
        renderItem={CarouselCardItemFilesReceipt}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={dataForFiles.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCardsFilesReceipt;
