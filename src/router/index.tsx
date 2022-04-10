import {
   renderRoutes,
   RouteConfigComponentProps,
} from "react-router-config";
import { Redirect } from "react-router-dom";
import { HeaderMenuType } from "../components/home-header";
import { routesConfig } from "./config";

export interface CustomedRouteConfigComponentsProps extends Pick<RouteConfigComponentProps, "route"> {
   turnOffPermission?: boolean;
   headerMenus?: HeaderMenuType[];
}

export default function Routes(props?: {
   turnOffLogin?: boolean;
   turnOffPermission?: boolean;
}) {
   return renderRoutes(routesConfig, {
      turnOffPermission: props?.turnOffLogin ? true : props?.turnOffPermission,
   });
}