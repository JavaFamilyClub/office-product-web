import { ReactElement } from "react";
import { CustomedRouteConfigComponentsProps } from "../../router";
import { Menu } from "antd";
import { renderRoutes } from "react-router-config";
import "./slider-layout.scss"
import { useHistory } from "react-router-dom";

export interface SliderMenuType {
   title: string;
   path: string;
   icon?: ReactElement;
   children?: SliderMenuType[];
}

interface Iprops extends CustomedRouteConfigComponentsProps {
   silderMenuList: SliderMenuType[];
}

function initSelectMenuKey(menu: SliderMenuType): string {
   if (!menu) {
      return "error403";
   }
   else if (menu?.children?.length) {
      return initSelectMenuKey(menu.children[0]);
   }
   return menu.path;
}

function mapMenuItem(items: SliderMenuType[]) {
   return items.map((child) => (
      <Menu.Item key={child.path} icon={child.icon}>
         {child.title}
      </Menu.Item>
   ));
}

export default function SliderLayout(props: Iprops) {
   const history = useHistory();
   console.log(props.route);
   return (
      <div className="slider-layout">
         <div className="slider-bar">
            <Menu mode="inline"
                  onClick={item => history.push(item.key)}

            >
               {
                  props.silderMenuList.map(menuItem =>
                     menuItem.children?.length ? (
                        <Menu.SubMenu key={menuItem.path} icon={menuItem.icon} title={menuItem.title}>
                           {mapMenuItem(menuItem.children)}
                        </Menu.SubMenu>
                     ) : mapMenuItem([menuItem])
                  )
               }
            </Menu>
         </div>
         <div className="slider-layout-content">
            {renderRoutes(props.route?.routes)}
         </div>
      </div>
   )
}