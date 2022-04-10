import SliderLayout, { SliderMenuType  } from "../../components/slider-layout";
import {
   FileSearchOutlined,
   PieChartOutlined,
   FileDoneOutlined,
} from "@ant-design/icons";
import { CustomedRouteConfigComponentsProps } from "../../router";

export const menuList: SliderMenuType[] = [
   {
      title: "产品制作",
      path: "/product/output",
      icon: <FileDoneOutlined />,
   },
   {
      title: "产品查询",
      path: "/product/search",
      icon: <FileSearchOutlined />,
   },
   {
      title: "产品统计",
      path: "/product/statistics",
      icon: <PieChartOutlined />,
   },
];


export default function ProductOutputPage(props: CustomedRouteConfigComponentsProps) {
   return (
      <div>
         <SliderLayout silderMenuList={menuList} route={props.route}></SliderLayout>
      </div>
   )
}