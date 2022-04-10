import { ReactNode } from "react";
import { CustomedRouteConfigComponentsProps } from "../../router";
import "./home-header.scss";
import { Menu } from "antd";
import { useHistory, useRouteMatch, match } from "react-router-dom";

export type HeaderMenuType = {
   label: string;
   key: string;
   icon: ReactNode;
   visible?: boolean;
};

interface HomeHeaderProps extends CustomedRouteConfigComponentsProps {
   headerMenuData: HeaderMenuType[];
}

export default function HomeHeader(props: HomeHeaderProps) {
   const history = useHistory();
   let { headerMenuData } = props;
   const matchObj: match<any> | null = useRouteMatch("/:header");

   const selected = (selectedItem: any) => {
      history.push(`/${selectedItem.key}`);
   }

   return (
      <div className="components-home-header__main">
         <div className="logo" />
         {
            headerMenuData?.length !== 0 ? (
               <Menu mode="horizontal"
                     selectedKeys={[`${matchObj?.params?.header}`]}
                     onSelect={(selectedItem) => history.push(`/${selectedItem.key}`)}
               >
                  {
                     headerMenuData.map(item =>
                        <Menu.Item key={item.key}>{item.label}</Menu.Item>)
                  }
               </Menu>
            ) : null
         }
      </div>

   )
}