import HomeHeader from "../../components/home-header";
import { CustomedRouteConfigComponentsProps } from "../../router";
import { headerMenuData } from "../../router/config";
import HomeLayout from "../../components/home-layout";

export default function Home(homeProps: CustomedRouteConfigComponentsProps) {
    return (
        <HomeLayout header={
           <HomeHeader
              headerMenuData={homeProps.headerMenus || headerMenuData}
              route={homeProps.route}
           />}
           route={homeProps.route}
        />
    )
}