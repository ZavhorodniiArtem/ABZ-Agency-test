import React from "react";
import "./styles.scss";
import {Anchor} from "antd";





export const Header: React.FC = () => {
    const {Link} = Anchor;
    return (
        <div className="header">
            <div className="container">
                <div className="header__title">
                    Test assignment for
                    front-end developer
                </div>
                <div className="header__description">
                    What defines a good front-end developer is one that
                    has skilled knowledge of HTML, CSS, JS with a vast
                    understanding of User design thinking as they'll be
                    building web interfaces with accessibility in mind.
                    They should also be excited to learn, as the world of
                    Front-End Development keeps evolving.
                </div>
                <div className="header__btn">
                    <Anchor affix={false} targetOffset={-10}>
                        <Link href="#form" title="Sing up" className="header__signup buttons"/>
                    </Anchor>
                </div>
            </div>
        </div>
    )
}