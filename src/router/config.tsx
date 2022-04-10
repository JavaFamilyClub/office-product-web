import { VideoCameraOutlined } from "@ant-design/icons";
import { RouteConfig } from "react-router-config";
import Home from "../pages/home";
import ProductOutput from "../pages/product-output";
import ProductCreate from "../pages/product-output/product-create";
import ProductSearch from "../pages/product-output/product-search";
import ProductStatistics from "../pages/product-output/product-statistics";

/**
 * 路由配置
 */
export const routesConfig: RouteConfig[] = [
   {
      path: "/",
      expect: true,
      component:Home,
      routes: [
         {
            path: "/product",
            component: ProductOutput,
            routes: [
               {
                  path: "/product/output",
                  component: ProductCreate
               },
               {
                  path: "/product/search",
                  component: ProductSearch
               },
               {
                  path: "/product/statistics",
                  component: ProductStatistics
               }
            ]
         }
      ]
   }
];

/**
 * 菜单配置
 */
export const headerMenuData = [
   {
      label: "产品发布",
      key: "product",
      icon: <VideoCameraOutlined />,
   }
];

