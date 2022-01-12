import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { SIZES, COLORS, icons, FONTS, dummyData } from '../../constants';
import { FilterModal } from '../';
import { HomeSection, HorizontalFoodCart, VerticalFoodCart } from '../../components';

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [popular, setPopular] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedRecommend = dummyData.menu.find((a) => a.name == 'Recommended');
    setRecommends(selectedRecommend?.list.filter((a) => a.categories.includes(categoryId)));

    let selectedPopular = dummyData.menu.find((a) => a.name == 'Popular');
    setPopular(selectedPopular?.list.filter((a) => a.categories.includes(categoryId)));

    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);
    setMenuList(selectedMenu?.list.filter((a) => a.categories.includes(categoryId)));
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: 10,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search"
        />
        <TouchableOpacity onPress={() => setShowFilterModal(true)}>
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuTypes = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 20,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  const renderRecomendedSection = () => {
    return (
      <HomeSection title="Recomended" onPress={() => {}}>
        <FlatList
          data={recommends}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <HorizontalFoodCart
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => {}}
            />
          )}
        />
      </HomeSection>
    );
  };

  const renderPopularSection = () => {
    return (
      <HomeSection title="Popular Near You" onPress={() => {}}>
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VerticalFoodCart
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => {}}
            />
          )}
        />
      </HomeSection>
    );
  };

  const renderFoodCategories = () => {
    return (
      <FlatList
        data={dummyData.categories}
        horizontal
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 55,
              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
          >
            <Image
              source={item.icon}
              style={{
                marginTop: 5,
                height: 50,
                width: 50,
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                marginRight: 10,
                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  const renderDeliveryTo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
          }}
        >
          DELIVERY TO
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            {dummyData?.myProfile?.address}
          </Text>
          <Image
            source={icons.down_arrow}
            style={{
              marginLeft: 10,
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {renderSearch()}

      {showFilterModal && (
        <FilterModal isVisible={showFilterModal} onClose={() => setShowFilterModal(false)} />
      )}

      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderDeliveryTo()}
            {renderFoodCategories()}
            {renderPopularSection()}
            {renderRecomendedSection()}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCart
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => {}}
            />
          );
        }}
        ListFooterComponent={<View style={{ height: 170 }} />}
      />
    </View>
  );
};

export default Home;
