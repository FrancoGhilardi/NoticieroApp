import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  News: undefined;
  User: undefined;
  NewsDetail: {
    title: string;
    content: string;
    image: string;
    publishedAt: string;
  };
};

export type RootStackParamListProps =
  NativeStackNavigationProp<RootStackParamList>;

export type NewsDetailRouteProp = RouteProp<RootStackParamList, "NewsDetail">;
