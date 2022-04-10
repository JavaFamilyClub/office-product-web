import { Layout } from "antd";
import { ReactNode } from "react";
import { CustomedRouteConfigComponentsProps } from "../../router";
import { renderRoutes } from "react-router-config";
import "./home-layout.scss"

interface HomeLayoutProps extends CustomedRouteConfigComponentsProps {
   header: ReactNode;
}

export default function HomeLayout(props: HomeLayoutProps) {
    return (
       <Layout>
          <Layout.Header className="home-layout-header" children={props.header}></Layout.Header>
          <Layout>
             {renderRoutes(props.route?.routes, {
                turnOffPermission: props.turnOffPermission,
             })}
          </Layout>
       </Layout>

    )
}